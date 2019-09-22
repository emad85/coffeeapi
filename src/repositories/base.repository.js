export default class BaseRepository { 
	constructor(model){
		this.model = model;
	}
	async list(filter, fields, limit, skip){
		throw new Error('List Method not implemented');
	}
}