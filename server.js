import express from "express";
import path from "path";
import React from "react";
import App from "./src/client/App";
import {Helmet} from 'react-helmet';
import {renderToString} from "react-dom/server";

const app = express();

app.use( express.static( path.resolve( __dirname, "/dist" ) ) );

app.get( "/", (req, res) => {
    const reactDom = renderToString(<App />);

    res.writeHead(200, {"Content-Type": "text/html"});
    res.end( htmlTemplate(reactDom) );
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
