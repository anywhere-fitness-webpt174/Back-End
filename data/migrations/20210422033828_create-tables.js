
exports.up = function(knex) {
  return knex.schema
    .('users', tbl => {
        tbl.increments('user_id');
        tbl.string('user_name', 128).notNullable();
        tbl.string('user_username', 128).unique().notNullable();
        tbl.string('user_email', 128).unique().notNullable();
        tbl.string('user_password', 128).notNullable();
        tbl.string('user_level').defaultTo('Beginner');
        tbl.boolean('subscribed').defaultTo(false);
        tbl.bigint('role').unsigned().references('roles.role_id').onDelete('CASCADE').onUpdate('CASCADE').defaultTo(2);
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
    .createTableIfNotExists('roles', tbl => {
      tbl.increments('role_id');
      tbl.string('role_name');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('roles')
    .dropTableIfExists('classes')
    .dropTableIfExists('users')
};
