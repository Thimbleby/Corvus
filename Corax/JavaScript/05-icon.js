// 05-icon.js
//
//
//Draw polygon
polyFunction = d3.svg.line()
             .x(function(d) { return d.x; })
             .y(function(d) { return d.y; })
             .interpolate("cardinal-closed");
curveFunction = d3.svg.line()
             .x(function(d) { return d.x; })
             .y(function(d) { return d.y; })
             .interpolate("cardinal-open");
curvedPolyFunction = d3.svg.line()
             .x(function(d) { return d.x; })
             .y(function(d) { return d.y; })
             .interpolate("basis-closed");
lineFunction = d3.svg.line()
             .x(function(d) { return d.x; })
             .y(function(d) { return d.y; })
             .interpolate("linear-closed");
// https://github.com/wbkd/d3-extended
d3.selection.prototype.moveToFront = function() {  
  return this.each(function(){
	this.parentNode.appendChild(this);
  });
};
d3.selection.prototype.moveToBack = function() {  
	return this.each(function() { 
		var firstChild = this.parentNode.firstChild; 
		if (firstChild) { 
			this.parentNode.insertBefore(this, firstChild); 
		} 
	});
};
function Icon (type,x,y) {
	function answerYPos() {
		var temp = (x%Math.ceil(pat.nAnswers/2))*h/3
							+h/(3*2);
		return temp;
	}
	function answerXPos() {
		var temp = w-iconSizeX/2;
		if (x < pat.nAnswers/2) {
			temp = w-iconSizeX/2-iconSizeX;
		}
		return temp;
	}
	switch (type) {
		case 0:
			// grid
			shape(
				x*aw/maxG+aw/(maxG*2),
				y*ah/maxG+ah/(maxG*2),
				x,y,false, "")
			break;	
		case 1:
			// correct
			gx = pat.v[0];
			gy = pat.v[1];
			if (mouseOrder[currentSet] < 2) {
				shape(
					answerXPos(),
					answerYPos(),
					gx,gy,false, "na")
			} 
			if (mouseOrder[currentSet] == 2) {
				var answer = svg.append("image")
								.attr("xlink:href","Other files/images.png")
								.attr("x", answerXPos()-cx)
								.attr("y", answerYPos()-cy)
								.attr("width", cx*2)
								.attr("height", cy*2)
								.attr("id", "missingOptionA")
			}
			var clickRectangle = svg.append("rect")
									.style("opacity", 0)
									.attr("x", answerXPos()-(pat.radii[0]+annulusWidth)*pat.VV.scale)
									.attr("y", answerYPos()-(pat.radii[0]+annulusWidth)*pat.VV.scale)
									.attr("width", (pat.radii[0]+annulusWidth)*2*pat.grid[gx][gy].scale)
									.attr("height", (pat.radii[0]+annulusWidth)*2*pat.grid[gx][gy].scale)
									.on("mouseenter", function() {
										var dMouseOver = new Date();
										var mtOutput =[dMouseOver.getTime(),x,type];
										console.log(mtOutput);
										questionsAsked[5][questionsAsked[5].length-1][0].push(mtOutput);
										if (timer && mouseOrder[currentSet] != 1) {
											d3.selectAll("#missingElement").remove();
											shape(
												pat.v[0]*aw/maxG+aw/(maxG*2),
												pat.v[1]*ah/maxG+ah/(maxG*2),
												gx,gy,true,"answer");
											if (mouseOrder[currentSet] == 2) {
												d3.selectAll("#missingOptionA").remove();
												shape(
													answerXPos(),
													answerYPos(),
													gx,gy,true, "optionAnswer")
											}
										}
										d3.select(this).moveToFront();
									})
									.on("mouseleave", function() {
										var dMouseOut = new Date();
										var mtOutput =[dMouseOut.getTime(),x,type];
										questionsAsked[5][questionsAsked[5].length-1][1].push(mtOutput);
										d3.selectAll("#shapeV").remove();
										d3.selectAll("#answer").remove();
										if (mouseOrder[currentSet] == 2) {
											console.log("2")
											d3.select("svg").selectAll("#optionAnswer").remove();
										}
										var answer = svg.append("image")
														.attr("xlink:href","Other files/images.png")
														.attr("x", pat.v[0]*aw/maxG+aw/(maxG*2)-cx)
														.attr("y", pat.v[1]*ah/maxG+ah/(maxG*2)-cx)
														.attr("width", cx*2)
														.attr("height", cy*2)
														.attr("id", "missingElement");
										if (mouseOrder[currentSet] == 2) {										
											var answer = svg.append("image")
															.attr("xlink:href","Other files/images.png")
															.attr("x", answerXPos()-cx)
															.attr("y", answerYPos()-cy)
															.attr("width", cx*2)
															.attr("height", cy*2)
															.attr("id", "missingOptionA")
										}
										d3.select(this).moveToFront();
									})
									.on("click", function() {
										if (timer) {
											timer = false;
											setTimeout(function(){timer = true;},500);
											//$.cookie("correct", parseInt($.cookie("correct"))+1, { path: '/' });
											d3.select("#myCanvas").remove();
											d3.select("#myQuestions").remove();
											d3.select("#skipText").remove();
											var dAnswered = new Date();
											questionsAsked[2].push(dAnswered.getTime());
											questionsAsked[3].push(1);
											questionsAsked[4].push(x);
											if (TESTTYPE == "random") {
												Math.seedrandom(""+dAnswered.getTime());
											}
											main();
										}
									});
			break;	
		default:
			// wrong
			var T = type - 2;
			//addToIconProperties(x,gy,x);
			if (mouseOrder[currentSet] < 2) {
				answerShape(
					answerXPos(),
					answerYPos(),
					T,false,"na");
			} 
			if (mouseOrder[currentSet] == 2) {
				var answer = svg.append("image")
								.attr("xlink:href","Other files/images.png")
								.attr("x", answerXPos()-cx)
								.attr("y", answerYPos()-cy)
								.attr("width", cx*2)
								.attr("height", cy*2)
								.attr("id", "missingOption"+x+""+y)
			}
			var clickRectangle = svg.append("rect")
									.style("opacity", 0)
									.attr("x", answerXPos()-(pat.radii[0]+annulusWidth)*pat.answers[T].scale)
									.attr("y", answerYPos()-(pat.radii[0]+annulusWidth)*pat.answers[T].scale)
									.attr("width", (pat.radii[0]+annulusWidth)*2*pat.answers[T].scale)
									.attr("height", (pat.radii[0]+annulusWidth)*2*pat.answers[T].scale)
									.on("mouseenter", function() {
										var dMouseOver = new Date();
										var mtOutput = [dMouseOver.getTime(),x,type];
										console.log(mtOutput);
										questionsAsked[5][questionsAsked[5].length-1][0].push(mtOutput);
										if (timer && mouseOrder[currentSet] != 1) {
											d3.selectAll("#missingElement").remove();
											answerShape(
												pat.v[0]*aw/maxG+aw/(maxG*2),
												pat.v[1]*ah/maxG+ah/(maxG*2),
												T,true,"shapeV");
											if (mouseOrder[currentSet] == 2) {	
												d3.selectAll("#missingOption"+x+""+y).remove();							
												answerShape(
													answerXPos(),
													answerYPos(),
													T,true,"optionShapeV");
											}
										} 
       									d3.select(this).moveToFront();
									})
									.on("mouseleave", function() {
										var dMouseOut = new Date();
										var mtOutput =[dMouseOut.getTime(),x,type];
										//console.log(questionsAsked[1].length);
										questionsAsked[5][questionsAsked[5].length-1][1].push(mtOutput);
										d3.selectAll("#shapeV").remove();
										d3.selectAll("#answer").remove();
										if (mouseOrder[currentSet] == 2) {
											console.log("2")
											d3.select("svg").selectAll("#optionShapeV").remove();
										}
										var answer = svg.append("image")
														.attr("xlink:href","Other files/images.png")
														.attr("x", pat.v[0]*aw/maxG+aw/(maxG*2)-cx)
														.attr("y", pat.v[1]*ah/maxG+ah/(maxG*2)-cx)
														.attr("width", cx*2)
														.attr("height", cy*2)
														.attr("id", "missingElement");
										if (mouseOrder[currentSet] == 2) {										
											var answer = svg.append("image")
															.attr("xlink:href","Other files/images.png")
															.attr("x", answerXPos()-cx)
															.attr("y", answerYPos()-cy)
															.attr("width", cx*2)
															.attr("height", cy*2)
															.attr("id", "missingOption"+x+""+y)
										}
										 d3.select(this).moveToFront();
									})
									.on("click", function() {
										if (timer) {
											timer = false;
											setTimeout(function(){timer = true;},500);
											d3.select("#myCanvas").remove();
											d3.select("#myQuestions").remove();
											d3.select("#skipText").remove();
											var dAnswered = new Date();
											questionsAsked[2].push(dAnswered.getTime());
											questionsAsked[3].push(0);
											questionsAsked[4].push(x);
											seed(dAnswered);
											main();
										}
									});
			break;	
	}
}
function skipButton (xloc,yloc) {
	// N.B. Positioning of text is altered to accomodate text size manually. 
	// This is not ideal, but the so-far attempted automatic methods are unsatisfactory.
	var skipText = svg
					.append("text")
					.attr("x", xloc-146/2)
					.attr("y", yloc+20)
					.text("Skip this question")
					.attr("font", "ariel")
					.attr("font-size", "20px")
					.attr("fill","blue")
					.attr("class","svgtxt")
					.attr("id", "skipText")
					.on("click", function() {
						d3.select("#myCanvas").remove();
						d3.select("#myQuestions").remove();
						d3.select("#skipText").remove();
						setTimeout(function(){timer = true;},500);
						d3.select("#myCanvas").remove();
						d3.select("#myQuestions").remove();
						var dAnswered = new Date();
						questionsAsked[2].push(dAnswered.getTime());
						questionsAsked[3].push(0);
						questionsAsked[4].push(-1);
						seed(dAnswered);
						main();
					});
}