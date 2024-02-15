const tmi = require('tmi.js');
const NomeDoBot = 'nome do bot';
const canalQueVaiFicar = 'nome do seu canal'
const token = 'token'
const opts = {
  identity: {
    username: NomeDoBot,
    password: token
  },
  channels: [canalQueVaiFicar]
};
const client = new tmi.client(opts);
//intercepta mensagem do chat
function mensagemChegou(alvo, contexto, mensagem, ehBot) {
  if (ehBot) {
    return;
  } //se for mensagens do nosso bot ele não faz nada

  const nomeDoComando = mensagem.trim();
  if (nomeDoComando === '!comandoUM') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `* Você pediu para executar o comando ${nomeDoComando}`);
  } else if (nomeDoComando === '!comandoDOIS') {
    console.log(`* Foi Executado o comando ${nomeDoComando}`);
    client.say(alvo, `* Você pediu para executar o comando ${nomeDoComando}`);
  } else {
    console.log(`* Não conheço o comando ${nomeDoComando}`);
  }
}

function entrouNoChatDaTwitch(endereco, porta) {
  console.log(`* Bot entrou no endereço ${endereco}:${porta}`);
}


// Registra função

client.on('message', mensagemChegou);
client.on('connected', entrouNoChatDaTwitch);

// Connecta na Twitch:
client.connect();