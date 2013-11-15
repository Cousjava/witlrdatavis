var c7 = {
  columns: ["England","Northern Ireland","Scotland","Wales","Primary sector and utilities","Manufacturing","Construction","Trade, accommodation and transport","Business and other services","Non-market services","2 to 4","5 to 9","10 to 24","25 to 99","100+","For profit","Charity"],
  rows: ["Reason for not employing any young people is lack of skills","Reason for not employing any young people is lack of qualifications","Reason for not employing any young people is lack of experience","Reason for not employing any young people is: poor attitudes, motivation and/or personality","Reason for not employing any young people is poor quality application"],
  data: [
    [23,26,29,21,13,30,28,20,26,20,21,23,26,26,22,25,16,19,24,23],
    [28,39,37,32,18,32,32,27,30,32,28,29,32,30,33,29,29,31,33,28],
    [15,21,18,10,8,15,17,11,17,18,13,13,17,19,25,15,13,19,19,13],
    [17,19,23,18,15,21,22,21,17,13,18,21,17,14,12,20,10,10,17,18],
    [13,18,17,12,7,16,13,13,14,15,11,16,15,15,14,14,10,14,15,13]
  ]
};
var c10 = {
	columns: ["England","Northern Ireland","Scotland","Wales","Primary sector and utilities","Manufacturing","Construction","Trade, accommodation and transport","Business and other services","Non-market services","2 to 4","5 to 9","10 to 24","25 to 99","100+","For profit","Charity","Government","Yes - any","No"],
	headings: ["Jobcentre Plus (GB), Jobcentre/Jobs and Benefits Office (NI)","Government programmes and schemes","NAS Apprenticeship Vacancy system","National newspapers","Local newspapers","Trade press / professional publications","Recruitment agencies","Paid for Recruitment websites","School / college / university job fairs or career services","Word of mouth / personal recommendation","Internal notices / filled it internally","Own website","Social media","Other free websites","Notice boards / shop windows","Speculative enquiries"],
	data: [
		[14,25,20,21,20,14,16,15,12,23,12,15,15,20,13,15,24,13,15,16],
		[2,4,5,7,4,2,2,1,2,6,3,2,2,3,2,2,5,12,4,1],
		[2,0,0,0,2,2,4,1,1,3,2,1,2,2,4,2,1,3,2,1],
		[1,1,1,0,2,0,0,0,1,1,0,0,1,1,2,0,1,2,1,0],
		[8,28,12,7,10,9,7,5,9,19,7,6,11,11,14,7,19,21,11,8],
		[1,1,1,0,2,1,2,0,2,2,1,1,1,1,2,1,2,3,2,1],
		[9,3,4,6,10,14,11,4,14,4,7,6,8,10,14,9,5,3,8,8],
		[3,4,3,1,1,3,3,2,6,3,4,2,3,3,5,3,3,4,3,3],
		[6,3,5,4,5,8,5,3,10,5,7,5,5,6,8,6,5,4,8,5],
		[26,16,22,30,29,36,40,27,25,16,37,28,23,19,10,28,19,7,21,29],
		[7,4,9,7,4,3,2,10,5,7,3,8,9,8,9,7,9,12,6,8],
		[11,10,11,10,4,4,1,13,9,15,6,7,11,14,26,9,16,23,14,8],
		[1,2,1,0,2,0,1,1,2,0,1,2,1,1,1,1,2,1,2,1],
		[4,3,6,2,1,4,2,3,5,5,4,4,3,4,5,3,8,7,5,3],
		[7,11,6,9,5,1,1,15,3,2,7,10,8,5,1,8,5,2,5,9],
		[7,3,7,7,10,5,5,9,5,4,6,9,7,7,3,7,1,3,6,7]
	]
};

var c13 = {
	columns: ["England","Northern Ireland","Scotland","Wales","Primary sector and utilities","Manufacturing","Construction","Trade, accommodation and transport","Business and other services","Non-market services","2 to 4","5 to 9","10 to 24","25 to 99","100+","For profit","Charity","Government","Yes - any","No"],
	headings: ["Can be moulded into own way of doing things","Their enthusiasm","They are willing to learn","Easier to train","They bring new/fresh ideas","They are relatively inexpensive","More flexible with working hours","Social responsibility / give young people a chance","Secures future of the business","Good personal qualities (e.g. interpersonal skills, hard working, reliable)","Better with IT/technology","Younger people are healthier / fitter","They are available","Creates a more diverse workforce"],
	data: [
		[23,27,34,37,37,37,30,34,28,33,30,32,32,31,33,24,22,32,31,29],
		[26,28,32,23,20,17,31,32,34,29,32,31,29,29,29,41,38,25,29,31],
		[23,20,21,24,18,25,21,19,20,21,20,21,21,19,18,18,21,20,21,20],
		[22,15,16,17,19,14,17,16,16,17,17,17,16,13,16,16,15,16,16,15],
		[10,11,13,5,8,10,8,15,20,10,11,12,15,19,12,23,23,11,10,9],
		[9,9,9,6,11,9,12,13,8,13,13,11,8,7,14,7,6,14,10,10],
		[14,9,8,2,5,2,12,5,5,3,8,9,9,7,5,5,3,5,8,11],
		[8,6,7,11,4,3,6,6,8,5,5,6,7,9,6,11,8,2,6,5],
		[3,6,6,5,7,3,5,4,5,3,3,4,6,11,3,5,6,3,4,3],
		[8,3,3,6,2,4,5,3,4,4,4,5,3,3,3,6,4,5,5,6],
		[2,2,4,2,2,3,2,3,3,2,4,3,2,3,3,2,5,1,2,3],
		[5,5,2,7,4,5,2,2,2,3,3,3,2,2,3,2,2,4,3,3],
		[1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,3,1,1],
		[0,1,2,0,1,0,1,1,2,1,1,1,1,3,1,3,3,0,1,1]
	]
}

