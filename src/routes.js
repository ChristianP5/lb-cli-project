const {
    getUsersHandler,
} = require('./handler');

const routes = [
    {
        path: '/users',
        method: 'GET',
        handler: getUsersHandler,
    },
];

module.exports = routes;