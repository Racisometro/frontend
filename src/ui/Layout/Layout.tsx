import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Background from '../Background/Background';
import styles from './Layout.module.css'

const Layout: React.FC = (props) => {
  return (
    <>
      <Background />
      <div className={styles.container}>
        <Header />
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
