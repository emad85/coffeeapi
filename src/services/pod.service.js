import {BaseService} from './base.service';
import repository from './../repositories/pod.repository'; 
import logger from './../common/logger'; 

export class PodService extends BaseService { 
	constructor(){
		super(repository); 
		logger.info('initializing coffee pod repository'); 
	}
}
export default new PodService();