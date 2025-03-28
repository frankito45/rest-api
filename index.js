import express, { json } from 'express';
import routerProductos  from './router/productos.js';

const app = express();
app.use(json());
app.disable('x-powered-by');
app.use('/productos', routerProductos); // Rutas para productos

const PORT = process.env.PORT ?? 3000;



app.listen(PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`);
})