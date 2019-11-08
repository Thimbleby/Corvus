// Logic Gates (commutative)
// Example:
/*
					     [8],
					     [[1,1,1,0,1,0,0,0],
					      [0,0,0,1,1,1,1,1],
					      [0,0,1,0,1,0,1,0],
					      [0,1,0,0,1,1,0,0]],
					     [[1,0,0,1,0,0,0,1],
					      [0,0,0,0,0,0,0,1],
					      [1,0,1,0,0,1,0,0],
					      [1,0,1,1,0,1,0,0]], 
*/
// 4 - AND
// 5 - OR
// 6 - XOR
// 7 - XNOR (Not used in Ravens)
// >7 - Not Commutative/Not yet implemented

function CLGateRNGQu (noEle) {
	// noEle is the number of binary attributes used in this matrix.
	// Generate 2x2 matrix, from which the rest of the matrix is formed. 
	// This 2x2 matrix need not be the four top left elements, although in Raven's they would always be so.
	// These are instead always the four elements wich do not share a row or column with the missing answer.
	var tempQuArray = [];
	for (var x = 0; x < 4 /*(maxG-1)*(maxG-1)*/; x++) {
		tempArray1 = [];
		tempQuArray.push(tempArray1);
		for (var z = 0; z < noEle; z++) {
			tempQuArray[x].push(0);
		}
	}
	// The final array requires at least one of each of the following:
	// 0,0 -> w
	// 1,0 -> x
	// 0,1 -> y
	// 1,1 -> z
	// It would have at least one of all of these in both the rows and the columns.
	// thus the final array should be considered as four vertical pairs.
	// First-Second, First-third, Second-last, third-last.
	// the 'diagonals' need not be considered (first-last & second-third)
	// N.b. Technically this would be sufficient for non-commutative logic gates.
	//
	// This means the following are required (these requirements are orthogonal to the array):
	// [1,1,X,X]
	// [0,1,X,X]
	// [1,0,X,X]
	// [0,0,X,X]
	// [1,X,1,X]
	// [0,X,1,X]
	// [1,X,0,X]
	// [0,X,0,X]
	// [X,1,X,1]
	// [X,0,X,1]
	// [X,1,X,0]
	// [X,0,X,0]
	// [X,X,1,1]
	// [X,X,0,1]
	// [X,X,1,0]
	// [X,X,0,0]
	// The orthogonal pairs:
	var pairs = [[0,1],[0,2],[1,3],[2,3]];
	// The requirements:
	var required = [[1,1],[1,0],[0,1],[0,0]];
	// construction
	var tempEles = [];
	var tempValLeft = pairs.length*required.length%noEle;
	//console.log("tempValLeft: "+tempValLeft);
	var helpVal = Math.floor(noEle/tempValLeft);
	for (var x = 0; x < pairs.length*required.length; x++) {
		if (x > pairs.length*required.length-tempValLeft) {
			//console.log(x+" > "+(pairs.length*required.length-tempValLeft))
			tempEles.push(Math.floor(helpVal));
			helpVal += noEle/tempValLeft;
			if (helpVal > noEle) {
				helpVal -= noEle;
			}
			//console.log(helpVal);
		} else {
			tempEles.push(x%noEle);
		}
		//console.log(x);
		//console.log(tempEles);
	}
	// shuffles the location of the missing element
	shuffle(tempEles);
	//console.log(tempEles);
	//
	for (var p = 0; p < pairs.length; p++) {
		for (var r = 0; r < required.length; r++) {
			tempQuArray[pairs[p][0]][tempEles[p+r*pairs.length]] = required[r][0];
			tempQuArray[pairs[p][1]][tempEles[p+r*pairs.length]] = required[r][1];
		}
	}
	
	//console.log("tempQuArray: ");
	//console.log(returnStringArray(tempQuArray));
	return tempQuArray;
}
//
function CLGateRNGAns (rule, noEle, noAns, dif, maxDif) {
	// this is never identity
	// generate ansTable as all correct
	// e.g. first incorrect option would be [0,0,0,0,0,0] when noEle = 6
	var ansTable = [];
	for (var x = 0; x < noAns; x++) {
		var tempArray = [];
		ansTable.push(tempArray);
		for (var y = 0; y < noEle; y++) {
			ansTable[x].push(0);
		}
	}
	// alter all distractors to be incorrect (no Anomalies)
	// this is way simpler than with Annuli, due to the fact 
	// that the matrix needs to have all possible combinations.
	
	// Determine how many subelements (e.g. lines) to alter per option 
	// inversely scales with difficulty
	// when easier, inversely scales with half noEle
	var MAD = Math.ceil(noEle/2);
	var maxAnswerDelta = Math.max(MAD-MAD*dif/maxDif,1);
	//console.log("maxAnswerDelta: "+maxAnswerDelta);
	//console.log(returnStringArray(ansTable));
	for (var x = 0; x < ansTable.length; x++) {
		// answerDelta must be at least 1
		var answerDelta = Math.floor(Math.random()*maxAnswerDelta)+1;
		// randomly choose a subelement in the distractor, in the range noEle/delta
		// noEle/delta is so that each altered subelement is selected from a different section.
		var RNGAdjust = Math.random()*(noEle/answerDelta);
		//console.log("RNGAdjust: "+RNGAdjust);
		//console.log("answerDelta: "+answerDelta);
		for (y = 0; y < answerDelta; y++) {
			if (Math.floor(noEle*y/answerDelta+RNGAdjust) > noEle) {
				console.warn("Rounding error: "+(noEle*y/answerDelta+RNGAdjust)+" > noEle: "+noEle);
			}
			ansTable[x][Math.max(Math.floor(noEle*y/answerDelta+RNGAdjust), noEle-1)] = 1;
			
	//console.log(returnStringArray(ansTable));
		}
	}
	// if repeats, replace repeat with random unique
	var ansChecker = [];
	for (var i = 0; i < ansTable[0].length; i++) {
		ansChecker[i] = 0;
	}
	for (var x = 0; x < ansTable.length; x++) {
		for (var y = 0; y < ansTable.length; y++) {
			if (y != x && ansTable[x].toString() == ansTable[y].toString()) {
				var tempLoopCounter = 0;
				var replace = true;
				while (replace) {
					var unique = true;
					tempLoopCounter ++;
					var tempReplacement = [];
					for (var z = 0; z < ansTable[x].length; z++) {
						tempReplacement[z] = Math.floor(Math.random()*1.5);
					}
					if (tempReplacement.toString() == ansChecker.toString()) {
							unique = false;
					} else {
						for (var k = 0; k < ansTable.length; k++) {
							if (tempReplacement.toString() == ansTable[k].toString()) {
								unique = false;
							}
						}
					}
					if (unique) {
						ansTable[x] = tempReplacement;
						replace = false;
						break;
					}
					if (tempLoopCounter > 100) {
						console.warn("random replacement in LGate ansTable generation looping");
						replace = false;
						break;
					}
				}
			}
		}
	}
	//console.log(returnStringArray(ansTable));
	shuffle(ansTable);
	
	//console.log(returnStringArray(ansTable));
	return ansTable;
}