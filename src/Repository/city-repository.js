const {City}= require('../models/index');
class CityRepository{
    async createCity({name}){
      try{
           const city=await City.create({name});
           return city;
      }catch(err){
       throw new Error("Invalid input"); 
      }
    }
    async deleteCity(cityId){
        try{
             const deletedcity=await City.destroy({
                where:{
                    cityId:cityId
                }
             } )
        }catch(err){

        }
    }
}
module.exports=CityRepository;