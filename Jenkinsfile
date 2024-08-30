pipeline {
    agent any

    tools {nodejs "node"}

    stages {

        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent {
                        label "Agent2_1"
                    }
                    steps {
                        git url: 'https://github.com/FLMarquez/SMA_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key cce1f910-2985-4f1a-a70e-9b6c6a5cc497  --parallel'
                    
                    }
                }

                stage('Slave 2') {
                    agent {
                        label "Agent2_2"
                    }
                    steps {
                        git url: 'https://github.com/FLMarquez/SMA_Cypress.git'
                        bat 'npm install'
                        bat 'npm update'                       
                        bat 'npx cypress run cypress run --record --key cce1f910-2985-4f1a-a70e-9b6c6a5cc497  --parallel'
                    
                    }
                }
                         

                  
                  
            }

             
        }

    }
            
}