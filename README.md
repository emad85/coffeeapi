# coffeeapi
To Start The Server: **npm run start **

Test Unit: **npm run test:units** 

Test Api: **npm run test ** 



*-To run the project you need webpack to be installed globally: **npm i webpack -g ***

- Webpack need to be installed globally npm run webpack -g

- Swagger documentation can be served from localhost:8080
- I also added postman definitions under static folder

- The base url for all the apis are 
http://localhost:8080/api/1.0/coffee/machines
http://localhost:8080/api/1.0/coffee/pods 

- You can filter machines and pods by sending your filter in the query params
ex: productType=large&flavor=psl

- You set which fields to return by sending param fields=comma separated
ex: ?fields=code,size

- You can use limit, offset in the query params to paginate the response too. 

- The code will connect to inmemory mongodb server that will be installed with depenecy
if you already have mongododb 
you can set the .env =>  IN_MEMORY_DB:false then set the db connection attributes. 


