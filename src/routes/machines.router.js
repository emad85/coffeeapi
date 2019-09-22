import express from 'express'; 
import service from '../controllers/machine.controller'; 
import { check} from 'express-validator';

const queryValidation = [
	//check("productType").isIn(['small','large','espresso']).optional({checkFalsy:true}),
	check("waterLineCompatible").isBoolean().optional({nullable:true})
]; 

const router = express.Router(); 
router.get('/', queryValidation, service.list); 

export default router; 