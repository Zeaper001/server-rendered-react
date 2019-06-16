import React, { useEffect, useState, useContext } from "react";
import Layout from '../components/Layout';
import Helmet from "react-helmet";

export const About = () => {

  let [someText, setSomeText] = useState('This should be able to change');

  useEffect(() => {
     loadData().then(data => {
          setSomeText('It has changed on mount');
      });
  }, []);

  return (
    <Layout>
      <Helmet>
          <title>About page</title>
          <meta name="description" content="Home page description" />
      </Helmet>
      <div className="bg-red">This is the about page</div>
      <button onClick={() => setSomeText('Hello')}>Click</button>
      <div>{someText}</div>
    </Layout>
  )
}

export default About;
