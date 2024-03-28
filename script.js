value1 = [
   { value: 0},
   { value: 0}, 
   { value: 0}, 
    
];

value2 = [
    { value: 255} ,
    { value: 255}, 
    { value: 255}, 
     
 ];
    
function rainbow() {
    intervalId = window.setInterval(function(){
        value1[0].value = value1[0].value + 1
        value1[1].value = value1[1].value + 10
        value1[2].value = value1[2].value + 20

        value2[0].value = value2[0].value - 10
        value2[1].value = value2[1].value - 15
        value2[2].value = value2[2].value - 35


        
        console.log(value1[0].value)
        var gradientBody = document.getElementById('gradientBody');
        gradientBody.style.backgroundImage = "linear-gradient(rgb("+value1[0].value+","+value1[1].value+","+value1[2].value+"), rgb("+value2[0].value+","+value2[1].value+","+value2[2].value+"))"
        
        
       }, 1000);
       
}

function randomGradient() {
var randOne = Math.floor(0);
var randTwo = Math.ceil(255);
var rgbValue = document.getElementById('rgbValue');
var hexValue = document.getElementById('hexValue');
intervalId = window.setInterval(function()
{
    random1 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random2 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random3 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random4 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random5 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random6 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    
            value1[0].value = random1
            value1[1].value = random2
            value1[2].value = random3
    
            value2[0].value = random4
            value2[1].value = random5
            value2[2].value = random6
    gradientBody.style.backgroundImage = "linear-gradient(rgb("+random1+","+random2+","+random3+"), rgb("+random4+","+random5+","+random6+"))"
},1000)

}

function boxappear() {
    window.onclick = e => {
      gradient1 = document.getElementById('colorpicker');
      gradient1.style.backgroundImage = e.target.style.backgroundImage 
      document.getElementById('colorpicker').style.display = 'flex'
    //   document.getElementById('REDone').innerText = gradient1.style.backgroundImage = e.target.style.backgroundImage

    } 
    
   
    
}   


function gradientFade() {
   var gradientBody = document.getElementById('gradientBody');
// gradientBody.style.backgroundImage = "linear-gradient(rgb("+value1[0].value+","+value1[1].value+","+value1[2].value+"), rgb("+value2[0].value+","+value2[1].value+","+value2[2].value+"))";
   
    gradientBody.setAttribute('style', "linear-gradient(rgb("+value1[0].value+","+value1[1].value+","+value1[2].value+"), rgb("+value2[0].value+","+value2[1].value+","+value2[2].value+"))")
    alert(gradientBody.style.backgroundImage)
}

boxes = 0;
limitreached = false;
function addElement() {
    if (limitreached == true) {
        limitreached = false;
        allGradients = document.getElementById('mainBody').querySelectorAll('.dogBox')
        allGradients.forEach(e => e.remove());
        boxes = 0;
        boxcount.innerHTML = 'Boxes: '+boxes+''
    }
    var randOne = Math.floor(0);
    var randTwo = Math.ceil(255);
    random1 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random2 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random3 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random4 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random5 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    random6 = Math.floor(Math.random() * (randTwo - randOne + 1) + randOne);
    
            value1[0].value = random1
            value1[1].value = random2
            value1[2].value = random3
    
            value2[0].value = random4
            value2[1].value = random5
            value2[2].value = random6
    const newDiv = document.createElement("div");
    newDiv.style = "flex: 1; background-color: red; padding: 1rem; margin: 5px; border: 1px solid white; background-image: linear-gradient(rgb("+random1+","+random2+","+random3+"), rgb("+random4+","+random5+","+random6+"))"
    newDiv.className = "dogBox"
    newDiv.id = boxes;
    newDiv.onclick = function() { boxappear('block'); };
    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')
    const hex1 = document.createTextNode(rgbToHex(random1, random2, random3));
    const hex2 = document.createTextNode(rgbToHex(random4, random5, random6));
    
    const linebreak = document.createElement("br")
    newDiv.appendChild(hex1)
    newDiv.appendChild(linebreak)
    newDiv.appendChild(hex2)
    
    document.getElementById('mainBody').appendChild(newDiv);
    boxes = boxes + 1;
    boxcount = document.getElementById('boxcount');
    boxcount.innerHTML = 'Boxes: '+boxes+''
    if (boxes > 107) {
        clearInterval(intervalId);
        limitreached = true;
    }
    
}


function SpamElement() {
    intervalId = window.setInterval(function(){
        addElement();
    },10)
}

function StopSpamElement() {
clearInterval(intervalId)
}

function coloring() {

        value1[0].value = value1[0].value + 0
        value1[1].value = value1[1].value + 1
        value1[2].value = value1[2].value + 0.1
        
        

        value2[0].value = value2[0].value - 0
        value2[1].value = value2[1].value - 0.1
        value2[2].value = value2[2].value - 1 






var box = document.getElementById('colorbox');
box.style.backgroundImage = "linear-gradient(rgb("+value1[0].value+","+value1[1].value+","+value1[2].value+"), rgb("+value2[0].value+","+value2[1].value+","+value2[2].value+"))"


}

function coloringg() {
    loop = window.setInterval(function() {
        coloring();
    },10)
}

// function filterColors() {
//     mb = document.getElementById('mainBody');
//     // red b/n 0 and 12
//     // yellow b/n 12 and 50
//     // green b/n 50 ans 64
//     // blue blbn 64 and 157
//     // purple b/n 157 and 261
//     // pink b/n 261 and 293
//     // red b/n 293 and 360
//     const matches = mb.querySelectorAll('div[style]');
//     mba = Array.from(matches)
//     console.log(mba)
    
    
// }

function cusGradient() {
    var box = document.getElementById('colorbox');
    frgb1 = document.getElementById('rgb1');
    frgb2 = document.getElementById('rgb2');
    frgb3 = document.getElementById('rgb3');

    srgb1 = document.getElementById('rgb4');
    srgb2 = document.getElementById('rgb5');
    srgb3 = document.getElementById('rgb6');

    box.style.backgroundImage = "linear-gradient(rgb("+frgb1.value+","+frgb2.value+","+frgb3.value+"),rgb("+srgb1.value+","+srgb2.value+","+srgb3.value+"))"


}

function ClearElement() {
    limitreached = false;
        // document.getElementById('mainBody').innerHTML = '<div id="colorpicker"></div>';
        allGradients = document.getElementById('mainBody').querySelectorAll('.dogBox')
        allGradients.forEach(e => e.remove());
        console.log(allGradients)
        boxes = 0;
        boxcount.innerHTML = 'Boxes: '+boxes+''

}

