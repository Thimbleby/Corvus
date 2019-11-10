function returnStringArray (Arr) {
	if (!(Object.prototype.toString.call( Arr ) === '[object Array]'))
		return "Not an Array!: '"+Arr+"'";
	var temp = "[";
	for (var x = 0; x < Arr.length; x++) {
		if (Object.prototype.toString.call( Arr[x] ) === '[object Array]')
			temp+=returnStringArray(Arr[x]);
		else
			temp+=Arr[x]
		if (x < Arr.length - 1)
			temp+=", "
	}
	temp+="]"
	return temp;
}

function showADDOptions (divId, showVal, valueType) {
	let thisDiv = document.getElementById(divId.id);
	
	if (!showVal)
		thisDiv.style.display = 'none';
		
	let thisSelect = document.createElement('select');
	thisSelect.id = divId.id+'select';
	for (var x = -9; x < 10; x++) {
		let option = document.createElement('option');
		option.value = x;
		option.text = x;
		thisSelect.appendChild(option);
	}
	thisSelect.value = 0;
	thisDiv.appendChild(thisSelect);
}

let ADDFormDivs = [nAddFormTL, nAddFormTC, nAddFormCL, nAddFormCC];
let ADDansArray = [AddOpt1, AddOpt2, AddOpt3, AddOpt4, AddOpt5];

for (var x = 0; x < ADDFormDivs.length; x++) {
	showADDOptions(ADDFormDivs[x], true, 'form');
}
let showADD = [];
for (var x = 0; x < document.getElementById('nAnswersAdd').value; x++) {
	showADD.push(true);
}
for (var x = document.getElementById('nAnswersAdd').value; x < ADDansArray.length; x++) {
	showADD.push(false);
}
for (var x = 0; x < ADDansArray.length; x++) {
	showADDOptions(ADDansArray[x], showADD[x], 'deltas');
}

function showLGOptions (divId, showVal, valueType) {
	let thisDiv = document.getElementById(divId.id);
	let Nele = document.getElementById('nElements');
	
	if (!showVal)
		thisDiv.style.display = 'none';
		
	for (var y = 0; y < Nele[Nele.length-1].value; y++) {
		let thisSelect = document.createElement('select');
		if (y >= Nele.value)
			thisSelect.style.display = 'none';
		thisSelect.id = divId.id+'select'+y;
		for (var x = 0; x < 2; x++) {
			let option = document.createElement('option');
			option.value = x;
			option.text = x;
			thisSelect.appendChild(option);
		}
		thisDiv.appendChild(thisSelect);
	}
}

var LGFormDivs = [nLGFormTL,nLGFormTC,nLGFormCL,nLGFormCC]
let LGansArray = [LGOpt1, LGOpt2, LGOpt3, LGOpt4, LGOpt5];

for (var x = 0; x < LGFormDivs.length; x++) {
	showLGOptions(LGFormDivs[x], true, 'form');
}
let showLG = [];
for (var x = 0; x < document.getElementById('nAnswersLG').value; x++) {
	showLG.push(true);
}
for (var x = document.getElementById('nAnswersLG').value; x < LGansArray.length; x++) {
	showLG.push(false);
}
for (var x = 0; x < LGansArray.length; x++) {
	showLGOptions(LGansArray[x], showLG[x], 'deltas');
}

let formsArray = ['Identity','Horizontal','Vertical','Decreasing Diagonal','Increasing Diagonal'];
let deltaArray = [0,1,2];
	
