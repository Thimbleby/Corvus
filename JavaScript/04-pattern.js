// 04-pattern.js
//
//
function linearDifficulty (maximum) {
	return Math.floor(maximum*difficulty/maxDifficulty);
	// Range of results = 0 to (maximum - 1) :: useful for array.length situations;
}
function linearSubDifficulty (valueMaximum, rangeMinimum, rangeMaximum) {
	if (!(difficulty >= rangeMinimum) && !(difficulty < rangeMaximum)) {
		console.error("Difficulty outside bounds of linearSubDifficulty method; D:"
				+difficulty+" rMin: "+ rangeMinimum + " rMax: "+rangeMaximum);
	}
	return Math.floor(valueMaximum*(difficulty-rangeMinimum)/(rangeMaximum-rangeMinimum));
}
function inverseDifficulty1 (maximum) {
	return Math.max(Math.ceil(maximum*(1-(maxDifficulty/6)/difficulty)),1);
	// maximum = 3:
	// 0   <= difficulty < 1/4 : 1
	// 1/4 <= difficulty < 1/2 : 2
	// 1/2 <= difficulty <= 1  : 3
}
function choosePattern() {
	var self = this // !
	//
	self.includeAnnuli = true;
	// pattern type
	// choses the question from the puzzle array based on the current difficulty (Theta) level
	self.patternType = allPuzzleTypes[linearDifficulty(allPuzzleTypes.length)];
	if (self.patternType[2] == 2) {
		self.patDupIcon = Math.floor(Math.random()*2);
	}
	self.numberGridArray = [];
	var numberTempArray = [];
	//console.log(self.patternType);
	// sets a binary to determine if multiple annuli are used or not
	if (self.patternType[2].indexOf(0) > -1 || self.patternType[2].indexOf(1) > -1 || self.patternType[2].indexOf(2) > -1)
		self.includeAnnuli = true;
	else
		self.includeAnnuli = false;
		
	console.log("The Puzzle in an array (self.patternType): ");
	console.log(self.patternType);
	// self.parternType[0] defines the size of the matrix. It is a placeholder currently as
	// matrices other than 3x3 are not fully implemented.
	// self.patternType[1] defines the graphical elements used; for example spike rings, dice faces, etc...
	// Currently this is mutually exclusive with multiple annuli NON-URGENT FIX WANTED
	switch (self.patternType[1][0]) {
		case 0:
		case 1:
		case 2:
			self.includeAnnuli = true;
			break;
		default:
			break;
	} 	
	// Boolean to determine whether the puzzle use graphics with multiple binary elements
	self.isBinary = false;
	// What rules are used in the puzzle?
	// self.patternType[2] contains the list of rules used for a particular puzzle. 
	for (var t = 0; t < self.patternType[2].length; t++) {
		if (self.patternType[2][t] > 2 && self.patternType[2][t] < 17)
			self.isBinary = true;
	}
	for (var t = 0; t < self.patternType[2].length; t++) {
		switch (self.patternType[2][t]) {
			// Addition
			case 3:
				for (var y = 0; y < maxG-1; y++) {
					self.numberGridArray[y] = [];
					for (var x = 0; x < maxG-1; x++) {
						self.numberGridArray[y][x] = self.patternType[6][y+(maxG-1)*x];
					}
				}
				self.numberGridArray[maxG-1] = [];
				for (var x = 0; x < maxG-1; x++) {
					self.numberGridArray[maxG-1][x] = self.numberGridArray[0][x]+self.numberGridArray[1][x];
					if (self.numberGridArray[maxG-1][x] > 9 || self.numberGridArray[maxG-1][x] < -9)
						console.warn("|Num| >9: "+ (maxG-1) + ", "+ x);
				}
				for (var y = 0; y < maxG; y++) {
					self.numberGridArray[y][maxG-1] = self.numberGridArray[y][0]+self.numberGridArray[y][1];
					if (self.numberGridArray[y][maxG-1] > 9 ||self.numberGridArray[y][maxG-1] < -9)
						console.warn("|Num| >9: "+ y + ", "+ (maxG-1));
				}
				self.numberGridArray.push
				//console.log("NumberGridArray");
				//console.log(self.numberGridArray);
				//console.log(self.numberAnswerArray);
				break;
			//Logic Gates (Presently discounting YES and NO)
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
			case 12:
			case 13:
			case 14:
			case 15:
			case 16:
			case 17:
				// y is vertical matrix element location
				// x is horizontal matrix element location
				// r is the selected sub element
				// self.patternType[6] is arranged [y+(maxG-1)*x][sub elements of matrix element]
				//
				// fill in the pre-seeded matrix elements.
				for (var y = 0; y < maxG-1; y++) {
					self.numberGridArray[y] = [];
					for (var x = 0; x < maxG-1; x++) {
						self.numberGridArray[y][x] = [];
						for (r = 0; r < self.patternType[6][(y+(maxG-1)*x)%self.patternType[6].length].length; r++) {
							self.numberGridArray[y][x][r] = Math.abs(self.patternType[6][(y+(maxG-1)*x)%self.patternType[6].length][r]%2);
						}
					}
				}
				// select the right logic gate.
				if ((self.patternType[2][t]-4) < logicGateArray.length) {
					logicGate = logicGateArray[self.patternType[2][t]-4];
					console.log("patternType: "+(self.patternType[2][t]-4)+" LGA: "+logicGateArray);
				} else {
					console.warn("Logic not in logicGateArray");
				}
				//console.log(returnStringArray(self.numberGridArray));
				// this is a 2x2->3x3 expansion form. It could potentially be shuffled after being built.
				// Make the first two elements
				self.numberGridArray[maxG-1] = [];
				//console.log(self.numberGridArray[0][0]); // This is a NaN
				for (var x = 0; x < maxG-1; x++) {
					// Expand the first two elements to the first 2x2 sub-grid of elements
					self.numberGridArray[maxG-1][x] = [];
					for (var r = 0; r < self.numberGridArray[0][x].length; r++) {
						// Add the 3rd column via logicGate
						self.numberGridArray[maxG-1][x][r] = logicGate(self.numberGridArray[0][x][r],self.numberGridArray[1][x][r]);
						// Can only take binary input
						if (self.numberGridArray[maxG-1][x][r] > 1 || self.numberGridArray[maxG-1][x][r] < 0)
							console.warn("|Num| >1: "+ (maxG-1) + ", "+ x);
					}
				}
				//console.log(returnStringArray(self.numberGridArray));
				for (var y = 0; y < maxG; y++) {
					// add the third row
					self.numberGridArray[y][maxG-1] = [];
					for (var r = 0; r < self.numberGridArray[y][0].length; r++) {
						//fill in the third row via logicGate
						self.numberGridArray[y][maxG-1][r] = logicGate(self.numberGridArray[y][0][r],self.numberGridArray[y][1][r]);
						// can only take binary input
						if (self.numberGridArray[y][maxG-1][r] > 1 ||self.numberGridArray[y][maxG-1][r] < 0)
							console.warn("|Num| >1: "+ y + ", "+ (maxG-1));
					}
				}
				//console.log("self.numberGridArray:")
				//console.log(returnStringArray(self.numberGridArray));
				break;
			/*case 5:
			// Both XOR and AND
				for (var y = 0; y < maxG-1; y++) {
					self.numberGridArray[y] = [];
					var temp = 4;
					for (var x = 0; x < maxG-1; x++) {
						self.numberGridArray[y][x] = [0,[],[]];
						self.numberGridArray[y][x][0] = self.patternType[6][(y+(maxG-1)*x)%self.patternType[6].length];
						//console.log (y+" : "+x);
						for (var z = 0; z < temp; z++) {
							if (self.numberGridArray[y][x][0]%Math.ceil(temp) == z) {
								self.numberGridArray[y][x][1][z] = 0;
								self.numberGridArray[y][x][2][z] = 0;
							} else {
								self.numberGridArray[y][x][1][z] = 1;
								self.numberGridArray[y][x][2][z] = 1;
							}
						}
					}
				}
				self.numberGridArray[maxG-1] = [];
				for (var x = 0; x < maxG-1; x++) {
					self.numberGridArray[maxG-1][x] = [-1,[],[]];
				
					for (var z = 0; z < temp; z++) {
						self.numberGridArray[maxG-1][x][1][z] = (self.numberGridArray[0][x][1][z]+self.numberGridArray[1][x][1][z])%2;
						self.numberGridArray[maxG-1][x][2][z] = (self.numberGridArray[0][x][2][z]*self.numberGridArray[1][x][2][z])%2;
					}
				}
				for (var y = 0; y < maxG; y++) {
					self.numberGridArray[y][maxG-1] = [-1,[],[]];
				
					for (var z = 0; z < temp; z++) {
						self.numberGridArray[y][maxG-1][1][z] = (self.numberGridArray[y][0][1][z]+self.numberGridArray[y][1][1][z])%2;
						self.numberGridArray[y][maxG-1][2][z] = (self.numberGridArray[y][0][2][z]*self.numberGridArray[y][1][2][z])%2;
					}
				}
			
			
				//console.log("kk");
				//console.log(self.numberGridArray[0][2][1][0]+", "+self.numberGridArray[0][2][1][1]+", "+self.numberGridArray[0][2][1][2]+", "+self.numberGridArray[0][2][1][3]);
				//console.log(self.numberGridArray[0][2][2][0]+", "+self.numberGridArray[0][2][2][1]+", "+self.numberGridArray[0][2][2][2]+", "+self.numberGridArray[0][2][2][3]);
				//console.log(self.numberGridArray);
				//console.log(self.numberAnswerArray);
			
				break;*/
			// No use of central icon
			default:
				//console.log("CH1")
				//console.log(self.numberGridArray)
				if (self.numberGridArray.length == 0) {
					//console.log("CH2")
					for (var y = 0; y < maxG; y++) {
						self.numberGridArray[y] = [];
						for (var x = 0; x < maxG; x++) {
							self.numberGridArray[y][x] = 0;
						}
					}
				}
			break;
		}
	}
	self.numberAnswerArray = self.patternType[7];
	//
	// radii defines the size of annuli
	self.radii = [];
	window.updateRadii = function() {
		var tempAnulliWidth = cx;
		if(self.includeAnnuli) {
			for (var i=0;i< maxShapes;i++) {
				self.radii[i] = tempAnulliWidth;
				tempAnulliWidth = tempAnulliWidth-tempAnulliWidth/4-interSpacing*self.radii[i];
			}
		} else {
			for (var i=0;i< maxShapes;i++) {
				self.radii[i] = 1.50*cx;
				//tempAnulliWidth = tempAnulliWidth-tempAnulliWidth/4-interSpacing*self.radii[i];
			}
		}
	}
	
	updateRadii();
	// Attributes for annuli
	self.patterns = ["shade", 
					 "shape", 
					 "size", 
					 /*"dasharray", */
					 "rotation"];
	// available regular shapes for annuli attributes
	self.availableSides = [0,3,4,5,6]; //2,"pentagon" // N.B. Pentagons work, 2 doesn't quite.
	// available colours for annuli attributes - also used for inner shapes also.
	self.availableColours = ["White","DarkGrey","Black"];
	// available scales for annuli attributes
	self.availableScales = [0.8, 1, 1.2];
	// Dashes is not currently used due to visibility issues
	self.availableDashes = ["none"];
	// available rotations for annuli attributes
	// only used for distributions of 2 or 3 values
	self.availableRotations = [0, 1/7, 2/7];
	
	var tempAXX = Math.floor(Math.random()*2);
	//
	//console.log("s.pT[3].l: "+self.patternType[3].length);
	//console.log("s.pT[3]: "+returnStringArray(self.patternType[3]));
	if (self.patternType[2]!=0) {
		self.gridLayout = self.patternType[3];
	} else {
		if (self.patternType[3].length == 2)
			self.gridLayout = [0,[0,0,0]];
		else
			self.gridLayout = [0,[0,0,0],[0,0,0]];
	}
	//console.log(returnStringArray(self.gridLayout));
	//
	self.missingIcons = self.patternType[8];
	//
	//self.layout = [];
	// value containing the number of layouts, plus some console printouts with the grid layout for each annuli.
	if(self.includeAnnuli) {
		self.noAnnuli = self.gridLayout.length-1;
	} else {
		self.noAnnuli = 1;
	}
	console.log("No. Annuli: "+self.noAnnuli);
	console.log("size layout: "+self.gridLayout[0]);
	if (self.includeAnnuli) {
		console.log("annulus 1 layout: "+self.gridLayout[1]);
		if (self.noAnnuli > 1)
			console.log("annulus 2 layout: "+self.gridLayout[2]);
	}
	// Accessible booleans describing whether a particular pattern is used or not
	self.usingRegPolyShape = [];
	self.usingColour = [];
	self.usingScale = 0;
	self.usingRotation = [];
	self.usingDashes = [];
	self.usingWidth = [];
	for (var z = 0; z < self.noAnnuli; z++) {
		self.usingRegPolyShape[z] = 0;
		self.usingColour[z] = 0;
		//self.usingScale = 0;
		self.usingRotation[z] = 0;
		self.usingDashes[z] = 0;
		self.usingWidth[z] = 0;
	}
	
	self.usingScale = self.gridLayout[0];
	for (var z = 0; z < self.noAnnuli; z++) {
		self.usingColour[z] = self.gridLayout[z+1][0];//convert(self.gridLayout[z+1][1]);
		self.usingRegPolyShape[z] = self.gridLayout[z+1][1];//convert(self.gridLayout[z+1][0]);
		self.usingRotation[z] = self.gridLayout[z+1][2];//convert(self.gridLayout[z+1][2]);
		//self.usingDashes[z] = self.gridLayout[z+1][3];//convert(self.gridLayout[z+1][3]);
	}
	//
	self.basicShade = [];
	for (var a = 0; a < maxShapes; a++) {
		self.basicShade[a] = self.availableColours[Math.floor(Math.random()*self.availableColours.length)];
	}
	//propertyStorage[5].push(self.basicShade);
	
	self.defaultPolySides = [];
	for (var z = 0; z < self.noAnnuli; z++) {
		self.defaultPolySides[z] = self.availableSides[Math.floor(Math.random()*self.availableSides.length)];
	}
	//propertyStorage[6].push(self.defaultPolySides);
	// rotation offset - ostensibly for higher difficulties. Originally written
	// for an old version of the code; may need updating at a later date.
	if (difficulty/maxDifficulty >= rotationOffset)
		self.rotOffset = Math.random();
	else
		self.rotOffset = 0;
	//propertyStorage[7].push(self.rotOffset);
	self.rotDirection = [];
	for (var z = 0; z < self.noAnnuli; z++) {
		self.rotDirection[z] = Math.floor(Math.random()*2);
	}
	// shuffle the patterns - this is distributions of 3/2 atm. No progressions used.
	// Altering this will be required if progressions are to be used
	// disabled if rotation is used as rotation is more naturally sequential (and harder) than other attributes
	var usingRotationTemp = false;
	for (var z = 0; z < self.noAnnuli; z++) {
		if (self.usingRotation[z] > 0) {
			usingRotationTemp = true;
			break;
		}
	}
	if (!usingRotationTemp) {
		self.shuffle = [Math.floor(Math.random()*maxG),
						Math.floor(Math.random()*maxG)];
	} else {
		self.shuffle = [0,0];
	}

	
	// The grid
	self.grid = [];
	//
	//
			console.log("self.numberGridArray: ");
			console.log(self.numberGridArray)
	for (var x = 0; x < maxG; x++) {
		self.grid[x] = [];
		for (var y = 0; y < maxG; y++) {
		//console.log(self.numberGridArray);
			var tempIcon = [];
			for (var z = 0; z < self.noAnnuli; z++) {
				tempIcon[z] = {"polyForm": regPolySides(x,y,z),
							   "polyShape": regPolyShape(x,y,z),
							   "shade": shade(x,y,z),
							   "strokeColour": strokeColour(x,y,z),
							   "lineWidth": z,
							   "dashForm": choosedasharray(x,y,z),
							   "dasharray": dashing(choosedasharray(x,y,z),z),
							   "rotation": rotation(x,y,z)};
			}
			self.grid[x][y] = {"scale": scale(x,y,z),
							   "a": tempIcon,
							   "diceNum": self.numberGridArray[x][y]};
			// a contains the annuli.
		}
	}
	//self.VV.watch("diceNum", function() {
	//	alert("Finally!");
	//});
	/*function observer(changes) {	
		console.log("All Change1!")
		console.log(change.type, change.name, change.oldValue);
	}
	//self.VV.diceNum = [1,0,0,0];
	Object.observe(self.VV, function(changes) {
		changes.forEach(function(change){
			console.log("All Change2!")
			console.log(change.type, change.name, change.object[change.name], change.oldValue);
		});
	});*/
	/*self.VV.diceNum = [1,0,0,0];
	console.log(self.VV.diceNum);
	self.VV.diceNum = [0,1,1,1];
	console.log(self.VV.diceNum);
	self.VV.diceNum = [0,1,1,1];
	console.log(self.VV.diceNum);
	self.VV.diceNum = [0,1,1,0];
	console.log(self.VV.diceNum);	*/
	//
	// Checking for identicallity;
	// compares arrays
	function arraysEqual(a, b) {
		if (a === b) return true;
		if (a == null || b == null) return false;
		if (a.length != b.length) return false;

		for (var i = 0; i < a.length; ++i) {
			if (a[i] !== b[i]) return false;
		}
		return true;
	}
	// compares matrix elements/response alternatives or distractors (formerly called icons)
	function equivalency(A,B) {
		// A/B = an array of JSON objects that represent each annuli in an object.
		// A/B = pat.answers[x] or pat.grid[x][y]
		//console.log("Equivalency (A, B)")
		//console.log("A");
		//console.log(A);
		//console.log("B");
		//console.log(B);
		if (A === B)
			return true;
		if (A.diceNum instanceof Array) {
			if (B.diceNum instanceof Array) {
				if (A.diceNum.length != B.diceNum.length)
					return false;
				for (var x = 0; x < A.diceNum.length; x++) {
					if (A.diceNum[x] != B.diceNum[x])
						return false;
				}
			} else 
				return false;
		} else if (B.diceNum instanceof Array)
			return false;
		else
			if (A.diceNum != B.diceNum)
				return false;
		if(self.includeAnnuli) {
			if (A.scale != B.scale)
				return false;
			for (var z = 0; z < A.a.length; z++) {
				if (!arraysEqual(A.a[z].polyShape, B.a[z].polyShape)) 
					return false;
				if (A.a[z].shade != B.a[z].shade) 
					return false;
				if (A.a[z].dashForm != B.a[z].dashForm) 
					return false;
				if (Math.round(100000*(A.a[z].rotation%1)) != Math.round((100000*(B.a[z].rotation%1)))) 
					return false;
			}
		}
		return true;
	}	
	// Is it symmetric?	
	function symmetryChecker() {
		// Does not handle rotational symmetry yet.
		// Does not handle manipulations of elements yet. 
		// Should potentially be per attribute - not sure.
		// Some logic gates being N->1 maps is handled by restricting v to [maxG-1, maxG-1]
		// which may be able to then be shuffled for additional complexity. (Not implemented or theory-checked yet)
		var symmetric = [];
		// [vertical, horizontal, increasing diagonal, decreasing diagonal]
		// Vertical line of symmetry.
		var tempSymmetry = true;
		for (var y = 0; y < maxG; y++) {
			/*console.log("Vertical")
			console.log(0+" :: "+y)
			console.log(self.grid[0][y])
			console.log(2+" :: "+y)
			console.log(self.grid[2][y])
			console.log(equivalency(self.grid[0][y],self.grid[2][y]));
			console.log(arraysEqual(self.grid[0][y].a[0].polyShape,self.grid[2][y].a[0].polyShape))
			*/
			if (!equivalency(self.grid[0][y],self.grid[2][y]))
				tempSymmetry = false;
		}
		if (tempSymmetry) 
			symmetric.push("vertical");
		// Horizontal line of symmetry.
		var tempSymmetry = true;
		for (var x = 0; x < maxG; x++) {
			/*console.log("Horizontal")
			console.log(x+" :: "+0)
			console.log(self.grid[x][0])
			console.log(x+" :: "+2)
			console.log(self.grid[x][2])
			console.log(equivalency(self.grid[x][0],self.grid[x][2]));
			console.log(arraysEqual(self.grid[x][0].a[0].polyShape,self.grid[x][2].a[0].polyShape))
			*/
			if (!equivalency(self.grid[x][0], self.grid[x][2])) {
				tempSymmetry = false;
			}
		}
		if (tempSymmetry) 
			symmetric.push("horizontal");
		// Increasing Diagonal line of symmetry.
		var tempSymmetry = true;
		for (var x = 0, y = 1; y < maxG ;x++,y++) {
			/*console.log("Decreasing Diagonal")
			console.log(x+" :: "+y)
			console.log(self.grid[x][y])
			console.log((x+1)+" :: "+(y-1))
			console.log(self.grid[x+1][y-1])
			console.log(equivalency(self.grid[x][y],self.grid[x+1][y-1]));
			console.log(arraysEqual(self.grid[x][y].a[0].polyShape,self.grid[x+1][y-1].a[0].polyShape))
			*/
			if (!equivalency(self.grid[x][y],self.grid[x+1][y-1]))
				tempSymmetry = false;
		}
		if (!equivalency(self.grid[0][maxG-1],self.grid[maxG-1][0]))
			tempSymmetry = false;
		if (tempSymmetry) 
			symmetric.push("decreasingDiagonal");
		// Decreasing Diagonal line of symmetry.
		var tempSymmetry = true;
		for (var x = 0, y = 1; y >= 0 ;x++,y--) {
			/*console.log("Increasing Diagonal")
			console.log(x+" :: "+y)
			console.log(self.grid[x][y])
			console.log((x+1)+" :: "+(y+1))
			console.log(self.grid[x+1][y+1])
			console.log(equivalency(self.grid[x][y],self.grid[x+1][y+1]));
			console.log(arraysEqual(self.grid[x][y].a[0].polyShape,self.grid[x+1][y+1].a[0].polyShape))
			*/
			if (!equivalency(self.grid[x][y],self.grid[x+1][y+1]))
				tempSymmetry = false;
		}
		/*console.log("Increasing Diagonal")
		console.log(0+" :: "+0)
		console.log(self.grid[0][0])
		console.log(2+" :: "+2)
		console.log(self.grid[2][2])
		console.log(equivalency(self.grid[0][0],self.grid[2][2]));
		console.log(arraysEqual(self.grid[0][0].a[0].polyShape,self.grid[2][2].a[0].polyShape))
		*/
		if (!equivalency(self.grid[0][0],self.grid[maxG-1][maxG-1]))
			tempSymmetry = false;
		//console.log("ts: "+ tempSymmetry);
		if (tempSymmetry) 
			symmetric.push("increasingDiagonal");
		// Rotational symmetries
	
		return symmetric;
	}
	console.log("Initial identified symmetries: " +symmetryChecker());
	if (self.patternType[2]!=0) 
		self.symmetry = symmetryChecker();
	else
		self.symmetry = [];
	//console.log("s.sym.length: "+self.symmetry.length);
	//console.log("s.sym: "+self.symmetry);
	//
	// location of answer
	// _Capital V_ : Contains the properties of the correct answer
	// _Lowercase v_ : Contains the location on the grid of the correct answer
	// Non bottom right locations are arguably more complex, for english speakers.
	if (self.isBinary) {
		if (self.symmetry.indexOf("decreasingDiagonal")>=0) 
			console.warn("Potentially graphically ambiguous matrix")
		self.v = [maxG-1,maxG-1];
		// This can be subsequently shuffled to be anywhere, but the form needs to be built around it first.
		// May need to symmetry check after shuffling.
	} else if (self.symmetry.length > 0) {
		validVVArray = [];
		for (var i = 0; i < maxG; i++) {
			validVVArray[i] = [];
			for (var j = 0; j < maxG; j++) {
				validVVArray[i].push(j);
			}
		}
		if (maxG == 3) {
			// if maxG == 2 or 4, then the line of symmetry passes between elements.
			// and all elements have another element that defines them, according to the symmetry.
			//console.log("1. validVVArray: ");
			//console.log(returnStringArray(validVVArray));
			if (self.symmetry.indexOf("horizontal")>=0) {
				validVVArray[1] = [];
			}
			//console.log("2. validVVArray: ");
			//console.log(returnStringArray(validVVArray));
			if (self.symmetry.indexOf("vertical")>=0) {
				for (var i = 0; i < validVVArray.length; i++) {
					validVVArray[i].splice(1,1);
				}
			}
			//console.log("3. validVVArray: ");
			//console.log(returnStringArray(validVVArray));
			if (self.symmetry.indexOf("decreasingDiagonal")>=0) {
				for (var i = 0; i < validVVArray.length; i++) {
					validVVArray[i].splice(i,1);
				}
			}
			//console.log("4. validVVArray: ");
			//console.log(returnStringArray(validVVArray));
			if (self.symmetry.indexOf("increasingDiagonal")>=0) {
				for (var i = 0; i < validVVArray.length; i++) {
					validVVArray[i].splice(validVVArray-i-1,1);
				}
			}
			//console.log("5. validVVArray: ");
			//console.log(returnStringArray(validVVArray));
		}
		var tempCounter = 0;
		for (var i = 0; i < validVVArray.length; i++) {
			for (var j = 0; j < validVVArray[i].length; j++) {
				tempCounter ++;
			}
		}
		tempVval = Math.floor(Math.random()*tempCounter);
		tempCounter = 0;
		loop1:
			for (var i = 0; i < validVVArray.length; i++) {
				for (var j = 0; j < validVVArray[i].length; j++) {
					//console.log(tempCounter+" :: "+tempVval);
					if (tempCounter == tempVval) {
						self.v = [i,j];
						break loop1;
					}
					tempCounter ++;
				}
			}
	} else {
		self.v = [Math.floor(Math.random()*maxG),Math.floor(Math.random()*maxG)];
	}
	//
	//console.log(self.v)
	propertyStorage[3].push(self.v);
	self.VV = self.grid[self.v[0]][self.v[1]];	
	//console.log(self.VV.diceNum);
	console.log("Grid: ");
	console.log(self.grid)
	//
	/*function diagonal(A, B, pos) {
		// diagonal (a,b,pos) returns true if a and b are on the same positive or negative diagonal
		// pos is a multiplier defining whether the diagonal checked is positive or negative.
		if (arraysEqual(A,B)) {
			return true;
		}
		for (var x = 1; x < maxG; x++) {
			if ((A[0]+pos*x)%maxG == B[0] && (A[1]+x)%maxG == B[1]) {
				return true;
			}
		}
		return false;
	}*/
	// Visibility
	// code that determines which matrix elements are required for working out the answer for
	// distributions of 3 and 2.
	self.vis = [];
	self.layoutsUsed = [];
	self.visArray = [];
	for (var k = 1; k<=4; k++) {
		if (self.gridLayout[0] == k) {
			self.layoutsUsed.push(k);
		}
		for (var z = 0; z < self.noAnnuli; z++) {
			//console.log("K: "+k+" lay.push: "+self.gridLayout[z+1].indexOf(k));
			if (self.gridLayout[z+1].indexOf(k) >= 0) {
				self.layoutsUsed.push(k);
				break;
			}
		}
	}
	//console.log("s.lU: "+self.layoutsUsed);
	function invisible() {
		//requires self.visArray.length == 2 (but can also be 3 because of code structure: do...while (not invis))
		if (self.visArray.length != 2 && self.visArray.length != 3) {
			console.warn ("Invisible() called on self.visArray.length != 2 OR 3; self.visArray: "+ self.visArray);
		}
		var invis = [];
		for (var k = 0; k < 2; k++) {
			switch(self.visArray[0][k]) {
				case 0:
					switch(self.visArray[1][k]) {
						case 0:
							invis[k] = 0;
							break;
						case 1:
							invis[k] = 2;
							break;
						case 2:
							invis[k] = 1;
							break;
					}
					break;
				case 1:
					switch(self.visArray[1][k]) {
						case 0:
							invis[k] = 2;
							break;
						case 1:
							invis[k] = 1;
							break;
						case 2:
							invis[k] = 0;
							break;
					}
					break;
				case 2:
					switch(self.visArray[1][k]) {
						case 0:
							invis[k] = 1;
							break;
						case 1:
							invis[k] = 0;
							break;
						case 2:
							invis[k] = 2;
							break;
					}
					break;
			}
		}
		return invis;
	}
	// ### Calculate Minimum Unconcealed ###
	function requiredVisSet () {
		// This function returns a list of coordinates that form the remaining required set.
		// This function assumes the following:
		// self.layoutsUsed.length > 0
		// self.visArray.length >= 2 ???
		//
		//console.log ("LayoutsUsed: "+self.layoutsUsed);
		//console.log("Running: RequiredVisSet");
		//console.log ("VisArray: "+self.visArray);
		//console.log("0");
		var fullSet = [];
		for (var x = 0; x < maxG; x++) {
			fullSet[x] = [];
			for (var y = 0; y < maxG; y++) {
					fullSet[x][y] = 0;
			}
		}
		
		// console output showing the full set of visible items and how required they are.
		function printFullSet () {
			var tempArray = [];
			for (var y = 0; y < maxG; y++) {
				tempArray[y] = [];
			}
			for (var x = 0; x < maxG; x++) {
				for (var y = 0; y < maxG; y++) {
					tempArray[y][x] = fullSet[x][y];
				}
			}
			for (var y = 0; y < maxG; y++) {
				console.log("fullSet[y = "+y+"]: "+ tempArray[y]);
			}
		}
		//printFullSet();
		//console.log("1");
		// array sequenceNeeded is used to make sure that each attribute layout is sufficiently represented
		// in the visible matrix to enable the test item to be solved.
		var sequenceNeeded = [false,false,false,false];
		for (var k = 0; k < self.layoutsUsed.length; k++) {
			sequenceNeeded[self.layoutsUsed[k]-1] = true;
		}
		var tempBool = true;
		//console.log("AAA");
		// increments elements of the matrix according to need.
		// Horizontal (well, uses the variable X)
		for (var x = 0; x < maxG; x++) {
			tempBool = true;
			for (var k = 0, counter = 0; k < self.visArray.length; k++) {
				if (self.visArray[k][0] == x) {
					//console.log("AAB. x: "+x+" k: "+k);
					tempBool = false;
					counter++;
				} 
				if (counter > 1) {
					sequenceNeeded[0] = false;
				}
			}
			if (tempBool && self.layoutsUsed.indexOf(1) >= 0) {
				//console.log("AAC");
				for (var y = 0; y < maxG; y++) {
					fullSet[x][y] ++;
					//console.log("FS[x = "+x+"][y = "+y+"]: " + fullSet[x][y]);
				}
			}
		}
		//printFullSet();
		//console.log("2");
		// Vertical (well, uses the variable Y)
		for (var y = 0; y < maxG; y++) {
			tempBool = true;
			for (var k = 0, counter = 0; k < self.visArray.length; k++) {
				if (self.visArray[k][1] == y) {
					tempBool = false;
					counter++;
				}
				if (counter > 1) {
					sequenceNeeded[1] = false;
				}
			}
			if (tempBool && self.layoutsUsed.indexOf(2) >= 0) {
			//console.log("counter: "+ counter+" sN[1]: "+sequenceNeeded[1]);
				for (var x = 0; x < maxG; x++) {
					fullSet[x][y] ++;
				}
			}
		}
		//printFullSet();
		//console.log("3");
		// Diagonal 1
		for (var i = 0; i < maxG; i++) {
			tempBool = true;
			//checkVA:
			for (var k = 0, counter = 0; k < self.visArray.length; k++) {
				for (var x = i, y = 0, n = 0; n < maxG; n++) {
					var temp = [x,y] 
					if (arraysEqual(self.visArray[k],temp)) {
						tempBool = false;
						counter++;
					}
					x = (x+1)%maxG;
					y = (y+1)%maxG;
				}
				if (counter > 1) {
					sequenceNeeded[2] = false;
				}
			}
			if (tempBool && self.layoutsUsed.indexOf(3) >= 0) {
			//console.log("counter: "+ counter+" sN[2]: "+sequenceNeeded[2]);
				for (var x = i, y = 0, n = 0; n < maxG; n++) {
					//console.log("x: "+x+" y: "+y+ " n: " +n)
					fullSet[x][y] ++;
					x = (x+1)%maxG;
					y = (y+1)%maxG;
				}
			}
		}
		//printFullSet();
		//console.log("4");
		// Diagonal 2
		for (var i = 0; i < maxG; i++) {
			tempBool = true;
			//checkVA:
			for (var k = 0, counter = 0; k < self.visArray.length; k++) {
				for (var x = 0, y = i, n = 0; n < maxG; n++) {
					var temp = [x,y]
					if (arraysEqual(self.visArray[k],temp)) {
						tempBool = false;
						counter++;
					}
					//console.log("["+x+","+y+"]");
					x = (x+1)%maxG;
					y = (y+maxG-1)%maxG;
				}
				if (counter > 1) {
					sequenceNeeded[3] = false;
				}
			}
			if (tempBool && self.layoutsUsed.indexOf(4) >= 0) {
			//console.log("counter: "+ counter+" sN[3]: "+sequenceNeeded[3]);
				for (var x = 0, y = i, n = 0; n < maxG; n++) {
					fullSet[x][y] ++;
					x = (x+1)%maxG;
					y = (y+maxG-1)%maxG;
				}
			}
		}
		//printFullSet();
		//console.log("SN 0");
		//console.log(sequenceNeeded[0]);
		// 4 scans through each element of sequenceNeeded 
		// to make sure everything is present and correct.
		// The structures of these loops are distinct from one another.
		if (sequenceNeeded[0]) {
			for (var x = 0; x < maxG; x++) {
				var oneMoreNeeded = false;
				for (var k = 0; k < self.visArray.length; k++) {
					if (self.visArray[k][0] == x) {
						//console.log("AAB. x: "+x+" k: "+k);
						oneMoreNeeded = true;
						break;
					}
				} 
				if (oneMoreNeeded) {
					//console.log("AAC");
					for (var y = 0; y < maxG; y++) {
						fullSet[x][y] ++;
						//console.log("FS[x = "+x+"][y = "+y+"]: " + fullSet[x][y]);
					}
				}
			}
		}
		//printFullSet();
		//console.log("SN 1");
		if (sequenceNeeded[1]) {
			for (var y = 0; y < maxG; y++) {
				var oneMoreNeeded = false;
				for (var k = 0; k < self.visArray.length; k++) {
					if (self.visArray[k][1] == y) {
						//console.log("AAB. x: "+x+" k: "+k);
						oneMoreNeeded = true;
						break;
					}
				} 
				if (oneMoreNeeded) {
					//console.log("AAC");
					for (var x = 0; x < maxG; x++) {
						fullSet[x][y] ++;
						//console.log("FS[x = "+x+"][y = "+y+"]: " + fullSet[x][y]);
					}
				}
			}
		}
		//printFullSet();
		//console.log("SN 2");
		if (sequenceNeeded[2]) {
			for (var i = 0; i < maxG; i++) {
				var oneMoreNeeded = false;
				vAloop:
				for (var k = 0; k < self.visArray.length; k++) {
					for (var x = i, y = 0, n = 0; n < maxG; n++) {
						var temp = [x,y] 
						if (arraysEqual(self.visArray[k],temp)) {
							oneMoreNeeded = true;
							break vAloop;
						}
						x = (x+1)%maxG;
						y = (y+1)%maxG;
					}
				}
					//console.log("AAC");
				if (oneMoreNeeded) {
					for (var x = i, y = 0, n = 0; n < maxG; n++) {
						fullSet[x][y] ++;
						x = (x+1)%maxG;
						y = (y+1)%maxG;
						//console.log("FS[x = "+x+"][y = "+y+"]: " + fullSet[x][y]);
					}
				}
			}
		}
		//printFullSet();
		//console.log("SN 3");
		if (sequenceNeeded[3]) {
			for (var i = 0; i < maxG; i++) {
				var oneMoreNeeded = false;
				vAloop2:
				for (var k = 0; k < self.visArray.length; k++) {
					for (var x = 0, y = i, n = 0; n < maxG; n++) {
						var temp = [x,y] 
						if (arraysEqual(self.visArray[k],temp)) {
							oneMoreNeeded = true;
							break vAloop2;
						}
						x = (x+1)%maxG;
						y = (y+maxG-1)%maxG;
					}
				}
				//console.log("counter: "+ counter+" sN[0]: "+sequenceNeeded[0]);
					//console.log("AAC");
				if (oneMoreNeeded) {
					for (var x = 0, y = i, n = 0; n < maxG; n++) {
						fullSet[x][y] ++;
						x = (x+1)%maxG;
						y = (y+maxG-1)%maxG;
						//console.log("FS[x = "+x+"][y = "+y+"]: " + fullSet[x][y]);
					}
				}
			}
		}
		// Fill the grid until only self.missingIcons+1 icons are hidden. (? is always hidden!)
		if (self.visArray.length < maxG*maxG-(self.missingIcons+1)) {
			for (var x = 0; x < maxG; x++) {
				for (var y = 0; y < maxG; y++) {
					fullSet[x][y]++;
				}
			}
		}
		//printFullSet();
		fullSet[self.v[0]][self.v[1]] = -1;
		var tempList = []
		if (self.visArray.length == 2) {
			var tempLoc = invisible();
			fullSet[tempLoc[0]][tempLoc[1]] = -2;
		}
		for (var k = 0; k < self.visArray.length; k++) {
			fullSet[self.visArray[k][0]][self.visArray[k][1]] = -3;
		}
		//console.log("FF");
		//printFullSet();
		// if any location on the grid satisfies more requirements only those locations will be returned.
		//
		var maxValue = 0;
		// set maxValue to the highest need on the grid
		for (var i = 0; i < maxG; i++)
    		for (var j = 0; j < maxG; j++)
        		if (fullSet[i][j] > maxValue)
          			maxValue = fullSet[i][j];
        //console.log("maxV: "+maxValue);
        // continue adding elements to the visible set until maxValue = 0
		if (maxValue > 0) {
			for (var x = 0; x < maxG; x++) {
				for (var y = 0; y < maxG; y++) {
					if (fullSet[x][y] == maxValue) {
						var tempIcon = [x,y];
						tempList.push(tempIcon);
					}
				}
			}
		} 
		//console.log("tempList: "+tempList);
		return tempList;
	}
	if (self.missingIcons > 0) {
		var tempList = requiredVisSet();
		while (tempList.length > 0) {
			var temp = Math.floor(Math.random()*tempList.length);
			self.visArray[self.visArray.length] = tempList[temp];
			tempList = requiredVisSet();
			//n.b. requiredVisSet() will run without making any additions!
		} 
	} else {
		for (var x = 0; x < maxG; x++) {
			for (var y = 0; y < maxG; y++) {
				self.visArray[self.visArray.length] = [x,y];
			}
		}
	}
	
	// alters the list of visible locations (self.visArray) into a grid of booleans determining visibility (self.vis)
	for (var i = 0; i < maxG; i++) {
		self.vis[i] = [];
		for (var j = 0; j < maxG; j++) {
			var tempbool = true;
			var temp = [i,j];
			//console.log(temp);
			for (var k = 0; k < self.visArray.length; k++) {
				//console.log(k+ ": "+self.visArray[k]);
				if (arraysEqual(self.visArray[k], temp)) {
					tempbool = false;
					k = self.visArray.length;
				}
			}
			if (!tempbool)
				self.vis[i][j] = true;
			else
				self.vis[i][j] = false;
		}
	}
	//console.log("e");

	// dasharray values
	// Discontinued due to disability issues, kept in code due to dependancies and incase it
	// becomes useful again in the future. Could be used for an attribute with 2 values for example.
	function dashing(dasharray,LW) {
		if (dasharray == 0) {
			return "none";
		} else if (dasharray == 1) {
			return ""+(LW*4)+",3";
		} else if (dasharray == 2) {
			return ""+LW+","+LW/2+"";
		}
	}
	// The answers
	// Number of answers
	
	self.answers = [];
	
	self.testItemAnswers = self.patternType[4];
	
	//console.log("s.tia: "+self.testItemAnswers+" : "+self.testItemAnswers.length);
	self.nAnswers = self.testItemAnswers.length+1;//+1;
	//var repAlt = false;
	// Error: answers the same as the correct answer could produce infinite loops.
	// This will happen whenever an element of numberAnswerArray in orders.js = 0, and includeAnnulus is false.
	//if (self.numberAnswerArray.indexOf(0) > 0 &&)
	//	throw new Error("numberAnswerArray contains 0, and includeAnnuli is false. indexOf(0): "+self.numberAnswerArray.indexOf(0)+" iA: "+self.includeAnnuli);
	//
	//Loop attempting to make distractors to be presented along with the correct answer.
	// also known as response alternatives depending on the literature viewed
	// Distractors must be:
	// different from the correct answer (self.VV)
	// different from each other
	// 
	//
	// Distractors should be:  ***(not yet implemented/though about sufficiently)***
	// Plausible if possible
	// Have an appropriate form or structure
	// Have a controlable Delta
	// Fit a specifiable set of rules
	for (var i = 0, tempAnswersCounter = 0, loopCounter = 0; i < self.testItemAnswers.length; i++) {
		do {
			// booleans to determine if any two answers are the same as each other, or if they are the same as self.VV
			//  at the end of the loop, if they are evaluated as true then the loop repeats, attempting to generate a distractor again.
			var repeatAnswers = false;
			var duplicateAnswer = false;
			//repAlt = false;
			//console.log ("ANSWER::: "+ i);
			/*do {
				tempXY = [Math.floor(Math.random()*maxG),
						  Math.floor(Math.random()*maxG)];
						  	
			} while (tempXY == self.v);*/
			//console.log("before diceNum call");
			//console.log(self.numberGridArray[0][2][1][0]+", "+self.numberGridArray[0][2][1][1]+", "+self.numberGridArray[0][2][1][2]+", "+self.numberGridArray[0][2][1][3]);
			//console.log(self.numberGridArray[0][2][2][0]+", "+self.numberGridArray[0][2][2][1]+", "+self.numberGridArray[0][2][2][2]+", "+self.numberGridArray[0][2][2][3]);
			
			//var tempXY = self.v;
			//
			// JSON containing the generated distractor's attribute values
			var tempIcon = [];
			for (var z = 0; z < self.noAnnuli; z++) {
				tempIcon[z] = {"polyForm": selectNewForm(i, z),
							   "shade": selectNewColour(i, z),
							   "dashForm": selectNewDash(i, z),
							   "rotation": selectNewRotation(i, z),
							   "lineWidth": z};
			}
			self.answers[i] = {"scale": selectNewScale(i),//self.grid[self.v[0]][self.v[1]].scale,
							   "a": tempIcon,
							   "diceNum": selectNewDice(i)};
			// format: [S,[C,F,R],[C,F,R]]
			//console.log("after diceNum call");
			//console.log(self.numberGridArray[0][2][1][0]+", "+self.numberGridArray[0][2][1][1]+", "+self.numberGridArray[0][2][1][2]+", "+self.numberGridArray[0][2][1][3]);
			//console.log(self.numberGridArray[0][2][2][0]+", "+self.numberGridArray[0][2][2][1]+", "+self.numberGridArray[0][2][2][2]+", "+self.numberGridArray[0][2][2][3]);
			// 
			// fills in the derivative attribute values of the distractor 
			// (those determined or influenced by the other attribute values)
			for (var z = 0; z < self.noAnnuli; z++) {
				self.answers[i].a[z].lineWidth = z;
				self.answers[i].a[z].dasharray = dashing(self.answers[i].a[z].dashForm, 
														self.answers[i].a[z].lineWidth);
				self.answers[i].a[z].polyShape = chooseRegPolyShape(self.answers[i].a[z].polyForm);
				if (z>0)
					self.answers[i].a[z].strokeColour = chooseStrokeColour(self.answers[i].a[z].shade,
																		   self.answers[i].a[z-1].shade);
				else
					self.answers[i].a[z].strokeColour = chooseStrokeColour(self.answers[i].a[z].shade,"White");
			}
			// dublicatedA is used in a console warning to help diagnostics
			// it helps identify which two distractors are involved when duplicate answers occur
			// n.b. when more than two are involved the console warning sometimes misses the others out.
			var duplicatedA = -1;
			//console.log("counter1, i:"+ i);
			//
			// checks if any two distractors are the same
			// if they insist on being the same it will give up after 30 attempts and continue with the rest of the code
			for (var j = 0; j < i; j++) {
				//console.log("counter2, j: "+ j);
				if (equivalency(self.answers[j],self.answers[i])) {
					repeatAnswers = true;
					duplicatedA = j; 
					tempAnswersCounter++;
					break;
				}
			}
			//console.log(self.answers[i])
			// checks if the generated distractor is the same as the correct answer
			// if they insist on the same it will give up after 1000 attempts and throw an error.
			if (equivalency(self.VV,self.answers[i]))
				duplicateAnswer = true;
			else
				duplicateAnswer = false;
			//console.log("tempAnswersCounter = "+tempAnswersCounter);
			//console.log(tempAnswersCounter);
			// warning incase duplicate distractors are produced; but allows the test item to continue to be generated
			// is bad if it happens, but not fatal to the test.
			if (tempAnswersCounter == 30 && !duplicateAnswer) {
				console.warn("Repeat Answers: "+i+" and "+duplicatedA);
				
				/*console.log (self.answers[i].a[0].shade);
				console.log (self.answers[i].a[0].polyShape);
				console.log (self.answers[i].a[0].dasharray);
				console.log (self.answers[i].scale);
				console.log ("----");
				console.log (self.answers[duplicatedA].a[0].shade);
				console.log (self.answers[duplicatedA].a[0].polyShape);
				console.log (self.answers[duplicatedA].a[0].dasharray);
				console.log (self.answers[duplicatedA].scale);*/
			}
			//console.log("self.VV");
			//console.log(JSON.stringify(self.VV));
			
			console.log("self.VV.diceNum:");
			console.log(returnStringArray(self.VV.diceNum));
			
			//console.log(self.VV.diceNum.toString());
			//console.log("Generated distractor:");
			//console.log(JSON.stringify(self.answers[i]));
			
			console.log("Generated distractor.diceNum:");
			console.log(returnStringArray(self.answers[i].diceNum));
			
			//console.log(self.answers[i].diceNum.toString());
			//console.log("GRID")
			//console.log(JSON.stringify(self.grid));
			// Escape incase errors mean the code is incapable of creating different distractors,
			// incapable of differentiating different distractors,
			// incapable of keeping the answer unique
			// or some weird bug involving the answer changing...
			// prevents the test freezing in these circumstances.
			// if allowed to happen, having a distractor the same as the correct answer would be
			// fatal to the test item.
			if (loopCounter >= 1000) {
				throw new Error("Error! - loopCounter: "+loopCounter+" - Check order.js first");
				// Likely causes: order.js, generation or distinguishing.
			}
			// increment the number of attempts to make a distractor by 1.
			console.log("****----****LOOP****----****")
			loopCounter ++;
		} while ((repeatAnswers && tempAnswersCounter < 30) || duplicateAnswer) 
		/*if (repAlt)
			console.warn("Duplicate Alterations!");*/
		// a contains the annuli.
	}
	function selectNewScale(i) {
		var val = -10;
		for (var m = 0; m < self.availableScales.length; m++) {
			if (self.availableScales[m] == self.grid[self.v[0]][self.v[1]].scale) 
				val = m;
		}
		if (val == -10)
			console.warn("Error indexing self.v's Scale");
		val+=self.testItemAnswers[i][0];
		val%=self.availableScales.length;
		return self.availableScales[val];
	}
	function selectNewDice(i) {
	// attempts to generate new number values for distractors.
	// the addition of logic gates and thus graphics with multiple binary values has
	// required substantial changes to this function, and to the structure of test item specification.
		//console.log (newDiceVal)
		//console.log("i: "+i);
		//console.log(self.patternType[2][0])
		// generally works by setting newDiceVal to the value of the answer's number attribute.
		// then altering it by the appropriate value in self.numberAnswerArray
		switch (self.patternType[2][0]) {
			case 3:		
			// simple addition
				//console.log("SADD");
				var newDiceVal = self.VV.diceNum;
				console.log(newDiceVal);
				if ((Object.prototype.toString.call( newDiceVal ) === '[object Array]')) {
					for (var x = 0; x < newDiceVal.length; x++) {
						newDiceVal[x]+=self.numberAnswerArray[i][x];
					}
				} else {
					newDiceVal+=self.numberAnswerArray[i];
				}
				var temp = maxG*maxG+1;
				newDiceVal=(newDiceVal+temp)%(temp*2)-temp;
				break;
			// AND
			case 4:
			// NAND
			case 5:
			// OR
			case 6:
			// XOR
			case 7:
			// NOR
			case 8:
			// XNOR
			case 9:
				// all logic gates have distractors generated in the same way
				// = would assign newDiceVal as pointing to the same object self.VV.diceNum points at
				// newDiceVal needs to clone self.VV.diceNum
				var newDiceVal = [];
				for (var r = 0; r < self.VV.diceNum.length; r++) {
					newDiceVal[r] = self.VV.diceNum[r];
				}
				console.log("newDieVal: "+returnStringArray(newDiceVal))
				//console.log("numberAnswerArray: "+returnStringArray(self.numberAnswerArray))
				for (var r = 0; r < newDiceVal.length; r++) {
					newDiceVal[r]+=self.numberAnswerArray[i][r];
					newDiceVal[r]=Math.abs(newDiceVal[r]%2);
				}
				console.log("seed: "+returnStringArray(self.numberAnswerArray[i]));
				console.log("Gen: "+returnStringArray(newDiceVal));
				break;
			//case 5:
				// XOR and AND
				/*var newDiceVal = [];
				newDiceVal[0] = self.VV.diceNum[0];
				newDiceVal[1] = self.VV.diceNum[1].slice();
				newDiceVal[2] = self.VV.diceNum[2].slice();
				for (var z = 0; z < newDiceVal[1].length; z++) { 
				//console.log(i*3+z);
					if (z == self.numberAnswerArray[i]%newDiceVal[1].length) { 
					//console.log("z==a")
						newDiceVal[1][z] = 1;
						newDiceVal[2][z] = 1;
					} else { 
						newDiceVal[1][z] = 0;
						newDiceVal[2][z] = 0;
					}
				//console.log("aaa111");
				//console.log(self.numberGridArray[0][2][1][0]+", "+self.numberGridArray[0][2][1][1]+", "+self.numberGridArray[0][2][1][2]+", "+self.numberGridArray[0][2][1][3]);
				//console.log(self.numberGridArray[0][2][2][0]+", "+self.numberGridArray[0][2][2][1]+", "+self.numberGridArray[0][2][2][2]+", "+self.numberGridArray[0][2][2][3]);
				//newDiceVal[1][z]=self.numberAnswerArray[(i+z)%self.numberAnswerArray.length];
					//newDiceVal[1][z]=Math.abs(newDiceVal[1][z]%2);
					//newDiceVal[2][z]=self.numberAnswerArray[(i+z)%self.numberAnswerArray.length];
					//newDiceVal[2][z]=Math.abs(newDiceVal[2][z]%2);
				}
				//console.log("b");
				//console.log(newDiceVal[1][0]+", "+newDiceVal[1][1]+", "+newDiceVal[1][2]+", "+newDiceVal[1][3]);
				//console.log(newDiceVal[2][0]+", "+newDiceVal[2][1]+", "+newDiceVal[2][2]+", "+newDiceVal[2][3]);
				break;*/
			default:
			// for test items that do not vary diceNum
			// should only be altered in these cases for test items where obviously
			// incorrect distractors are required (which should be rare and 
			// is currently done in other ways anyway).
				var newDiceVal = self.VV.diceNum;
				break;
		}
		//console.log("c");
		//console.log(newDiceVal[1][0]+", "+newDiceVal[1][1]+", "+newDiceVal[1][2]+", "+newDiceVal[1][3]);
		//console.log(newDiceVal[2][0]+", "+newDiceVal[2][1]+", "+newDiceVal[2][2]+", "+newDiceVal[2][3]);
		return newDiceVal;
	}
	function selectNewColour(i, z) {
		var val = -10;
		for (var m = 0; m < self.availableColours.length; m++) {
			if (self.availableColours[m] == self.grid[self.v[0]][self.v[1]].a[z].shade) 
				val = m;
		}
		if (self.testItemAnswers[i][z+1][0] > self.availableColours.length)
			console.warn("Odd newColour value");
		if (val == -10)
			console.warn("Error indexing self.v's Colour");
		val+=self.testItemAnswers[i][z+1][0];
		val%=self.availableColours.length;
		return self.availableColours[val];
	}
	function selectNewDash(i, z) {
		return "none";
	}
	function selectNewForm(i, z) {
		var val = -10;
		for (var m = 0; m < self.availableSides.length; m++) {
			if (self.availableSides[m] == self.grid[self.v[0]][self.v[1]].a[z].polyForm) 
				val = m;
		}
		if (val == -10)
			console.warn("Error indexing self.v's Form");
			//console.log(self.testItemAnswers[i]);
			//console.log(self.testItemAnswers[i][z+1]);
			//console.log("#Annuli: "+self.noAnnuli)
			//console.log(z+1)
			//console.log(self.testItemAnswers[i][z+1][1])
		val+=self.testItemAnswers[i][z+1][1];
		val%=self.availableSides.length;
		return self.availableSides[val];
	}
	function selectNewRotation(i, z) {
		var val = -10;
		for (var m = 0; m < self.availableRotations.length; m++) {
			if (self.availableRotations[m] == self.grid[self.v[0]][self.v[1]].a[z].rotation) 
				val = m;
		}
		if (val == -10)
			console.warn("Error indexing self.v's Rotation");
		val+=self.testItemAnswers[i][z+1][2];
		val%=self.availableRotations.length;
		return self.availableRotations[val];
	}
	
	function xyCalc(x,y,layout) {
		// Takes the x and y values, together with the layout to give 
		// a value from 0-2, determining the value of the attribute this
		// function is called by.
		//console.log(x+", "+y+", "+n);
		if (layout == 0) {
			var xc = 0;
			var yc = 0;
			//console.log("layout = 0:"+layout+"xc: "+xc);
		} 
		
		switch (layout) {
			case 1:
				var xc = (x+self.shuffle[0])%maxG;
				var yc = 0;
				//console.log("layout = 0:"+layout+"xc: "+xc);
				break;
			case 2:
				var xc = 0;
				var yc = (y+self.shuffle[1])%maxG;
				break;
			case 3:
				var xc = (x+self.shuffle[0])%maxG;
				var yc = (y+self.shuffle[1])%maxG;
				break;
			case 4:
				var xc = (maxG-1)-(x+self.shuffle[0])%maxG;
				var yc = (y+self.shuffle[1])%maxG;
				break;
		}

		//console.log(xc+", "+yc+", "+nc);
		//console.log("equ: "+self.equation);
		
		var tempXYN = (xc+yc)%maxG;
		if (self.patternType[2][0] == 2) {
			if (self.patDupIcon == 0 && tempXYN == 1)
				tempXYN = 0;
			else if (self.patDupIcon == 1 && tempXYN == 1)
				tempXYN = 2;
		}
		//console.log(tempXYN);
		return tempXYN;
	}
	function regPolySides(x,y,n) {
		if (self.usingRegPolyShape[n]>0) {
			switch (xyCalc(x,y,self.usingRegPolyShape[n])) {
				case 0: return 3;
				case 1: return 4;
				case 2: return 5;
				case 3: return 6;
				case 4: return 7;
			}
		}
		return self.defaultPolySides[n];
	}
	function regPolyShape (x,y,n) {
		return chooseRegPolyShape (regPolySides(x,y,n))
	}
	function chooseRegPolyShape (sides) {
		var shape = [];
		if (sides == "pentagon") {
			for (var j = 0; j < 5;j++) {
				shape.push(((j * 2) % 5)/5-1/10);
			}
			return shape;
		}
		for (var j = 0; j < sides;j++) {
			shape.push(j/sides);
		}
		return shape;
	}
	/*function regPolyShape (x,y,n) {
		var shape = [];
		for (var j = 0; j < regPolySides(x,y,n); j ++) {
			shape.push(((self.random[j]+j*9)/10)/regPolySides(x,y,n));
		}
		return shape;
	}*/
	function shade (x,y,n) {
		if (self.usingColour[n]>0) {
			return self.availableColours[xyCalc(x,y,self.usingColour[n])];
		} 
		return self.basicShade[n];
	}
	function strokeColour(x,y,n) {
		if (n>0)
			return chooseStrokeColour(shade (x,y,n),shade (x,y,n-1));
		else
			return chooseStrokeColour(shade (x,y,n),self.availableColours[0]);
	}
	function chooseStrokeColour (colour1, colour2) {
		if (colour2 == self.availableColours[0]) { 
			if (colour1 == self.availableColours[2])
				return self.availableColours[1];
			else
				return self.availableColours[2];
		} else {
			if (colour1 == self.availableColours[2] && colour2 == self.availableColours[2])
				return self.availableColours[1];
			else if (colour1 == self.availableColours[1] && colour2 == self.availableColours[2] || 
					colour2 == self.availableColours[1] && colour1 == self.availableColours[2])
				return self.availableColours[0];
			else if (colour1 == self.availableColours[0] && colour2 == self.availableColours[2])
				return self.availableColours[1];
			else
				return self.availableColours[2];
		}
	}
	this.chooseStrokeColour = chooseStrokeColour;
	function scale (x,y,z) {
		if (self.usingScale>0) {
			return self.availableScales[xyCalc(x,y,self.usingScale)]
		}
		return 1;
	}
	function choosedasharray(x,y,z) {
		if (self.usingDashes[z]>0) {
			return xyCalc(x,y,self.usingDashes[z]);
		}
		return 0;
	}
	function rotation (x,y,z) {
		if (self.usingRotation[z]>0) {
			return self.availableRotations[xyCalc(x,y,self.usingRotation[z])];
			/*if (self.rotDirection[z] == 0) {
				return (x/8+y/3);
			} else {
				return (x/3+y/8);
			}*/
		}
		return 0;
	}
	function offsetRotation (x,y,n) {
		if (regPolySides(x,y,n) != 0)
			return self.rotOffset/(1+n)-1/(regPolySides (x,y,n)*2);
		else
			return self.rotOffset/(1+n);
	}
	
	self.usingANYrot = [];
	for (var z = 0; z < self.noAnnuli; z++) {
		self.usingANYrot[z] = false;
	}
	for (var x = 0; x < self.answers.length; x++) {
		for (var z = 0; z < self.noAnnuli; z++) {
			if (self.answers[x].a[z].rotation > 0) {
				self.usingANYrot[z] = true;
			} 
		}
	}
}
