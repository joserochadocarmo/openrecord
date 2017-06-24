var Knex = require('knex');

/*
 * STORE
 */
exports.store = {
  mixinCallback: function(){
    this.connection = Knex(this.config);
  }
};
