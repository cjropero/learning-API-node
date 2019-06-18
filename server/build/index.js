"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// importa express y tipo de dato de express Application
// npm i -g typescript
// npm i @types/express -D
const express_1 = __importDefault(require("express"));
// clase que inicializa el servidor
class Server {
    // metodo que se ejecuta cuando se instancia la clase
    // inicializa express
    constructor() {
        // asigna el objeto que retorna express() a la propiedad app de la clase
        this.app = express_1.default();
        // inicializa metodos config del app
        this.config();
        this.routes();
    }
    // metodo encargado de la configuración del app
    // no retorna nada
    config() {
        // establece el puerto del servidor
        // process.env.port -> puerto definido definido por el sistema
        this.app.set('port', process.env.PORT || 3000);
    }
    // metodo encargado de definir las rutas de mi servidor
    routes() {
    }
    // metodo para inicializar el servidor ejecuta el app.listen()
    start() {
        // asignacion del puerto del servidor
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server on port`, this.app.get('port'));
        });
    }
}
// ejecuta la clase y me devuelve un objeto
const server = new Server();
server.start();
