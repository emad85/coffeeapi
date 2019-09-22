import mongoose from 'mongoose';
import {BaseModel} from './base.model'; 

const modelName = process.env.COFFEE_POD_COLLECTION_NAME ||  "coffeePods"; 

const schema = new mongoose.Schema({
	code: {type: String, unique: true},
	flavor: {type: String},
	packageSize: {type: Number}, 
	productType:{type: String}
}, { _id: false, id:false });

class CoffeePodModel extends BaseModel{ 
	constructor(){
		super(modelName, schema); 
	}
}

export default (new CoffeePodModel().get()); 