import express from "express";
import path from "path";
import React from "react";
import App from "../client/App";
import {Helmet} from 'react-helmet';
import {renderToString} from "react-dom/server";
import {StaticRouter} from 'react-router-dom';

const app = express();

app.use(express.static("public"));

app.get("*", (req, res) => {
  const context = {};
  const reactDom = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(htmlTemplate(reactDom));
});

app.listen( 3000, () => {
  console.log('Server is listening to port 3000')
});

function htmlTemplate(reactDom) {
  const helmet = Helmet.renderStatic();

  return `<!doctype html>
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      ${ reactDom }
    </body>
  </html>
  `;
}
