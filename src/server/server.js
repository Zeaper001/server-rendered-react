import express from "express";
import path from "path";
import React from "react";
import App from "../client/App";
import {Helmet} from 'react-helmet';
import {renderToString} from "react-dom/server";
import {StaticRouter} from 'react-router-dom';
//import getData from "../common/getData";

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.use(express.static('public')).get('/*', (req, res) => {
  //const promises = getData(req.path);
  const context = {};

  /*return Promise.all(promises).then(responses => {
      responses.forEach(r => {
          if (r) Object.assign(context.data, r);
      });*/

      const markup = renderToString(
        <StaticRouter location={req.url} context={context}>
          <App />
        </StaticRouter>
      );
  //});

  /*if (context.url) {
    res.redirect(context.url);
  } else {*/
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(htmlTemplate(markup));
  //}
});

function htmlTemplate(reactDom) {
  const helmet = Helmet.renderStatic();

  return (
    `<!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
      <head>
        ${helmet.title.toString()}
        ${helmet.meta.toString()}
        ${helmet.link.toString()}
      </head>
      <body ${helmet.bodyAttributes.toString()}>
        <div id="root">${reactDom}</div>
        <script type=text/javascript src="./bundle.js"></script>
      </body>
    </html>`
  );
}

export default app;
