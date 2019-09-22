const app = require('../src/server').default;
import {expect} from 'chai';
before((done)=> { 
	app.on('ready', ()=> { 
		console.log('app is ready'); 
		done(); 
	}); 
});