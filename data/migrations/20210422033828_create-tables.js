
exports.up = function(knex) {
  return knex.schema
    .createTableIfNotExists('roles', tbl => {
      tbl.increments('role_id');
      tbl.string('role_name').notNullable().unique();
    })
    .createTableIfNotExists('users', tbl => {
        tbl.increments('user_id');
        tbl.string('user_name', 128).notNullable();
        tbl.string('user_username', 128).unique().notNullable();
        tbl.string('user_email', 128).unique().notNullable();
        tbl.string('user_password', 128).notNullable();
        tbl.string('user_level').defaultTo('Beginner');
        tbl.boolean('user_subscribed').defaultTo(false);
        tbl.bigint('role').unsigned().references('role_id').inTable('roles').onDelete('CASCADE').onUpdate('CASCADE').defaultTo(2);
    })
    .createTableIfNotExists('classes', tbl => {
        tbl.increments('class_id');
        tbl.string('class_name', 128).notNullable();
        tbl.string('class_type', 128).notNullable();
        tbl.datetime('class_start').notNullable();
        tbl.string('class_duration').notNullable();
        tbl.string('class_intensity').defaultTo('Beginner');
        tbl.string('class_description', 250).notNullable();
        tbl.bigint('class_instructor').unsigned().notNullable().references('users.user_id').onDelete('CASCADE').onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('users')
    .dropTableIfExists('classes')
    .dropTableIfExists('roles')
};
