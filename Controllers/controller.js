import { Producto } from "../Models/productos.js";
import { Pedido } from "../Models/pedidos.js";
import { Pedido_Producto } from "../Models/pedidos_productos.js";
import { Cliente } from "../Models/clientes.js";


const getProductos = async (req, res) => {
  //res.send("GET Pagina Productos desde Controller");
  try {
    const productos = await Producto.findAll();
    res.status(200).json(productos);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postProductos = async (req, res) => {
  //res.send("POST Pagina Productos desde Controller");
  const { nombre, detalle } = req.body;
  try {
    const newProducto = await Producto.create({
      nombre,
      detalle,
    });
    res.status(200).json(newProducto);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const putProductos = async (req, res) => {
  const { idProducto } = req.params;
  const { nombre, detalle } = req.body;
  try {
    const oldProducto = await Producto.findByPk(idProducto);
    oldProducto.nombre = nombre;
    oldProducto.detalle = detalle;
    const modProducto = await oldProducto.save();
    res.status(200).json(modProducto);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const deleteProductos = async (req, res) => {
  //res.send("DELETE Pagina Productos desde Controller");
  const { idProducto } = req.params;
  try {
    const respuesta = await Producto.destroy({
      where: {
        idProducto,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {
    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};

//// clientes

const getClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.status(200).json(clientes);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postClientes = async (req, res) => {
  const { cedula, nombre, apellido, correo, telefono } = req.body;
  try {
    const newCliente = await Cliente.create({
      cedula,
      nombre,
      apellido,
      correo,
      telefono,
    });
    res.status(200).json(newCliente);
  } catch (error) {

    res.status(400).json({ mensaje: error });
  }
};


const putClientes = async (req, res) => {
  const { cedula } = req.params;
  const { nombre, apellido, correo, telefono } = req.body;
  try {
    const oldCliente = await Cliente.findByPk(cedula);
    oldCliente.nombre = nombre;
    oldCliente.apellido = apellido;
    oldCliente.correo = correo;
    oldCliente.telefono = telefono;
    const modCliente = await oldCliente.save();
    res.status(200).json(modCliente);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const deleteClientes = async (req, res) => {
  const { cedula } = req.params;
  try {
    const respuesta = await Cliente.destroy({
      where: {
        cedula,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {

    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};

//// pedidos

const getPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.findAll();
    res.status(200).json(pedidos);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postPedidos = async (req, res) => {
  const { cedula, fecha } = req.body;
  try {
    const newPedido = await Pedido.create({
      cedula,
      fecha
    });
    res.status(200).json(newPedido);
  } catch (error) {

    res.status(400).json({ mensaje: error });
  }
};

const putPedidos = async (req, res) => {
  const { idPedido } = req.params;
  const { estado } = req.body;
  try {
    const oldPedido = await Pedido.findByPk(idPedido);
    oldPedido.estado = estado;
    const modPedido = await oldPedido.save();
    res.status(200).json(modPedido);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};


const deletePedidos = async (req, res) => {
  const { idPedido } = req.params;
  try {
    const respuesta = await Pedido.destroy({
      where: {

        idPedido,
      },
    });
    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {

    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};

//// pedidos_productos

const getPedidos_Productos = async (req, res) => {
  try {
    const pedidos_productos = await Pedido_Producto.findAll();
    res.status(200).json(pedidos_productos);
  } catch (error) {
    res.status(400).json({ mensaje: error });
  }
};

const postPedidos_Productos = async (req, res) => {
  const { idPedido, idProducto } = req.body;
  try {
    const newPedido_Producto = await Pedido_Producto.create({
      idPedido,
      idProducto
    });
    res.status(200).json(newPedido_Producto);
  } catch (error) {

    res.status(400).json({ mensaje: error });
  }
};

const deletePedidos_Productos = async (req, res) => {
  const { idPedido, idProducto } = req.params;
  try {
    const respuesta = await Pedido_Producto.destroy({
      where: {
        idPedido,
        idProducto
      },
    });

    res.status(200).json({ mensaje: "Registro Eliminado" });
  } catch (error) {

    res.status(400).json({ mensaje: "Registro No Eliminado" + error });
  }
};




export { getProductos, postProductos, putProductos, deleteProductos,
  getClientes, postClientes, putClientes, deleteClientes,
  getPedidos, postPedidos, putPedidos, deletePedidos,
  getPedidos_Productos, postPedidos_Productos, deletePedidos_Productos };
