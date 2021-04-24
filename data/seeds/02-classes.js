exports.seed = function(knex) {
  return knex('classes').insert([
    {
      class_id: 1,
      class_name: "Pro Pilates",
      class_type: "Pilates",
      class_start: "2021-08-24 14-30-00",
      class_duration: "1 hour",
      class_intesity: "Profesional",
      class_description: "High-Intensity Pilates, for those who are expirienced. Get ready to feel the burn!!!",
      class_instructor: 2,
    },
    {
      class_id: 2,
      class_name: "Hot Yoga",
      class_type: "Yoga",
      class_start: "2021-08-25 14-30-00",
      class_duration: "1 hour 30 minutes",
      class_intesity: "Intermediate",
      class_description: "Hot Yoga! We are going to be going over the new age Yoga, mixed with some old classics!",
      class_instructor: 2,
    },
    {
      class_id: 3,
      class_name: "Insanity",
      class_type: "All of it",
      class_start: "2021-08-26 14-30-00",
      class_duration: "2 hours",
      class_intesity: "Profesional",
      class_description: "Insanity!!! I have no idea what we are going to do!! Maybe a mile run? Weight training? Zumba?? Your guess is as good as mine!",
      class_instructor: 2
    }
  ]);
};