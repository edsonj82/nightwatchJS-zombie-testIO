require('babel-core/register')

const chromedriver = require('chromedriver');
require('geckodriver')

const testUrl = "http://zombie-web:5000"
const defaultTimeout = 15000

module.exports = {
    src_folders: ['tests'], 
    page_objects_path:'./pages',
    global_path: './hooks/globals.js',

    webdriver: {
        start_process: true,
        // server_path: chromedriver.path,
        // port: 9515
    },

    test_workers: {
        enabled: false,
        workers: 2
    },

    test_settings: {
        default: {
            launch_url:testUrl,
            globals:{
                waitForConditionTimeout: defaultTimeout
            },
            webdriver:{
                server_path: chromedriver.path,
                port: 9515
            },

            desiredCapabilities: {
                browserName: "chrome"
            }
        },
        headless:{
            launch_url:testUrl,
            globals:{
                waitForConditionTimeout: defaultTimeout
            },
            webdriver:{
                server_path: chromedriver.path,
                port: 9515
            },

            desiredCapabilities: {
                browserName: "chrome",
                chromeOptions:{
                    w3c:false,
                    args:['--headless','--no-sandbox']
                }
            }
        },
        firefox:{
            launch_url:testUrl,
            globals:{
                waitForConditionTimeout: defaultTimeout
            },
            webdriver:{
                server_path: './node_modules/.bin/geckodriver',
                port: 4444
            },

            desiredCapabilities: {
                browserName: "firefox",
                acceptInsecureCerts:true
            }
        },
        stage:{
            launch_url:'http://stage.zombieplus.com.br',
        }
    }
}