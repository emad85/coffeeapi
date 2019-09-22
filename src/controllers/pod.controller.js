import BaseController  from './base.controller'; 
import service from './../services/pod.service'; 

class PodController extends BaseController  {
	constructor(){
		super(service); 
	}
}

export default new PodController(); 