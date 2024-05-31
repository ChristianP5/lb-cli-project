const Hapi = require('@hapi/hapi');
const routes = require('./routes');


const init = async()=>{

    const server = Hapi.server({
        host: '0.0.0.0',
        port: 9000,
    });

    server.route(routes);

    server.ext('onPreResponse', (request, h)=>{
        const response = request.response;

        if(response instanceof Error || response.isBoom){
            console.error(`Error Response!`);

            const newResponse = h.response({
                status: 'fail',
                message: 'Returned an Error!'
            });

            newResponse.code(500);
            return newResponse;

        }

        console.log(response);
        return h.continue;
        
    });

    await server.start();
    console.log(`Server started at ${server.info.uri}`);

}


process.on('unhandledRejection', ()=>{
    console.error(`Process Stopping`);
    process.exit(1);
})

process.on('SIGTERM', ()=>{
    console.log(`Termination Signal Received!`);
    process.exit(1);
})

init().catch(error=>{
    console.error(`Server Crashed!`);
    process.exit(1);
})