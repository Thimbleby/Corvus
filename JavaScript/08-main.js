// 13-main.js
//
//

function draw1() {
	svg = d3.select("body")
			.append("svg:svg")
			.attr("width", w)
			.attr("height", (h+lineThickness*10))
			.attr("id", "myCanvas");		
	var answerBackground = svg.append("rect")
					.attr("x",w-iconSizeX*2)
					.attr("y",0)
					.attr("width",iconSizeX*2)
					.attr("height",h)
					.attr("fill","Azure");
	var line = svg.append("line")
			  .attr("y1",h+lineThickness*10/2)
			  .attr("y2",h+lineThickness*10/2)
			  .attr("x1",0)
			  .attr("x2",w)
			  .attr("stroke-width", lineThickness*10)
			  .attr("stroke", "black");
	var progressBar = svg.append("line")
					 .attr("y1",h+lineThickness*10/2)
					 .attr("y2",h+lineThickness*10/2)
					 .attr("x1",w*difficulty/maxDifficulty+4)
					 .attr("x2",2)
					 .attr("stroke-width", lineThickness*6)
					 .attr("stroke", "DarkGray");
}
function draw2() {
	if (allowSkipItem)
		skipButton (w-iconSizeX,0);
	for (var i=0, y=0; y < maxG ; y++) {
		for (var x=0;x < maxG ;x++) {
			if (x != pat.v[0] || y != pat.v[1]) {
				if (pat.vis[x][y])
					Icon(0,x,y);
				else {
					var answer = svg.append("image")
								.attr("xlink:href","Other files/paperOver.jpg")
								.attr("x", x*aw/maxG+aw/(maxG*2)-cx*2)//4/2)
								.attr("y", y*ah/maxG+ah/(maxG*2)-cx*2)//4/2)
								.attr("width", cx*4)
								.attr("height", cy*4)
								.attr("id", "paperOver");
				}
			} else {
				var answer = svg.append("image")
								.attr("xlink:href","Other files/images.png")
								.attr("x", x*aw/maxG+aw/(maxG*2)-cx)
								.attr("y", y*ah/maxG+ah/(maxG*2)-cx)
								.attr("width", cx*2)
								.attr("height", cy*2)
								.attr("id", "missingElement");
			}
			i++;
		}
	}
}
function draw3() {
	var An = 2;
	for (var x=0;x < pat.nAnswers; x++) {
			if (x==answerVal) {
				Icon(1,x,null);
			} else {
				Icon(An,x,null);
				An++;
			}
	}
}
$(document).ready(main());
function main() {
	questionsAsked[5].push([[],[]]);
	console.log(questionsAsked);
	difficulty = questionsAsked[1].length;
	/* if (difficulty >= maxDifficulty && currentSet < mouseOrder.length-1) {
		currentSet++;
		difficulty = 0;
	} */
	function testItem () {
		if (difficulty >= maxDifficulty /*&& currentSet >= mouseOrder.length-1*/) {
			d3.select("body")
				  //.append("p")
				  //.attr("id", "version")
				  //.text("v0.6.2")
				  .append("p")
				  .attr("id", "thanks")
				  .html("<font size=\"15\">Thank you very much for participating!</font>");
			var dFinished = new Date();
			questionsAsked.push(dFinished.getTime());
			/*d3.select("body")
				 .append("p")
				 .attr("id", "results1")
				 .html(document.title+": </br>{startTime: "+questionsAsked[0]+","+
				  "</br>onLoad: ["+questionsAsked[1]+"],"+
				  "</br>onClick: ["+questionsAsked[2]+"],"+
				  "</br>correct: ["+questionsAsked[3]+"],"+
				  "</br>answerClicked: ["+questionsAsked[4]+"],"+
				  "</br>endTime: "+questionsAsked[5]+"}");*/
			dataToSubmit = {"version" : versionNumber(), "startTime" : questionsAsked[0],
			"onLoad" : [questionsAsked[1]],
			"onClick" : [questionsAsked[2]],
			"mouseOver" : [questionsAsked[5]],
			"mouseOrder" : mouseOrder,
			"correct" : [questionsAsked[3]],
			"answerClicked" : [questionsAsked[4]],
			"endTime" : questionsAsked[6]};


			console.log(dataToSubmit);
			
			// ### DOWNLOAD FUNCTION ###
			download(JSON.stringify(dataToSubmit), 'data.txt', 'text/plain');
		} else {
			var correctAnswers = 0;
			for (var i = 0; i < questionsAsked[3].length; i++) {
				correctAnswers += questionsAsked[3][i];
			}
			function nC(number) {
				var text = "-";
				number = Math.floor(number/10);
				while (number > 0) {
					text = text.concat("-");
					number = Math.floor(number/10);
				}
				return text;
			}
			console.log(nC(difficulty)+nC(difficulty)+nC(difficulty)+"—————————-———--———————-———--———--—----—————-————————————");
			console.log("————————————"+difficulty+"————-—---———————"+difficulty+"————-—--——-—————"+difficulty+"————————————");
			console.log(nC(difficulty)+nC(difficulty)+nC(difficulty)+"——————————-—--————————-—————--————------———-————————————");
	
			// 'canvas'
			draw1();
	
			/*d3.select("body")
				  .append("p")
				  .attr("id", "myQuestions")
				  .text("Questions asked: " + questionsAsked[1].length
						+" out of " + maxDifficulty
						+" ——— Correct answers: " + correctAnswers);*/
			//$.cookie("asked", parseInt($.cookie("asked"))+1, { path: '/' });
		
		
			pat = new choosePattern();
		
			//console.log("Radii: "+ radii);
			propertyStorage[8].push(pat.nAnswers);
		
		
			//var missingIcon = Math.floor(Math.random()*maxG*maxG);
			// Draw question icons
			draw2();

			// The answer
			answerVal = Math.floor(Math.random()*pat.nAnswers);
			propertyStorage[2].push(answerVal);
			// Not answers!
			// Draw answer icons
			draw3();
		
			var dGenerated = new Date();
			questionsAsked[1].push(dGenerated.getTime());
		}
		difficulty++;
	
			// For DEBUGGING & TESTING
			/*d3.select("body")
				  .append("p")
				  .attr("id", "skipText")
				  .html("<font size=\"2\">Question: "+difficulty);*/
	}
	
	testItem();
	
	// The following is for running each participant through multiple different shorter tests
	//  Also see lines 80 and 77 (as of internal version 0.8.7), see comments below
	//	[difficulty = 0]
	// 	[difficulty = questionsAsked[1].length;]
	/*if (difficulty == 0) {
		var MOText = "";
		switch (mouseOrder[currentSet]) {
			case 0:
				MOText = "<b>active</b> and the options are otherwise <b>visible</b>";
				break;
			case 1:
				MOText = "<b>deactive</b> and the options are <b>visible</b>";
				break;
			case 2:
				MOText = "<b>active</b> and the options are otherwise <b>hidden</b>";
				break;
			default:
				console.error("Unknown mouseOrder");
		}
		d3.select("body")
				  .append("p")
				  .attr("id", "newSet")
				  .html("<font size=\"5\"><br/><br/><br/><center>Beginning set "+(currentSet+1)+"<br/>The Mouse-over functionality is "+MOText+"<center></font>");
			
		setTimeout(function() {
			d3.select("#newSet").remove();
			testItem();}, 3000)
	} else {
		testItem();
	}*/
}