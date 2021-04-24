
exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments('user_id');
        tbl.string('user_name', 128).notNullable();
        tbl.string('user_username', 128).unique().notNullable();
        tbl.string('user_email', 128).unique().notNullable();
        tbl.string('user_password', 128).notNullable();
        tbl.string('user_level').defaultTo('Beginner');
        tbl.boolean('subscribed').defaultTo(false);
        tbl.bigInteger('role').unsigned().references('roles.role_id').onDelete('CASCADE').onUpdate('CASCADE');
    })
    .createTable('classes', tbl => {
        tbl.increments('class_id');
        tbl.string('class_name', 128).notNullable();
        tbl.string('class_type', 128).notNullable();
        tbl.datetime('class_start').notNullable();
        tbl.string('class_duration').notNullable();
        tbl.string('class_intensity').defaultTo('Beginner');
        tbl.string('class_description', 250).notNullable();
        tbl.bigInt('class_instructor').unsigned().notNullable().references('users.user_id').onDelete('CASCADE').onUpdate('CASCADE');
        tbl.bigInt('attending').unsigned().references('users.user_id').onDelete('CASCADE').onUpdate('CASCADE');
    })
    .createTable('roles', tbl => {
      tbl.increments('role_id');
      tbl.integer('role_name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('classes')
    .dropTableIfExists('instructors')
    .dropTableIfExists('users')
};
