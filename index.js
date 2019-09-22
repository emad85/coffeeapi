import logger from './src/common/logger';
import app from './src/server'; 

app.on('ready', ()=> { 
	const port = process.env.DEFAULT_APP_PORT || 8080; 
	app.listen(port,()=> {
		logger.info(`App listening on port# ${port}`);
	});
});

