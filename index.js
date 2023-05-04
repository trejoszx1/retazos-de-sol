const express = require('express');
const cors = require('cors');
const routerApi = require('./router');



const { logErrors, errorHandler , boomErrorHandler} = require('./middlewares/error.handler');


const app = express();
const port = process.env.PORT || 3000;

//middleware

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://mayapp.co']; //abilita acceso de otros arigenes de cors
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin ) {
      callback(null , true);
    }else{
      callback(new Error('no permitido'))
    }
  }
}
app.use(cors(options));  // Habilita cualquier origen

// Routers Import
routerApi(app);


//middleware internal errors

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);






app.listen(port, () => {
  console.log('Listenig on port ' + port );
});

