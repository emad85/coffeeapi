const request = require('supertest');
const app = require('../src/server').default;
import {expect} from 'chai';
describe('api /coffee/pods', ()=> { 

	it('Get /coffee/pods', (done)=> { 
		request(app)
		.get('/api/1.0/coffee/pods')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			expect(res.body).to.be.an('array').that.has.lengthOf(26);
			done()
		});
	});
	it('Get /coffee/pods/wrongpath', (done)=> { 
		request(app)
		.get('/api/1.0/coffee/pods/wrongpath')
		.expect(404)
		.end(done);
	});
	it('Get /coffee/pods?productType=nomatch', (done)=> { 
		request(app)
		.get('/api/1.0/coffee/pods?productType=nomatch')
		.expect(204)
		.end(done);
	});
	it('Get /coffee/pods?productType=large', (done)=> { 
		request(app)
		.get('/api/1.0/coffee/pods?productType=large')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			expect(res.body).to.be.an('array').that.has.lengthOf(10);
			done()
		});
	});
	it('Get /coffee/pods?productType=espresso', (done)=> { 
		request(app)
		.get('/api/1.0/coffee/pods?productType=espresso')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			expect(res.body).to.be.an('array').that.has.lengthOf(6);
			done()
		});
	});
	it('Get /coffee/pods?productType=espresso&packageSize=1', (done)=> { 
		request(app)
		.get('/api/1.0/coffee/pods?productType=espresso&packageSize=7')
		.expect('Content-Type', /json/)
		.expect(200)
		.end(function (err, res) {
			expect(res.body).to.be.an('array').that.has.lengthOf(2);
			done()
		});
	});
});
