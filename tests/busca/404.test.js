module.exports = {

    before: function (browser) {
        let login = browser.page.login();
        let sidebar = browser.page.sidebar();
    
        login.with('zumbi@dospalmares.com.br','pwd123');
        sidebar.expectLoggedUser('Quilombo');
    },

    'quanto busco um título não cadastrado': function name(browser) {
        let movie = browser.page.movie()
        movie
            .setValue('@searchInput','Não é mais um besteirol americano')
            .click('@searchIcon')
    },

    'então devo ver uma mensagem de alerta': function (browser) {
        let movie = browser.page.movie()
        browser
            .waitForElementVisible('@alertDanger',10000)
            .assert.containsText('@alertDanger','Puxa! não encontramos nada aqui :(')
    }
}