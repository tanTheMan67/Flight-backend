const {City}= require('../models/index');
const {Op}=require('sequelize');
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
                    id:cityId
                } 
             } );
             return deletedcity;
        }catch(err){
            throw new Error(err);
        }
    }
    async getAllCity(filter){
        console.log({filter},"filter");
        try{
            if(filter.name){
                const begins= await City.findAll({
                    where:{
                       name:{
                        [Op.like]: `${filter.name}%`,
                       }
                    }
                }) 
                 return begins;
            }
           const result = await City.findAll();
           return result;
        }catch(err){
                console.log(err);
        }
    }
    async updateCity(cityId,data){
        try{
              const city = await City.findByPk(cityId);
              if(!city) throw new Error("no such city found");
              if(city){
                await city.update({
                name:data.name
              });
              return city;
            }else{
                throw new Error("no such city found");
            }
             
        }catch(err){
            console.log(err);
        }

    }
    async getCity(cityId){
        try{
        const city= await City.findByPk(cityId);
        return city;
        }catch(err){
            throw new Error(err);
        }
    }
}
module.exports=CityRepository;