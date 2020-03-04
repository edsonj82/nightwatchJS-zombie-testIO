module.exports = {

    before:(browser) => {
        console.log('antes de todos os steps')
    },

    after: (browser) => {
        console.log('depois de todos os steps')
    },

    beforeEach: (browser) => {
        console.log('antes cada steps')
    },

    afterEach: (browser) => {
        console.log('após cada steps')
    },

    'step one': (browser) => {
        let userInfo = '.user .info span';
        browser
            .url('http://zombie-api:5000/login')
            .waitForElementVisible('.card-login', 3000)
    },

    'step two': (browser) => {
        let userInfo = '.user .info span';
        browser
            .url('http://zombie-api:5000/login')
            .waitForElementVisible('.card-login', 3000)
    }
}            