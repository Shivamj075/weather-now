var http = require('http');
//Api url
var url = "http://api.openweathermap.org/data/2.5/weather?q=Agra,IN&appid=d572465715035d423880c2c70de3b469&units=metric";

var server = http.createServer(function(request,response){
	//All logic go here
	var request = require('request');
	request(url,function(err,res,body){
		//console.log(body);
		var data = JSON.parse(body);
		response.write("<html><body><div id='container'>");
		response.write("<h1>"+ 'City Name - : '+data['name']+'<br>'+"</h1>");
		response.write("<h2>"+ 'Temperature-: '+data.main['temp']+'<br>'+"</h2>");
		response.write("<h2>"+'Sunset Time-: '+new Date(data.sys['sunset']*1000)+"</h2>");
		response.write("</div></body></html>");
		// response.write("HI");
		// response.end();
	});
	

}).listen(8081);