// 06_05-triangles.js
//
//
//
function triangles(centx,centy,x,y,removable,name) {
	var dataSL = [];
	var scale = pat.grid[x][y].scale;
	var n = pat.noAnnuli-1;
	var a = -(pat.grid[x][y].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.grid[x][y].a[n].lineWidth]+30)/10*scale/4;
	var r = (pat.radii[pat.noAnnuli-1]*pat.grid[x][y].scale-LW*2);
	var chord = r*Math.sqrt(3);
	var ytoChord = r/2;
	var num = pat.grid[x][y].diceNum;
	var posNum = Math.abs(num);
	var triHeight = (ytoChord+r)/(posNum);
	var triSide = chord/(posNum);
	//console.log(num+" v: "+vertices);
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.grid[x][y].a[n].shade,fillShade);
	}
	var fillShade2 = pat.availableColours[(pat.availableColours.indexOf(fillShade)+1)%pat.availableColours.length];
	//
	dataASL = [];
	for (var j = 0; j < posNum; j++) {
		var boxx = centx-j*triSide*1/2;
		var boxy = centy-j*triHeight+r;
		dataASL[j] = [];
		for (var l = 0; l+j < posNum; l++) {
			dataASL[j][l] = [];
			dataASL[j][l].push({"x":boxx+triSide*l*1/2,"y":boxy-triHeight*l})
			dataASL[j][l].push({"x":boxx+triSide*(l+1)*1/2,"y":boxy-triHeight*(l+1)})
			dataASL[j][l].push({"x":boxx+triSide*(l-1)*1/2,"y":boxy-triHeight*(l+1)})
		}
	}
	//console.log(dataASL);
	dataASL2 = [];
	for (var j = 0; j < posNum-1; j++) {
		var boxx = centx-j*triSide*1/2;
		var boxy = centy-j*triHeight+r-triHeight;
		dataASL2[j] = [];
		for (var l = 0; l+j < posNum-1; l++) {
			dataASL2[j][l] = [];
			dataASL2[j][l].push({"x":boxx+triSide*(l)*1/2,"y":boxy-triHeight*(l+1)})
			dataASL2[j][l].push({"x":boxx+triSide*(l-1)*1/2,"y":boxy-triHeight*(l)})
			dataASL2[j][l].push({"x":boxx+triSide*(l+1)*1/2,"y":boxy-triHeight*(l)})
		}
	}
	
	for (var j = 0; j < dataASL.length; j++) {
		for (var k = 0; k+j < dataASL[0].length; k++) {
			if (removable) {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
								.attr("id", name)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			} else {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			}
		}
	}
	//console.log(dataASL);
	for (var j = 0; j < dataASL2.length; j++) {
		for (var k = 0; k+j < dataASL2[0].length; k++) {
			if (removable) {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL2[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade2)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
								.attr("id", name)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			} else {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL2[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade2)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			}
		}
	}
	/*			var drawTemp = svg.append("path")
								.attr("d", lineFunction(dataTemp))
								.attr("stroke", pat.availableColours[2])
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
								.attr("id", name);*/

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
function answerTriangles(centx,centy,x,removable,name) {
	var dataSL = [];
	var scale = pat.answers[x].scale;
	var n = pat.noAnnuli-1;
	var a = -(pat.answers[x].a[n].rotation+pat.rotOffset)*2*Math.PI;
	var LW = (lineThickness)*(pat.radii[pat.answers[x].a[n].lineWidth]+30)/10*scale/4;
	var r = (pat.radii[pat.noAnnuli-1]*pat.answers[x].scale-LW*2);
	var chord = r*Math.sqrt(3);
	var ytoChord = r/2;
	var num = pat.answers[x].diceNum;
	var posNum = Math.abs(num);
	var triHeight = (ytoChord+r)/(posNum);
	var triSide = chord/(posNum);
	if (num < 0) {
		var fillShade = pat.availableColours[2];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	} else {
		var fillShade = pat.availableColours[0];
		var strokeShade = pat.chooseStrokeColour(pat.answers[x].a[n].shade,fillShade);
	}
	var fillShade2 = pat.availableColours[(pat.availableColours.indexOf(fillShade)+1)%pat.availableColours.length];
	//
	dataASL = [];
	for (var j = 0; j < posNum; j++) {
		var boxx = centx-j*triSide*1/2;
		var boxy = centy-j*triHeight+r;
		dataASL[j] = [];
		for (var l = 0; l+j < posNum; l++) {
			dataASL[j][l] = [];
			dataASL[j][l].push({"x":boxx+triSide*l*1/2,"y":boxy-triHeight*l})
			dataASL[j][l].push({"x":boxx+triSide*(l+1)*1/2,"y":boxy-triHeight*(l+1)})
			dataASL[j][l].push({"x":boxx+triSide*(l-1)*1/2,"y":boxy-triHeight*(l+1)})
		}
	}
	//console.log(dataASL);
	dataASL2 = [];
	for (var j = 0; j < posNum-1; j++) {
		var boxx = centx-j*triSide*1/2;
		var boxy = centy-j*triHeight+r-triHeight;
		dataASL2[j] = [];
		for (var l = 0; l+j < posNum-1; l++) {
			dataASL2[j][l] = [];
			dataASL2[j][l].push({"x":boxx+triSide*(l)*1/2,"y":boxy-triHeight*(l+1)})
			dataASL2[j][l].push({"x":boxx+triSide*(l-1)*1/2,"y":boxy-triHeight*(l)})
			dataASL2[j][l].push({"x":boxx+triSide*(l+1)*1/2,"y":boxy-triHeight*(l)})
		}
	}
	//for (var nV = 0; nV < num%vertices.length; nV++) {
	//	dataASL.splice(nV,1);
	//}
	for (var j = 0; j < dataASL.length; j++) {
		for (var k = 0; k+j < dataASL[0].length; k++) {
			if (removable) {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
								.attr("id", name)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			} else {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			}
		}
	}
	//console.log(dataASL);
	for (var j = 0; j < dataASL2.length; j++) {
		for (var k = 0; k+j < dataASL2[0].length; k++) {
			if (removable) {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL2[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade2)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
								.attr("id", name)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			} else {
				var drawAnnuli = svg.append("path")
								.attr("d", lineFunction(dataASL2[j][k]))
								.attr("stroke", strokeShade)
								.attr("fill", fillShade2)
								.attr("stroke-width", LW)
								.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
								.attr("transform", "rotate("+(-a*180/Math.PI)+","+centx+","+centy+")");
			}
		}
	}

}