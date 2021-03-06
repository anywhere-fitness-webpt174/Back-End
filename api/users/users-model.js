const db = require('../../data/dbConfig');

function find() {
    return db('users as u')
        .join("roles as r", "u.role", "=", "r.role_id")
        .select("u.user_id", "u.user_name", "u.user_username", "u.user_email", "u.user_level", "u.user_subscribed", "r.role_name as role");
};

function findBy(filter) {
    return db('users as u')
        .join("roles as r", "u.role", "=", "r.role_id")
        .select("u.user_id", "u.user_name", "u.user_username", "u.user_email","u.user_password", "u.user_level", "u.user_subscribed", "r.role_name as role")
        .where(filter);
};

function findById(id) {
    return db('users as u')
        .join("roles as r", "u.role", "=", "r.role_id")
        .select("u.user_id", "u.user_name", "u.user_username", "u.user_email", "u.user_level", "u.user_subscribed", "r.role_name as role")
        .where("u.user_id", id)
        .first();
};

async function addClient(newClient) {
    const [id] = await db('users').insert(newClient);
    return findById(id);
};

function deleteById(id) {
    return db('users').del().where({id});   
};

module.exports = {
    find,
    findBy,
    findById,
    addClient,
    deleteById
};