// 06_06-boxLines.js
//
//
// Formed from two sets of lines
//
// First set of lines:
//		N radial lines out from the centre
// Second set of lines:
//		N lines connecting the outer ends of the first set together
//
//
// Two functions - one calls the superFunction SFboxLines to draw
// the boxLines in the matrix, the other does so to draw the boxLines in the answer set.
// 
function SFboxLines (centx,centy,removable,dataSource,name) {
	
	// Encoding type or style
	if (pat.isBinary) {
		// How many different rules act on the encoding?
		// BoxLines with isBinary can cope with 1, 2 or possibly 3 sets of rules.
		//console.log(pat.patternType)
		// Switch (How many rules?) -- Makes sense to handle this earlier?
		switch (pat.patternType[2].length) {
			case 1:
				// How many elements are involved? 
				// For 1 rule, N can be 3,4,5,6,8 or 10 easily. 9 is possible, for 7; Petals or equivalent is recommended. For 1 or 2, rings would work [not yet coded].
				var num = pat.patternType[6][0].length
				//
				var dataSL = [];
				// various parameters defining the size of the encoding graphic
				var scale = dataSource.scale;
				var n = pat.noAnnuli-1;
				var a = -(dataSource.a[n].rotation+pat.rotOffset)*2*Math.PI;
				var LW = (lineThickness)*(pat.radii[dataSource.a[n].lineWidth]+30)/10*scale/4;
				var r = pat.radii[pat.noAnnuli-1]*dataSource.scale-LW*2;
				//
				var vertices = [];
				var evenNum = [6,8,10,12];
				var oddNum = [3,4,5]
				if (evenNum.indexOf(num) >= 0) {
					for (var j = 0; j < (num/2);j++) {
						vertices.push(j/(num/2));
					}
				} else if (oddNum.indexOf(num) >= 0) {
					for (var j = 0; j < (num);j++) {
						vertices.push(j/(num));
					}
				} else {
					console.warn("Invalid num value passed to boxLines.js");
				}
				//console.log("num: "+num);
				//
				//
				//console.log(num+" v: "+vertices);
				if (num < 0) {
					var fillShade = pat.availableColours[2];
					var strokeShade = pat.chooseStrokeColour(dataSource.a[n].shade,fillShade);
				} else {
					var fillShade = pat.availableColours[0];
					var strokeShade = pat.chooseStrokeColour(dataSource.a[n].shade,fillShade);
				}
				//
				//console.log("num: "+num);
				//console.log(evenNum.indexOf(num));
				if (evenNum.indexOf(num) >= 0) {
					dataASL = [];
					for (var i = 0; i < vertices.length; i++) {
						dataASL[i] = [];
						dataASL[i].push({"x":centx,"y":centy})
						dataASL[i].push({"x":centx+r*Math.sin(a+vertices[i]*2*Math.PI),"y":centy+r*Math.cos(a+vertices[i]*2*Math.PI)})
						//console.log("x1: "+centx+" to x2: "+(centx+r*Math.sin(a+vertices[i]*2*Math.PI)));
						//console.log("y1: "+centy+" to y2: "+(centy+r*Math.cos(a+vertices[i]*2*Math.PI)));
					}
				}
				dataASL2 = [];
				for (var i = 0; i < vertices.length; i++) {
					dataASL2[i] = [];
					dataASL2[i].push({"x":centx+r*Math.sin(a+vertices[i]*2*Math.PI),"y":centy+r*Math.cos(a+vertices[i]*2*Math.PI)})
					//dataASL2[i].push({"x":centx+0.75*r*Math.sin(a+vertices[i]*2*Math.PI+Math.PI/vertices.length),"y":centy+.75*r*Math.cos(a+vertices[i]*2*Math.PI+Math.PI/vertices.length)});
					dataASL2[i].push({"x":centx+r*Math.sin(a+vertices[i]*2*Math.PI+Math.PI*2/vertices.length),"y":centy+r*Math.cos(a+vertices[i]*2*Math.PI+Math.PI*2/vertices.length)})
				}
				//console.log("DataASL1/2");
				//for (var i = 0; i < dataASL.length; i++)
				//	console.log(dataASL[i])
				//for (var i = 0; i < dataASL2.length; i++)
				//	console.log(dataASL2[i])
				//console.log("Vert");
				//console.log(vertices)
				// bob
				//
				//
				//	console.log(x +" : "+ y);
				//	console.log(dataSource);
				
				for (var z = 0; z < dataSource.diceNum.length; z++) {
					if (evenNum.indexOf(num) >= 0) {
						if (dataSource.diceNum[z] == 0)
							if (z < num/2) {
								dataASL[z] = [];
							} else {
								dataASL2[z-num/2] = [];
								//console.log ("z: "+z+", num: "+num+", z-num: "+(z-num/2));
							}
					} else if (dataSource.diceNum[z] == 0)
						dataASL2[z] = [];
				}
				//console.log(dataASL);
	
				//console.log(dataASL2);
	
				//for (var nV = 0; nV < num%vertices.length; nV++) {
				//	dataASL2.splice(nV,1);
				//}
				//console.log(dataASL);
				if (evenNum.indexOf(num) >= 0) {
					for (var j = 0; j < dataASL.length; j++) {
							if (removable) {
								var drawAnnuli = svg.append("path")
												.attr("d", curveFunction(dataASL[j]))
												.attr("stroke", strokeShade)
												.attr("fill", fillShade)
												.attr("stroke-width", LW)
												.style("stroke-dasharray", dataSource.a[n].dasharray)
												.attr("id", name);
							} else {
								var drawAnnuli = svg.append("path")
												.attr("d", curveFunction(dataASL[j]))
												.attr("stroke", strokeShade)
												.attr("fill", fillShade)
												.attr("stroke-width", LW)
												.style("stroke-dasharray", dataSource.a[n].dasharray);
							}
					}	
				}
				for (var j = 0; j < dataASL2.length; j++) {
						if (removable) {
							var drawAnnuli = svg.append("path")
											.attr("d", curveFunction(dataASL2[j]))
											.attr("stroke", strokeShade)
											.attr("fill", fillShade)
											.attr("stroke-width", LW)
											.style("stroke-dasharray", dataSource.a[n].dasharray)
											.attr("id", name);
						} else {
							var drawAnnuli = svg.append("path")
											.attr("d", curveFunction(dataASL2[j]))
											.attr("stroke", strokeShade)
											.attr("fill", fillShade)
											.attr("stroke-width", LW)
											.style("stroke-dasharray", dataSource.a[n].dasharray);
						}
				}
				if (removable) {
					if (evenNum.indexOf(num) >= 0) {
						var circle = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", LW*2)
										.attr("stroke", "none")
										.attr("fill", strokeShade)
										.attr("id", name); 
						for (var i = 0; i < (num/2); i++) {		
							var circle = svg.append("circle")
											.attr("cx", centx+r*Math.sin(a+vertices[i]*2*Math.PI))
											.attr("cy", centy+r*Math.cos(a+vertices[i]*2*Math.PI))
											.attr("r", LW*2)
											.attr("stroke", "none")
											.attr("fill", strokeShade)
											.attr("id", name);   
						}
					} else {
						for (var i = 0; i < num; i++) {		
							var circle = svg.append("circle")
											.attr("cx", centx+r*Math.sin(a+vertices[i]*2*Math.PI))
											.attr("cy", centy+r*Math.cos(a+vertices[i]*2*Math.PI))
											.attr("r", LW*2)
											.attr("stroke", "none")
											.attr("fill", strokeShade)
											.attr("id", name);   
						}
					}
				} else {
					if (evenNum.indexOf(num) >= 0) {
						var circle = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", LW*2)
										.attr("stroke", "none")
										.attr("fill", strokeShade);   
						for (var i = 0; i < (num/2); i++) {	
							var circle = svg.append("circle")
											.attr("cx", centx+r*Math.sin(a+vertices[i]*2*Math.PI))
											.attr("cy", centy+r*Math.cos(a+vertices[i]*2*Math.PI))
											.attr("r", LW*2)
											.attr("stroke", "none")
											.attr("fill", strokeShade);  
						} 
					} else {
						for (var i = 0; i < num; i++) {		
							var circle = svg.append("circle")
											.attr("cx", centx+r*Math.sin(a+vertices[i]*2*Math.PI))
											.attr("cy", centy+r*Math.cos(a+vertices[i]*2*Math.PI))
											.attr("r", LW*2)
											.attr("stroke", "none")
											.attr("fill", strokeShade);  
						} 
					}
				}

				break;
			case 2:
				console.warn("Not yet coded!");
				break;
			default:
				console.warn("This shouldn't happen!");
				break;
		}
	} else {
		console.warn("Not yet coded!");
	}
}
function boxLines(centx,centy,x,y,removable,name) {
	SFboxLines (centx,centy,removable,pat.grid[x][y],name)
}
function answerBoxLines(centx,centy,x,removable,name) {
	SFboxLines (centx,centy,removable,pat.answers[x],name);
}