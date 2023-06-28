import { DataTypes } from "sequelize";
import { sequelize } from "../Database/database.js";

const Cliente = sequelize.define(
    "clientes",
    {
        // Definicion de Atributos
        cedula: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        correo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        timestamps: false,
    }
);

export { Cliente };