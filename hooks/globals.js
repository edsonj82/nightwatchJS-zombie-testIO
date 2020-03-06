module.exports = {
    beforeEach: (browser, done) => {
        browser.resizeWindow(1920,1000)
        done()
    },

    afterEach: (browser, done) => {
        browser.end();
        done()
    }
}