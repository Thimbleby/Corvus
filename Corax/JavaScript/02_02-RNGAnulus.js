function AnulusRNGQu(dif, maxDif) {
	var tempVal12 = Math.floor(Math.random()*2)+1;
	var bool12 = true;
	var tempVal34 = Math.floor(Math.random()*2)+3;
	var bool34 = true;
	
	var temp = annulusRuleArray[Math.floor(dif/maxDif)];
	
	var result = [];
	
	if (temp[0] == 1) {
		result[0] = tempVal12;
		bool12 = false;
	} else if (temp[0] == 2) {
		result[0] = tempVal34;
		bool34 = false;
	} else { 
		result[0] = 0;
	}
	for (var x = 1; x < temp.length; x++) {
		result[x] = [];
		if (temp[x][0] == 1 && bool12) {
			result[x][0] = tempVal12;
			bool12 = !bool12;
		} else if (temp[x][0] == 1) {
			result[x][0] = 2-tempVal12+1;
		} else if (temp[x][0] == 2 && bool34) {
			result[x][0] = tempVal34;
			bool34 = !bool34;
		} else if (temp[x][0] == 2) {
			result[x][0] = 4-tempVal34+3;
		} else {
			result[x][0] = 0;
		}
		if (temp[x][1] == 1 && bool12) {
			result[x][1] = tempVal12;
			bool12 = !bool12;
		} else if (temp[x][1] == 1) {
			result[x][1] = 2-tempVal12+1;
		} else if (temp[x][1] == 2 && bool34) {
			result[x][1] = tempVal34;
			bool34 = !bool34;
		} else if (temp[x][1] == 2) {
			result[x][1] = 4-tempVal34+3;
		} else {
			result[x][1] = 0;
		}
		if (temp[x][2] == 1 && bool12) {
			result[x][2] = tempVal12;
			bool12 = !bool12;
		} else if (temp[x][2] == 1) {
			result[x][2] = 2-tempVal12+1;
		} else if (temp[x][2] == 2 && bool34) {
			result[x][2] = tempVal34;
			bool34 = !bool34;
		} else if (temp[x][2] == 2) {
			result[x][2] = 4-tempVal34+3;
		} else {
			result[x][2] = 0;
		}
	}
	return result;
}
//console.log("difficulty :: Anulus Qu");
//console.log(difficulty + " :: " + returnStringArray(AnulusRNGQu(difficulty)));
			
