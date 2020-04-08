import React from 'react';
import { connect } from 'dva';
import styles from './index.css';
import router from 'umi/router';
import "animate.css";//使用动画库
class DataSource  extends React.PureComponent {
    state={

    }
    componentDidMount(){
        console.log(router)
        console.log(this.props.match)//获取URL参数
    }
    push(){
        // router.push('/project')
        router.push({
            pathname:"/project",
            query:{//参数 ?mark=111
                mark:'111'
            }
          })
    }
    render(){
        let {fieldSum,dataSum,tableSum,tableDel,deptSum}=this.props.list
        console.log(this.props.loading)//接口通之前true  通了之后false
        return (
            <div className={styles.con} className="con1 animated fadeInRight">
                <div>{fieldSum}</div>
                <div>{dataSum}</div>
                <div>{tableSum}</div>
                <div>{tableDel}</div>
                <div>{deptSum}</div>
                <p onClick={this.push.bind(this)}>跳转路由</p>
            
            </div>
            
        );
    }
}

const mapStateToProps = (state) => {
    const {list} = state.users
    return {
        list,
        loading: state.loading.models.users,// dva-loading 插件使用
    }
  }
 
 export default connect(mapStateToProps)(DataSource);