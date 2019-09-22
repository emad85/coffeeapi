require('dotenv').config();
import path from 'path'; 
import express from 'express'; 
import logger from './common/logger'; 
import router from './routes'; 
import * as db from './models/db';
import cors from 'cors'; 
import migrate from './migrate/index'; 


const app = express();
app.use(cors());
app.use(express.json());
app.use(router);
app.get('/', (req,res,next)=> {
	res.sendfile(path.join(__dirname, '/swagger.html'));
});

logger.info('connecting to db'); 

db.connect((err, result) => {
	if(err){
		logger.error(err); 
	} else {
		migrate().then(()=> app.emit('ready')).catch(err => logger.error)
	}
});


// Ask node to run your function before exit:
// This will handle process.exit():
process.on('exit',()=> db.disconnect());

// // This will handle kill commands, such as CTRL+C:
process.on('SIGINT', ()=>db.disconnect());
process.on('SIGTERM',()=> db.disconnect());


export default app; 
