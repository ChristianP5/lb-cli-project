const getUsersHandler = (request, h)=>{
    const response = h.response({
        status: 'success',
        message: 'Welcome to Users API',
    });

    response.code(200);
    return response;
}

module.exports = {
    getUsersHandler,
}