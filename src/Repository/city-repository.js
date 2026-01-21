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
            throw new Error(err);
        }
    }
    async getAllCity(){
        try{
           const result = await City.findAll();
           return result;
        }catch(err){

        }
    }
    async updateCity(cityId,data){
        try{
              const city = await City.findById(cityId);
              if(city){
                await city.update({
                name:data.name
              });
              return city;
            }else{
                throw new Error("no such city found")
            }
             
        }catch(err){
            console.log(err);
        }

    }
}
module.exports=CityRepository;