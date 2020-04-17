const got = require("got");

// Call a correct URL and console log 200 status code.
async function testUrl(url) {
  const request = got(url, {});

  try {
    const response = await request;
    statusCodeLogger(response);
  } catch (error) {
    if (error.name === "HTTPError") {
      statusCodeLogger(error.response);
    } else {
      console.error(`${error}`);
    }
  }
}

function statusCodeLogger(response) {
  if (response.statusCode >= 100 && response.statusCode < 200) {
    console.log("[1xx: Informational]:", response.statusCode);
  } else if (response.statusCode >= 200 && response.statusCode < 300) {
    console.log("[2xx: Success]:", response.statusCode);
  } else if (response.statusCode >= 400 && response.statusCode < 500) {
    console.log("[4xx Client Error]:", response.statusCode);
  } else if (response.statusCode >= 500 && response.statusCode < 600) {
    console.log("[5xx Server Error]:", response.statusCode);
  } else {
    console.log("[unknown status code]:", response.statusCode);
  }
}

//Call an incorrect URL and console log the status code (40X or 50X). Show how you manage errors, promise errors and others that may arise.
(async () => {
  await testUrl("https://sindresorhus.com/");
  await testUrl("https://sindresorhus.com/bad");
  await testUrl("https://badnamesindresorhus.com/");
})();
