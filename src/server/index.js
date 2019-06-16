import http from 'http';

let app = require('./server').default;

const server = http.createServer(app);

let currentApp = app;

server.listen(process.env.PORT || 3015, error => {
  if (error) {
    console.log(error);
  }

  console.log('😎   Server has started');
});

if (module.hot) {
  console.log('✅   Server-side HMR is running');

  module.hot.accept('./server', () => {
    console.log('🔁   HMR Reloading `./server`...');

    try {
      app = require('./server').default;
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}
