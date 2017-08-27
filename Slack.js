const NodeSlack = require('node-slack');

class Slack{
    constructor(hook, options){
        this.slack = new NodeSlack(hook, options);
    }

    async sendTo(text, channel){
        this.slack.send({
            text: text,
            channel: channel,
            username: 'Puppeteer',
            icon_emoji: 'ghost',
        });
        return new Promise(resolve=>{resolve()})
    }
}
module.exports = Slack