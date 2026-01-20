const express = require('express');
const dotenv=require('dotenv');
dotenv.config({ path: 'src/Utils/.env' });
const db=require('../src/models/index');
const CityRepository = require('./Repository/city-repository');
const setupAndStartServer=async()=>{
    const cityRepository=new CityRepository();
const app = express();
app.use(express.json());
 app.listen(process.env.PORT,async()=>{
    console.log(`app is listening on port ${process.env.PORT}`);
    console.log(db.City);
    await cityRepository.createCity({name:"pune"});
});
}
setupAndStartServer();