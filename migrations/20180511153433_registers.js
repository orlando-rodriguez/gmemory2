
exports.up = function(knex, Promise) {
  return knex.schema.createTable('registers', table => {
    table.increments('id')
    table.text('name')
    table.text('roaster')
    table.integer('aroma')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('registers')
};
