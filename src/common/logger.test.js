import logger from './logger'; 
import {expect} from 'chai'; 

describe('Logger', ()=> { 
	it('Should has info, error and debug methods', ()=> { 
		expect(logger).to.have.property('info'); 
		expect(logger).to.have.property('error'); 
		expect(logger).to.have.property('debug');
	}); 
}); 