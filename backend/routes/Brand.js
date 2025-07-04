const express=require("express")
const brandController=require("../controllers/Brand")
const upload = require("../config/multer.config"); 
const router=express.Router()

router
    .get("/",brandController.getAll)
    .post("/", upload.single("image"), brandController.createBrand)
    .put("/:id", upload.single("image"), brandController.updateBrand)
    .delete("/:id", brandController.deleteBrand)

module.exports=router