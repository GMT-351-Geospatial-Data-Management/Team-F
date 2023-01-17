const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "PGADMIN GİRİŞİNDEKİ ŞİFRENİZİ YAZMANIZ GEREKİYOR:",
    host: "localhost",
    port: 5432,
    database: "PGADMINDE OLUŞTURDUĞUNUZ DATABASE ADINI YAZMANIZ GEREKİYOR:"

})

module.exports = pool;
