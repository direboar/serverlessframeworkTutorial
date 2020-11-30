'use strict';
const moment = require('moment');

module.exports.hello = async event => {
  // throw new Error("error")
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};

module.exports.goodby = async event => {
  // throw new Error("error")
  return {
    statusCode: 200,
    body: `現在時刻は${moment().format()}です`
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
