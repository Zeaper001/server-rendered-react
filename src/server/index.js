import express from "express";
import path from "path";
import React from "react";
import App from "../client/App";
import {Helmet} from 'react-helmet';
import {renderToString} from "react-dom/server";
import { StaticRouter } from 'react-router-dom';
import renderer from "./renderer";
var fs = require('fs');

const app = express();

app.use(express.static(path.resolve( __dirname, "public" )));


/** Old App renderer
app.get("*", (req, res) => {
  const context = {};
  const reactDom = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );

  res.writeHead(200, {"Content-Type": "text/html"});
  res.end(htmlTemplate(reactDom));
});*/


app.get("*", function(req, res) {
    fs.readFile("./src/server/index.html", "utf8", function(err, data) {
      const context = {};
      renderer(data, req.path, context).then(html => {
          if (context.notFound) {
              res.status(404);
          }
          res.send(html);
      });
    });
});

app.get("/api/v1/router", (req, res) => {
  const views = './src/views';
  let viewList = [];

  fs.readdir(views, (err, files) => {
    files.forEach(file => {
      viewList.push(file)
    });
  });

  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ a: 1 }));
});

app.listen( 3000, () => {
  console.log('Server is listening to port 3000 😎')
});
/*
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
      <script src="bundle.js"></script>
    </body>
  </html>
  `;
}*/
