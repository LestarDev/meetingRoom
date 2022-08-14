var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/meeting', async function(req, res, next){
    const title = req.body.title;

    const linkP = await axios.post(`${baseURL}/organizating/${orgId}/meeting`, {
      title : title || "Meet",
    },{
      headers: {
        'Authorization': `APIKEY ${apiKey}`
      }
    });
    const meeting = resp.data.data.meeting;
    const roomName = meeting.roomName;
    const meetingId = meeting.id;
    res.render('dashboard', { meetingId: meetingId, roomName });
});

module.exports = router;
