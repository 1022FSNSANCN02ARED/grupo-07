module.exports = {
  development: {
    username: "argondb_admin",
    password: "Lvolta123,.-",
    database: "argondb_dh",
    host: "mysql-argondb.alwaysdata.net",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
