let movieData = {}

module.exports = {
    before:function (browser) {

        movieData = {
            title: 'Resident Evil',
            status: 'Disponível',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Milla Jovovick', 'Ali Larter', 'Ian Glen', 'Shan Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre o incidente.'
        }

        let login = browser.page.login();
        let sidebar = browser.page.sidebar();

        login.with('zumbi@dospalmares.com.br','pwd123');
        sidebar.expectLoggedUser('Quilombo');
    },

    'quando eu faço o cadastro do filme': function (browser) {
        let movie = browser.page.movie();

        movie
        .createForm()
        .setValue('@titleInput', movieData.title)
        .selectStatus(movieData.status)
        .pause(5000)
    }
}