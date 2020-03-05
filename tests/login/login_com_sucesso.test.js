module.exports = {
    before: (browser) => {
        browser.resizeWindow(1920,1000)
    },
    after: (browser) => {
        browser.end();
    },
    //'@disabled': true,
    'login com sucesso': (browser) => {
        //let userInfo = '.user .info span';        
        let login = browser.page.login()
        let sidebar = browser.page.sidebar()

        browser.resizeWindow(1920,1000);

        login.navigate()
            .waitForElementVisible('@form', 3000)//.url('http://zombie-api:5000/login')
            .setValue('@emailInput', 'zumbi@dospalmares.com.br')
            .setValue('@passInput','pwd123')
            .click('.login-button')

        sidebar    
            .waitForElementVisible('@userInfo', 3000)
            .assert.containsText('@userInfo', 'Quilombo')
    }
}