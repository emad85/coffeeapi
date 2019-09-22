
import machineRepository from './../repositories/machine.repository';
import podRepository from './../repositories/pod.repository'; 
import logger from './../common/logger';


export default async ()=> { 
	try { 
		const machines = require('./data/machines.json'); 
		const pods = require('./data/pods.json'); 
		const machinesResult = await machineRepository.insert(machines); 
		const podResults = await podRepository.insert(pods); 
		console.log('migration done'); 
		return {machines: machinesResult, pods:podResults}; 
	}
	catch(err){
		logger.error(err);
		logger.error(`Error migrating db sample: ${JSON.stringify(err)}`);
		throw err; 
	}
}