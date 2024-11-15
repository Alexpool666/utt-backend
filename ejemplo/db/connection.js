const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('ejemplo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

const user = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    age: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false
    }
});

(async () => {
    await sequelize.sync({ force: true }); // Sincronizar modelo con la base de datos
    
    // Crear un nuevo usuario
    // const nuevoUsuario = await usuario.create({
    //     nombre: 'Luis',
    //     edad: 25,
    //     correo: 'juan@example.com',
    // });
    
    // console.log('Usuario creado:', nuevoUsuario.toJSON());
    
    // Consultar usuarios
    // const usuarios = await Usuario.findAll();
    // console.log('Usuarios encontrados:', usuarios.map(u => u.toJSON()));
    
    // Actualizar usuario
    // await usuario.update({ edad: 30 }, { where: { nombre: 'Luis' } });
    
    // Eliminar usuario
    // await usuario.destroy({ where: { nombre: 'Luis' } });
})();


// async function connectToDB() {
//     try {
//         sequelize.authenticate().then(async () => {
//             // await State.sync({ alter: true });
//         })
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
// }

// connectToDB();