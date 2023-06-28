import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Pedido_Producto = sequelize.define(
    "pedidos_productos",
    {
        // Definicion de Atributos
        idPedido: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: "pedidos",
                key: "idPedido",
            },
        },
        idProducto: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            references: {
                model: "productos",
                key: "idProducto",
            },
        },
    },
    {
        timestamps: false,
    }
);

export { Pedido_Producto };