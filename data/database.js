const Sequelize = require('sequelize');
const sequelize = new Sequelize(
    'sistemaDeCadastro',
    'root',
    'password',
    {
        host: "localhost",
        dialect: "mysql"
    }
);

sequelize.authenticate().then(() => {
    console.log('Conectado com sucesso!');
}).catch((err) => {
    console.log('Falha ao conectar: ' + err);
});


/*MODEL POSTAGEM*/
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});
/*
Postagem.create({
    titulo: 'TÍTULO',
    conteudo: 'Lorem ipsum dolor.'
});
*/
//Postagem.sync({force: true})

/*MODEL USUÁRIOS*/
const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    nascimento: {
        type: Sequelize.DATE
    },
    email: {
        type: Sequelize.STRING
    }
});

Usuario.create({
    nome: 'Caudinium',
    sobrenome: 'Lucius',
    nascimento: '2022-06-16',
    email: 'caudinium.lucius@email.com'
});

//Usuario.sync({force:true});