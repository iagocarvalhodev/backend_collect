import knex from "knex";

const connection = knex({
  client: "postgresql",
  connection: {
    database: "server_week",
    user: "postgres",
    password: "536261",
  },
  useNullAsDefault: true,
});

export default connection;