function addOptionsToSelect (thisSelect, valueType) {
	var optionArray = [];
	if (valueType == 'forms') {
		optionArray = formsArray;
	} else if (valueType == 'deltas') {
		optionArray = deltaArray;
	} else {
		console.error('Unknown valueType: '+valueType);
	}
		
	for (var i = 0; i < optionArray.length; i++) {
		let option = document.createElement('option');
		option.value = i;
		option.text = optionArray[i];
		thisSelect.appendChild(option);
	}
}
function showAnnulusOptions(divId, showVal, valueType) {
	let thisDiv = document.getElementById(divId.id);
	if (!showVal)
		thisDiv.style.display = 'none';
	
	let newMag = document.createElement('select');
	newMag.id = divId.id+'M';
	
	thisDiv.appendChild(document.createTextNode('Magnitude: '));
	thisDiv.appendChild(newMag);	
	addOptionsToSelect(newMag, valueType);
	thisDiv.appendChild(document.createElement('br'));
	
	let newRow = document.createElement('div')
	newRow.className = 'row';
	thisDiv.appendChild(newRow);
	
	let newCol1 = document.createElement('div')
	newCol1.className = 'column';
	let newCol2 = document.createElement('div')
	newCol2.className = 'column';
	newCol2.id = '2ndAnnulus'+divId.id;
	newCol2.style.display = 'none';
	colArray = [newCol1, newCol2];
	anNumeral = ['1st','2nd'];
	
	for (var i = 0; i < colArray.length;i++) {
		newRow.appendChild(colArray[i]);
		
		colArray[i].appendChild(document.createTextNode(anNumeral[i]+' Annulus: '));
		colArray[i].appendChild(document.createElement('br'));

		let newColour = document.createElement('select');
		newColour.id = divId.id+'C'+i;
		colArray[i].appendChild(document.createTextNode('Colour: '));
		colArray[i].appendChild(newColour);
		addOptionsToSelect(newColour, valueType);
		colArray[i].appendChild(document.createElement('br'));

		let newShape = document.createElement('select');
		newShape.id = divId.id+'S'+i;
		colArray[i].appendChild(document.createTextNode('Shape: '));
		colArray[i].appendChild(newShape);
		addOptionsToSelect(newShape, valueType);
		colArray[i].appendChild(document.createElement('br'));

		let newRot = document.createElement('select');
		newRot.id = divId.id+'R'+i;
		colArray[i].appendChild(document.createTextNode('Rotation: '));
		colArray[i].appendChild(newRot);
		addOptionsToSelect(newRot, valueType);
		colArray[i].appendChild(document.createElement('br'));
	}
	
	thisDiv.appendChild(document.createElement('br'));
}
showAnnulusOptions(layout, true, 'forms');

let ansArray = [Ans1, Ans2, Ans3, Ans4, Ans5];
let showDist = [];
for (var x = 0; x < document.getElementById('nAnswers').value; x++) {
	showDist.push(true);
}
for (var x = document.getElementById('nAnswers').value; x < ansArray.length; x++) {
	showDist.push(false);
}
for (var x = 0; x < ansArray.length; x++) {
	showAnnulusOptions(ansArray[x], showDist[x], 'deltas');
}

let selectorList = ["lO","gO",
				"nAnnuli",
				"layoutM","layoutC0","layoutS0","layoutR0",
						  "layoutC1","layoutS1","layoutR1",
				"nAns"]
let layoutSuffixes = ['M', 'C0','S0','R0', 'C1','S1','R1'];

