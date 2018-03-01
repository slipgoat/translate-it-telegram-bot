const TelegramBot = require('node-telegram-bot-api');
const conf = require('./conf');

module.exports = new TelegramBot(conf.telegram.token, {polling: true});