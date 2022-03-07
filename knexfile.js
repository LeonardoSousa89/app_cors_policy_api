// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'postgres',
      user:     'postgres',
      password: '1234'
    },
    pool: {
      min: 2,
      max: 10
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host:'ec2-52-207-74-100.compute-1.amazonaws.com',
      database: 'd84p2s45dico',
      user:     'cqxhkmoihgboca',
      password: '513f8491b02dd40b35904dc0a5143d5f590326e4ffa52aac339253aeab77cf8b',
      ssl: { rejectUnauthorized: false }
    },
    pool: {
      min: 2,
      max: 10
    }
  }

};
