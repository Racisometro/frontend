import Header from '../Header/Header';

const Layout: React.FC<{}> = (props) => {
  return (
    <>
      <Header />
      <main>{props.children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
