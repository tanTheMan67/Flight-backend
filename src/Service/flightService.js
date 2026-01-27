const {FlightRepository,AirplaneRepository}=require('../Repository/index');
const {compareTime}=require('../Utils/helper')
class FlightService{
    constructor(){
        this.airPlaneRepository=new AirplaneRepository();
        this.flightRepository=new FlightRepository();
    }
    async createFlight(data){
        try{
            const isValid= compareTime(data.arrivalTime,data.departureTime);
            if(!isValid)throw new Error("Timings concide logically");
           const airplane= await this.airPlaneRepository.getAirplane(data.airplaneId);
           const flight = await this.flightRepository.createFlight({...data,totalSeats:airplane.capacity})
           return flight;
        }catch(err){
            throw err;
        }
    }
    async getAllFlights(data){
        try{
     const flights  = await this.flightRepository.getAllFlight(data);
     return flights;
        }catch(err){
         throw err;
        }
    } 
}
module.exports=FlightService;