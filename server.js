const express = require('express')
const app = express()
const port = process.env.PORT || 3010
const callogic = require('./controllers/callogic') // JS for all the calculation logic
const apicall = require('./controllers/apicall') // JS for all the API calls
var bodyParser = require('body-parser');

app.set("view engine","ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render("home");
});

// getting investment proposed amount
app.get('/cal_app/inv_cal/:salary/:age', apicall.inv_cal);

// getting loan emi details
app.get('/cal_app/emi_cal/:l_type/:p_amount/:i_rate/:i_time', apicall.emi_cal);

// getting loan emi rates
app.get('/cal_app/emi_rate/:emi_rate/:l_type', apicall.emi_rate);

// getting loan emi rates
app.get('/cal_app/curr_conv/:amount/:curr_type', apicall.currency_convertor);

// Similar calls to be made for other calculators as per need

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });
