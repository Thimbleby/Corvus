
// allPuzzleTypes format: [[GridSizeX, GridSizeY], [Graphical Options], [Logical options], [Layouts], [Answer Layouts], [# starter/full grid], [Answer #variations], #Concealed, Type]
// Graphical Options.length = Logical Options.length = Number of Pattern types used.
//
// *****
// Graphical Options
// 0 - Annulus
// 1 - Dice
// 2 - Petals
// 3 - Spike Rings
// 4 - Tessellating Squares
// 5 - Tessellating Triangles
// 6 - BoxLines
//
// *****
// Logical Options
// 0 - Identity
//
// 1 - 123
// 2 - 112
//
// 3 - Addition
//
// 4 - AND						Commutative
// 5 - OR						Commutative
// 6 - XOR						Commutative
// 7 - XNOR						Commutative
//
// Not implemented:
// 8 - NOR						Symmetric
// 9 - NAND						Symmetric
// 10 - ANDNOT					Non-trivial
// 11 - NANDNOT					Non-trivial
// 12 - ORNOT					Non-trivial
// 13 - NORNOT					Non-trivial
// 14 - IFY						Non-trivial
// 15 - IFNY					Non-trivial
// 16 - IFX						Non-trivial
// 17 - IFNX					Non-trivial
// 
// 18 - Magic Squares
// 19 - Basic Symmetry
// 20 - Rotational Symmetry
// 21 - Tessellation
// 22 - Karnaugh Maps
//
// For logic gates: Commutative >> Symmetric >> Non-trivial
//
// *****
// Layout
// 			
// Uses the format [Scale,[Colour, Form, Rotation],[Colour, Form, Rotation]]
// The outer annuli uses the first array [Colour, Form, Rotation], and the inner annulus uses the second array
// Scale is uniform across annuli
//
// *****
// Number of elements in central icon - determines size of Number grid.
// Mostly used for logic gate Rules.
//
// *****
// Number Answer Layout
// For Logic Gates ALL boolean sets (including their answer) must have at least one complete example. 
// Make sure the missing element doesn't remove the only answer to one of those sets.
// For addition columns and rows must sum |x| < 9 & total sum must be |x| < 9
// Combined with shade alterations, negatives can be quite hard.
//
// *****
// #Concealed
// 0 = No missing Icons
// 1 = Up to 1 missing Icon
// 2 = Up to 2 missing Icons 
// 3 = Up to 3 missing Icons
// 4 = Up to 4 missing Icons — N.B. actually having 4 missing icons is rarely possible, due to logic which ensures the items are solvable.
// NOT INCLUDING '?'
//
// *****
// Type
// 0 - Missing Icon
// 1 - Wrong Icon
// 
// N.b. Grid size is currently fixed as square.
//
var allPuzzleTypes = JSON.parse(sessionStorage.getItem("testItem"));
console.log(allPuzzleTypes)
returnStringArray(allPuzzleTypes);

						  //1
// var allPuzzleTypes = [[[3,3],													// 0. [Grid Size]
// 					     [0],													// 1. [Graphic Options] // can generally only be 2 at most
// 					     [0],		 											// 2. [Logic Options]
// 					     [0,[0,0,0]],											// 3. [Layout]
// 					     [[0,[1,1,0]],[2,[2,0,0]],[1,[0,2,0]]],					// 4. [Answer Layout]
// 					     [0],													// 5. [Number of elements in centre]
// 					     [0,0,
// 					      0,0],													// 6. [Number Layout]
// 					     [0,0,0],												// 7. [Number Answer Layout]
// 					      0,													// 8. #Concealed
// 					      0]];													// 9. Type
					      
var logicOptionStringTranslate = ["Identity", "123", "112", "Add", "AND", "OR", "XOR", "XNOR"]