function checkLayout() {
	correct = true;
	output = {}
	output['lO'] = document.getElementById('logicOptions').value
	document.getElementById('logicOptName').style.color = 'black'
	switch (output.lO) {
		case '-1':
			document.getElementById('logicOptName').style.color = 'red'
			correct = false;
			break;
		case '1':
		case '2':
			output['nAnnuli'] = parseInt(document.getElementById('nAnnuli').value);
			let nSuffixes = 4;
			if (output.nAnnuli == 2) 
				nSuffixes = layoutSuffixes.length;
	
			let patLayout = [];
			for (var y = 0; y < nSuffixes; y++) {
				output['layout'+layoutSuffixes[y]] = parseInt(document.getElementById('layout'+layoutSuffixes[y]).value);
			}
			patLayout.push(output['layoutM']);
			patLayout.push([output['layoutC0'], output['layoutS0'], output['layoutR0']]);
			if (output.nAnnuli == 2) {
				patLayout.push([output['layoutC1'], output['layoutS1'], output['layoutR1']]);
			}
		
	
			if (patLayout[0] == 0 && patLayout[1][0] == 0 && patLayout[1][1] == 0 && patLayout[1][2] == 0) {
				document.getElementById('layout').style.color = "red";
				correct = false;
			} else {
				document.getElementById('layout').style.color = "black";
			}
			break
		case '3':
			let sum = [];
			sum[0] = parseInt(document.getElementById(ADDFormDivs[0].id+'select').value)+
						parseInt(document.getElementById(ADDFormDivs[1].id+'select').value);
			sum[1] = parseInt(document.getElementById(ADDFormDivs[0].id+'select').value)+
						parseInt(document.getElementById(ADDFormDivs[2].id+'select').value);
			sum[2] = parseInt(document.getElementById(ADDFormDivs[1].id+'select').value)+
						parseInt(document.getElementById(ADDFormDivs[3].id+'select').value);
			sum[3] = parseInt(document.getElementById(ADDFormDivs[2].id+'select').value)+
						parseInt(document.getElementById(ADDFormDivs[3].id+'select').value);
			sum[4] = sum[0]+sum[3];
			if (sum[4] != sum[1]+sum[2]) {
				console.error("Sum doesn't work: ");
				console.error(sum);
			}
			for (var x = 0; x < ADDFormDivs.length; x++) {
				document.getElementById(ADDFormDivs[x].id).style.color = 'black';
			}
			
			for (var y = 0; y < sum.length; y++) {
				if (sum[y] > 9 || sum[y] < -9) {
					correct = false;				
					switch(y) {
						case 0:
							document.getElementById(ADDFormDivs[0].id).style.color = 'red';
							document.getElementById(ADDFormDivs[1].id).style.color = 'red';
							break;
						case 1:
							document.getElementById(ADDFormDivs[0].id).style.color = 'red';
							document.getElementById(ADDFormDivs[2].id).style.color = 'red';
							break;
						case 2:
							document.getElementById(ADDFormDivs[1].id).style.color = 'red';
							document.getElementById(ADDFormDivs[3].id).style.color = 'red';
							break;
						case 3:
							document.getElementById(ADDFormDivs[2].id).style.color = 'red';
							document.getElementById(ADDFormDivs[3].id).style.color = 'red';
							break;
						case 4:
							document.getElementById(ADDFormDivs[0].id).style.color = 'red';
							document.getElementById(ADDFormDivs[1].id).style.color = 'red';
							document.getElementById(ADDFormDivs[2].id).style.color = 'red';
							document.getElementById(ADDFormDivs[3].id).style.color = 'red';
							break;
					}
				}
			}
			break;
		case '4':
		case '5':
		case '6':
		case '7':
			output.nEle = parseInt(document.getElementById('nElements').value);
			
			let newCheckFailed = [false, false, false, false];
// 			let checks = [[0,0],[0,1],[1,0],[1,1]];
			let checkGroups = [[0,1],[0,2],[1,3],[2,3]];
			
			for (var cg = 0; cg < checkGroups.length; cg++) {
				for (var z = 0; z < output.nEle; z++) {
					let cg1 = parseInt(document.getElementById(LGFormDivs[checkGroups[cg][0]].id+'select'+z).value);
					let cg2 = parseInt(document.getElementById(LGFormDivs[checkGroups[cg][1]].id+'select'+z).value);
					if (cg1 == 0 && cg2 == 0) {
						newCheckFailed[0] = true;
					} else if (cg1 == 0 && cg2 == 1) {
						newCheckFailed[1] = true;
					} else if (cg1 == 1 && cg2 == 0) {
						newCheckFailed[2] = true;
					} else if (cg1 == 1 && cg2 == 1) {
						newCheckFailed[3] = true;
					}
				}
			}
			
			if (newCheckFailed.includes(false)) {
				correct = false;
				document.getElementById(LGFormDivs[0].id).style.color = 'red';
				document.getElementById(LGFormDivs[1].id).style.color = 'red';
				document.getElementById(LGFormDivs[2].id).style.color = 'red';
				document.getElementById(LGFormDivs[3].id).style.color = 'red';
			} else {
				document.getElementById(LGFormDivs[0].id).style.color = 'black';
				document.getElementById(LGFormDivs[1].id).style.color = 'black';
				document.getElementById(LGFormDivs[2].id).style.color = 'black';
				document.getElementById(LGFormDivs[3].id).style.color = 'black';
			}
			break;
	} 
	return correct;
}
checkLayout()

