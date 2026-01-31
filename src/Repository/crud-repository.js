class CrudRepository{
    constructor(model){
        this.model=model;
    }
    async create(data){
        try{
       const create= await this.model.create(data);
       return create;
        }catch(err){
            throw err;
        }
    }
    async destroy(Id){
        try{
      const deleted = await this.model.destroy({
        where:{
            id:Id
        }
      })
      return deleted;
        }catch(err){
            throw err;
        }
    }
    async update(Id,data){
        try{
       const update = await this.model.update(data,{
        where:{
            id:Id
        }
       });
       return update;
        }catch(err){
            throw err;
        }
    }
    async get(Id){
        try{
         const target = await this.model.findByPk(Id);
         return target;
        }catch(err){
            throw err;
        }
    }
    async getAll(){
        try{
         const target = await this.model.findAll();
         return target;
        }catch(err){
            throw err;
        }
    }
}
module.exports = CrudRepository;