const db = require('../../classes/classes-model');

function find() {
  return db('classes as c')
    .join('users as u', 'c.class_instructor', '=', 'u.user_id')
    .select('c.class_id', 'c.class_name', 'c.class_type', 'c.class_start', 'c.class_duration', 'c.class_intensity', 'c.class_description', 'u.user_id as class_instructor')
};

function findBy(filter) {
  return db('classes as c')
    .join('users as u', 'c.class_instructor', '=', 'u.user_id')
    .select('c.class_id', 'c.class_name', 'c.class_type', 'c.class_start', 'c.class_duration', 'c.class_intensity', 'c.class_description', 'u.user_id as class_instructor')
    .where(filter);
};

function findById(id) {
  return db('classes as c')
    .join('users as u', 'c.class_instructor', '=', 'u.user_id')
    .select('c.class_id', 'c.class_name', 'c.class_type', 'c.class_start', 'c.class_duration', 'c.class_intensity', 'c.class_description', 'u.user_id as class_instructor')
    .where('c.classes_id', id)
    .first();
};

async function addClass(newClass) {
  const [id] = await db('classes').insert(newClass);
  return findById(id);
};

module.exports = {
  find,
  findBy,
  findById,
  addClass
};