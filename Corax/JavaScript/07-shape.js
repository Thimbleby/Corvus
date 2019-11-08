// 07-shape.js
//
//
function outerPoint(x1,y1,x2,y2,centx,centy,r,LW) {
	// t is the midpoint of the chord between x1,y1 and x2,y2
	var tx = (x2+x1)/2;
	var ty = (y2+y1)/2;
	// Extending the line ct by extMult to get the point o on the outer rim of the annulus.
	var dctx = centx-tx;
	var dcty = centy-ty;
	var dct = Math.sqrt(Math.pow(dctx,2)+Math.pow(dcty,2));
	var extMult = -(r*annulusWidth-LW/2)/(dct);
	var ox = dctx*extMult+centx;
	var oy = dcty*extMult+centy;
	
	return {"x":ox,"y":oy};
}
function outerPoint2(x1,y1,centx,centy,r,LW,right) {
	var dx = x1-centx;
	var dy = y1-centy;
	if (right) {
		//var xunit = - Math.sqrt(1-(dx/r)*(dx/r));
		//var yunit = + Math.sqrt(1-(dy/r)*(dy/r));
		var xunit = dy;
		var yunit = -dx;
	} else {
		var xunit = -dy;
		var yunit = dx;
		//var xunit = + Math.sqrt(1-(dx/r)*(dx/r));
		//var yunit = - Math.sqrt(1-(dy/r)*(dy/r));
	}
	var ox = centx + (r*annulusWidth-LW/2)/r*xunit;
	var oy = centy + (r*annulusWidth-LW/2)/r*yunit;
	
	return {"x":ox,"y":oy};
}
// Shape functions
function indecatorSize (r,LW) {
	return (r*annulusWidth-r-LW/2);
	//return 0.4*(1.25*maxShapes+1*z)*pat.grid[x][y].a[z].lineWidth;
	//pat.grid[x][y].a[n].strokeColour -- Old Colour —— Colour of lines
}
function indecatorSizeAn (r,LW) {
	return (r*annulusWidth-r-LW/2);
	//return 0.4*(1.25*maxShapes+1*z)*pat.answers[x].a[z].lineWidth;
	//pat.grid[x][y].a[n].strokeColour -- Old Colour —— Colour of lines
}
function shape(centx,centy,x,y,removable,name) {
	//	console.error("shape: "+ax+" x: "+x);
	for (var n=0;n<pat.radii.length && n < pat.noAnnuli;n++) {
		var data = [];
		var vertices = pat.grid[x][y].a[n].polyShape;
		var scale = pat.grid[x][y].scale;
		var r = pat.radii[n]*pat.grid[x][y].scale;
		var a = (pat.grid[x][y].a[n].rotation+pat.rotOffset)*2*Math.PI;
		var LW = (lineThickness)*(pat.radii[pat.grid[x][y].a[n].lineWidth]+30)/10*scale;
		if (pat.usingANYrot[n]) {
			if(pat.includeAnnuli) {
				if (removable) {
					var circle = svg.append("circle")
									.attr("cx", centx+(r+LW/2)*Math.sin(a))
									.attr("cy", centy-(r+LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray")
									.attr("id", name);    
				} else {
					var circle = svg.append("circle")
									.attr("cx", centx+(r+LW/2)*Math.sin(a))
									.attr("cy", centy-(r+LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r,LW))
									.attr("stroke", "none")
									.attr("fill", name);    
				}  
			} else {
				if (removable) {
					var circle = svg.append("circle")
									.attr("cx", centx+(r-LW/2)*Math.sin(a))
									.attr("cy", centy-(r-LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r*2/3,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray")
									.attr("id", name); 
					var square = svg.append("path")
									.attr("d", polyFunction([{"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI/2)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+3*Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+3*Math.PI/2)}]))
									.attr("stroke", "LightGray")
									.attr("fill", "White")
									.attr("stroke-width", LW)
									.attr("id", name);
				} else {
					var circle = svg.append("circle")
									.attr("cx", centx+(r-LW/2)*Math.sin(a))
									.attr("cy", centy-(r-LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r*2/3,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray");    
					var square = svg.append("path")
									.attr("d", polyFunction([{"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI/2)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+3*Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+3*Math.PI/2)}]))
									.attr("stroke", "LightGray")
									.attr("fill", "White")
									.attr("stroke-width", LW);
				}  
			}
		} 
		if (pat.includeAnnuli) {
			switch (vertices.length) {
			case 0: // Circle/D0
			//console.log("centx: "+centx+" "+r+" "+Math.sin(a)+ " " +a)
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", r+LW/2)
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", r+LW/2)
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
				break;
			case 2:
				for (var i = 0; i < vertices.length; i++) {
					data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[i]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[i]*2*Math.PI)})
				}
				var l = data.length;
			
				data.splice(2,0,outerPoint2(data[1].x,data[1].y,centx,centy,r,LW,true));
				data.splice(1,0,outerPoint2(data[0].x,data[0].y,centx,centy,r,LW,false));
			
				console.log(data);
				if (removable) {  
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
				break;
			default: // DX 
				for (var i = 0; i < vertices.length; i++) {
					data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[i]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[i]*2*Math.PI)})
				}
				data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[0]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[0]*2*Math.PI)})
				var l = data.length;
				for (var m=l-1;m>0;m--) {
					data.splice(m,0,outerPoint(data[m-1].x,data[m-1].y,data[m].x,data[m].y,centx,centy,r,LW));
				}
				data.pop();	
				if (removable) {
					if (pat.usingANYrot[n]) {
						if (pat.grid[x][y].a[n].polyForm == "pentagon") {
							var circle = svg.append("circle")
											.attr("cx", (data[1].x+data[5].x)/2)
											.attr("cy", (data[1].y+data[5].y)/2)
											.attr("r", indecatorSize(r,LW))
											.attr("stroke", "none")
											.attr("fill", "LightGray") 
											.attr("id", name);
						} else {
							var circle = svg.append("circle")
												.attr("cx", data[0].x)
												.attr("cy", data[0].y)
												.attr("r", indecatorSize(r,LW))
												.attr("stroke", "none")
												.attr("fill", "LightGray") 
												.attr("id", name);
						}
					}   
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray)
										.attr("id", name);
				} else {
					if (pat.usingANYrot[n]) {
						if (pat.grid[x][y].a[n].polyForm == "pentagon") {
							var circle = svg.append("circle")
											.attr("cx", (data[1].x+data[5].x)/2)
											.attr("cy", (data[1].y+data[5].y)/2)
											.attr("r", indecatorSize(r,LW))
											.attr("stroke", "none")
											.attr("fill", "LightGray");
						} else {
							var circle = svg.append("circle")
												.attr("cx", data[0].x)
												.attr("cy", data[0].y)
												.attr("r", indecatorSize(r,LW))
												.attr("stroke", "none")
												.attr("fill", "LightGray");
						}
					}   
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.grid[x][y].a[n].strokeColour)
										.attr("fill", pat.grid[x][y].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.grid[x][y].a[n].dasharray);
				}
			}
	
		/*var drawAnnuliB = svg.append("circle")
							.attr("cx", centx)
							.attr("cy", centy)
							.attr("r", r)
							.attr("stroke", "Red")
							.attr("stroke-width", 1)
							.attr("fill", "none")
							.style("stroke-dasharray","none");
		var drawAnnuliB = svg.append("circle")
							.attr("cx", centx)
							.attr("cy", centy)
							.attr("r", r*annulusWidth)
							.attr("stroke", "Red")
							.attr("stroke-width", 1)
							.attr("fill", "none")
							.style("stroke-dasharray","none");*/
		}
	}
	switch (pat.patternType[1][0]) {
		case 1:
			dice(centx,centy,x,y,removable,name);
			break;
		case 2:
			starPetal(centx,centy,x,y,removable,name);
			break;
		case 3:
			spikeRings(centx,centy,x,y,removable,name);
			break;
		case 4:
			boxes(centx,centy,x,y,removable,name);
			break;
		case 5:
			triangles(centx,centy,x,y,removable,name);
			break;
		case 6:
			boxLines(centx,centy,x,y,removable,name);
			break;
		default:
			break;
	}
}
function answerShape(centx,centy,x,removable,name) {
	//	console.error("shape: "+ax+" x: "+x);
	for (var n=0; n < pat.radii.length && n < pat.noAnnuli; n++) {
		var data = [];
		var vertices = pat.answers[x].a[n].polyShape;
		var scale = pat.answers[x].scale;
		var r = pat.radii[n]*pat.answers[x].scale;
		var a = (pat.answers[x].a[n].rotation+pat.rotOffset)*2*Math.PI;
		var LW = (lineThickness)*(pat.radii[pat.answers[x].a[n].lineWidth]+30)/10*scale;
		
		if (pat.usingANYrot[n]) {
			if(pat.includeAnnuli) {
				if (removable) {
					var circle = svg.append("circle")
									.attr("cx", centx+(r+LW/2)*Math.sin(a))
									.attr("cy", centy-(r+LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray")
									.attr("id", name);    
				} else {
					var circle = svg.append("circle")
									.attr("cx", centx+(r+LW/2)*Math.sin(a))
									.attr("cy", centy-(r+LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray");    
				}  
			} else {
				if (removable) {
					var circle = svg.append("circle")
									.attr("cx", centx+(r-LW/2)*Math.sin(a))
									.attr("cy", centy-(r-LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r*2/3,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray")
									.attr("id", name);   
					var square = svg.append("path")
									.attr("d", polyFunction([{"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI/2)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+3*Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+3*Math.PI/2)}]))
									.attr("stroke", "LightGray")
									.attr("fill", "White")
									.attr("stroke-width", LW)
									.attr("id", name); 
				} else {
					var circle = svg.append("circle")
									.attr("cx", centx+(r-LW/2)*Math.sin(a))
									.attr("cy", centy-(r-LW/2)*Math.cos(a))
									.attr("r", indecatorSize(r*2/3,LW))
									.attr("stroke", "none")
									.attr("fill", "LightGray"); 
					var square = svg.append("path")
									.attr("d", polyFunction([{"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI/2)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+Math.PI),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+Math.PI)},
															 {"x": centx+(r-LW/2)*Math.sin(a-Math.PI/4+3*Math.PI/2),
															 "y": centy-(r-LW/2)*Math.cos(a-Math.PI/4+3*Math.PI/2)}]))
									.attr("stroke", "LightGray")
									.attr("fill", "White")
									.attr("stroke-width", LW);   
				}  
			}
		} 
		if (pat.includeAnnuli) {
			switch (vertices.length) {
			case 0: // Circle/D0
			//console.log("centx: "+centx+" "+r+" "+Math.sin(a)+ " " +a)
			
		
				if (removable) {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", r+LW/2)
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
				} else {
					var drawAnnuli = svg.append("circle")
										.attr("cx", centx)
										.attr("cy", centy)
										.attr("r", r+LW/2)
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
					}
			
				break;
			case 2:
				for (var i = 0; i < vertices.length; i++) {
					data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[i]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[i]*2*Math.PI)})
				}
				var l = data.length;
			
				data.splice(2,0,outerPoint2(data[1].x,data[1].y,centx,centy,r,LW,true));
				data.splice(1,0,outerPoint2(data[0].x,data[0].y,centx,centy,r,LW,false));
			
				console.log(data);
				if (removable) {
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
				} else { 
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
				}
				break;
			default: // DX 
				for (var i = 0; i < vertices.length; i++) {
					data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[i]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[i]*2*Math.PI)})
				}
				data.push({"x":centx+(r+LW/2)*Math.sin(a+vertices[0]*2*Math.PI),"y":centy-(r+LW/2)*Math.cos(a+vertices[0]*2*Math.PI)})
				var l = data.length;
				for (var m=l-1;m>0;m--) {
					data.splice(m,0,outerPoint(data[m-1].x,data[m-1].y,data[m].x,data[m].y,centx,centy,r,LW));
				}
				data.pop();	
				if (removable) {
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray)
										.attr("id", name);
				} else { 
					var drawAnnuli = svg.append("path")
										.attr("d", polyFunction(data))
										.attr("stroke", pat.answers[x].a[n].strokeColour)
										.attr("fill", pat.answers[x].a[n].shade)
										.attr("stroke-width", LW)
										.style("stroke-dasharray", pat.answers[x].a[n].dasharray);
				}			
			}
		/*var drawAnnuliB = svg.append("circle")
							.attr("cx", centx)
							.attr("cy", centy)
							.attr("r", r)
							.attr("stroke", "Red")
							.attr("stroke-width", 1)
							.attr("fill", "none")
							.style("stroke-dasharray","none");
		var drawAnnuliB = svg.append("circle")
							.attr("cx", centx)
							.attr("cy", centy)
							.attr("r", r*annulusWidth)
							.attr("stroke", "Red")
							.attr("stroke-width", 1)
							.attr("fill", "none")
							.style("stroke-dasharray","none");*/
		}
	}
	switch (pat.patternType[1][0]) {
		case 1:
			answerDice(centx,centy,x,removable,name);
			break;
		case 2:
			answerStarPetal(centx,centy,x,removable,name);
			break;
		case 3:
			answerSpikeRings(centx,centy,x,removable,name);
			break;
		case 4:
			answerBoxes(centx,centy,x,removable);
			break;
		case 5:
			answerTriangles(centx,centy,x,removable,name);
			break;
		case 6:
			answerBoxLines(centx,centy,x,removable,name);
			break;
		default:
			break;
	}
}