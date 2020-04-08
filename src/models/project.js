import * as usersService from '../services/project';

export default {
  namespace: 'project',
  state: {
    option: '',
  },
  reducers: {
    saveshow(state, { payload: { option } }) {
      // console.log(payload)  undefined  这时p是模式，不是变量，因此不会被赋值
      return { ...state, option };
    },
  },
  effects: {
    *fetch({ payload:{dimension} }, { call, put }) {
      const { data } = yield call(usersService.showDept,dimension);
      console.log(data.data)
      // return data
      yield put({
        type: 'saveshow',
        payload: {
          option: data.data
        }
      });
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      
    },
  },
};
