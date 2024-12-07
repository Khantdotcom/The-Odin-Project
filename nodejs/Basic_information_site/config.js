require('dotenv').config()

module.exports = {
    host : process.env.BUCKET_LIST,
    key : process.env.SECURITY_KEY
};