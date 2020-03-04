module.exports = {

    before:(browser) =>{
        browser
        .resizeWindow(1920, 1000)       
    },

    after: (browser) =>{
        browser.end();
    },

    //'@disabled': true,
    'senha incorreta': (browser) => {
        let alert = '.alert-danger';
        browser
            .url('http://zombie-api:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
            .setValue('input[name=password]','123abc')
            .click('.login-button')
            .waitForElementVisible(alert,3000)
            .assert.containsText(alert, 'Usuário e/ou senha inválidos')            
    },
    'não cadastrado':(browser) =>{
        let alert = '.alert-danger';
        browser
            .url('http://zombie-api:5000/login')
            .waitForElementVisible('.card-login', 3000)
            .setValue('input[name=email]', '404@yahoo.com')
            .setValue('input[name=password]','123abc')
            .click('.login-button')
            .waitForElementVisible(alert,3000)
            .assert.containsText(alert, 'Usuário e/ou senha inválidos')            
    },
    'email não informado':(browser) =>{
        let alert = '.alert-info';
        browser
        .url('http://zombie-api:5000/login')
        .waitForElementVisible('.card-login', 3000)
        .setValue('input[name=email]', '')
        .setValue('input[name=password]','pwd123')
        .click('.login-button')
        .waitForElementVisible(alert,3000)
        .assert.containsText(alert, 'Opps. Cadê o email?')      
    },
    'senha não informada':(browser) =>{
        let alert = '.alert-info';
        browser
        .url('http://zombie-api:5000/login')
        .waitForElementVisible('.card-login', 3000)
        .setValue('input[name=email]', 'zumbi@dospalmares.com.br')
        .setValue('input[name=password]','')
        .click('.login-button')
        .waitForElementVisible(alert,3000)
        .assert.containsText(alert, 'Opps. Cadê a senha?')     
    }
}