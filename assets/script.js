var results=document.querySelector('.results');

var inputs=document.querySelector('.inputs');
var inputBottom=inputs.getBoundingClientRect().bottom;
console.log(inputBottom);
results.style.setProperty('--resultTop',inputBottom+'px');


function newHeight(e){
var results=document.querySelector('.results');

var inputs=document.querySelector('.inputs');
var inputBottom=inputs.getBoundingClientRect().bottom;
console.log(inputBottom);
results.style.setProperty('--resultTop',inputBottom+'px');
};

window.addEventListener('resize',newHeight);

var submitBtn=document.querySelector(".submitBtn");
var poly=document.querySelector('.poly');
var po=document.querySelector('.po');

function submission(e){
	poly.innerHTML="";
var cpulse=document.querySelector(".cpulseInput").value;
var pulse=document.querySelector(".pulseInput").value;
var flatArray=[];
var count=0;

for(var i=0;i<cpulse*pulse;i++){
	if(count>=cpulse){
		count=0;
	}
	flatArray[i]=count+1;

	if(i%pulse!=0){
		flatArray[i]=count+1;
		if(flatArray[i]==1){
		bb=document.createElement('div');
		bb.innerHTML=`<span class='pulseAccent'>${flatArray[i]}</span>`;
		flatArray[i]=bb.innerHTML;
	}
	} else{
		if(i%cpulse==0){
		adult=document.createElement('div');
		adult.innerHTML="<span class='specialAccent'>X</span>";
		flatArray[i]=adult.innerHTML;
	}else{
		adult=document.createElement('div');
		adult.innerHTML="<span class='accent'>X</span>";
		flatArray[i]=adult.innerHTML; 
	}
	}
	count++;
	}
	
	for(var i=0;i<cpulse*pulse;i++){
		if(i%cpulse==0){
			baby=document.createElement('div');
			baby.innerHTML=flatArray.splice(0,cpulse).join(" ");
			baby.classList.add('spanRow');
			poly.appendChild(baby);

		}
	}
}

function lcm(e){
po.innerHTML="";
var cpulse=document.querySelector(".cpulseInput").value;
var pulse=document.querySelector(".pulseInput").value;
var beatArray=[];
var count=1;

for (var i=0;i<(cpulse*pulse*16);i++){
	if(count==(cpulse*pulse*16)){
		count=0;
	}
	beatArray.push(cpulse*count);
	count++;
}

for (var i=0;i<(cpulse*pulse*16);i++){
	if(count==(cpulse*pulse*16)){
		count=0;
	}
	beatArray.push(pulse*count);
	count++;
}

for (var i=0;i<(cpulse*pulse*16);i++){
	if(count==(cpulse*pulse*16)){
		count=0;
	}
	beatArray.push(16*count);
	count++;
}
var commonMultiples=[];

for(var i=0;i<beatArray.length;i++){
	if(beatArray[i]%16==0&&beatArray[i]%pulse==0&&beatArray[i]%cpulse==0){
		commonMultiples.push(beatArray[i]);
	}
}

var howManyPatterns=commonMultiples[0]/16;

po.innerHTML="<span class='poWords'>This polyrhythm will resolve in"+" <span class='variable'>"+howManyPatterns+"</span> 16-beat patterns of the Pocket Operator.</span>"+ '<p>&nbsp</p>';

console.log(howManyPatterns);


//building Array with counterpulses

var rowCount=0;
var beats=0;
var barCount=0;
var flatArray=[];
console.log(pulse);
for(var i=0;i<howManyPatterns*16;i++){
	if(barCount==cpulse){
		barCount=0;
	}
	flatArray[i]=barCount+1;

	if(i%cpulse!=0){
		flatArray[i]=barCount+1;
	} else if(i%pulse==0){
		adult=document.createElement('div');
		adult.innerHTML="<span class='specialAccent'>X</span>";
		flatArray[i]=adult.innerHTML; 
	} else{
		bb=document.createElement('div');
		bb.innerHTML="<span class='pulseAccent'>X</span>";
		flatArray[i]=bb.innerHTML;
	}

	if(i%pulse==0){
	bb=document.createElement('div');
	bb.innerHTML=`<span class='cpulseAccent'>${flatArray[i]}</span>`;
	flatArray[i]=bb.innerHTML;
	}


	beats++;
	barCount++;

}
console.log(flatArray);

//doing PO Visualization
var rowCount=0;
var pCount=1;
for (var j=0;j<howManyPatterns*16;j++){

	if(pCount>howManyPatterns){
		break;
	}

	if(rowCount==0&&j==0){
		lilBaby=document.createElement('div');
		lilBaby.innerHTML=`<span class='patternCount'> Pattern ${pCount}: </span>`;
		po.appendChild(lilBaby);
	}

	if (rowCount==4){
		pCount++;
		if(pCount>howManyPatterns){
			break;
		}
		beatRow=document.createElement('div');
		beatRow.innerHTML=`<br><span class='patternCount'> Pattern ${pCount}: <br> </span>`;
		po.appendChild(beatRow);
		rowCount=0;
	}
	lilPattern=document.createElement('div');
	lilPattern.innerHTML=flatArray.splice(0,4).join(" ");
	rowCount++;
	po.appendChild(lilPattern);
	console.log("another");
}

}



submitBtn.addEventListener('click',submission);
submitBtn.addEventListener('click',lcm);