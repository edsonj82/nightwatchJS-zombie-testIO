pipeline{
    agent {
        docker{ 
            image 'edsonj82/node-wd'
            // image 'qaninja/node-wd'
            args '--network=skynet'
            }
    }
    stages{
        stage("Build"){
            steps{
                sh "npm install"
            } 
            
        }
        stage("Tests"){
            steps{
                sh "npm run test:ci"
                jasmine testResult: "tests_output/**/*.xml"
            }            
        }
    }
}