const {AirportService}=require('../Service/index');
const airportService = new AirportService();
const create = async(req,res)=>{
    try{
  const airport = await airportService.create(req.body);
  return res.status(200).json({data:airport});
    }catch(err){
        res.status(500).send(err.message);
    }
}
const destroy = async(req,res)=>{
    try{
  const airport = await airportService.destroy(res.query.Id);
  return res.status(200).json({data:airport});
    }catch(err){
        res.status(500).send(err.message);
    }
}
const get = async(req,res)=>{
    try{
  const airport = await airportService.get(req.params.id);
  return res.status(200).json({data:airport});
    }catch(err){
        res.status(500).send(err.message);
    }
}
const getAll = async(req,res)=>{
    try{
  const airport = await airportService.getAll();
  return res.status(200).json({data:airport});
    }catch(err){
        res.status(500).send(err.message);
    }
}
const update = async(req,res)=>{
    try{
  const airport = await airportService.update(req.query.Id,req.body);
  return res.status(200).json({data:airport});
    }catch(err){
        res.status(500).send(err.message);
    }
}
module.exports={
    create,update,get,getAll,destroy
}