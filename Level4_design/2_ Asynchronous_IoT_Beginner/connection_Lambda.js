
const AWS = require('aws-sdk')

const api = new AWS.ApiGatewayManagementApi({
  endpoint: '<Your-WSS-Endpoint-Here-Without-WSS:-Prefix>'   //endpoint example: '1kn34f5ngfu.execute-api.ap-northeast-2.amazonaws.com/production'
})


exports.handler = async (event, context) => {
  
 console.log(event); 
 let connectionId = event.requestContext.connectionId;
 console.log("myConnectionID is: ", connectionId)  //Go To AWS CloudWatch Service for your Connection ID
 
     const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;  //need a response or we get disconnected immediatly
 
};

//You can also test this at https://www.piesocket.com/websocket-tester using : {"action": "message"} as input