function checkItem() {
	// Can't have correct alternative answers
	// Checks for unintentional identities
	// Highlights problems
	correct = true;
	output = {};
	output['nAnnuli'] = parseInt(document.getElementById('nAnnuli').value);
	output['gO'] = parseInt(document.getElementById('graphicOptions').value);
	
	switch (output.gO) {
		case 0:
			output['numAns'] = parseInt(document.getElementById('nAnswers').value);
			break;
		case 1:
		case 2:
		case 3:
			output['numAns'] = parseInt(document.getElementById('nAnswersAdd').value); 
			break;
		case 6:
			output['numAns'] = parseInt(document.getElementById('nAnswersLG').value);
			break;
		default:
			output['numAns'] = 3;
	}
	document.getElementById('graphicOptName').style.color = 'black';
	switch (output.gO) {
		case -1:
			correct = false;
			document.getElementById('graphicOptName').style.color = 'red';
			break;
		case 0:
			let nSuffixes = 4;
			if (output.nAnnuli == 2) 
				nSuffixes = layoutSuffixes.length;
		
			let ansLayouts = []
			for (var x = 0; x < output.numAns; x++) {
				for (var y = 0; y < nSuffixes; y++) {
					output[ansArray[x].id+layoutSuffixes[y]] = parseInt(document.getElementById(ansArray[x].id+layoutSuffixes[y]).value);
				}
				ansLayouts.push([]);
				ansLayouts[x].push(output[ansArray[x].id+'M']);
				ansLayouts[x].push([output[ansArray[x].id+'C0'], output[ansArray[x].id+'S0'], output[ansArray[x].id+'R0']]);
				if (output.nAnnuli == 2) {
					ansLayouts[x].push([output[ansArray[x].id+'C1'], output[ansArray[x].id+'S1'], output[ansArray[x].id+'R1']]);
				}
			}
	
			for (var x = 0; x < output.numAns; x++) {
				if (ansLayouts[x][0] == 0 && ansLayouts[x][1][0] == 0 && ansLayouts[x][1][1] == 0 && ansLayouts[x][1][2] == 0) {
					document.getElementById('Ans'+(x+1)).style.color = "red";
					correct = false;
				} else {
					document.getElementById('Ans'+(x+1)).style.color = "black";
				}
			}
			break;
		case 1:
		case 2:
		case 3:
			correctAns = 0;
			for (var x = 0; x < ADDFormDivs.length; x++) {
				correctAns += parseInt(document.getElementById(ADDFormDivs[x].id+'select').value);
			}
			for (var x = 0; x < output.numAns; x++) {
				if (parseInt(document.getElementById(ADDansArray[x].id+'select').value) == correctAns) {
					correct = false;
					document.getElementById(ADDansArray[x].id).style.color = 'red';
				} else {
					document.getElementById(ADDansArray[x].id).style.color = 'black';
				}
			}
			for (var x = 0; x < output.numAns-1; x++) {
				for (var y = x+1; y < output.numAns; y++) {
					if (document.getElementById(ADDansArray[x].id+'select').value == document.getElementById(ADDansArray[y].id+'select').value) {
						document.getElementById(ADDansArray[x].id).style.color = 'red';
						document.getElementById(ADDansArray[y].id).style.color = 'red';
						correct = false;
					}
				}
			}
			break;
		case 6:
			output.nEle = parseInt(document.getElementById('nElements').value);
			
			for (var x = 0; x < output.numAns; x++) {
				let newCheckFailed = true;
				for (var z = 0; z < output.nEle; z++) {
					if (document.getElementById(LGansArray[x].id+'select'+z).value != '0') {
						newCheckFailed = false;
						break;
					}
				}
				if (newCheckFailed) {
					correct = false;
					document.getElementById(LGansArray[x].id).style.color = 'red';
				} else {
					document.getElementById(LGansArray[x].id).style.color = 'black';
				}
			}
			for (var x = 0; x < output.numAns-1; x++) {
				for (var y = x+1; y < output.numAns; y++) {
					let newCheckFailed = true;
					for (var z = 0; z < output.nEle; z++) {
						if (document.getElementById(LGansArray[x].id+'select'+z).value != document.getElementById(LGansArray[y].id+'select'+z).value) {
							newCheckFailed = false;
							break;
						}
					}
					if (newCheckFailed) {
						correct = false;
						document.getElementById(LGansArray[x].id).style.color = 'red';
						document.getElementById(LGansArray[y].id).style.color = 'red';
					}
				}
			}
			break;
	}
	return correct;
}
checkItem()
				
