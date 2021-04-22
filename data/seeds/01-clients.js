exports.seed = function(knex) {
  return knex('clients').insert([
    {
      client_id: 1,
      client_name: "Marcus Lee",
      client_username: "TheBest",
      client_email: "marcuslee@gmail.com",
      client_password: "mynamemarcus",
      client_level: "Intermediate",
      client_subscribed: false
    }
  ]);
};