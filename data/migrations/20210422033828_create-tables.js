
exports.up = function(knex) {
  return knex.schema
    .createTable('clients', tbl => {
        tbl.increments('client_id');
        tbl.string('client_name', 128).notNullable();
        tbl.string('client_username', 128).unique().notNullable();
        tbl.string('client_email', 128).unique().notNullable();
        tbl.string('client_password', 128).notNullable();
        tbl.string('client_level').defaultTo('Beginner');
        tbl.boolean('subscribed').defaultTo(false);
    })
    .createTable('instructors', tbl => {
        tbl.increments('instructor_id');
        tbl.string('instructors_name', 128).notNullable();
        tbl.string('instructors_email', 128).unique().notNullable();
        tbl.string('instructor_password', 128).notNullable();
    })
    .createTable('classes', tbl => {
        tbl.increments('class_id');
        tbl.string('class_name', 128).notNullable();
        tbl.string('class_type', 128).notNullable();
        tbl.datetime('class_start').notNullable();
        tbl.string('class_duration').notNullable();
        tbl.string('class_intensity').defaultTo('Beginner');
        tbl.string('class_description', 250).notNullable();
        tbl.bigInt('instructor_id').unsigned().notNullable().references('instructors.instructor_id').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.bigInt('client_id').unsigned().references('clients.client_id').onDelete('CASCADE').onUpdate('CASCADE');
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('classes')
    .dropTableIfExists('instructors')
    .dropTableIfExists('clients')
};
