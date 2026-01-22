const {CityRepository}= require('../Repository/index');
class CityService{
    constructor(){
        this.cityRepository= new CityRepository();
    }
    async createCity(data){
        try{
        return this.cityRepository.createCity(data);
        }catch(err){
            
        }
    }
    async deleteCity(cityId){
      try{
      return await this.cityRepository.deleteCity(cityId)
      }catch(err){

      }
    }
    async getAllCity(filter){
      console.log({filter});
    try{
     return await this.cityRepository.getAllCity(filter);
    }catch(err){
      throw new Error(err);
    }
    }
    async updateCity(cityId,Data){
      try{
         return await this.cityRepository.updateCity(cityId,Data); 
      }catch(err){

      }
    }
    async getCity(cityId){
      try{
         return  await this.cityRepository.getCity(cityId);
      }catch(err){

      }
    }
}
module.exports=CityService;