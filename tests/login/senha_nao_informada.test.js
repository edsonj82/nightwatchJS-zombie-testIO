module.exports = {
    //'@disabled': true,
    'senha não informada':(browser) =>{
        let login  = browser.page.login()
        login
            .with('zumbi@dospalmares.com.br','')
            .expectAlertInfo('Opps. Cadê a senha?')     
    }
}