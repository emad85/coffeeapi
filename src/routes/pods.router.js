import express from 'express'; 
import service from '../controllers/pod.controller'; 
const router = express.Router(); 
import { check} from 'express-validator';

const queryValidation = [
	//check("productType").isIn(['small','large','espresso']).optional({checkFalsy:true}),
	check("packageSize").isInt({min:1}).optional({checkFalsy:true})
]; 

router.get('/', queryValidation, service.list); 
export default router; 