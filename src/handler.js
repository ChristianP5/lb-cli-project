const getItemsHandler = (request, h)=>{
    const response = h.response({
        status: 'success',
        message: 'Welcome to Items API',
    });

    response.code(200);
    return response;
}

module.exports = {
    getItemsHandler,
}