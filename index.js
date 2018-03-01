const httpRequest = require('request');
const bot = require('./bot');
const translateService = require('./services/translate.service');

bot.onText(/(ен|Ен) (.+)/, translateService);
bot.onText(/(ru|Ru) (.+)/, translateService);