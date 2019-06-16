import express from "express";
import path from "path";
import React from "react";
import App from "../client/App";
import {Helmet} from 'react-helmet';
import {renderToString} from "react-dom/server";
import {StaticRouter} from 'react-router-dom';

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.disable('x-powered-by').use(express.static('public')).get('/*', (req, res) => {
    const context = {};
    const markup = renderToString(
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(htmlTemplate(markup));
    }
});


export default app;

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
      <div id="root">${ reactDom }</div>
      <script type=text/javascript src="./bundle.js"></script>
    </body>
  </html>
  `;
}

/*
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
*/
