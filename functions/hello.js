exports.handler = async function (event, context) {
  // your server-side functionality
  const hasha = require('hasha');

  const {
    CLOUD_NAME: cloudName,
    CLOUDINARY_USERNAME: username,
    CLOUDINARY_API_SECRET: secret,
  } = process.env;
  console.log('cloudName: ', cloudName);
  console.log('username: ', username);
  console.log('secret: ', secret);
    const timestamp = Date.now();
    const str = `cloud_name=${cloudName}&timestamp=${timestamp}
    &username=${username}${secret}`;
    const hash = hasha(str, { algorithm: 'sha256' });
    return {
      statusCode: 200,
      body: `
        ${JSON.stringify(event, null, 2)}
        ${JSON.stringify(context, null, 2)}
        signature: ${hash}
        timestamp: ${timestamp}
        cloudname: ${cloudName}
        username: ${username}
        string: ${str}
      `,
    };
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" })
  };
}