const db = require('../../data/dbConfig');

function find() {
    return db('clients');
};

function findBy(filter) {
    return db('clients').where(filter);
};

function findById(id) {
    return db('clients').where(id).first();
};

async function addClient(newClient) {
    const [id] = await db('clients').insert(newClient);
    return findById(id);
};

module.exports = {
    find,
    findBy,
    findById,
    addClient
};