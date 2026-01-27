const {Flights}= require('../models/index');
const{Op}=require('sequelize');
class FlightRepository{
    #createFilter(data){
        let filter={}
        if(data.departureAirportId){
            filter.departureAirportId=data.departureAirportId;
        }
        if(data.arrivalAirportId){
            filter.arrivalAirportId=data.arrivalAirportId;
        }
        if (data.minPrice){
            Object.assign(filter,{price:{[Op.gte]:data.minPrice}})
        }
        if (data.maxPrice){
            Object.assign(filter,{price:{[Op.lte]:data.maxPrice}})
        }
      return filter;
    }
async createFlight(data){
try{
    const flight = await Flights.create(data);
    return flight;
}catch(err){
    throw err;
}
}
async getFlight(flightId){
    try{
        const flight = await Flights.findByPk(flightId);
        return flight;
    }catch(err){
        throw err;
    }
}
async getAllFlight(filter){
    try{
        const filterObject=this.#createFilter(filter);
        if(filter){
        const flight = await Flights.findAll({
            where:filterObject
        });
        return flight;
        }
        const flight = await Flights.findAll();
        return flight;
    }catch(err){
        throw err;
    }
}
}
module.exports=FlightRepository;