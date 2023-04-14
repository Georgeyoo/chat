const textToSpeech = require('@google-cloud/text-to-speech');
const fs = require('fs');
const util = require('util');
const projectId = 'chat-376119';

const createAudio = async (input) => {
    const client = new textToSpeech.TextToSpeechClient();
    
    const text = input;
    const audioFile = 'audio.mp3';
    
    const request = {
        input: {text},
        voice: {languageCode: 'en-US', ssmlGender: 'MALE'},
        audioConfig: {audioConfig: 'MP3'},
    };
    
    const [response] = await client.synthesizeSpeech(request);
    const writeFile = util.promisify(fs.writeFile);
    await writeFile(audioFile, response.audioContent, 'binary');
    console.log(`Audio content written to file: ${audioFile}`);
}

module.exports = createAudio;