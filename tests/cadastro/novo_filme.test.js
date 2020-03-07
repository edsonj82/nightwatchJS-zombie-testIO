

let movieData = {}
module.exports = {
    'dados que eu tenho um novo filme': function (browser) {
        movieData = {
            title: 'Resident Evil',
            status: 'Disponivel',
            year: 2002,
            releaseDate: '01/05/2002',
            cast: ['Milla Jovovick', 'Ali Larter', 'Ian Glen', 'Shan Roberts'],
            cover: 'resident-evil-2002.jpg',
            plot: 'A missão do esquadrão e da Alice é desligar a Rainha Vermelha e coletar dados sobre o incidente.'
        }
    },
    'quando eu faço o cadastro do filme': function (browser) {
        console.log(movieData)
    }
}