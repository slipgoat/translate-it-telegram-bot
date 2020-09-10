const bot = require('../bot');
const conf = require('../conf');
const {Translate} = require('@google-cloud/translate').v2;

module.exports = (msg, match) => {
  const translate = new Translate({projectId: conf.google.projectId});
  const chatId = msg.chat.id;
  const lang = match[1].toLowerCase() === 'ен' ? 'en' : 'ru';
  const text = match[2];

    translate.translate(text, lang)
      .then((translations) => {
        bot.sendMessage(chatId, translations[0]);
      })
      .catch((error) => {
        console.log("ERROR: " + error);
        bot.sendMessage(chatId, "Произошла ошибка :(");
      });
};
