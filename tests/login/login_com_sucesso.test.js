module.exports = {
    before: (browser) => {
        browser.resizeWindow(1920,1000)
    },
    after: (browser) => {
        browser.end();
    },
    //'@disabled': true,
    'login com sucesso': (browser) => {
        let userInfo = '.user .info span';
        browser
            .url('http://zombie-api:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
            .setValue('input[name=password]','pwd123')
            .click('.login-button')
            .waitForElementVisible(userInfo, 3000)
            .assert.containsText(userInfo, 'Quilombo')
    }
}