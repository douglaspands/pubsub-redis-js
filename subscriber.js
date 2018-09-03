/**
 * @file Examplo de subscriber utilizando Redis. 
 * @author @douglaspands
 * Esta aplicação tem como função receber todas as publicações feitas 
 * com a chave "pubsub" e mostra-las no console.
 * Não foi utilizada o "subscriber.quit()"" aqui, porque quero que ela 
 * fique presa sempre aguardando receber as mensagens.
 * Caso queira cancelar: ctrl + c
 */
'use strict';
const subscriber = require("redis").createClient();

subscriber.on("error", (error) => {
    console.log(`Error: ${error}`);
});

// Chave que acionará a leitura da mensagem
subscriber.subscribe("pubsub");

// Quando a chave for correspondida, essa função será executada.
subscriber.on("message", (channel, message) => {
    console.log(`- Canal: ${channel}\n  Mensagem '${message}'`);
});

console.log(`subscriber iniciado em: ${new Date()}`);
