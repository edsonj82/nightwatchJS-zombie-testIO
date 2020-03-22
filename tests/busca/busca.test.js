import pg from '../../lib/db';

let movieData = {}

module.exports = {
    before: function (browser) {

    movieData = {
        title: 'Meu namorado é um zumbi',
        status: 'Disponível',
        year: 2013,
        releaseDate: '01/05/2013',
        cast: ['Nicholas Moult', 'Teresa Palmer', 'Analeign Tipton', 'Edson Jose dos Santos'],
        cover: 'meu-namo-zumbi.jpeg',
        plot: 'E um mundo pós-apocaliptico, um zumbi se apaixona por uma humana.'
        }

        pg.removeByTitle(movieData.title).then(
            function () { 
                pg.insertMovie(movieData)
            }) 
            
        let login = browser.page.login();
        let sidebar = browser.page.sidebar();
    
        login.with('zumbi@dospalmares.com.br','pwd123');
        sidebar.expectLoggedUser('Quilombo');
    },
    
    'quando eu faço a busca pelo título': function(browser){
        let movie = browser.page.movie()

        movie
            .setValue('@searchInput', movieData.title)
            .click('@searchIcon')
    },

    'então o título buscado deve ser exibido na lista':function (browser) {
        let movie = browser.page.movie()
        movie
            .waitForElementPresent('@tr',10000)
            .expect.elements('@tr').count.to.equal(1)

        movie.assert.containsText('@tr', movieData.title)
    }
}