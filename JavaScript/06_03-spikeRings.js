// 06_03-spikeRings.js
//
//
//
// Draws a ring of triangles alternately pointing inwards and outwards
// Triangles can be paired by direction...
function spikeRings(centx,centy,x,y,removable,name) {
	var dataSL = [];
	var scale = pat.grid[x][y].scale;
	var n = pat.noAnnuli-1;
	var num = pat.grid[x][y].diceNum;
	var posNum = Math.abs(num);
	var a = -(pat.grid[x][y].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.grid[x][y].a[n].lineWidth]+30)/10*scale/4;
	var r = pat.radii[pat.noAnnuli-1]*pat.grid[x][y].scale-LW*2;
	var tempMultiplier = (17+3*posNum)/(18+2*posNum);
	var innerR = r/tempMultiplier;
	var ytoInnerChord = innerR*Math.cos(Math.PI/posNum-Math.PI/20);
	//console.log(tempMultiplier);
	var vertices = [];
	for (var j = 0; j < posNum;j++) {
		vertices.push(j/posNum);
	}
	//
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	}
	//
	dataASL = [];
	dataASL2 = [];
	if (posNum > 2) {
		for (var i = 0; i < vertices.length; i++) {
			dataASL[i] = [];
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI-Math.PI/20)})
			dataASL[i].push({"x":centx+r*Math.sin(vertices[i]*2*Math.PI),"y":centy+r*Math.cos(vertices[i]*2*Math.PI)})
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
		}
		for (var i = 0; i < vertices.length; i++) {
			dataASL2[i] = [];
			dataASL2[i].push({"x":centx+innerR*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+innerR*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
			dataASL2[i].push({"x":centx+0.5*(innerR+ytoInnerChord+8)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+0.5*(innerR+ytoInnerChord+8)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
			dataASL2[i].push({"x":centx+innerR*Math.sin(vertices[i]*2*Math.PI-Math.PI/20+Math.PI*2/vertices.length),"y":centy+innerR*Math.cos(vertices[i]*2*Math.PI-Math.PI/20+Math.PI*2/vertices.length)})
			dataASL2[i].push({"x":centx+0.5*(3*ytoInnerChord-innerR-8)/tempMultiplier*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+0.5*(3*ytoInnerChord-innerR-8)/tempMultiplier*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
		}
	} else if (posNum == 2) {
		for (var i = 0; i < vertices.length; i++) {
			dataASL[i] = [];
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI-Math.PI/20)})
			dataASL[i].push({"x":centx+r*Math.sin(vertices[i]*2*Math.PI),"y":centy+r*Math.cos(vertices[i]*2*Math.PI)})
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
		}
		for (var i = 0; i < vertices.length; i++) {
			dataASL2[i] = [];
			dataASL2[i].push({"x":centx+r/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI/10),"y":centy+r/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI/10)})
			dataASL2[i].push({"x":centx+(30)/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+(30)/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
			dataASL2[i].push({"x":centx+r/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI-Math.PI/10+Math.PI*2/vertices.length),"y":centy+r/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI-Math.PI/10+Math.PI*2/vertices.length)})
			dataASL2[i].push({"x":centx+(10)/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+(10)/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
		}
	} else if (posNum == 1) {
		dataASL[0] = [];
		dataASL[0].push({"x":centx+r/1.5*Math.sin(Math.PI/20),"y":centy+r/1.5*Math.cos(Math.PI/20)})
		dataASL[0].push({"x":centx,"y":centy+r})
		dataASL[0].push({"x":centx+r/1.5*Math.sin(-Math.PI/20),"y":centy+r/1.5*Math.cos(-Math.PI/20)})
		dataASL2[0] = [];
		dataASL2[0].push({"x":centx+(r/2)*Math.sin(Math.PI/5),"y":centy+r/2})
		dataASL2[0].push({"x":centx,"y":centy+7*r/12})
		dataASL2[0].push({"x":centx+(r/2)*Math.sin(-Math.PI/5),"y":centy+r/2})
		dataASL2[0].push({"x":centx,"y":centy+r/3})
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
    //console.log(dataASL);
	for (var k = 0; k < dataASL.length; k++) {
		if (removable) {
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
							.attr("id", name)
							.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL2[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
							.attr("id", name)
							.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
		} else {
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
							.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL2[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
							.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
		}
	}
	/* switch(num) {
		case 4:
		case -4:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+1)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+1)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 3:
		case -3:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
		case 2:
		case -2:
			for (var k = -1; k < 2; k+=2) {
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx+longerDiceRad*Math.sin(a+Math.PI*(k+2)/2))
										.attr("cy", centy-longerDiceRad*Math.cos(a+Math.PI*(k+2)/2))
										.attr("r", rad)
										.attr("stroke", strokeShade)
										.attr("fill", fillShade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
			break;
		case 1:
		case -1:
			if (removable) {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
			} else {
				var drawAnnuli = svg.append("circle")
					  				.attr("cx", centx)
					  				.attr("cy", centy)
					  				.attr("r", rad)
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
			}
			break;
		case 0:
			break;
	}*/
}
function answerSpikeRings(centx,centy,x,removable,name) {
	var dataSL = [];
	var scale = pat.answers[x].scale;
	var n = pat.noAnnuli-1;
	var num = pat.answers[x].diceNum;
	var posNum = Math.abs(num);
	var a = (pat.answers[x].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.answers[x].a[n].lineWidth]+30)/10*scale/4;
	var r = (pat.radii[pat.noAnnuli-1]*pat.answers[x].scale-LW*2);
	var tempMultiplier = (17+3*posNum)/(18+2*posNum);
	var innerR = r/tempMultiplier;
	var ytoInnerChord = innerR*Math.cos(Math.PI/posNum-Math.PI/20);
	// - change this!
	var vertices = [];
	for (var j = 0; j < Math.abs(num);j++) {
		vertices.push(j/Math.abs(num));
	}
	//
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	}
	//
	dataASL = [];
	dataASL2 = [];
	if (posNum > 2) {
		for (var i = 0; i < vertices.length; i++) {
			dataASL[i] = [];
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI-Math.PI/20)})
			dataASL[i].push({"x":centx+r*Math.sin(vertices[i]*2*Math.PI),"y":centy+r*Math.cos(vertices[i]*2*Math.PI)})
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
		}
		for (var i = 0; i < vertices.length; i++) {
			dataASL2[i] = [];
			dataASL2[i].push({"x":centx+innerR*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+innerR*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
			dataASL2[i].push({"x":centx+0.5*(innerR+ytoInnerChord+8)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+0.5*(innerR+ytoInnerChord+8)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
			dataASL2[i].push({"x":centx+innerR*Math.sin(vertices[i]*2*Math.PI-Math.PI/20+Math.PI*2/vertices.length),"y":centy+innerR*Math.cos(vertices[i]*2*Math.PI-Math.PI/20+Math.PI*2/vertices.length)})
			dataASL2[i].push({"x":centx+0.5*(3*ytoInnerChord-innerR-8)/tempMultiplier*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+0.5*(3*ytoInnerChord-innerR-8)/tempMultiplier*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
		}
	} else if (posNum == 2) {
		for (var i = 0; i < vertices.length; i++) {
			dataASL[i] = [];
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI-Math.PI/20)})
			dataASL[i].push({"x":centx+r*Math.sin(vertices[i]*2*Math.PI),"y":centy+r*Math.cos(vertices[i]*2*Math.PI)})
			dataASL[i].push({"x":centx+r/1.5*Math.sin(vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/1.5*Math.cos(vertices[i]*2*Math.PI+Math.PI/20)})
		}
		for (var i = 0; i < vertices.length; i++) {
			dataASL2[i] = [];
			dataASL2[i].push({"x":centx+r/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI/10),"y":centy+r/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI/10)})
			dataASL2[i].push({"x":centx+(30)/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+(30)/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
			dataASL2[i].push({"x":centx+r/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI-Math.PI/10+Math.PI*2/vertices.length),"y":centy+r/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI-Math.PI/10+Math.PI*2/vertices.length)})
			dataASL2[i].push({"x":centx+(10)/(tempMultiplier)*Math.sin(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2),"y":centy+(10)/(tempMultiplier)*Math.cos(vertices[i]*2*Math.PI+Math.PI*2/vertices.length/2)})
		}
	} else if (posNum == 1) {
		dataASL[0] = [];
		dataASL[0].push({"x":centx+r/1.5*Math.sin(Math.PI/20),"y":centy+r/1.5*Math.cos(Math.PI/20)})
		dataASL[0].push({"x":centx,"y":centy+r})
		dataASL[0].push({"x":centx+r/1.5*Math.sin(-Math.PI/20),"y":centy+r/1.5*Math.cos(-Math.PI/20)})
		dataASL2[0] = [];
		dataASL2[0].push({"x":centx+(r/2)*Math.sin(Math.PI/5),"y":centy+r/2})
		dataASL2[0].push({"x":centx,"y":centy+7*r/12})
		dataASL2[0].push({"x":centx+(r/2)*Math.sin(-Math.PI/5),"y":centy+r/2})
		dataASL2[0].push({"x":centx,"y":centy+r/3})
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
    //console.log(dataASL);
	for (var k = 0; k < dataASL.length; k++) {
		if (removable) {
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
							.attr("id", name)
							.attr("transform", "rotate("+(a*180/Math.PI)+","+centx+","+centy+")");
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL2[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
							.attr("id", name)
							.attr("transform", "rotate("+(a*180/Math.PI)+","+centx+","+centy+")");
		} else {
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
							.attr("transform", "rotate("+(a*180/Math.PI)+","+centx+","+centy+")");
			var drawAnnuli = svg.append("path")
							.attr("d", lineFunction(dataASL2[k]))
							.attr("stroke", strokeShade)
							.attr("fill", fillShade)
							.attr("stroke-width", LW)
							.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
							.attr("transform", "rotate("+(a*180/Math.PI)+","+centx+","+centy+")");
		}
	}
}