module.exports = {

    //'@disabled': true,
    'senha incorreta': (browser) => {
        
        let login  = browser.page.login()
        login
            .with('zumbi@dospalmares.com.br','123abc')
            .waitForElementVisible('@alertDanger',3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')            
    },
    'não cadastrado':(browser) =>{
        let login  = browser.page.login()
        login
            .with('404@yahoo.com','123abc')
            .waitForElementVisible('@alertDanger',3000)
            .assert.containsText('@alertDanger', 'Usuário e/ou senha inválidos')            
    },
    'email não informado':(browser) =>{
        let login  = browser.page.login()
        login
            .with('','pwd123')
            .waitForElementVisible('@alertInfo',3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê o email?')      
    },
    'senha não informada':(browser) =>{
        let login  = browser.page.login()
        login
            .with('zumbi@dospalmares.com.br','')
            .waitForElementVisible('@alertInfo',3000)
            .assert.containsText('@alertInfo', 'Opps. Cadê a senha?')     
    }
}