var Knex = require('knex');
var pg = require('pg')

//convert e.g. count(*) to integer instead of a string
//see https://github.com/tgriesser/knex/issues/387
pg.types.setTypeParser(20, 'text', parseInt)

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