function AnulusRNGAns(rule, noAns) {	
	//console.log("AnulusRNGAns");
	//console.log("Difficulty: "+dif+" |  Rule: "+returnStringArray(rule));
	//console.log("Number of Answers: "+noAns);
	//
	// count possible non-anomalous answers
	var count = 0;
	if (rule[0])
		count++;
	for (var An = 1; An < rule.length; An++) {
		for (var y = 0; y < rule[An].length; y++) {
			if (rule[An][y]) {
				count++;
			}  
		}
	}
	//console.log("rule count: "+count);
	if (count == 0)
		var noAnomalies = noAns;
	else if (count == 1)
		var noAnomalies = noAns - 2;
	else if (count == 2)
		var noAnomalies = noAns - 8;
	else
		var noAnomalies = 0;
	// count = 0: noA = noAns - 0
	// count = 1: noA = noAns - 2
	// count = 2: noA = noAns - 8
	// 1,1, 1,2, 2,1, 2,2, 0,1, 0,2, 1,0, 2,0
	
	// increase anomalous answers proportionally to difficulty
	//
	// maxDif = 10;
	// anomUpperBound = 0.6*MaxDif (inverted)
	// anulusUpperBound = 0.2*maxDif; // (inverted)
	noAnomalies = Math.max(/*Math.floor(noAns*((maxDif - anomUpperBound) - dif)/maxDif),*/ noAnomalies, 0);
	//console.log("noAnomalies: " + noAnomalies);

	// set tempArr to [0,[0,0,0]]
	// this is the default no anomalies, no rules yet.
	var tempArr = [];
	for (var y = 0; y < noAns; y++) {
		tempA = [];
		tempArr.push(tempA);
		tempArr[y].push(0);
		for (var An = 1; An < rule.length; An++) {
			tempA2 = [];
			tempArr[y].push(tempA2);
			for (var x = 0; x < rule[An].length; x++) {
				tempArr[y][An].push(0);
			}
		}
	}
	// MUST NOT BE ANY [0,[0,0,0]]s — Minimum necessary requirement for functioning
	// Anomalies dealt with further down
	
	// next generate as if no anomalies, but incorporate the rules
	//
	// make a table of each possible permutation of 0,1,2 per rule.
	
	var ansTable = [];
	if (count) {
		var ansTable = [[0],[1],[2]];
		for (var z = 1; z < count; z++) {
			var tempOldLength = 0;
			for (var y = 0; y < 3; y++) {
				var tempLength = ansTable.length;
				for (var x = tempOldLength; x < tempLength; x++) {
					if (y < 2)
						ansTable.push(JSON.parse(JSON.stringify(ansTable[x])));
					ansTable[x].push(y);
					//console.log(returnStringArray(ansTable));
				}
				tempOldLength = tempLength;
			}
		}
	}
	//console.log("Initial ansTable:");
	//console.log(returnStringArray(ansTable));
	// Expand ansTable entries to fit the standard format
	if (!rule[0]) {
		for (var x = 0; x < ansTable.length; x++) {
			// add 0 to the beginning of the array
			ansTable[x].unshift(0);
		}
	}
	for (var An = 1; An < rule.length; An++) {
		for (var y = 0; y < rule[An].length; y++) {
			if (!rule[An][y]) {
				for (var x = 0; x < ansTable.length; x++) {
					// add 0 to pos y of the array
					ansTable[x].splice(1+(An-1)*rule[An].length+y, 0, 0);
				}
			}
		}
	}
	//console.log("Expanded ansTable:")
	//console.log(returnStringArray(ansTable));
	 	
	
	// adds in anomalies, which enables situations where ansTable.length < noAns, including Identity
	// and could allow for any other situation that calls for anomalies, such as .
	if (ansTable.length != 0) {
		//var RNGAnomAdjust = Math.floor(Math.random()*(noAnomalies%ansTable.length));
		for (var x = 0; x < noAnomalies; x++) {
			var notUnique = true;
			var temploopcounter = 0;
			while (notUnique) {
				temploopcounter ++;
				// choose an item already in ansTable to 'edit'.
				tempAnom = JSON.parse(JSON.stringify(ansTable[Math.floor(Math.random()*ansTable.length)]));
				//console.log("tempAnom: "+tempAnom);
				// chooses an element to alter
				var tempAnomAlteredEle = Math.floor(Math.random()*tempAnom.length);
				//console.log("alteredEle: "+tempAnomAlteredEle)
				// Adds a single anomaly to that element.
				tempAnom[tempAnomAlteredEle] = Math.floor(Math.random()*2)+1;
				var tempChecker = true;
				for (var z = 0; z < ansTable.length; z++) {
					var tempbool = true;
					for (var m = 0; m < ansTable[z].length; m++) {
						if (ansTable[z][m] != tempAnom[m]) {
							tempbool = false;
							break;
						}
					}
					if (tempbool) {
						//console.log("tempbool"); 
						//console.log(returnStringArray(ansTable[z]));
						//console.log(returnStringArray(tempAnom));
						tempChecker = false;
						break;
					}
				}
				if (tempChecker) {
					ansTable.push(tempAnom);
					notUnique = false;	
				}
				if (temploopcounter > 150) {
					console.warn ("unique distractor generation failing; counter > "+temploopcounter);
					notUnique = true;
					break;
				}
			}
			
		}
	} else {
		for (var nA = 0; nA < noAnomalies; nA++) {
			var notUnique = true;
			var temploopcounter = 0;
			if (ansTable.length > 0) {
				while (notUnique) {
					temploopcounter ++;
					// choose the correct answer to 'edit'.
					var tALength = 1+(rule.length-1)*rule[1].length;
					var tempAnom = [];
					for (var x = 0; x < tALength; x++) {
						tempAnom.push(0);
					}
					// Adds a single anomaly to one element.
					tempAnom[Math.floor(Math.random()*tempAnom.length)] = Math.floor(Math.random()*2)+1;
					
					// check if this change is unique
					var tempChecker = true;
					for (var z = 0; z < ansTable.length; z++) {
						var tempbool = true;
						for (var m = 0; m < ansTable[z].length; m++) {
							if (ansTable[z][m] != tempAnom[m]) {
								tempbool = false;
								break;
							}
						}
						if (tempbool) {
							//console.log("tempbool"); 
							//console.log(returnStringArray(ansTable[z]));
							//console.log(returnStringArray(tempAnom));
							tempChecker = false;
							break;
						}
					}
					if (tempChecker) {
						ansTable.push(tempAnom);
						notUnique = false;	
					}
					if (temploopcounter > 150) {
						console.warn ("unique distractor generation failing (All distractors are anomalies); counter > "+temploopcounter);
						notUnique = true;
						break;
					}
				}
			} else {
				// choose the correct answer to 'edit'.
				var tALength = 1+(rule.length-1)*rule[1].length;
				var tempAnom = [];
				for (var x = 0; x < tALength; x++) {
					tempAnom.push(0);
				}
				// Adds a single anomaly to one element.
				tempAnom[Math.floor(Math.random()*tempAnom.length)] = Math.floor(Math.random()*2)+1;
				// push the anomaly
				ansTable.push(tempAnom);
			}
		}
		
	}
	//console.log("With Anom ansTable:")
	//console.log(returnStringArray(ansTable));
	// remove 0,0,0,0 (the correct answer);
	for (var x = 0; x < ansTable.length; x++) {
		var isAnswer = true;
		for (var y = 0; y < ansTable[x].length; y++) {
			if (ansTable[x][y])
				isAnswer = false;
		}
		if (isAnswer) {
			ansTable.splice(x, 1);
			break;
		}
	}
	//console.log("ansTable: "+ returnStringArray(ansTable));
	// Select noAns ans from ansTable.
	if (ansTable.length < noAns)
		console.warn ("ansTable shortness problem observed");
	
	// This handles situations where the ansTable.length > noAns
	var itemDistractors = [];
	// RNGAdjustment is at most just less than ansTable.length/noAns, as Math.random = 0 -> 0.99999...
	var RNGAdjustment = Math.random()*(ansTable.length/noAns);
	var increment = ansTable.length/noAns
	var tempDistVal = RNGAdjustment;
	//console.log("RNGAdjustments: "+RNGAdjustment);
	//console.log("tempDistVals:");
	for (var x = 0; x < noAns; x++) {
		// divide the length of ansTable by the number of answers.
		// multiply by x, and add the offset RNGAdjustment
		/*// Some examples:
		// ansTable.length = 8, noAns = 4
		// aT/nA = 8/2 = 1.99 - 0
		// 0,2,4,6
		// 1,3,5,7
		// 2,4,
		// ansTable.length = 7, noAns = 4
		// aT/nA = 7/4 = 1.749 - 0
		// 0, 1.75, 3.50, 5.25
		// 0,1,3,5
		// 1, 2.75, 4.5, 6.25
		// 1,2,4,6
		// 1.74, 3.49, 5.24, 6.99
		// 1,3,5,6
		
		// ansTable.length = 6, noAns = 4
		// aT/nA = 6/4 = 1.49 - 0
		// 0, 1.5, 3, 4.5
		// 1, 2.5, 4, 5.5
		// 
		// ansTable.length = 6, noAns = 3
		// 0,2,4
		// 1,3,5
		// ansTable.length = 6, noAns = 2
		// 0,3
		// 1,4
		// 2,5
		*/
		tempDistVal = RNGAdjustment+x*increment;
		//console.log(tempDistVal);
		var tempVal = Math.floor(tempDistVal);
		if (tempVal > ansTable.length) {
			tempVal = ansTable.length;
			console.warn("Overflow in itemDistractors");	
		}
		itemDistractors.push(tempVal);
	}
	//console.log("itemDistractors");
	//console.log(itemDistractors);
	
	// Construct final table & correct formatting
	var finalAnsTable = [];
	for (var i = 0; i < itemDistractors.length; i++) {
		var tempTableItemI = ansTable[itemDistractors[i]];
		var temp = [];
		finalAnsTable.push(temp);
		/*console.log("i: "+i);
		console.log("itemDistractors"+itemDistractors);
		console.log("iD[i]: "+ itemDistractors[i]);
		console.log(tempTableItemI[0]);
		console.log(returnStringArray(tempTableItemI));*/
		finalAnsTable[i][0] = tempTableItemI[0];
		for (var An = 1; An < rule.length; An++) {
			var temp2 = [];
			finalAnsTable[i].push(temp2);
		}
		for (var x = 1; x < tempTableItemI.length; x++) {
			finalAnsTable[i][Math.floor((x-1)/3)+1][(x-1)%3] = tempTableItemI[x];
		}
	}
	//console.log("difficulty :: finalAnsTable");
	/*
	// This is random generation with no duplicate false answer checking. It does however have duplicate answer checking.
	if (count != 0) {
		for (var a = 0; a < noAns; a++) {
			isIdentity = true;
			isIdentityLoopCounter = 0;
			while (isIdentity) {
				isIdentityLoopCounter++;
				//console.log("isIdentity loop: "+isIdentityLoopCounter); 
				if (rule[0]) {	
						// inserts a value of 0, 1 or 2, which are the three different possible values each element attribute can take.
						tempArr[a][0] = Math.floor(Math.random()*3);
					}
				for (var An = 1; An < rule.length; An++) {
					for (var x = 0; x < rule[An].length; x++) {
						if (rule[An][x]) {
								tempArr[a][An][x] = Math.floor(Math.random()*3);
						}
					}
				}
				if (tempArr[a][0])
					isIdentity = false;
				for (var An = 1; An < rule.length; An++) {
					for (var x = 0; x < rule[An].length; x++) {
						if (tempArr[a][An][x])
							isIdentity = false;
					}
				}
				if (isIdentityLoopCounter > 100) {
					console.warn("isIdentity loop is probably infinite");
					isIdentity = false;
					break;
				}
			}
		}
	} */
	
	return finalAnsTable;
}

//console.log("Difficulty: "+difficulty+ " | Rule: " + returnStringArray(AnulusRNGQu(difficulty))+ " | Distractor set: " + returnStringArray(AnulusRNGAns(AnulusRNGQu(difficulty), 3, difficulty)));
