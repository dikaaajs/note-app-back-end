const Hapi = require('@hapi/hapi');
const routes = require('./routes')
const ngrok = require('ngrok')
const port = 5000
const init = async () => {
    const server = Hapi.server({
        port: port,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com'],
            },
        },
    });

    server.route(routes);

    await server.start();
    console.log(`Server Berjalan pada ${server.info.uri}`)

    ngrok.connect(port, function (err, url) {
        console.log(`Server Berjalan Di ${url}`);
    });

}

init()