var Knex = require('knex');

/*
 * STORE
 */
exports.store = {
  mixinCallback: function(){
    this.connection = Knex(this.config);
  },

  close: function(callback){
    this.connection.client.destroy(callback);
  }
};
