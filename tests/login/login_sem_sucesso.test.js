module.exports = {
    'senha incorreta': (browser) => {
        let alert = '.alert';
        browser
            .url('http://zombie-api:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
            .setValue('input[name=password]','123abc')
            .click('.login-button')
            .waitForElementVisible(alert,3000)
            .assert.containsText(alert, 'Usuário e/ou senha inválidos')
            .end();
    }
}