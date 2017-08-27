'use strict';
const puppeteer = require('puppeteer');
const {puppeteerConfig, slackConfig, tests, classes} = require('./config');
const Slack = require('./Slack')

class Tests {
    constructor(slackConfig){
        this.slack = new Slack(slackConfig.hook,slackConfig.options)
        this.slackChannel = slackConfig.channel
    }
    async execute(puppeteerConfig){
        try{
            const browser = await puppeteer.launch({
                slowMo: puppeteerConfig.slowMo,
            });
            const page = await browser.newPage();
            await page.setViewport(puppeteerConfig)

            let fullMessage = ""
            for (const key of Object.keys(tests)) {
                await classes[key].doTest(page, tests[key].urls).then((message)=>{
                    fullMessage = fullMessage + message + "\n"
                })
            }
            await this.slack.sendTo(fullMessage, this.slackChannel)
            browser.close()
        }catch(error){
            console.log("error: "+error)
        }
    }
}
new Tests(slackConfig).execute(puppeteerConfig);