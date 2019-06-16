import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";

export const Layout = ({children, title}) => {
  return (
    <>
      <div>
        This is from layout
        {children}
      </div>
    </>
  )
}

export default Layout;
