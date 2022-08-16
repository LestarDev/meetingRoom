const express = require('express');
const router = express.Router();
const axios = require('axios');

const orgId = process.env.ORG_ID;
const apiKey = process.env.API_KEY;
const baseURL = process.env.API_BASE_URL;

if(!orgId || !apiKey || !baseURL || orgId=="xxx" || apiKey=="xxx") {
  console.error("Coś nie działa z plikiem .env, we luknij, tu masz linkacza aby wygenerować.\nhttps://dev.dyte.in/");
  process.exit(0);
}

/**
 * This exmaples creates a new meeting and then allow you to join that meeting as host participant.
 * 1. User makes a POST call to create a new meeting
 * 2. User can make `/host` and `/participant` GET calls to join the meeting
 */


router.get('/', function (req, res, next) {
  res.render('index');
  //jako index.ejs
});

router.post('/meeting', async function (req, res, next) {
  const title = req.body.title;

  // 1. Create a meeting with the given title
   const resp = await axios.post(`${baseURL}/v1/przygotowywanie/${orgId}/meeting`, {
    title: title || "Nowe zajecia",
  }, {
    headers: {
      'Authorization': `APIKEY ${apiKey}`
    }
  });

  const meeting = resp.data.data.meeting;
  const roomName = meeting.roomName;
  const meetingId = meeting.id;
  res.render('dashboard', { meetingId: meetingId, roomName });
});

router.get('/participant', async function (req, res, next) {
  const meetingId = req.query.meetingId;
  const roomName = req.query.roomName;

  const resp = await axios.post(`${baseURL}/v1/organizations/${orgId}/meetings/${meetingId}/participant`, {
    clientSpecificId: Math.random().toString(36).substring(7),
    userDetails: {
      "name": "Uczen" + Math.random().toString(36).substring(2)
    },
  }, {
    headers: {
      'Authorization': `APIKEY ${apiKey}`
    }
  });

  const authResponse = resp.data.data.authResponse;
  const authToken = authResponse.authToken;
  res.render('dyte-page', { type: "teacher", roomName , authToken, orgId, baseURL });
});


router.get('/host', async function (req, res, next) {
  const meetingId = req.query.meetingId;
  const roomName = req.query.roomName;

  const resp = await axios.post(`${baseURL}/v1/organizations/${orgId}/meetings/${meetingId}/participant`, {
    clientSpecificId: Math.random().toString(36).substring(7),
    userDetails: {
      "name": "Host" + Math.random().toString(36).substring(2)
    },
    roleName: "host"
  }, {
    headers: {
      'Authorization': `APIKEY ${apiKey}`
    }
  });

  const authResponse = resp.data.data.authResponse;
  const authToken = authResponse.authToken;
  res.render('dyte-page', { type: "teacher", roomName , authToken, orgId, baseURL });
});



module.exports = router;