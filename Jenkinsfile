pipeline {
    agent any
       stages {
        stage('DEPENDENCY INSTALLATIONS') {
            steps {
                echo 'DEPENDENCY INSTALLATIONS'
                sh 'npm install'
            }
        }
        stage('TESTING') {
            steps {
                echo 'TESTING'
                sh 'CI=true npm test'
            }
        }
        stage('SONARQUBE') {
    environment {
        scannerHome = tool 'sonar_scanner'
    }
    steps {
        echo 'SONAR ANALYSIS'
        withSonarQubeEnv('Sonarqube') {
            sh "${scannerHome}/bin/sonar-scanner"
        }       
    }
}
  stage('PRODUCTION-BUILD') {
            steps {
                echo 'PRODUCTION BUILD'
                sh 'npm run build'
            }
        }
    stage('UPLOADING TO S3 BUCKET') {
        steps{
        echo 'UPLOADING TO S3 BUCKET'
        dir('/var/lib/jenkins/workspace/counter_app/'){
           withAWS(region:'us-east-2',credentials:'s3_counterapp') {
              s3Upload(bucket:"mycounterapp", workingDir:'build', includePathPattern:'**/*');
            }
        }
    }
    }
}
}