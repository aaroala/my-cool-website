/* eslint-disable key-spacing */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable spaced-comment */
/* eslint-disable quotes */
/* eslint-disable semi */
/* eslint-disable max-len */
/* eslint-disable padded-blocks */
/* eslint-disable no-unused-vars */

/*let me write my trashy code in peace */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest, onCall, HttpsError} = require("firebase-functions/v2/https");
const {Client} = require("pg")

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
};

exports.sayHello = onCall({ cors: true }, (data, context) => {
  return {msg:"Hello from Firebase!"};
    // res.set('Access-Control-Allow-Methods', 'GET, POST');
    // res.status(200).send({message: "Hello world!"});
  }
);




exports.getPixelArts = onRequest((req, res) => {
  // res.set('Access-Control-Allow-Origin', "*")
  // res.set('Access-Control-Allow-Methods', 'GET, POST');
  //res.set(corsHeaders);
  // return res.status(200).send({
  //   "message": "This is a valid JSON response"
  // });
  const client = new Client({
    connectionString: process.env.DATABASE_URI,
  });

  let data = "ok"
  client.connect();
  client.query('SELECT * FROM pixel_art ORDER BY creation_date', (err, queryRes) => {
    if (err) {
      console.error(err);
    } else {
      console.log(queryRes.rows);
      data = queryRes.rows
    }
    client.end();
    return res.send(data);
  })
});

exports.deletePixelArt = onRequest((req, res) => {
  return res.send("data");
  // const client = new Client({
  //   connectionString: process.env.DATABASE_URI,
  // });

  // let data = "ok"
  // client.connect();
  // client.query('SELECT * FROM pixel_art ORDER BY creation_date', (err, queryRes) => {
  //   if (err) {
  //     console.error(err);
  //   } else {
  //     console.log(queryRes.rows);
  //     data = queryRes.rows
  //   }
  //   client.end();
  //   return res.send(data);
})
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
