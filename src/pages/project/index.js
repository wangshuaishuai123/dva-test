import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import router from 'umi/router';
class Project extends React.PureComponent {
  componentDidMount() {
    console.log(router.location)
    console.log(this.props.location.query)
    let { dispatch } = this.props
    dispatch({
      type: 'project/fetch',
      payload: {
        dimension: 'dataSum',
      }
    }).then(res => {
    //想在这里操作返回值，需要在model里面加入'project/fetch' 处加上  return 返回值
    })
  }
  chengfa(){
    let str=''
    for(let i=1;i<10;i++){
      for(let j=1;j<=i;j++){
        str+=(j+'*'+i+'='+j*i+'  ')
      }
      str+='\n'
    }
    return str
  }
  render() {
    let { option } = this.props
    console.log(option)
    return (
      <div >
          我是project
          {option && option.map((value, index) => {
          return <div key={index}>{value.deptName}</div>
        })}
        <div className={styles.cheng}>
          {this.chengfa()}
        </div>
        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { option } = state.project
  return {
    option
  }
}

export default connect(mapStateToProps)(Project);