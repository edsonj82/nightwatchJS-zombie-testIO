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
        
        let login  = browser.page.login()
        login
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'zumbi@dospalmares.com.br')
            .setValue('@passInput','123abc')
            .click('@loginButton')
            .waitForElementVisible('@alertDanger',3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')            
    },
    'não cadastrado':(browser) =>{
        let login  = browser.page.login()
        login
            .navigate()    //.url('http://zombie-api:5000/login')
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', '404@yahoo.com')
            .setValue('@passInput','123abc')
            .click('@loginButton')
            .waitForElementVisible('@alertDanger',3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')            
    },
    'email não informado':(browser) =>{
        let login  = browser.page.login()
        login
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', '')
            .setValue('@passInput','pwd123')
            .click('@loginButton')
            .waitForElementVisible('@alertInfo',3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê o email?')      
    },
    'senha não informada':(browser) =>{
        let login  = browser.page.login()
        login
            .navigate()
            .waitForElementVisible('@form', 3000)
            .setValue('@emailInput', 'zumbi@dospalmares.com.br')
            .setValue('@passInput','')
            .click('@loginButton')
            .waitForElementVisible('@alertInfo',3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')     
    }
}