function showItem() {
	output = {};
	output['lO'] = parseInt(document.getElementById('logicOptions').value);
	output['gO'] = parseInt(document.getElementById('graphicOptions').value);
	output['nAnnuli'] = parseInt(document.getElementById('nAnnuli').value);
	
	switch (output.gO) {
		case 0:
			output['numAns'] = parseInt(document.getElementById('nAnswers').value);
			break;
		case 1:
		case 2:
		case 3:
			output['numAns'] = parseInt(document.getElementById('nAnswersAdd').value); 
			break;
		case 6:
			output['numAns'] = parseInt(document.getElementById('nAnswersLG').value);
			break;
		default:
			output['numAns'] = 3;
	}
	
	output['nS'] = 4; // number of elements in annuli form depend on the number of annuli
	if (output.nAnnuli == 2) 
		output.nS = layoutSuffixes.length;
	
	output['distForm'] = [];
	for (var y = 0; y < output.nS; y++) {
		output['layout'+layoutSuffixes[y]] = parseInt(document.getElementById('layout'+layoutSuffixes[y]).value);
	}
	output.distForm.push(output['layoutM']);
	output.distForm.push([output['layoutC0'], output['layoutS0'], output['layoutR0']]);
	if (output.nAnnuli == 2) {
		output.distForm.push([output['layoutC1'], output['layoutS1'], output['layoutR1']]);
	}
	
	output['distAns'] = [];
	for (var x = 0; x < output.numAns; x++) {
		for (var y = 0; y < output.nS; y++) {
			output[ansArray[x].id+layoutSuffixes[y]] = parseInt(document.getElementById(ansArray[x].id+layoutSuffixes[y]).value);
		}
		output.distAns.push([]);
		output.distAns[x].push(output[ansArray[x].id+'M']);
		output.distAns[x].push([output[ansArray[x].id+'C0'], output[ansArray[x].id+'S0'], output[ansArray[x].id+'R0']]);
		if (output.nAnnuli == 2) {
			output.distAns[x].push([output[ansArray[x].id+'C1'], output[ansArray[x].id+'S1'], output[ansArray[x].id+'R1']]);
		}
	}
	
	output['nEle'] = parseInt(document.getElementById('nElements').value);
	
	output['nForm'] = [];
	if ([3].includes(output.lO)) {
		for (var x = 0; x < ADDFormDivs.length; x++) {
			output.nForm.push(parseInt(document.getElementById(ADDFormDivs[x].id+'select').value));
		}
	} else if ([4,5,6,7].includes(output.lO)) {
		for (var x = 0; x < LGFormDivs.length; x++) {
			output.nForm.push([]);
			for (var y = 0; y < output.nEle; y++) {
				output.nForm[x].push(parseInt(document.getElementById(LGFormDivs[x].id+'select'+y).value));
			}
		}
	} else {
		output.nForm = [0,0,0,0];
	}
	
	output['nAns'] = [];
	if ([1,2,3].includes(output.gO)) {
		for (var x = 0; x < output.numAns; x++) {
			output.nAns.push(parseInt(document.getElementById(ADDansArray[x].id+'select').value));
		}
	} else if ([6].includes(output.gO)) {
		for (var x = 0; x < output.numAns; x++) {
			output.nAns.push([]);
			for (var y = 0; y < output.nEle; y++) {
				output.nAns[x].push(parseInt(document.getElementById(LGansArray[x].id+'select'+y).value));
			}
		}
	} else {
		for (var x = 0; x < output.numAns; x++) {
			output.nAns.push(0);
		}
	}
	output['c'] = parseInt(document.getElementById('concealed').value);
	
	
	var allPuzzleTypes = [[[3,3],									// 0. [Grid Size] -- Not in use
						 [output.gO],								// 1. [Graphic Options] // can generally only be 2 at most
						 [output.lO],		 						// 2. [Logic Options]
						  output.distForm,							// 3. [Layout]
						  output.distAns,							// 4. [Answer Layout]
						 [output.nEle],								// 5. [Number of elements in centre]
						  output.nForm,								// 6. [Number Layout]
						  output.nAns,								// 7. [Number Answer Layout]
						  output.c,									// 8.  Number Concealed
						  0]];										// 9.  Type -- Not in use
	
	if (checkItem() && checkLayout()) {
		sessionStorage.setItem("testItem", JSON.stringify(allPuzzleTypes));
		window.location.href = "random.html";
	}
}

