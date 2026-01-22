const express=require('express');
const cityController=require('../../Controllers/city-controller');
const router=express.Router();
router.post('/city',cityController.create);
router.delete('/city/:id',cityController.deleted);
router.get('/city',cityController.get);
router.put('/city/:id',cityController.update);
router.get('/city/:cityId',cityController.getcity);
module.exports=router;