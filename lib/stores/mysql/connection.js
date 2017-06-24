var Knex = require('knex');

/*
 * STORE
 */
exports.store = {
  mixinCallback: function(){

    this.connection = Knex({
      dialect: 'mysql',
      connection: {
        host     : this.config.host,
        user     : this.config.user || this.config.username,
        password : this.config.password,
        database : this.config.database,
        charset  : this.config.charset
      },
      pool: this.pool || [],
      debug: this.debug || false,
    });
  },

  close: function(callback){
    this.connection.client.destroy(callback);
  }
};
