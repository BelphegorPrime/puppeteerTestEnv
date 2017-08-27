class Bing{
    static async doTest(page, urls){
        let message = "Bing:\n"
        for (let url of urls){
            try{
                let pageErrors = [];
                await page.goto(url, {waitUntil: 'networkidle'});
                await page.on('pageerror', (...args) => {pageErrors = args});
                await page.waitFor(1800)
                await page.screenshot({path: 'bing.png'})
                message = message + pageErrors.join("\n")
            }catch(error){
                console.log("error: "+error)
            }
        }
        return new Promise(resolve=>{resolve(message)})
    }
}
module.exports = Bing