import { Request, ResponseToolkit } from '@hapi/hapi';
'use strict';

const Hapi = require('@hapi/hapi');
const axios = require('axios'); // For fetching the remote JSON data

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    // Define the route to serve the JSON data
    server.route({
      method: 'GET',
      path: '/sample-data',
      handler: async (request: Request, h: ResponseToolkit) => {
        try {
          const response = await axios.get(
            'https://storage.googleapis.com/bsp-training-data-public/sample.json'
          );
          return h.response(response.data).code(200);
        } catch (err) {
          console.error('Error fetching the data:', err);
          return h.response({ error: 'Failed to fetch data' }).code(500);
        }
      },
    });

    // Start the server
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
