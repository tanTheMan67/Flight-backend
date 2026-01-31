 class CrudService{
    constructor(repository){
      this.repository=repository;
    }
     async create(data){
        try{ 
            const obj= await this.repository.create(data);
            return obj;

        }catch(err){
            throw err;
        }
     }
     async destroy(Id){
        try{
      const target = await this.repository.destroy(Id);
      return target;
        }catch(err){
            throw err;
        }
     }
     async get(Id){
        try{
       const result =await this.repository.get(Id);
       return result;
        }catch(err){
            throw err;
        }
     }
     async getAll(){
        try{
       const items = await this.repository.getAll();
       return items;
        }catch(err){
            throw err;
        }
     }
     async update(Id,data){
        try{
        const target = this.repository.update(data,Id);
        return target;
        }catch(err){
            throw err;
        }
     }
 }
 module.exports=CrudService;