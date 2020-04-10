pipeline{
    agent {
        docker{ 
            image 'edsonj82/node-wd'
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
            }            
        }
    }
}