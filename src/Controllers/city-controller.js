const CityService = require('../Service/cityService');
const cityService = new CityService();
const create=async(req,res)=>{
   try{
      const city =await cityService.createCity(req.body);
      return res.status(201).send(city);
   }catch(err){
    console.log(err);
   }
}
const deleted = async(req,res)=>{
    try{
     const deleted= await cityService.deleteCity(req.params.id);
     return res.status(200).send(deleted);
    }catch(err){
     console.log(err);
    }
}
const get=async(req,res)=>{
    try{
      const getAll= await cityService.getAllCity();
      return res.status(200).send(getAll);
    }catch(err){
     console.log(err);
    }
}
const update=async(req,res)=>{
    try{
       const updatedCity=await cityService.updateCity(req.params.id,req.body);
       return res.status(200).send(updatedCity);
    }catch(err){
     console.log(err);
    }
}
module.exports={
    create,deleted,update,get
}