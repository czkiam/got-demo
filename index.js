const got = require("got");
const statusCode = require("./httpStatusCode");
const statusCodeList = Object.entries(statusCode);

// Call a correct URL and console log 200 status code.
const requestUrl = async (url) => {
  const options = {};
  try {
    const response = await got(url, options);
    statusCodeLogger(response);
  } catch (error) {
    errorLogger(error);
  }
};

const errorLogger = (error) => {
  //log error
  if (error.response) {
    statusCodeLogger(error.response);
  } else {
    console.log(
      `[Request Error]: ${statusCode.InternalServerError.code}-${statusCode.InternalServerError.message} `
    );
  }
};

const statusCodeLogger = (response) => {
  const httpStatus = statusCodeList.find((code) => {
    return code[1].code === response.statusCode;
  });

  if (httpStatus) {
    const message = httpStatus[1].message;
    const status = httpStatus[0];
    console.log(`[${status}]: ${response.statusCode} - ${message}`);
  } else {
    console.log(`[unknown code]: ${response.statusCode}`);
  }
};

//Call an incorrect URL and console log the status code (40X or 50X). Show how you manage errors, promise errors and others that may arise.
(async () => {
  //correct URL and console log the status code 200
  await requestUrl("https://sindresorhus.com/");
  //incorrect URL and console log the status code 40X
  await requestUrl("https://sindresorhus.com/bad");
  //incorrect URL console log the status code 50X
  await requestUrl("https://badnamesindresorhus.com/");
})();
