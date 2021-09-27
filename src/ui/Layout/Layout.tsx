import Header from '../Header/Header';

const Layout = (props: any) => {
  return (
    <>
      <Header />
      <main>{props.chidlren}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
