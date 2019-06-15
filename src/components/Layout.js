import React from 'react';
import ReactDOM from 'react-dom';
import {Helmet} from "react-helmet";

export const Layout = ({children}) => {
  return (
    <>
      <Helmet>
        <htmlAttributes lang="da" />
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div>
        {children}
      </div>
    </>
  )
}

export default Layout;
