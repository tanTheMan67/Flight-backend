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
     return res.status(200).send("city deletion success!!");
    }catch(err){
     console.log(err);
    }
}
const get=async(req,res)=>{
    console.log(req);
    try{
        console.log(req.query);
      const getAll= await cityService.getAllCity(req.query);
      return res.status(200).json({"results":getAll});
    }catch(err){
     console.log(err);
    }
}
const update=async(req,res)=>{
    try{
       const updatedCity=await cityService.updateCity(req.params.id,req.body);
       return res.status(200).json({message:"city updated successfully!:",data:updatedCity});
    }catch(err){
     res.send(err);
    }
}
const getcity= async(req,res)=>{
 try{
  const currCity= await cityService.getCity(req.params.cityId);
  return res.status(200).json({
    "current city is":currCity
  });
 }catch(err){
    res.send(err);
 }

}
module.exports={
    create,deleted,update,get,getcity
}   