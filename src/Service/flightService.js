const {FlightRepository,AirplaneRepository}=require('../Repository/index');
class FlightService{
    constructor(){
        this.airPlaneRepository=new AirplaneRepository();
        this.flightRepository=new FlightRepository();
    }
    async createFlight(data){
        try{
           const airplane= await this.airPlaneRepository.getAirplane(data.airplaneId);
           const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity})
           return flight;
        }catch(err){
            throw err;
        }
    }
}
module.exports=FlightService;