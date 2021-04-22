exports.seed = function(knex) {
  return knex('instructors').insert([
    {
      instructor_id: 1,
      instructors_name: "Alex Fuentes",
      instructors_email: "alexfitness@gmail.com",
      instructor_password: "mynamealex"
    }
  ]);
};