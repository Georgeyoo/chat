const methods = {};
const { Configuration, OpenAIApi } = require('openai');

require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.API_KEY,
});

const openai = new OpenAIApi(configuration);

methods.getAnswer = (req) => {
    return new Promise((resolve, reject) => {
        try {
            openai.createCompletion({
                model: 'text-davinci-003',
                prompt: req.body.question,
                max_tokens: 2048,
            }).then((data) => {
                resolve({ status: 200, message: data.data.choices[0].text });
            });
        } catch (err) {
            reject(err);
        }
    })
}

module.exports = methods;
