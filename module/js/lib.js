

var flightDetails = {
  "status": 200,
  "payload": {
    "flightList": [
      {
        "origin": "Mayotte",
        "destination": "Russia",
        "fare": 629,
        "airline": "Emirates",
        "dateTime": 1509541531000,
        "dateTimeString": "Wed, 01 Nov 2017 13:05:31 GMT"
      },
      {
        "origin": "Greece",
        "destination": "Ireland",
        "fare": 8473,
        "airline": "Air Asia",
        "dateTime": 1509544884000,
        "dateTimeString": "Wed, 01 Nov 2017 14:01:24 GMT"
      },
      {
        "origin": "Indonesia",
        "destination": "Nigeria",
        "fare": 7626,
        "airline": "Lufthansa",
        "dateTime": 1509548104000,
        "dateTimeString": "Wed, 01 Nov 2017 14:55:04 GMT"
      },
      {
        "origin": "Ireland",
        "destination": "Palestinian Territory",
        "fare": 4226,
        "airline": "Air India",
        "dateTime": 1509554602000,
        "dateTimeString": "Wed, 01 Nov 2017 16:43:22 GMT"
      },
      {
        "origin": "Philippines",
        "destination": "China",
        "fare": 6763,
        "airline": "Emirates",
        "dateTime": 1509559316000,
        "dateTimeString": "Wed, 01 Nov 2017 18:01:56 GMT"
      }
    ]
  }
};

var cities = {
  "status": 200,
  "payload": {
    "origin": [
      "Mayotte",
      "Greece",
      "Indonesia",
      "Ireland",
      "Philippines"
    ],
    "destination": [
      "Russia",
      "Ireland",
      "Nigeria",
      "Palestinian Territory",
      "China"
    ]
  }
};



var origin = cities.payload.origin;
var destination = cities.payload.destination;

$( "#datepicker" ).datepicker();

$( "#origin" ).autocomplete({
  source: origin
});

$( "#destination" ).autocomplete({
  source: destination
});

$("#slider").slider({
      value: 10000,
      min: 0,
      max: 10000,
      slide: function( event, ui ) {
        $("#fare").val(ui.value);
        filterData();
      }
  });

function filterData() {
	var form = $('form').serializeArray();
	var formMap = {};
	for (var i = form.length - 1; i >= 0; i--) {
		formMap[form[i].name] = form[i].value;
	}
	var date = new Date(formMap.datepicker);
	var res = flightDetails.payload.flightList.filter(function(flight) {
		var cDate = new Date(flight.dateTime);
		return flight.origin === formMap.origin
			&& flight.destination === formMap.destination
			&& cDate.getDate() === date.getDate()
			&& cDate.getMonth() === date.getMonth()
			&& cDate.getFullYear() === date.getFullYear()
			&& flight.fare < $('#slider').slider("option", "value");
	});

	if(res && res.length > 0) {
		var str = '';

		for(var i = 0; i < res.length; i++) {
			str += `<div class="topNav">` + res[0].origin + ` > ` + res[0].destination + `</div>
				      <div class="results">
				          <div class="row">
				            <span> Rs ` + res[0].fare + `</span>
				            <span> ` + res[0].airline + `</span>
				            <span>Depart: 10 a.m.</span>
				            <span>Arrive: 12 p.m.</span>
				            <button>Book Flight</button>
				          </div>
				      </div>`;
		}
		$('.records').html(str);
	}
	else {
		$('.records').html('No results');
	}
}

$('.submit').click(function() {
	filterData();
});