// ### Override allPuzzleTypes ###
// for (var x = 0; x < allPuzzleTypes.length; x++) {
// 	var dif = annulusRuleArray.length*x/allPuzzleTypes.length;
// 	// Identity
// 	if (allPuzzleTypes[x][2] == 0) {
// 		//allPuzzleTypes[x][3] = AnulusRNGQu(dif);
// 		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
// 		allPuzzleTypes[x][4] = AnulusRNGAns(allPuzzleTypes[x][3], noAnsX);
// 		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][3])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][4]));
// 	}
// 	// 123
// 	if (allPuzzleTypes[x][2] == 1) {
// 		allPuzzleTypes[x][3] = AnulusRNGQu(dif, allPuzzleTypes.length);
// 		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
// 		allPuzzleTypes[x][4] = AnulusRNGAns(AnulusRNGQu(dif, allPuzzleTypes.length), noAnsX);
// 		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][3])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][4]));
// 	}
// 	// 112
// 	if (allPuzzleTypes[x][2] == 2) {
// 		allPuzzleTypes[x][3] = AnulusRNGQu(dif, allPuzzleTypes.length);
// 		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
// 		allPuzzleTypes[x][4] = AnulusRNGAns(AnulusRNGQu(dif, allPuzzleTypes.length), noAnsX);
// 		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][3])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][4]));
// 	}
// 	// Addition
// 	if (allPuzzleTypes[x][2] == 3) {
// 		allPuzzleTypes[x][6] = AddRNGQu();
// 		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
// 		allPuzzleTypes[x][7] = AddRNGAns(allPuzzleTypes[x][6],noAnsX);
// 		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][6])+ " | Answer: "+(allPuzzleTypes[x][6][0]+allPuzzleTypes[x][6][1]+allPuzzleTypes[x][6][2]+allPuzzleTypes[x][6][3])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][7]));
// 	
// 	}
// 	// AND
// 	if (allPuzzleTypes[x][2] == 4) {
// 		allPuzzleTypes[x][6] = CLGateRNGQu(allPuzzleTypes[x][5]);
// 		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
// 		allPuzzleTypes[x][7] = CLGateRNGAns(CLGateRNGQu(allPuzzleTypes[x][5]),allPuzzleTypes[x][5],noAnsX,x,allPuzzleTypes.length)
// 		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][6])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][7]));
// 	}
// 	// OR
// 	if (allPuzzleTypes[x][2] == 5) {
// 		var noEle = allPuzzleTypes[x][5][0];
// 		allPuzzleTypes[x][6] = CLGateRNGQu(noEle);
// 		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
// 		allPuzzleTypes[x][7] = CLGateRNGAns(CLGateRNGQu(noEle),noEle,noAnsX,x,allPuzzleTypes.length)
// 		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][6])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][7]));
// 	}
// 	// XOR
// 	if (allPuzzleTypes[x][2] == 6) {
// 		var noEle = allPuzzleTypes[x][5][0];
// 		allPuzzleTypes[x][6] = CLGateRNGQu(noEle);
// 		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
// 		allPuzzleTypes[x][7] = CLGateRNGAns(CLGateRNGQu(noEle),noEle,noAnsX,x,allPuzzleTypes.length)
// 		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][6])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][7]));
// 	}
// 	// XNOR
// 	if (allPuzzleTypes[x][2] == 7) {
// 		var noEle = allPuzzleTypes[x][5][0];
// 		allPuzzleTypes[x][6] = CLGateRNGQu(noEle);
// 		var noAnsX = JSON.parse(JSON.stringify(allPuzzleTypes[x][4].length));
// 		allPuzzleTypes[x][7] = CLGateRNGAns(CLGateRNGQu(noEle),noEle,noAnsX,x,allPuzzleTypes.length)
// 		console.log("itemNo: "+x+" Logic Option: "+logicOptionStringTranslate[allPuzzleTypes[x][2]]+": Difficulty: "+dif+ " | Rule: " + returnStringArray(allPuzzleTypes[x][6])+ " | Distractor set: " + returnStringArray(allPuzzleTypes[x][7]));
// 	}
// 	// Unimplemented
// 	if (allPuzzleTypes[x][2] > 7) {
// 		console.warn("Isaac, what are you doing?");
// 		console.warn("itemNo: "+x+" not randomised yet:: " + allPuzzleTypes[x][2])
// 	}
// }
for (var x = 0; x < allPuzzleTypes.length; x++) {
	if (allPuzzleTypes[x][5][0] == allPuzzleTypes[x][5][4] && allPuzzleTypes[x][5][1] == allPuzzleTypes[x][5][2]) {
		throw new Error("Initial numArray symmetric in the negative diagonal");
	}
}
//
/*var allMissingIcons = [0,
					   0,
					   0,
					   1,
					   1,
					   0,
					   2,
					   3,
					   0];*/
