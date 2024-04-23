const express = require('express');
const UserApi = require('./api/usuario');
const PostApi = require('./api/postagem');
const database = require('./config/database');

console.log('Starting server....');
const app = express();
app.use(express.json());

app.post('/users', UserApi.criarUsuario);
app.get('/users', UserApi.listarUsuarios);
app.get('/users/:id', UserApi.obterUsuarioPorId);
app.put('/users/:id', UserApi.alterarUsuario);
app.delete('/users/:id', UserApi.deletarUsuario);
app.get('/users/:id/post', UserApi.obterPostagensPorAutorId);

app.post('/post', PostApi.criarPostagem);
app.get('/post', PostApi.listarPostagens);
app.get('/post/:id', PostApi.obterPostagemPorId);
app.put('/post/:id', PostApi.alterarPostagem);
app.delete('/post/:id', PostApi.deletarPostagem);



database.db.sync({ force: true })
    .then(() => {
        app.listen(3000, () => {
            console.log('Server is running on port 3000')
        })
    })
    .catch((error) => {
        console.error('Error connecting to the database', error);
    });
