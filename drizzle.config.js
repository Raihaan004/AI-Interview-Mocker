/** @type {import("drizzle-kit").Config} */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials:{
        url: 'postgresql://ai-interview-mocker_owner:npg_cYIrU6G7gnQE@ep-proud-frost-a5xmya28.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require'
    }
};