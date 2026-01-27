const {FlightService} = require('../Service/index');
const flightService = new FlightService();
const create = async(req,res)=>{
    try{
        console.log('👉 CONTROLLER req.body:', req.body);
    console.log('👉 CONTROLLER typeof req.body:', typeof req.body);
    const flight = await flightService.createFlight(req.body);

        console.log(req.body);
        return res.status(201).json({
            data: flight.get({ plain: true })
          });
    }catch(err){
        res.status(500).send(err.message);
    }
}
module.exports={
     create
}