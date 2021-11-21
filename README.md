This is a Terraform module to deploy a lambda function with HTTP API in AWS.

It is based on https://learn.hashicorp.com/tutorials/terraform/lambda-api-gateway?in=terraform/aws).

What it does:
1. Create S3 bucket for storing lambda function
2. Uploads the lambda function to the S3 bucket
3. Creates Lambda function in AWS
4. Creates the AWS role to execute the lambda function
5. Attaches an AWS policy to the role
6. Create an HTTP API with API Gateway
7. Maps the HTTP request to the lambda function
8. Defines a log group to store access logs for the lambda function API Gateway stage.
9. Gives API Gateway permission to invoke the lambda function

In order to test the function you should issue this command
```
curl --header "Content-Type: application/json" --data '{"username":"xyz","password":"red"}' http://${BASE_URL}:${PORT}/api
```
Where is BASE_URL is the first line ot the output at the end of the execution of "terraform apply", something like 
```
base_url = "https://<some_string>.execute-api.eu-central-1.amazonaws.com/api"
```

You should get a response like this
```
Welcome to our demo API, here are the details of your request:

Method
POST

Body
"{\"username\":\"xyz\",\"password\":\"red\"}"
```
