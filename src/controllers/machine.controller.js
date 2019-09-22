import BaseController  from './base.controller'; 
import service  from './../services/machine.service'; 
const { check, sanitizeQuery} = require('express-validator');
const queryValidation = [
	sanitizeQuery("productType").trim().escape(),
	check("productType").isIn('small','large','espresso')
]; 

class MachineController extends BaseController  {
	constructor(){
		super(service); 
	}
}

export default new MachineController(); 