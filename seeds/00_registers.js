
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('registers').del()
    .then(function () {
      // Inserts seed entries
      return knex('registers').insert([
        {id: 1, name: 'Black and Tan', roaster: 'Ink', aroma: 3},
        {id: 2, name: 'Holiday Roast', roaster: 'Starbucks', aroma: 9},
        {id: 3, name: 'House Quake', roaster: 'Denver Coffee', aroma: 6},
      ]).then(() => {
        return knex.raw('ALTER SEQUENCE registers_id_seq RESTART WITH 4;')
      })
    });
};
