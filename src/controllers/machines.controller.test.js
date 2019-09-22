import {expect} from 'chai'; 
import sinon from 'sinon';
import service from './../services/machine.service'; 
import machinesController from './machine.controller'; 


describe('Coffee Machine Controller', ()=> {
	let serviceStub, controllerStub; 

	beforeEach(()=> {
		serviceStub = sinon.stub(service,'list').resolves({});
		controllerStub = sinon.stub(machinesController, 'successResponse').resolves({});
	});

	afterEach(() => {
		// Restore the default sandbox here
		sinon.restore();
	});

	it('Should has list method', ()=> { 
		expect(machinesController).to.have.property('list'); 
	}); 

	it('Should call service with empty filter property ', async ()=>{
	
		await machinesController.list({params:{}, query:{}}, {send:()=>{}}, ()=>{});
		const args = serviceStub.getCalls()[0].args;
		expect(args).to.eql([{}, undefined, undefined, undefined]);
	}); 

	it('Should call service with size,model filter properties ', async ()=>{
		
		await machinesController.list({params:{}, query:{size:1, model:'large'}});
		const args = serviceStub.getCalls()[0].args;
		expect(args).to.eql([{size:1, model:'large'}, undefined, undefined, undefined]);
	}); 

	it('Should call service and exclude limit, offset from the filter ', async ()=>{
		await machinesController.list({params:{}, query:{size:1, model:'large', limit:10, offset:0}});
		const args = serviceStub.getCalls()[0].args;
		expect(args).to.eql([{size:1, model:'large'}, undefined, 10, 0]);
	});
}); 
