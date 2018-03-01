const httpRequest = require('request');
const bot = require('../bot');
const conf = require('../conf');

module.exports = (msg, match) => {
  const chatId = msg.chat.id;
  const lang = match[1].toLowerCase() === 'ен' ? 'ru-en' : 'en-ru';
  const text = match[2];

  const options = {
    url: `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${lang}&key=${conf.yandex.key}`,
    method: 'POST',
    form: {
      text: text
    }
  };

  httpRequest(options, (err, res, body) => {
    if (!err && res.statusCode === 200) {
      const parseBody = JSON.parse(body);
      bot.sendMessage(chatId, parseBody.text[0]);
    } else {
      bot.sendMessage(chatId, `Произошла ошибка :(`);
    }
  });
};