function showOptions () {
	let gOele = document.getElementById("graphicOptions");
	let lOele = document.getElementById("logicOptions");
	switch (gOele.value) {
		case '-1':
			lOele.options[1].disabled = false;
			lOele.options[2].disabled = false;
			lOele.options[3].disabled = false;
			lOele.options[4].disabled = false;
			lOele.options[5].disabled = false;
			lOele.options[6].disabled = false;
			lOele.options[7].disabled = false;
			lOele.options[8].disabled = false;
			break;
		case '0':
			lOele.options[1].disabled = false;
			lOele.options[2].disabled = false;
			lOele.options[3].disabled = false;
			lOele.options[4].disabled = true;
			lOele.options[5].disabled = true;
			lOele.options[6].disabled = true;
			lOele.options[7].disabled = true;
			lOele.options[8].disabled = true;
			document.getElementById('distAnnuliChooser').style.display = "block";
			document.getElementById('distAnswerLayouts').style.display = "block";
			document.getElementById('concealedDiv').style.display = "block";
			document.getElementById('noEleInCentre').style.display = "none";
			document.getElementById('noLayoutsLG').style.display = "none";
			document.getElementById('noAnswerLayoutsLG').style.display = "none";
			document.getElementById('noLayoutsAdd').style.display = "none";
			document.getElementById('noAnswerLayoutsAdd').style.display = "none";
			break;
		case '1':
		case '2':
		case '3':
			lOele.options[1].disabled = true;
			lOele.options[2].disabled = true;
			lOele.options[3].disabled = true;
			lOele.options[4].disabled = false;
			lOele.options[5].disabled = true;
			lOele.options[6].disabled = true;
			lOele.options[7].disabled = true;
			lOele.options[8].disabled = true;
			document.getElementById('distAnnuliChooser').style.display = "none";
			document.getElementById('distAnswerLayouts').style.display = "none";
			document.getElementById('concealedDiv').style.display = "none";
			document.getElementById('noEleInCentre').style.display = "none";
			document.getElementById('noLayoutsLG').style.display = "none";
			document.getElementById('noAnswerLayoutsLG').style.display = "none";
			document.getElementById('noLayoutsAdd').style.display = "block";
			document.getElementById('noAnswerLayoutsAdd').style.display = "block";
			break;
		case '6':
			lOele.options[1].disabled = true;
			lOele.options[2].disabled = true;
			lOele.options[3].disabled = true;
			lOele.options[4].disabled = true;
			lOele.options[5].disabled = false;
			lOele.options[6].disabled = false;
			lOele.options[7].disabled = false;
			lOele.options[8].disabled = false;
			document.getElementById('distAnnuliChooser').style.display = "none";
			document.getElementById('distAnswerLayouts').style.display = "none";
			document.getElementById('concealedDiv').style.display = "none";
			document.getElementById('noEleInCentre').style.display = "block";
			document.getElementById('noLayoutsLG').style.display = "block";
			document.getElementById('noAnswerLayoutsLG').style.display = "block";
			document.getElementById('noLayoutsAdd').style.display = "none";
			document.getElementById('noAnswerLayoutsAdd').style.display = "none";
			break;
	}
	switch (lOele.value) {
		case '-1':
			gOele.options[1].disabled = false;
			gOele.options[2].disabled = false;
			gOele.options[3].disabled = false;
			gOele.options[4].disabled = false;
			gOele.options[5].disabled = false;
			break;
		case '0':
			gOele.options[1].disabled = false;
			gOele.options[2].disabled = true;
			gOele.options[3].disabled = true;
			gOele.options[4].disabled = true;
			gOele.options[5].disabled = true;
			document.getElementById('distLayout').style.display = "none";
			document.getElementById('noLayoutsLG').style.display = "none";
			document.getElementById('noLayoutsAdd').style.display = "none";
			break;
		case '1':
		case '2':
			gOele.options[1].disabled = false;
			gOele.options[2].disabled = true;
			gOele.options[3].disabled = true;
			gOele.options[4].disabled = true;
			gOele.options[5].disabled = true;
			document.getElementById('distLayout').style.display = "block";
			document.getElementById('noLayoutsLG').style.display = "none";
			document.getElementById('noLayoutsAdd').style.display = "none";
			break;
		case '3':
			gOele.options[1].disabled = false;
			gOele.options[2].disabled = false;
			gOele.options[3].disabled = false;
			gOele.options[4].disabled = false;
			gOele.options[5].disabled = true;
			document.getElementById('distLayout').style.display = "none";
			document.getElementById('noLayoutsLG').style.display = "none";
			document.getElementById('noLayoutsAdd').style.display = "block";
			break;
		case '4':
		case '5':
		case '6':
		case '7':
			gOele.options[1].disabled = true;
			gOele.options[2].disabled = true;
			gOele.options[3].disabled = true;
			gOele.options[4].disabled = true;
			gOele.options[5].disabled = false;
			document.getElementById('distLayout').style.display = "none";
			document.getElementById('noLayoutsLG').style.display = "block";
			document.getElementById('noLayoutsAdd').style.display = "none";
			break;
	}
	if (lOele.value == '-1' || gOele.value == '-1') {
		document.getElementById('distLayout').style.display = "none";
		document.getElementById('noLayoutsLG').style.display = "none";
		document.getElementById('noLayoutsAdd').style.display = "none";
		document.getElementById('distAnnuliChooser').style.display = "none";
		document.getElementById('distAnswerLayouts').style.display = "none";
		document.getElementById('concealedDiv').style.display = "none";
		document.getElementById('noEleInCentre').style.display = "none";
		document.getElementById('noLayoutsLG').style.display = "none";
		document.getElementById('noAnswerLayoutsLG').style.display = "none";
		document.getElementById('noLayoutsAdd').style.display = "none";
		document.getElementById('noAnswerLayoutsAdd').style.display = "none";
	}
}
showOptions()

