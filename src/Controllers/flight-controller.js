const {FlightService} = require('../Service/index');
const flightService = new FlightService();
const create = async(req,res)=>{
    try{
    const flight = await flightService.createFlight(req.body);
        console.log(req.body);
        return res.status(201).json({
            data: flight.get({ plain: true })
          });
    }catch(err){
        res.status(500).send(err.message);
    }
}
const get = async (req,res)=>{
    try{
        console.log(req.body);
     const flight = await flightService.getAllFlights(req.query);
     return res.status(200).json({data:flight});
    }catch(err){
     return res.status(500).send(err.message);
    }
}
module.exports={
     create,get
}