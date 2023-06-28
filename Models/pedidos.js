import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";


const Pedido = sequelize.define(
    "pedidos",
    {
        // Definicion de Atributos
        idPedido: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,

        },
        cedula: {
            type: DataTypes.STRING,
            allowNull: false,
            references: {
                model: "clientes",
                key: "cedula",
            },
        },
        fecha : {
            type: DataTypes.DATE,
            allowNull: false,
        },
        estado: {
            type: DataTypes.INTEGER
        },
    },
    {
        timestamps: false,
    }
);

export { Pedido };