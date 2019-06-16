import React from 'react';
import Layout from '../components/Layout';
import Helmet from "react-helmet";

export const Index = () => {
  return (
    <Layout>
      <Helmet>
          <title>Home page</title>
          <meta name="description" content="Home page description" />
      </Helmet>
      <div className="bg-red">This is the front page</div>
    </Layout>
  );
}

export default Index;
