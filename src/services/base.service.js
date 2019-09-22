const DEFAULT_PAGE_SIZE = process.env.DEFAULT_PAGE_SIZE || 50;
export class BaseService {
	constructor(repository){
		this.repository = repository;
		this.list = this.list.bind(this);
	}

	async list(filter = {}, select =null, limit=DEFAULT_PAGE_SIZE, offset=0) { 
		// validate the parameters. 
		// call the repository.
		const result = await this.repository.find(filter, select, offset, limit);
		return result;
	}
}; 



