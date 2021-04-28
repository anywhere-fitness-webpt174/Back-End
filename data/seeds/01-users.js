exports.seed = async function(knex) {
  await knex('users').truncate();
  await knex('roles').truncate();
  await knex('roles').insert([
    {
      role_id: 1,
      name: "Client"
    },
    {
      role_id: 2,
      name: "Instructor"
    }
  ]);
  await knex('users').insert([
    {
      user_id: 1,
      user_name: "Marcus Lee",
      user_username: "TheBest",
      user_email: "marcuslee@gmail.com",
      user_password: "mynamemarcus",
      user_level: "Intermediate",
      user_subscribed: false,
      role: 1
    },
    {
      user_id: 2,
      user_name: "Jack Black",
      user_username: "Singer",
      user_email: "tenD@gmail.com",
      user_password: "jackattack",
      user_level: "Profesional",
      user_subscribed: true,
      role: 1 
    },
    {
      user_id: 3,
      user_name: "Brad Pitt",
      user_username: "button",
      user_email: "brad@aol.com",
      user_password: "stillluvangie",
      user_level: "Profesional",
      user_subscribed: true,
      role: 2
    },
    {
      user_id: 4,
      user_name: "Daniel Rosales",
      user_username: "TheOne",
      user_email: "dani23@gmail.com",
      user_password: "allthepower",
      user_level: "Beginner",
      user_subscribed: false,
      role: 1
    }
  ]);
};