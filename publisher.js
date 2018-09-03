/**
 * @file Examplo de publisher utilizando Redis. 
 * @author @douglaspands
 */
'use strict';
const publisher = require("redis").createClient();

publisher.on("error", (error) => {
    console.log(`Error: ${error}`);
});

// Lista de mensagens
const mensagens = require('./mensagens.json');

// Será publicado mensagem por mensagem
mensagens.forEach(mensagem => {
    publisher.publish(mensagem.key, mensagem.value);    
});

// Finaliza client do Redis (libera a aplicação)
publisher.quit();

console.log('Fim da publicação de mensagens');
