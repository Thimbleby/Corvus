//---------------------------------------------------------------------------------- 
//	ver   	date        rfc     auth    comments                                         
// --------------------------------------------------------------------------------- 
//	0.8.9   20190727    IT      IT      Bug Fixes
/* ************ © Copyright 2019 Isaac Thimbleby ******** */
//
//
function createClass(name,rules){
    var style = document.createElement('style');
    style.type = 'text/css';
    document.getElementsByTagName('head')[0].appendChild(style);
    if(!(style.sheet||{}).insertRule) 
        (style.styleSheet || style.sheet).addRule(name, rules);
    else
        style.sheet.insertRule(name+"{"+rules+"}",0);
}
createClass('.svgtxt',	"-webkit-touch-callout:none; -webkit-user-select:none; -khtml-user-select:none; -moz-user-select:none; -ms-user-select:none; -o-user-select:none; user-select:none;");
// Horizontal and vertical radii for icons
d3.select(window).on('resize', resize);

function resize() {	
	d3.select("#myCanvas").remove();
	d3.select("#myQuestions").remove();
	d3.select("#skipText").remove();

	if (($(window).height() > 552) && ($(window).width() > 820)) {
		if ($(window).width()/20 < $(window).height()/12-lineThickness*5) {
			cx = $(window).width()/20-lineThickness;
			cy = cx;
		} else {
			cy = $(window).height()/12-lineThickness-lineThickness*5;
			cx = cy;
		}
	} else {
		cx = 40; 
		cy = cx;
	}
	spacing = cx*1.00;
	iconSizeX = 2*(cx+lineThickness+spacing);
	iconSizeY = 2*(cy+lineThickness+spacing);
	aw = maxG*iconSizeX;
	ah = maxG*iconSizeY;
	w = aw+iconSizeX*2;
	h = aw;
	draw1();
	draw2();
	draw3();
	updateRadii();
}


// Start time — dealt with in html;
//var TESTTYPE = "standard";
//var d = new Date();
//var startTime = d.getTime();
//
var lineThickness = 1;
if (($(window).height() > 552) && ($(window).width() > 820)) {
	if ($(window).width()/20 < $(window).height()/12-lineThickness*5) {
		cx = $(window).width()/20-lineThickness;
		cy = cx;
	} else {
		cy = $(window).height()/12-lineThickness-lineThickness*5;
		cx = cy;
	}
} else {
	cx = 40; 
	cy = cx;
}
d3.select(window).on('resize', resize);
// Horizontal and vertical radii for icons
// Note to self: Change name of cx/cy
function resize() {	
	d3.select("#myCanvas").remove();
	d3.select("#myQuestions").remove();
	d3.select("#skipText").remove();

	if (($(window).height() > 552) && ($(window).width() > 820)) {
		if ($(window).width()/20 < $(window).height()/12-lineThickness*5) {
			cx = $(window).width()/20-lineThickness;
			cy = cx;
		} else {
			cy = $(window).height()/12-lineThickness-lineThickness*5;
			cx = cy;
		}
	} else {
		cx = 40; 
		cy = cx;
	}
	spacing = cx*1.00;
	iconSizeX = 2*(cx+lineThickness+spacing);
	iconSizeY = 2*(cy+lineThickness+spacing);
	aw = maxG*iconSizeX;
	ah = maxG*iconSizeY;
	w = aw+iconSizeX*2;
	h = aw+lineThickness*6;
	draw1();
	draw2();
	draw3();
	updateRadii();
}

// ### Mouse-over ###
// Set mouse-over to determine mouseOver functionality
// currentSet chooses from the array mouseOrder
// 0 = The tooltip is active and the options are otherwise visible
// 1 = The tooltip is deactive and the options are visible
// 2 = The tooltip is active and the options are otherwise hidden
var mouseOrder = [0,1,2];
var currentSet = 0;
// Spacing
var spacing = cx*1.00;
var interSpacing = 0.15;
// total icon size
var iconSizeX = 2*(cx+lineThickness+spacing);
var iconSizeY = 2*(cy+lineThickness+spacing);
// Grid size
var maxG = 3 
// Available width and height of canvas for question icons
var aw = maxG*iconSizeX;
var ah = maxG*iconSizeY;
//Width and height of 'canvas'
var w = aw+lineThickness*6+iconSizeX*2;
var h = aw;
// Max Difficulty
//var maxDifficulty = allPuzzleTypes.length;
var difficulty = 0;
// Annulus width
var annulusWidth = 1.5;
var radii = [];
// Number of possible answers
var maxNAnswers = 6;
var lessAnswers = 4;
// Grid size
var maxG = 3; //allPuzzleTypes[0][0][0];
// Question Storage
//var mt = [[],[]];
var questionsAsked = [startTime,[],[],[],[],[]];
var propertyStorage = [[],[],[],[],[],[],[],[],[],[]];
var iconProperties = [];
/*for (var x = 0; x < maxDifficulty; x++) {
	iconProperties[x] = "";
}*/
// Maximum number of interlocking shapes (this should probably really be called maxAnulli)
var maxShapes = 2; //3;
// difficulty category at which a rotation offset is used;
var rotationOffset = 0.6;
// difficulty category at which clear wrong answers are not presented (e.g. wrong annuli or shade)
var noClearlyWrong = 0.7;
var clearlyWrong = 0.2;
// difficulty category at which more answers are presented & how many if less.
//var moreOptions = 0.5;
// difficulty category at which harder layouts are used
var harderLayouts = 2/5;
var bothHarderLayouts = 3/5;
// Quantity of inter-item variety attempted
var varietyValue = 1;
// timer for controlling mouseovers
var timer = true;
if (mouseOrder[currentSet] == 1) {
	timer = false;
}
// 		0-1/5: 	 0 patterns 
//		1/5-2/5: 1 pattern
//		2/5-3/5: 2 patterns
//		3/5-4/5: 3 patterns
//		4/5-1:	 4 patterns
//var arrgh = [0,0,0,0]
//console.log(arrgh);
//for (x = 0; x < arrgh.length; x++) {
//	arrgh[x] += arrgh[(x-1)%arrgh.length];
//}

/*var	svg = d3.select("body")
				.append("svg:svg")
				.attr("width", w)
				.attr("height", h)
				.attr("id", "myCanvas");*/	
				
				//function to print self.numberGridArray during construction
				
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
function versionNumber() {
	return "v0.8.8";
}
console.log("Corvus version: " + versionNumber());
