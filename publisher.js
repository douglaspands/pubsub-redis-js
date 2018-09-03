/**
 * @file Examplo de publisher utilizando Redis. 
 * @author @douglaspands
 * Esta aplicação tem como função ler o arquivo "mensagens.json"
 * e publicar a lista de mensagens no Redis.
 * O arquivo contem uma lista de chave e valor, onde a chave é o parametro
 * que a outra aplicação "subscriber.js" esta preparada pra receber.
 * Após todas as publicações, a aplicação é encerrada. 
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