var c6 = {
	columns: [ "England","Northern Ireland","Scotland","Wales","Primary sector and utilities","Manufacturing","Construction","Trade, accommodation and transport","Business and other services","Non-market services","2 to 4","5 to 9","10 to 24","25 to 99","100+","For profit","Charity","Government"],
	rows: ["Yes - any","No"],
	data: [
		[24,19,26,24,19,21,19,35,18,17,17,21,27,31,42,26,14,15,27,23],
		[53,52,55,55,44,47,44,59,51,53,39,48,59,69,82,54,47,46,57,51]
		]
	}
var c5 = {
	columns: ["England","Northern Ireland","Scotland","Wales","Primary sector and utilities","Manufacturing","Construction","Trade, accommodation and transport","Business and other services","Non-market services","2 to 4","5 to 9","10 to 24","25 to 99","100+","For profit","Charity","Government","Yes - any","No"],
	headings: ["The level of achievement or academic qualification is critical","The level of achievement or academic qualification has little or no value"],
	data: [
		[43,50,45,40,27,37,36,32,54,64,40,44,47,50,60,41,51,69,54,40],
		[54,47,53,58,71,61,62,66,43,32,57,54,51,46,36,57,45,25,44,58]
	]
}


Viz = {};

  Viz.data = {};
	
	Viz.funFacts = {
		"age": null,
		"country": {
			"england": {
				"16-18": 74,
				"19-24": 74
			},
			"northernIreland": {
				"16-18": 80,
				"19-24": 80
			},
			"wales": {
				"16-18": 73,
				"19-24": 74
			},
		},
		"sector": {
			"primarySector": {
				"16-18": 69,
				"19-24": 73
			},
			"manufacturing": {
				"16-18": 79,
				"19-24": 75
			},
			"construction": {
				"16-18": 74,
				"19-24": 65
			},
			"trade": {
				"16-18": 77,
				"19-24": 73
			},
			"business": {
				"16-18": 74,
				"19-24": 72
			},
			"nonMarket": {
				"16-18": 70,
				"19-24": 84
			}
		},
		"size": {
			"2-4": {
				"16-18": 71,
				"19-24": 67
			},
			"5-9": {
				"16-18": 77,
				"19-24": 67
			},
			"10-24": {
				"16-18": 78,
				"19-24": 78
			},
			"25-99": {
				"16-18": 71,
				"19-24": 82
			}
		},
		"businessType": {
			"forProfit": {
				"16-18": 75,
				"19-25": 73
			},
			"charity": {
				"16-18": 62,
				"19-25": 89
			},
			"government": {
				"16-18": 77,
				"19-25": 73
			}
		},
		"workExperience": {
			"yes": {
				"16-18": 79,
				"19-25": 75
			},
			"no": {
				"16-18": 70,
				"19-25": 72
			}
		}
	};
  
  Viz.buttonSelect = function (name, id) {
    $('#' + id + ' button').click(function() {
      Viz.data[name] = this.value;
      $.deck('next');
    });
  };
	
	Viz.makeSentence = function (currentKey, prevValue) {
		var percent = Viz.funFacts[currentKey][prevValue];
		var message = percent.toString() + "% of employers that offer apprenticeships currently has an apprentice like you, based on your last answer.";
	};
  
  Viz.onSlide = function (id, handler) {
    $(document).bind('deck.change', function (event, from, to) {
      if ($.deck('getSlide', to)[0].id == id) {
        handler();
      }
    });
  };

  Viz.maskSvg = function (id, percent) {
	  var mask = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	  mask.setAttribute('width', '100%');
	  mask.setAttribute('height', (100 - percent).toString() + '%');
	  mask.setAttribute('x', 0);
	  mask.setAttribute('y', 0);
	  mask.style.fill = 'rgba(255, 255, 255, 0.6)';
	  document.getElementById(elId).appendChild(mask);
  };
	
	Viz.blurSvgElement = function (svgId, id, newOpacity) {
		var svgDoc = document.getElementById(svgId).getSVGDocument();
		svgDoc.getElementById(id).style.opacity = newOpacity;
	};
  
  Viz.runSequence = function (catagory) {
    if (Viz.getTop(c6,catagory) == Viz.data[catagory]) {
      // HAAPPPPPYYYYY
      console.log(Viz.getTop(c7,Viz.data[catagory]));
      console.log(Viz.getTop(c13,Viz.data[catagory]));
      console.log(Viz.getTop(c10,Viz.data[catagory]));
    } else {
      // SAAAAAADDD
      console.log(Viz.getTop(c6,Viz.data[catagory]));
      console.log(Viz.getTop(c7,Viz.data[catagory]));
      console.log(Viz.getTop(c5,Viz.data[catagory]));
      console.log(Viz.getTop(c10,Viz.data[catagory]));
    }
  }
  Viz.lookup = function (heading, catagory) {
    
  }
  Viz.getTop = function (data, catagory) {
    var j = data.columns.indexOf(catagory);
    var maxVal = 0;
    var maxIndex = 0;
    for (var i = 0; i < data.data.length; i++) {
      if (data.data[i] > maxVal) {
        maxIndex = i;
        maxVal = data.data[i];
      }
    }
    return data.rows[i]
  }

