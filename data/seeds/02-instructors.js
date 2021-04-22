exports.seed = function(knex) {
  return knex('instructors').insert([
    {
      instructor_id: 1,
      instructor_name: "Alex Fuentes",
      instructor_email: "alexfitness@gmail.com",
      instructor_password: "mynamealex"
    },
    {
      instructor_id: 2,
      instructor_name: "Tom Cruise",
      instructor_email: "scientology@aol.com",
      instructor_password: "dontlookitup"
    }
  ]);
};