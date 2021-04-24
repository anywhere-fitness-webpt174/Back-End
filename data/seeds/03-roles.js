exports.seed = function(knex) {
  return knex('roles').insert([
    {
      role_id: 1,
      name: "Client"
    },
    {
      role_id: 2,
      name: "Instructor"
    }
  ]);
};