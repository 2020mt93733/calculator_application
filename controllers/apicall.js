var callogic = require("./callogic");

// route the call to propsal amount and get the data to be sent to caller
exports.inv_cal = (req, res) =>{
    var salary = parseInt(req.params.salary);
    var age = parseInt(req.params.age); 
    output = callogic.inv_cal(salary, age); 
    res.send(output);    
}

// route the call to emi calculator and get the data to be sent to caller
exports.emi_cal = (req, res) =>{
    
    var l_type = req.params.l_type; 
    var loan_amnt = parseInt(req.params.p_amount);
    var i_rate = parseInt(req.params.i_rate);
    var i_time = parseInt(req.params.i_time);
    output = callogic.emi_cal(l_type, loan_amnt, i_rate, i_time); 
    res.send(output);    
}

// route the call to emi rates and get the data to be sent to caller
exports.emi_rate = (req, res) =>{
    
    var l_type = req.params.l_type; 
    output = callogic.emi_rate(l_type); 
    res.send(output);    
}

//  route the call to currency calculator and get the data to be sent to caller
exports.currency_convertor = (req, res) =>{
  var amount = parseInt(req.params.amount);
  var inputCurrency= req.params.currency;
  output = callogic.currency_convertor(amount, inputCurrency);
  res.send(output);
}

// similar routes to be written for other calculators
