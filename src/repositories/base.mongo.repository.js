import BaseRepository from './base.repository'; 

export default class BaseMongoRepository extends BaseRepository { 
	constructor(model, defaultSelect='code') { 
		super(model);
		this.model = model;
		this.defaultSelect =  defaultSelect;
		this.find = this.find.bind(this);
	}

	async find(filter ={}, select = undefined, skip=0, limit=Number.MAX_SAFE_INTEGER){
		const result = await this.model.find(filter)
			.select( select? `-_id ${select.split(',').join(" ")}`: this.defaultSelect)
			.limit(limit).skip(skip).lean();
		return result;
	}

	async insert(documents){
		return this.model.insertMany(documents);
	}
}