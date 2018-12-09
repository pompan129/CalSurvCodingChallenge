module.exports = {
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "development": {
    "username": process.env.UC_DATABASE_NAME,
    "password": process.env.UC_DATABASE_PASS,
    "database": process.env.UC_DATABASE,
    "host": process.env.UC_DATABASE_HOST,
    "port": 5432,
    "dialect": "postgres",
    "ssl": true,
    "dialectOptions":{
      "ssl":{
         "require":true
      }
   }
  },
  "production":  {
    "username": process.env.UC_DATABASE_NAME,
    "password": process.env.UC_DATABASE_PASS,
    "database": process.env.UC_DATABASE,
    "host": process.env.UC_DATABASE_HOST,
    "port": 5432,
    "dialect": "postgres",
    "ssl": true,
    "dialectOptions":{
      "ssl":{
         "require":true
      }
   }
  },
}
