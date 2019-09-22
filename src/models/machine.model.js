import mongoose from 'mongoose';
import {BaseModel} from './base.model'; 

const modelName = process.env.COFFEE_MACHINE_MODEL_NAME || "coffeeMachines"; 
const schema = new mongoose.Schema({
	code: {type: String, unique: true},
	productType: {type: String},
	waterLineCompatible: {type: Boolean},
	model: {type: String},
}, { _id: false , id:false}); 

class CoffeeMachineModel extends BaseModel{ 
	constructor(){
		super(modelName, schema); 
	}
}

export default (new CoffeeMachineModel().get()); 