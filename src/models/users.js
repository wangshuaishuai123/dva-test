import * as usersService from '../services/users';

export default {
  namespace: 'users',
  state: {
    list: '',
    keys: []
  },
  reducers: {
    save(state, { payload: { list } }) {
      // console.log(payload)  undefined  这时p是模式，不是变量，因此不会被赋值
      return { ...state, list };
    },
  },
  effects: {
    *fetch({ }, { call, put }) {
      const { data } = yield call(usersService.fetch);
      console.log(data.data)
      yield put({
        type: 'save',
        payload: {
          list: data.data
        }
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        if (pathname === '/users') {
          dispatch({ type: 'fetch' });
        }
      });
    },
  },
};
