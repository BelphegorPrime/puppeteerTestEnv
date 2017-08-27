const classes = {
    Google: require('./Google'),
    Bing: require('./Bing')
};

const tests = {
    "Google": {
        urls:['http://google.com'],
    },
    "Bing":{
        urls:["http://bing.com"]
    }
}

const config = {
    slowMo: 250,
    width: 1920,
    height: 1080,
    isMobile: false,
}

const slack = {
    hook: "some Slack hook web address",
    options: {},
    channel: "#foo",

}

exports.tests = tests;
exports.classes = classes;
exports.puppeteerConfig = config;
exports.slackConfig = slack;