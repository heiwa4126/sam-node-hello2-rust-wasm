const { greeting } = require('@yourname/greeting');
let response;

exports.lambdaHandler = async (event, context) => {
  try {
    let name = event?.queryStringParameters?.name;
    let msg = (name) ? greeting(name) : "hello world";

    response = {
      'statusCode': 200,
      'body': JSON.stringify({
        message: msg,
      })
    }
  } catch (err) {
    console.log(err);
    return err;
  }

  return response
};
