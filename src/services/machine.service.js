import {BaseService} from './base.service';
import repository from './../repositories/machine.repository';  
import logger from './../common/logger'; 

export class MachineService extends BaseService { 
	constructor(){
		super(repository); 
		logger.info('initializing coffee machine repository'); 
	}
}
const service = new MachineService();
export default service; 