// 03-logicGates.js
//
//
//Standard Logic Gates
AND = function (x,y) {
	if (!x && !y)
		return 0;
	if (x && y)
		return 1;
	if (x || y)
		return 0;
}
AND.toString = function() {
	return "AND";
}
//console.log("AND Test");
//console.log("0+0: "+AND(0,0));
//console.log("0+1: "+AND(1,0));
//console.log("1+0: "+AND(0,1));
//console.log("1+1: "+AND(1,1));
NAND = function (x,y) {
	if (!x && !y)
		return 1;
	if (x && y)
		return 0;
	if (x || y)
		return 1;
}
NAND.toString = function() {
	return "NAND";
}
//console.log("NAND Test");
//console.log("0+0: "+NAND(0,0));
//console.log("0+1: "+NAND(1,0));
//console.log("1+0: "+NAND(0,1));
//console.log("1+1: "+NAND(1,1));
OR = function (x,y) {
	if (!x && !y)
		return 0;
	if (x && y)
		return 1;
	if (x || y)
		return 1;
}
OR.toString = function() {
	return "OR";
}
//console.log("OR Test");
//console.log("0+0: "+OR(0,0));
//console.log("0+1: "+OR(1,0));
//console.log("1+0: "+OR(0,1));
//console.log("1+1: "+OR(1,1));
XOR = function (x,y) {
	if (!x && !y)
		return 0;
	if (x && y)
		return 0;
	if (x || y)
		return 1;
}
XOR.toString = function() {
	return "XOR";
}
//console.log("XOR Test");
//console.log("0+0: "+XOR(0,0));
//console.log("0+1: "+XOR(1,0));
//console.log("1+0: "+XOR(0,1));
//console.log("1+1: "+XOR(1,1));
NOR = function (x,y) {
	if (!x && !y)
		return 1;
	if (x && y)
		return 0;
	if (x || y)
		return 0;
}
NOR.toString = function() {
	return "NOR";
}
//console.log("NOR Test");
//console.log("0+0: "+NOR(0,0));
//console.log("0+1: "+NOR(1,0));
//console.log("1+0: "+NOR(0,1));
//console.log("1+1: "+NOR(1,1));
XNOR = function (x,y) {
	if (!x && !y)
		return 1;
	if (x && y)
		return 1;
	if (x || y)
		return 0;
}
XNOR.toString = function() {
	return "XNOR";
}
//console.log("XNOR Test");
//console.log("0+0: "+XNOR(0,0));
//console.log("0+1: "+XNOR(1,0));
//console.log("1+0: "+XNOR(0,1));
//console.log("1+1: "+XNOR(1,1));
// Non-Commutative Logic Gates
ANDNOT = function (x,y) {
	return AND(x,!y);
	// 0,0 - 0
	// 1,1 - 0
	// 0,1 - 0
	// 1,0 - 1
}
ANDNOT.toString = function() {
	return "ANDNOT";
}
//console.log("ANDNOT Test");
//console.log("0+0: "+ANDNOT(0,0));
//console.log("0+1: "+ANDNOT(1,0));
//console.log("1+0: "+ANDNOT(0,1));
//console.log("1+1: "+ANDNOT(1,1));
NANDNOT = function (x,y) {
	return NAND(x,!y);
	// 0,0 - 1
	// 1,1 - 1
	// 0,1 - 1
	// 1,0 - 0
}
NANDNOT.toString = function() {
	return "NANDNOT";
}
//console.log("NANDNOT Test");
//console.log("0+0: "+NANDNOT(0,0));
//console.log("0+1: "+NANDNOT(1,0));
//console.log("1+0: "+NANDNOT(0,1));
//console.log("1+1: "+NANDNOT(1,1));
ORNOT = function (x,y) {
	return OR(x,!y);
	// 0,0 - 1
	// 1,1 - 1
	// 0,1 - 0
	// 1,0 - 1
}
ORNOT.toString = function() {
	return "ORNOT";
}
//console.log("ORNOT Test");
//console.log("0+0: "+ORNOT(0,0));
//console.log("0+1: "+ORNOT(1,0));
//console.log("1+0: "+ORNOT(0,1));
//console.log("1+1: "+ORNOT(1,1));
NORNOT = function (x,y) {
	return NOR(x,!y);
	// 0,0 - 0
	// 1,1 - 0
	// 0,1 - 1
	// 1,0 - 0
}
NORNOT.toString = function() {
	return "NORNOT";
}
//console.log("NORNOT Test");
//console.log("0+0: "+NORNOT(0,0));
//console.log("0+1: "+NORNOT(1,0));
//console.log("1+0: "+NORNOT(0,1));
//console.log("1+1: "+NORNOT(1,1));
// XORNOT = XNOR && XNORNOT = XOR
IFY = function (x,y) {
	if (y)
		return 1;
	else
		return 0;
	// 0,0 - 0
	// 1,1 - 1
	// 0,1 - 1
	// 1,0 - 0
}
IFY.toString = function() {
	return "IFY";
}
//console.log("IFY Test");
//console.log("0+0: "+IFY(0,0));
//console.log("0+1: "+IFY(1,0));
//console.log("1+0: "+IFY(0,1));
//console.log("1+1: "+IFY(1,1));
IFNY = function (x,y) {
	if (!y)
		return 1;
	else
		return 0;
	// 0,0 - 1
	// 1,1 - 0
	// 0,1 - 0
	// 1,0 - 1
}
IFNY.toString = function() {
	return "IFNY";
}
//console.log("IFNY Test");
//console.log("0+0: "+IFNY(0,0));
//console.log("0+1: "+IFNY(1,0));
//console.log("1+0: "+IFNY(0,1));
//console.log("1+1: "+IFNY(1,1));
IFX = function (x,y) {
	// Also ANDOR
	if (x)
		return 1;
	else
		return 0;
	// 0,0 - 1
	// 1,1 - 0
	// 0,1 - 1
	// 1,0 - 0
}
IFX.toString = function() {
	return "IFX";
}
//console.log("IFX Test");
//console.log("0+0: "+IFX(0,0));
//console.log("0+1: "+IFX(1,0));
//console.log("1+0: "+IFX(0,1));
//console.log("1+1: "+IFX(1,1));
IFNX = function (x,y) {
	if (!x)
		return 1;
	else
		return 0;
	// 0,0 - 0
	// 1,1 - 1
	// 0,1 - 0
	// 1,0 - 1
}
IFNX.toString = function() {
	return "IFNX";
}
//console.log("IFNX Test");
//console.log("0+0: "+IFNX(0,0));
//console.log("0+1: "+IFNX(1,0));
//console.log("1+0: "+IFNX(0,1));
//console.log("1+1: "+IFNX(1,1));
// 'Trivial' Logic Gates
YES = function (x,y) {
	return 1;
	// 0,0 - 1
	// 1,1 - 1
	// 0,1 - 1
	// 1,0 - 1
}
YES.toString = function() {
	return "YES";
}
 NO = function (x,y) {
	return 0;
	// 0,0 - 0
	// 1,1 - 0
	// 0,1 - 0
	// 1,0 - 0
}
NO.toString = function() {
	return "NO";
}
var commutativeLGA = [AND, OR, XOR, XNOR];
var symmetricLGA = [AND,OR,XOR,XNOR,NOR,NAND];
var nonTrivialLGA = [AND,OR,XOR,XNOR,NOR,NAND,ANDNOT,NANDNOT,ORNOT,NORNOT,IFY,IFNY,IFX,IFNX];
var LGA = [AND,NAND,OR,XOR,NOR,XNOR,ANDNOT,NANDNOT,ORNOT,NORNOT,IFY,IFNY,IFX,IFNX,YES,NO];
var logicGateArray = commutativeLGA;
var totalLGLayouts = [];
for (var x = 0; x < logicGateArray.length; x++) {
	totalLGLayouts[x] = [];
	for (var y = 0; y < logicGateArray.length; y++) {
		totalLGLayouts[x][y] = 0;
	}	
}
function gateMatrix (a,b,c,d) {
 	var LHS = null;
 	var RHS = null;
 	var temp = []
	for (var n = 0; n < logicGateArray.length; n++) {
		for (var m = 0; m < logicGateArray.length; m++) {
			LHS = logicGateArray[m](logicGateArray[n](a,b),logicGateArray[n](c,d));
			RHS = logicGateArray[n](logicGateArray[m](a,c),logicGateArray[m](b,d));
			//console.log(LHS == RHS);
			if (LHS == RHS) { 
				//console.log(a + " " + b + " " +logicGateArray[n](a,b));
				//console.log(c + " " + d + " " +logicGateArray[n](c,d));
				//console.log(logicGateArray[m](a,c) + " " + logicGateArray[m](b,d) +" "+LHS+"/"+RHS);
				//console.log(logicGateArray[n].name+" : "+logicGateArray[m].name)
				temp.push([logicGateArray[n],logicGateArray[m]]);
				totalLGLayouts[n][m]++;
			}
		} 
	}
	//console.log(temp);
	return temp;
} 
function simplerGateMatrix (a,b,c,d) {
 	var LHS = null;
 	var RHS = null;
 	var temp = []
	for (var n = 0; n < logicGateArray.length; n++) {
		LHS = logicGateArray[n](logicGateArray[n](a,b),logicGateArray[n](c,d));
		RHS = logicGateArray[n](logicGateArray[n](a,c),logicGateArray[n](b,d));
		//console.log(LHS == RHS);
		if (LHS == RHS) { 
			temp.push([logicGateArray[n],logicGateArray[n]]);
			totalLGLayouts[n][n]++;
		}
	}
	//console.log(temp);
	return temp;
} 
function logicGateLayouts() {
	var truthArray = [];
	for (var a = 0; a < 2; a++) {
		truthArray [a] = [];
		for (var b = 0; b < 2; b++) {
			truthArray [a][b] = [];
			for (var c = 0; c < 2; c++) {
				truthArray [a][b][c] = [];
				for (var d = 0; d < 2; d++) {
					truthArray[a][b][c][d] = gateMatrix(a,b,c,d);
				}
			}
		}
	}
	return truthArray;
}
function compareArray(arrayX,arrayY) {
	var tempX = [];
	var tempY = [];
	for (var x = 0; x < arrayX.length; x++) {
		tempX[x] = [arrayX[x][0].name,arrayX[x][1].name];
	}
	for (var x = 0; x < arrayY.length; x++) {
		tempY[x] = [arrayY[x][0].name,arrayY[x][1].name];
	}
	temp2X = tempX;
	temp2Y = tempY;
	//if (tempX.length < tempY.length)
	for (var x = 0; x < tempX.length; x++) {
		for (var y = 0; y < tempY.length; y++) {
			if (tempX[x][0] == tempY[y][0] && tempX[x][1] == tempY[y][1]) {
				temp2X[x] = [];
				temp2Y[y] = [];
			}
		}
	}
	var temp3X = [];
	for (var x = 0; x < temp2X.length; x++) {
		if (temp2X[x].length != 0)
			temp3X.push(temp2X[x]);
	}
	var temp3Y = [];
	for (var y = 0; y < temp2Y.length; y++) {
		if (temp2Y[y].length != 0)
			temp3Y.push(temp2Y[y]);
	}
	console.log("Compare arrays:");
	console.log(temp3X);
	console.log(temp3X.length);
	console.log(temp3Y);
	console.log(temp3Y.length);
}
var gateLayout = logicGateLayouts();
compareArray(gateLayout[0][0][0][0],gateLayout[0][0][0][1]);
console.log("Gate Layouts");
console.log(gateLayout);
console.log("Total possible layouts per Logic Gate: ");
for (var i = 0; i < totalLGLayouts.length; i++)
	console.log(returnStringArray(totalLGLayouts[i]));
console.log("Number of logic gate combinations per layout: ");
console.log("(This tabulates the conflux of 4 binary variables; a,b,c & d)");
var tempStringGate = " d     c\nb "
for (var a = 0; a < 2; a++) {
	for (var b = 0; b < 2; b++) {
		for (var c = 0; c < 2; c++) {
			for (var d = 0; d < 2; d++) {
				tempStringGate += (gateLayout[a][b][c][d].length);
				if (d==0) tempStringGate += " ";
			}
		if (c==0) tempStringGate += " | ";
		}
	if (a==0 && b==1) tempStringGate += "\na —————————————\n  ";
	else tempStringGate += "\n  ";
	}
}
console.log(tempStringGate);
