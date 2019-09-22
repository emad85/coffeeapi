
import mongoose from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

import logger from './../common/logger';
let mongoServer; 
export const connect = (callback) => {
	const mongooseOpts = {
		autoReconnect: true,
		reconnectTries: Number.MAX_VALUE,
		reconnectInterval: 1000,
		retryWrites:false
	};
	let mongoUri;
	if (process.env.IN_MEMORY_DB) {
		mongoServer = new MongoMemoryServer();
		mongoServer.getConnectionString().then(uri=> {
			connectMongoose(uri, mongooseOpts, callback)
		})
		.catch(err=> {
			callback(err); 
		});
	} else {
		mongoUri = `mongodb://
			${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}
			@${proces.env.MONGODB_HOST}/
			${process.env.MONGODB_DBNAME}`;
		connectMongoose(uri, mongooseOpts, callback)
	}
}

export const  disconnect =  (callback)=> { 
	const cb = callback || (()=>{});
	mongoose.disconnect().then(mongoServer? mongoServer.stop:true).then(() => cb(null, true)).catch(cb);
}


const connectMongoose = (mongoUri, mongooseOpts, callback)=> {
	mongoose.connect(mongoUri, mongooseOpts);
	mongoose.connection.on('error', (e) => {
		if (e.message.code === 'ETIMEDOUT') {
			logger.error(e);
			mongoose.connect(mongoUri, mongooseOpts);
		}
		logger.error(e);
		callback(e); 
	});
	mongoose.connection.once('open', () => {
		logger.info(`MongoDB successfully connected to ${mongoUri}`);
		callback(null, mongoUri); 
	});
}
