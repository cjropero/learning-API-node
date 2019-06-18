// importa express y tipo de dato de express Application
// npm i -g typescript
// npm i @types/express -D
import express, { Application } from 'express';

// importa los archivo de rutas
import indexRoutes from "./routes/indexRoutes";
import gamesRoutes from "./routes/gamesRoutes";

// clase que inicializa el servidor
class Server {
  // inicializa propiedad app de tipo aplicacion de express
  // public -> usar en varias partes de la aplicacion 
  public app: Application;

  // metodo que se ejecuta cuando se instancia la clase
  // inicializa express
  constructor() {
    // asigna el objeto que retorna express() a la propiedad app de la clase
    this.app = express();
    // inicializa metodos config del app
    this.config();
    this.routes();
  }

  // metodo encargado de la configuración del app
  // no retorna nada
  config(): void {
    // establece el puerto del servidor
    // process.env.port -> puerto definido definido por el sistema
    this.app.set('port', process.env.PORT || 3000);
  }

  // metodo encargado de definir las rutas de mi servidor
  routes(): void {

  }

  // metodo para inicializar el servidor ejecuta el app.listen()
  start(): void {
    // asignacion del puerto del servidor
    this.app.listen(this.app.get('port'), () => {
      console.log('Server on port', this.app.get('port'));
    });
  }
}
// guarda el objeto en una costante que ejecuta la clase y me devuelve un objeto
const server = new Server();
server.start();