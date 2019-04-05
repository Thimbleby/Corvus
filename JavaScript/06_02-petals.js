// 06_02-petals.js
//
//
//
function starPetal(centx,centy,x,y,removable,name) {
	var dataSL = [];
	var scale = pat.grid[x][y].scale;
	var n = pat.noAnnuli-1;
	var a = -(pat.grid[x][y].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.grid[x][y].a[n].lineWidth]+30)/10*scale/4;
	var r = pat.radii[pat.noAnnuli-1]*pat.grid[x][y].scale-LW*2;
	var num = pat.grid[x][y].diceNum;
	var vertices = [];
	for (var j = 0; j < Math.abs(num);j++) {
		vertices.push(j/Math.abs(num));
	}
	//console.log(num+" v: "+vertices);
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	}
	//
	dataASL = [];
	for (var i = 0; i < vertices.length; i++) {
		dataASL[i] = [];
		dataASL[i].push({"x":centx,"y":centy})
		dataASL[i].push({"x":centx+r/8*Math.sin(a+vertices[i]*2*Math.PI-Math.PI/8),"y":centy+r/8*Math.cos(a+vertices[i]*2*Math.PI-Math.PI/8)})
		dataASL[i].push({"x":centx+r/2*Math.sin(a+vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/2*Math.cos(a+vertices[i]*2*Math.PI-Math.PI/20)})
		dataASL[i].push({"x":centx+r*Math.sin(a+vertices[i]*2*Math.PI),"y":centy+r*Math.cos(a+vertices[i]*2*Math.PI)})
		dataASL[i].push({"x":centx+r/2*Math.sin(a+vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/2*Math.cos(a+vertices[i]*2*Math.PI+Math.PI/20)})
		dataASL[i].push({"x":centx+r/8*Math.sin(a+vertices[i]*2*Math.PI+Math.PI/8),"y":centy+r/8*Math.cos(a+vertices[i]*2*Math.PI+Math.PI/8)})
		dataASL[i].push({"x":centx,"y":centy})
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
    //console.log(dataASL);
		for (var j = 0; j < dataASL.length; j++) {
				if (removable) {
					var drawAnnuli = svg.append("path")
									.attr("d", polyFunction(dataASL[j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
									.attr("id", name);
				} else {
					var drawAnnuli = svg.append("path")
									.attr("d", polyFunction(dataASL[j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
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
function answerStarPetal(centx,centy,x,removable,name) {
	var dataSL = [];
	var scale = pat.answers[x].scale;
	var n = pat.noAnnuli-1;
	var a = -(pat.answers[x].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.answers[x].a[n].lineWidth]+30)/10*scale/4;
	var r = pat.radii[pat.noAnnuli-1]*pat.answers[x].scale-LW*2;
	var num = pat.answers[x].diceNum;
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
	for (var i = 0; i < vertices.length; i++) {
		dataASL[i] = [];
		dataASL[i].push({"x":centx,"y":centy})
		dataASL[i].push({"x":centx+r/8*Math.sin(a+vertices[i]*2*Math.PI-Math.PI/8),"y":centy+r/8*Math.cos(a+vertices[i]*2*Math.PI-Math.PI/8)})
		dataASL[i].push({"x":centx+r/2*Math.sin(a+vertices[i]*2*Math.PI-Math.PI/20),"y":centy+r/2*Math.cos(a+vertices[i]*2*Math.PI-Math.PI/20)})
		dataASL[i].push({"x":centx+r*Math.sin(a+vertices[i]*2*Math.PI),"y":centy+r*Math.cos(a+vertices[i]*2*Math.PI)})
		dataASL[i].push({"x":centx+r/2*Math.sin(a+vertices[i]*2*Math.PI+Math.PI/20),"y":centy+r/2*Math.cos(a+vertices[i]*2*Math.PI+Math.PI/20)})
		dataASL[i].push({"x":centx+r/8*Math.sin(a+vertices[i]*2*Math.PI+Math.PI/8),"y":centy+r/8*Math.cos(a+vertices[i]*2*Math.PI+Math.PI/8)})
		dataASL[i].push({"x":centx,"y":centy})
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
    //console.log(dataASL);
		for (var j = 0; j < dataASL.length; j++) {
				if (removable) {
					var drawAnnuli = svg.append("path")
									.attr("d", polyFunction(dataASL[j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
									.attr("id", name);
				} else {
					var drawAnnuli = svg.append("path")
									.attr("d", polyFunction(dataASL[j]))
									.attr("stroke", strokeShade)
									.attr("fill", fillShade)
									.attr("stroke-width", LW)
									.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
				}
		}
}