document.addEventListener('input', function (event) {
	checkItem();
	checkLayout();
	switch(event.target.id) {
		case 'logicOptions':
			if (event.target.value == '-1') {
				document.getElementById('graphicOptions').selectedIndex = 0;
				document.getElementById('graphicOptName').style.color = 'red';
			}
		case 'graphicOptions':
			if (event.target.value == '-1') {
				document.getElementById('logicOptions').selectedIndex = 0;
				document.getElementById('logicOptName').style.color = 'red';
			}
		case 'nAnnuli':
			if (event.target.value == 1) {
				document.getElementById('2ndAnnuluslayout').style.display = "none";
				document.getElementById('layoutC0').value = 0;
				document.getElementById('layoutS0').value = 0;
				document.getElementById('layoutR0').value = 0;
				for (var x = 0; x < ansArray.length; x++) {
					document.getElementById('2ndAnnulus'+ansArray[x].id).style.display = "none";
					document.getElementById(ansArray[x].id+'C1').value = 0;
					document.getElementById(ansArray[x].id+'S1').value = 0;
					document.getElementById(ansArray[x].id+'R1').value = 0;
				}
			} else {
				document.getElementById('2ndAnnuluslayout').style.display = "block";
				for (var x = 0; x < ansArray.length; x++) {
					document.getElementById('2ndAnnulus'+ansArray[x].id).style.display = "block";
				}
			}
			break;
		case 'nAnswers':
			for (var x = 0; x < event.target.value; x++) {
				document.getElementById(ansArray[x].id).style.display = 'block';
			}
			for (var x = event.target.value; x < ansArray.length; x++) {
				document.getElementById(ansArray[x].id).style.display = 'none';
				document.getElementById(ansArray[x].id+'M').value = 0;
				document.getElementById(ansArray[x].id+'C0').value = 0;
				document.getElementById(ansArray[x].id+'S0').value = 0;
				document.getElementById(ansArray[x].id+'R0').value = 0;
				document.getElementById(ansArray[x].id+'C1').value = 0;
				document.getElementById(ansArray[x].id+'S1').value = 0;
				document.getElementById(ansArray[x].id+'R1').value = 0;
			}
			break;
		case 'nElements':
			let maxEle = event.target[event.target.length-1].value;
			for (var y = 0; y < LGFormDivs.length; y++) {
				for (var x = 0; x < event.target.value; x++) {
					document.getElementById(LGFormDivs[y].id+'select'+x).style.display = 'inline';
				}
				for (var x = event.target.value; x < maxEle; x++) {
					document.getElementById(LGFormDivs[y].id+'select'+x).style.display = 'none';
					document.getElementById(LGFormDivs[y].id+'select'+x).value = 0;
				}
			}
			for (var y = 0; y < LGansArray.length; y++) {
				for (var x = 0; x < event.target.value; x++) {
					document.getElementById(LGansArray[y].id+'select'+x).style.display = 'inline';
				}
				for (var x = event.target.value; x < maxEle; x++) {
					document.getElementById(LGansArray[y].id+'select'+x).style.display = 'none';
					document.getElementById(LGansArray[y].id+'select'+x).value = 0;
				}
			}
			break;
		case 'nAnswersLG':
			for (var x = 0; x < event.target.value; x++) {
				document.getElementById(LGansArray[x].id).style.display = 'block';
			}
			let Nele = document.getElementById('nAnswersLG')
			for (var x = event.target.value; x < LGansArray.length; x++) {
				document.getElementById(LGansArray[x].id).style.display = 'none';
				for (var y = 0; y < Nele[Nele.length-1].value; y++) {
					document.getElementById(LGansArray[x].id+'select'+y).value = 0;
				}
			}
			break;
		case 'nAnswersAdd':
			for (var x = 0; x < event.target.value; x++) {
				document.getElementById(ADDansArray[x].id).style.display = 'block';
			}
			for (var x = event.target.value; x < LGansArray.length; x++) {
				document.getElementById(ADDansArray[x].id).style.display = 'none';
				document.getElementById(ADDansArray[x].id+'select').value = 0;
			}
			break;
	}
	showOptions();
})