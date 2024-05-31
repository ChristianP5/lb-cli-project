const Hapi = require('@hapi/hapi');

const init = async()=>{

    const server = Hapi.server({
        host: 'localhost',
        port: 9000,
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