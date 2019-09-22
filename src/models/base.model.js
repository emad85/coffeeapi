import mongoose from 'mongoose';
export class BaseModel { 
	constructor(modelName, schema = {}){
		this.schema = schema; 
		this.modelName = modelName;
		this.model = mongoose.model(this.modelName, this.schema);
	}
	get(){
		return this.model; 
	}
}

