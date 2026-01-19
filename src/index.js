const express = require('express');
const dotenv=require('dotenv');
dotenv.config({ path: 'src/Utils/.env' });
const setupAndStartServer=async()=>{
const app = express();
 app.listen(process.env.PORT,()=>{
    console.log(`app is listening on port ${process.env.PORT}`);
});
}
setupAndStartServer();