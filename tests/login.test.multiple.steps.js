module.exports = {
    '@disabled': true,
    'dado que eu acesso a página de login': function (browser) {
        browser
            .resizeWindow(1920, 1000)
            .url('http://zombie-api:5000/login')
            .waitForElementVisible('.card-login', 3000)
    },
    'quando faço login com sucesso':function name(browser) {
        browser
        .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
        .setValue('input[name=password]','pwd123')
        .click('.login-button')
    },
    'então devo ver o meu nome na área logada': function name(browser) {
        var userInfo = '.user .info span';
        browser
        .waitForElementVisible(userInfo, 3000)
        .assert.containsText(userInfo, 'Quilombo')
        .end();
    }
}