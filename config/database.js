module.exports = {
  username: 'postgres' || process.env.DATABASE_USER,
  password: 'Eps0n' || process.env.DATABASE_PASS,
  database: 'workforce',
  host: 'localhost' || process.env.DATABASE_HOST,
  dialect: 'postgres',
}
