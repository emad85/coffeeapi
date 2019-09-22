import _ from 'lodash'; 
import {validationResult} from 'express-validator'
import logger from './../common/logger';


const HTTP_SUCCESS_CODE = 200; 
const HTTP_NO_CONTENT_CODE = 204;
const HTTP_UNPROCESSABLE_CODE = 422; 

export default class BaseController {
	constructor(service) {
		this.service = service;
		this.list = this.list.bind(this);
	}
	
	successResponse(req, res, result) {
		if(Array.isArray(result)){
			if(result.length) {
				res.status(HTTP_SUCCESS_CODE).send(result);
			} else { 
				res.status(HTTP_NO_CONTENT_CODE).send([]); 
			}
		} else  {
			if(Object.keys(result).length > 0){
				res.status(HTTP_SUCCESS_CODE).send(result);
			} else { 
				res.status(HTTP_NO_CONTENT_CODE).send({}); 
			}
		}
	}
	handleError(req,res,err){
		logger.error(err);
		res.status(500);
	}



	async list(req, res, next) {
		const validations = validationResult(req);
		if(validations && validations.errors && validations.errors.length){
			res.status(HTTP_UNPROCESSABLE_CODE).send(validations.errors);
			return;
		} else { 
			let filter = {}; 
			let offset, limit, fields; 
			if(req.query) { 
				offset = req.query.offset?Number.parseInt(req.query.offset):0; 
				limit = req.query.limit? Number.parseInt(req.query.limit):null; 
				fields = req.query.fields; 
				filter = _.omit(req.query, ['offset', 'limit', 'fields']);
			}
			this.service.list(filter,fields, limit, offset)
				.then(result => this.successResponse(req, res, result))
				.catch(err => this.handleError(req, res, err));
		}

		
	}
}