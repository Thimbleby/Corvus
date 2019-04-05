// 3 - ADD
	/* Example: 
					     [1],
					     [-9,6,
					      7,-2],
					     [2,3,1,-4,-5],*/ 
function AddRNGQu () {
	// 1 and 0 sometimes don't look as good. But that isn't a problem with this function per say - 
	// it's a problem with those graphical encodings.
	// 
	// It would however be better to resist having diagonal symmetry.
	//
	// Generate 2x2 matrix, from which the rest of the matrix is formed. 
	// This 2x2 matrix need not be the four top left elements, although in Raven's they would always be so.
	// These are instead always the four elements wich do not share a row or column with the missing answer.
	var tempQuArray = [];
	for (var x = 0; x < 4 /*(maxG-1)*(maxG-1)*/; x++) {
		tempQuArray.push(0);
	}
	// Each column, row and the combined total (also generally the answer) of all 4 elements must not exceed |9|.
	var combinedTotal = Math.floor(Math.random()*(9*2+1))-9; // 0 to 18 -9 = -9 to 9.
	var verti = [0];
	var horiz = [0];
	while (verti[0] == horiz[0] || verti[0] == Math.abs(combinedTotal) - horiz[0]) {
		verti[0] = Math.floor(Math.random()*(9+1)); // 0 to 9
		horiz[0] = Math.floor(Math.random()*(9+1));
	}
	if (combinedTotal < 0) {
		verti[0] = -verti[0];
		horiz[0] = -horiz[0];
	} else if (combinedTotal == 0) {
		// 0.5 chances
		if (Math.floor(Math.random()*2) == 0) {
			verti[0] = -verti[0];
		}
		if (Math.floor(Math.random()*2) == 0) {
			horiz[0] = -horiz[0];
		}
	} 
	verti[1] = combinedTotal - verti[0];
	horiz[1] = combinedTotal - horiz[0];
	
	// not 0 in top left. This might be worth changing when the graphical encoding improves.
	var allNotLessThanTen = true;
	var alTTCounter = 0;
	while (allNotLessThanTen) {
		var allLessThanTen = true;
		alTTCounter++;
		tempQuArray[0] = Math.floor(Math.random()*(9)+1);
	
		if (verti[0] < 0) {
			tempQuArray[0] = -tempQuArray[0];
		} else if (combinedTotal == 0) {
			// 0.5 chance
			if (Math.floor(Math.random()*2) == 0) {
				tempQuArray[0] = -tempQuArray[0];
			}
		} 
	
		tempQuArray[1] = verti[0]-tempQuArray[0];
		tempQuArray[2] = horiz[0]-tempQuArray[0];
		tempQuArray[3] = horiz[1]-tempQuArray[1];	
		for (var x = 0; x < tempQuArray.length; x++) {
			if (Math.abs(tempQuArray[x]) > 9) {
				allLessThanTen = false;
			}
		}
		if (allLessThanTen) {
			allNotLessThanTen = false;
			break;
		}
		if (alTTCounter > 100) {
			console.warn("Failed to generate an Add test item with all answers less than 10. alTTCounter: "+alTTCounter);
			allNotLessThanTen = false;
			break;
		}
	}	
	return tempQuArray;
}
function AddRNGAns (rule, noAns) {
	// answer is 0;
	var answer = 0;
	// absoluteAnswerVal
	var absoluteAnswerVal = rule[0]+rule[1]+rule[2]+rule[3];
	//console.log("ADD answer:");
	//console.log (answer);
	var ansTable = [];
	
	// tempOrigin = +/-(answer +/- 1 to 2), with a bias for results closer to answer.
	// Considering -answer to be a delta of 1, answer+1 a delta of 1, and -answer+1 a delta of 2.
	// tempOrigin != answer
	var tempOrigin = (answer+Math.floor(Math.random()*1.5+1)*(Math.floor(Math.random()*2)*2-1))*(-Math.floor(Math.random()*1.5)*2+1);
	var loopCounter = 0;
	var viboundary = 20;
	var varianceIncrement = 0;
	while (ansTable.length < noAns) {
		var unique = true;
		// tempNewAns clouds around tempOrigin
		var tempNewAns = (tempOrigin+Math.floor(Math.random()*2.5)*(Math.floor(Math.random()*2)*2-1))*(-Math.floor(Math.random()*1.5)*2+1)+varianceIncrement*((Math.floor(Math.random()*2)-0.5)*2);
		// Modifies by 2-3, as this way the cloud behaves relatively sensibly at extremes.
		// 1-2, 1-3 and 3-4 produce worse clouds. Other ranges not checked.
		var subloop1 = 0;
		var subloop2 = 0;
		while ((tempNewAns+absoluteAnswerVal) > 9) {
			subloop1++;
			tempNewAns -= Math.floor(Math.random()*2)+2;
			if (subloop1 > 20) {
				console.warn("subloop1 broken");
				break;	
			}
		}
		while ((tempNewAns+absoluteAnswerVal) < -9) {
			subloop2++;
			tempNewAns += Math.floor(Math.random()*2)+2;
			if (subloop2 > 20) {
				console.warn("subloop2 broken");
				break;	
			}
		}
		//console.log(tempNewAns);
		loopCounter ++;
		if (answer == tempNewAns) {
				unique = false;
		} else {
			for (var y = 0; y < ansTable.length; y++) {
				if (ansTable[y] == tempNewAns) {
					unique = false;
					break;
				}
			}
			// loopCounter break location at least ensures that duplicate option != answer
			if (!unique && loopCounter > 100) {
				console.warn("ADD ansTable Loop exceeded bounds");
				break;
			}
		}
		if (unique) {
			ansTable.push(tempNewAns);
		}
		if (loopCounter > viboundary) {
			viboundary += 20;
			varianceIncrement++;
		}
	}
	
	return ansTable;
}