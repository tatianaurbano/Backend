import { Router } from 'express';
import { getProductos, postProductos, putProductos, deleteProductos,
  getClientes, postClientes, putClientes, deleteClientes,
  getPedidos, postPedidos, putPedidos, deletePedidos,
  getPedidos_Productos, postPedidos_Productos, deletePedidos_Productos
} from '../Controllers/controller.js';

const router = Router();

//Definir Rutas
router.get("/",(req, res)=> {
  res.send("GET Pagina Principal Express")
});

router.get("/productos", getProductos);
router.post("/productos",postProductos);
router.put("/productos/:idProducto",putProductos);
router.delete("/productos/:idProducto", deleteProductos);

// CLIENTES
router.get("/clientes", getClientes);
router.post("/clientes", postClientes);
router.put("/clientes/:cedula", putClientes);
router.delete("/clientes/:cedula", deleteClientes);

// pedidos
router.get("/pedidos", getPedidos);
router.post("/pedidos", postPedidos);
router.put("/pedidos/:idPedido", putPedidos);
router.delete("/pedidos/:idPedido", deletePedidos);

// pedidos_productos
router.get("/pedidos_productos", getPedidos_Productos);
router.post("/pedidos_productos", postPedidos_Productos);
router.delete("/pedidos_productos/:idPedido/:idProducto", deletePedidos_Productos);

export default router;

