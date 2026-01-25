const express = require('express');
const dotenv=require('dotenv');
dotenv.config({ path: 'src/Utils/.env' });
const db=require('../src/models/index');
const ApiRoutes=require('./routes/index')
const CityRepository = require('./Repository/city-repository');
const airport = require('./models/airport');
const sequelize = require('sequelize');
const setupAndStartServer=async()=>{
const cityRepository=new CityRepository();
const app = express();
app.use(express.json());
const {City,Airport}=require('./models');
app.use(express.urlencoded({}));
app.use('/api',ApiRoutes);  
 app.listen(process.env.PORT,async()=>{
    console.log(`app is listening on port ${process.env.PORT}`);
    if(process.env.SYNC_DB){
        db.sequelize.sync({alter:true});
    }
});
}
setupAndStartServer();