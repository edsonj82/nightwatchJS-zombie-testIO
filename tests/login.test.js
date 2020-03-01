module.exports = {
    'login com sucesso': function (browser) {
        browser
            .url('http://zombie-api:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
            .setValue('input[name=password]','pwd123')
            .click('.login-button')
            .waitForElementVisible('.user .info span', 'Quilombo',3000)
            .assert.containsText('.user .info span', 'Quilombo')
            .end();
    }
}