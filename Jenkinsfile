pipeline {
  agent any
  stages {
    stage('') {
      steps {
        sh 'npm i'
        echo 'success'
        mail(subject: 'Gdm deploy success', body: 'The deploy process was succesfull', from: 'jhernandezz.dev@gmail.com', to: 'jhernandezz.dev@gmail.com')
      }
    }
  }
}