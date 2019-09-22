import BaseMongoRepository from './base.mongo.repository'; 
import model from '../models/pod.model'; 

class CoffeePodRepository extends  BaseMongoRepository { 
	constructor(){
		super(model, '-_id code flavor packageSize productType'); 
	}
}
export default new CoffeePodRepository();