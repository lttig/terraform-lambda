// Lambda function code
'use strict';

exports.handler = async (event) => {
    let responseCode = 200;
    let responseBody='\nWelcome to our demo API, here are the details of your request:';
    
    let method = event.requestContext.httpMethod;
    responseBody += '\n\nMethod\n'+ method;

    if (event.headers["Content-Type"]) {
      responseBody += '\n\nHeaders\n';
      responseBody += 'Content-Type' + ' : ' + JSON.stringify(event.headers['Content-Type']);
    }

    responseBody += '\n\nBody\n' + JSON.stringify(event.body);

    responseBody += '\n\n';

    let response = {
        statusCode: responseCode,
        body: responseBody
    };
    return response;    
};
