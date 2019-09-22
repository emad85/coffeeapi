class Logger { 
	constructor(){
	}
	info(...messages){
		console.log(...messages); 
	}
	error(...errors){
		console.log(...errors);
	}
	debug(...messages){
		console.trace(...messages); 
	}
}

const logger = new Logger(); 
export default logger; 