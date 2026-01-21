const express=require('express');
const router=express.Router();
const v1ApiRoutes=require('./v1/index');
console.log('TYPE OF v1ApiRoutes:', typeof v1ApiRoutes);
router.use('/v1',v1ApiRoutes);
module.exports=router;