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

let ansArray = [Ans1, Ans2, Ans3, Ans4, Ans5, Ans6];
let show = [];
for (var x = 0; x < document.getElementById('nAnswers').value; x++) {
	show.push(true);
}
for (var x = document.getElementById('nAnswers').value; x < ansArray.length; x++) {
	show.push(false);
}
for (var x = 0; x < ansArray.length; x++) {
	showAnnulusOptions(ansArray[x], show[x], 'deltas');
}

let selectorList = ["lO","gO",
				"nAnnuli",
				"layoutM","layoutC0","layoutS0","layoutR0",
						  "layoutC1","layoutS1","layoutR1",
				"nAns"]
let layoutSuffixes = ['M', 'C0','S0','R0', 'C1','S1','R1'];

function checkLayout() {
	correct = true;
	if (document.getElementById('logicOptions').value == 1 || document.getElementById('logicOptions').value == 2) {
		output = {}
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
	} else {		
		document.getElementById('layout').style.color = "black";
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
	output['nAns'] = parseInt(document.getElementById('nAnswers').value);
	
	let nSuffixes = 4;
	if (output.nAnnuli == 2) 
		nSuffixes = layoutSuffixes.length;
		
	let ansLayouts = []
	for (var x = 0; x < output.nAns; x++) {
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
	
	for (var x = 0; x < output.nAns; x++) {
		if (ansLayouts[x][0] == 0 && ansLayouts[x][1][0] == 0 && ansLayouts[x][1][1] == 0 && ansLayouts[x][1][2] == 0) {
			document.getElementById('Ans'+(x+1)).style.color = "red";
			correct = false;
		} else {
			document.getElementById('Ans'+(x+1)).style.color = "black";
		}
	}
	return correct;
}
checkItem()
				
function showItem() {
	output = {};
	output['lO'] = parseInt(document.getElementById('logicOptions').value);
	output['gO'] = parseInt(document.getElementById('graphicOptions').value);
	output['nAnnuli'] = parseInt(document.getElementById('nAnnuli').value);
	output['nAns'] = parseInt(document.getElementById('nAnswers').value);
	
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
	
	let ansLayouts = []
	for (var x = 0; x < output.nAns; x++) {
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
	
	var allPuzzleTypes = [[[3,3],									// 0. [Grid Size]
						 [output.gO],								// 1. [Graphic Options] // can generally only be 2 at most
						 [output.lO],		 						// 2. [Logic Options]
						 patLayout,									// 3. [Layout]
						 ansLayouts,								// 4. [Answer Layout]
						 [0],										// 5. [Number of elements in centre]
						 [0,0,
						  0,0],										// 6. [Number Layout]
						 [0,0,0],									// 7. [Number Answer Layout]
						  0,										// 8. #Concealed
						  0]];										// 9. Type
	
	if (checkItem() && checkLayout()) {
		sessionStorage.setItem("testItem", JSON.stringify(allPuzzleTypes));
		window.location.href = "random.html";
	}
}
function showOptions () {
	let gOele = document.getElementById("graphicOptions");
	let lOele = document.getElementById("logicOptions");
	
	if (gOele.value != '0') {
		lOele.options[1].disabled = true;
		lOele.options[2].disabled = true;
		lOele.options[3].disabled = false;
		lOele.options[4].disabled = false;
		lOele.options[5].disabled = false;
		lOele.options[6].disabled = false;
		lOele.options[7].disabled = false;
		document.getElementById('distAnnuliChooser').style.display = "none";
		document.getElementById('distLayout').style.display = "none";
		document.getElementById('distAnswerLayouts').style.display = "none";
		document.getElementById('concealedDiv').style.display = "none";
		document.getElementById('noEleInCentre').style.display = "block";
		document.getElementById('noLayouts').style.display = "block";
		document.getElementById('noAnswerLayouts').style.display = "block";
	} else {
		lOele.options[1].disabled = false;
		lOele.options[2].disabled = false;
		lOele.options[3].disabled = true;
		lOele.options[4].disabled = true;
		lOele.options[5].disabled = true;
		lOele.options[6].disabled = true;
		lOele.options[7].disabled = true;
		document.getElementById('distAnnuliChooser').style.display = "block";
		document.getElementById('distAnswerLayouts').style.display = "block";
		document.getElementById('concealedDiv').style.display = "block";
		document.getElementById('noEleInCentre').style.display = "none";
		document.getElementById('noLayouts').style.display = "none";
		document.getElementById('noAnswerLayouts').style.display = "none";
	}
	if ((lOele.value == '1') || (lOele.value == '2')) {
		gOele.options[0].disabled = false;
		gOele.options[1].disabled = true;
		gOele.options[2].disabled = true;
		gOele.options[3].disabled = true;
		document.getElementById('distLayout').style.display = "block";
		// if ((gOele.value == '1') || (gOele.value == '2') || (gOele.value == '3')) {
// 				gOele.value = 0;
// 			}
	} else {
		gOele.options[0].disabled = true;
		gOele.options[1].disabled = false;
		gOele.options[2].disabled = false;
		gOele.options[3].disabled = false;
		document.getElementById('distLayout').style.display = "none";
		// if ((gOele.value == '0')) {
// 				gOele.value = 1;
// 			}
	}
	// if (gOele.value != '0') {
// 			lOele.options[1].disabled = false;
// 			lOele.options[2].disabled = false;
// 			lOele.options[3].disabled = false;
// 			lOele.options[4].disabled = false;
// 			lOele.options[5].disabled = false;
// 			lOele.options[6].disabled = false;
// 			lOele.options[7].disabled = false;
// 		}

	if (lOele.value == '0') {
		gOele.options[0].disabled = false;
		gOele.options[1].disabled = false;
		gOele.options[2].disabled = false;
		gOele.options[3].disabled = false;
		document.getElementById('distLayout').style.display = "none";
		document.getElementById('noLayouts').style.display = "none";
	} 
	
}
showOptions()

document.addEventListener('input', function (event) {
	checkItem();
	checkLayout();
	switch(event.target.id) {
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
			let show = [];
			for (var x = 0; x < event.target.value; x++) {
				document.getElementById(ansArray[x].id).style.display = 'block';
			}
			for (var x = event.target.value; x < ansArray.length; x++) {
				document.getElementById(ansArray[x].id).style.display = 'none';
				for (var x = event.target.value; x < ansArray.length; x++) {
					document.getElementById('2ndAnnulus'+ansArray[x].id).style.display = "none";
					document.getElementById(ansArray[x].id+'M').value = 0;
					document.getElementById(ansArray[x].id+'C0').value = 0;
					document.getElementById(ansArray[x].id+'S0').value = 0;
					document.getElementById(ansArray[x].id+'R0').value = 0;
					document.getElementById(ansArray[x].id+'C1').value = 0;
					document.getElementById(ansArray[x].id+'S1').value = 0;
					document.getElementById(ansArray[x].id+'R1').value = 0;
				}
			}
			break;
	}
	showOptions();
})