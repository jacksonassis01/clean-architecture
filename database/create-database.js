const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const sqlScript = fs.readFileSync('create.sql', 'utf8');

// const db = new sqlite3.Database(':memory:'); // Para banco em memória, ou substitua ':memory:' por um caminho para arquivo
const db = new sqlite3.Database('database.db'); // Para banco em memória, ou substitua ':memory:' por um caminho para arquivo

db.exec(sqlScript, (err) => {
    if (err) {
        console.error('Erro ao executar o script SQL:', err.message);
    } else {
        console.log('Script SQL executado com sucesso!');
    }

    db.close((err) => {
        if (err) {
            console.error('Erro ao fechar o banco:', err.message);
        } else {
            console.log('Conexão com o banco fechada.');
        }
    });
});
