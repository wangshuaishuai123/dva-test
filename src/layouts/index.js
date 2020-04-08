import styles from './index.css';
import Link from 'umi/link';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to umi!</h1>
      <Link to="/">首页</Link>
      <Link to="/users/1">用户</Link>
      <Link to="/project">项目</Link>
      {/* props.children是page文件夹里路由渲染的地方 */}
      {props.children}
    </div>
  );
}

export default BasicLayout;
