pipeline {
  agent any
  stages {
    stage('Terraform initialization') {
      steps {
        sh '''if [ ! -d .terraform ]; then
    echo "Initiating terraform"
      terraform init
    else    
      echo "Terraform was initiated"
    fi'''
      }
    }

    stage('Terraform action apply/destroy') {
      steps {
        sh '''export AWS_ACCESS_KEY_ID="Here Your AWS Access key ID"
	  export AWS_SECRET_ACCESS_KEY="Here Your Secret AWS Access key"
          terraform $ACTION -auto-approve -no-color'''
      }
    }

  }
  parameters {
    choice(name: 'ACTION', choices: [apply, destroy], description: 'Action to be done by terraform')
  }
}
