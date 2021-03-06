import Hapi from  'hapi';
import { routes } from './routes'
const server = Hapi.server({ //about the server details about port no, host
    host: 'localhost',
    port: 5000
});

routes.forEach((route) => {
    server.route(route);
});


async function start(){
    try{
        await server.start();
   }
   catch (err){
       console.log(err);
   }
   console.log('Hapii server is running');
}
start();