import React from 'react';
import Header from "./Header";

const Layout = (props) => {
  const { children, topbar } = props;
  return (
    <>
      <Header topbar={topbar}>
        {children}
      </Header>
    </>
  );
}

export default Layout;