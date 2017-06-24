var Knex = require('knex');

/*
 * STORE
 */
exports.store = {
  mixinCallback: function(){
    this.connection = Knex({
      dialect: 'sqlite3',
      connection: {
        filename: this.config.file
      },
      useNullAsDefault: true,
      pool: this.config.pool || [],
      debug: this.config.debug || false,
    });
  }
};
