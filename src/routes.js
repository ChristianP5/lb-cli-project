const {
    getItemsHandler,
} = require('./handler');

const routes = [
    {
        path: '/items',
        method: 'GET',
        handler: getItemsHandler,
    },
];

module.exports = routes;