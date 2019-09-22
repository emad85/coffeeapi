import BaseMongoRepository from './base.mongo.repository'; 
import model from '../models/machine.model'; 

class CoffeeMachineRepository extends  BaseMongoRepository { 
	constructor(){
		super(model, '-_id code productType waterLineCompatible model', ["productType", "waterLineCompatible"]); 
	}
}

export default new CoffeeMachineRepository();