// One large uncertainty in the order of possibleLayouts is whether [threeOrFour()] is more 
// complex than [1,2] or not. Screen complexity vs puzzle complexity.
// For further uncertainties, see the 'Odd Ball' categories.
// 			
// Uses the format [Scale,[Colour, Form, Rotation],[Colour, Form, Rotation]]
// The outer annuli uses the first array [Colour, Form, Rotation], and the inner annulus uses the second array
// Scale is uniform across annuli
/*var shapeGridLayouts = [[0,[0,0,0]],
					  [0,[0,0,0]],
					  [0,[0,0,0]],				
					  [0,[0,2,3],[1,0,4]],
					  [3,[2,0,3]],
					  [3,[0,0,0],[0,0,1]],
					  [0,[3,1,0],[3,1,0]],				
					  [0,[0,4,1]],
					  [4,[0,0,3]]];*/
// Uses the same format as allGridLayouts - the correct answer, which would be [0,[0,0,0]], is added afterwards
// 0 is the correct answer for that attribute
// 1 & 2 are the two alternatives
/*var answerShapeArray = [
				   
				   [[0,[0,0,0]],[0,[0,0,0]],[0,[0,0,0]]],				
				   [[0,[2,0,0],[0,0,1]],[0,[0,0,0],[0,0,1]],[0,[2,0,0],[0,0,0]],[0,[0,0,0],[0,0,1]]],
				   [[1,[0,0,0]],[0,[0,1,0]],[2,[0,0,0]]],
				   [[0,[1,0,0],[0,0,0]],[0,[0,0,0],[0,0,1]],[2,[0,0,0],[0,0,0]]],
				   [[0,[1,0,0],[0,0,0]],[0,[2,0,0],[0,0,0]],[0,[0,1,0],[1,0,0]],[0,[0,1,0],[1,0,0]]],				
				   [[0,[0,0,1]],[0,[0,0,2]],[0,[0,3,1]],[0,[0,3,0]]],
				   [[2,[0,0,0]],[2,[0,0,0]],[0,[0,0,1]],[0,[0,0,0]],[0,[0,0,1]]]];
//
//
/*var numberGridLayouts = [[0,[1,3,5,2]],
						 [0,[1,-3,6,1]],
						 [0,[1,3,2,2]],
						 [0,[1,7,-1,2]],
						 [0,[6,1,-6,3]],
						 [0,[-5,3,8,1]],
						 [0,[-7,9,9,-1]],
						 [0,[-2,9,3,-8]],
						 [0,[-1,4,-5,2]]];*/
//
/*var answerNumberArray = [
						 [1,2,3],
						 [8,1,4],
						 [7,4,8,1,2],
						 [2,6,3],
						 [1,4,5,2],
						 [2,0,4,5],
						 [2,0,4,0],
						 [0,-1,-1,1,0]];
*/
//
//
/*if (allPuzzleTypes.length != allMissingIcons.length && 
			allMissingIcons.length != allGridLayouts.length && 
					allGridLayouts.length != answerArray.length) {
	console.warn("Data sets not all equal length");
}*/
// var allTestItems = [allPuzzleTypes,allMissingIcons,allGridLayouts,answerArray];
var maxDifficulty = allPuzzleTypes.length;
for (var x = 0; x < maxDifficulty; x++) {
	iconProperties[x] = "";
}