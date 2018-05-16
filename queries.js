const database = require("./database-connection");

module.exports = {
    list(){
      return database('registers')
    },
    read(id){
      return database('registers').select().where('id', id).first()
    },
    create(coffee){
      return database('registers')
        .insert(coffee)
        .returning('*')
        .then(coffee => coffee[0])
    },
    update(id, coffee){
      return database('registers')
        .update(coffee)
        .where('id', id)
        .returning('*')
        .then(coffee => coffee[0])
    },
    delete(id){
      return database('registers').delete().where('id', id)
    }
};
