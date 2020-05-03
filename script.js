var maindiv = document.createElement( 'div' );
let theContentForCalculator = ``;
//append all elements
document.body.appendChild( maindiv );

//set attributes for div
maindiv.id = 'myCalculator';
maindiv.style.position = 'fixed';
maindiv.style.top = '0';
maindiv.style.right = '0';
maindiv.style.width = '250px';   
//maindiv.style.height = '250px';
maindiv.style.backgroundColor = '#eee';
maindiv.style.borderRadius = "10px"

maindiv.innerHTML = '';
maindiv.style.position = "absolute"
document.getElementById('myCalculator').addEventListener('click', function() {
    console.log('test test');
});

document.getElementById('myCalculator').innerHTML=`
    <div class="dashbord"  id="dash" style=" z-index: 100 ; width: 100% ; ">
        <div id="myCalculator" class="claculator"   style="background-color: #eee">
            <div id="moveArea" style="width: 100% ; height: 20px ;  background-color: #afafaf">
            </div>
<div id='calc-contain' style=" border-radius: 12px; width: 80% ; margin: 10px auto;">
  
          <form name="calculator">
            
            <input type="text" name="answer" style="width: 65%" />
            <br>
            
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" 1 " onclick="calculator.answer.value += '1'" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" 2 " onclick="calculator.answer.value += '2'" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" 3 " onclick="calculator.answer.value += '3'" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" + " onclick="calculator.answer.value += '+'" />
            <br/>
            
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" 4 " onclick="calculator.answer.value += '4'" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" 5 " onclick="calculator.answer.value += '5'" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" 6 " onclick="calculator.answer.value += '6'" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" - " onclick="calculator.answer.value += '-'" />
            </br>
          
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" 7 " onclick="calculator.answer.value += '7'" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" 8 " onclick="calculator.answer.value += '8'" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" 9 " onclick="calculator.answer.value += '9'" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" x " onclick="calculator.answer.value += '*'" />
            </br>
        
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" c " onclick="calculator.answer.value = ''" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" 0 " onclick="calculator.answer.value += '0'" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" = " onclick="calculator.answer.value = eval(calculator.answer.value)" />
            <input style="background: lightGray; border-radius: 7px; cursor:pointer"  type="button" value=" / " onclick="calculator.answer.value += '/'" />
            </br>
  
    
          </form>
          
        </div>
        </div>
    </div>`


var test = document.getElementById("myCalculator");
//test.style.height = "250px"
test.style.width = "250px"

if (document.addEventListener) {
    document.getElementById("moveArea").addEventListener("mousedown", function(event){ 
    document.addEventListener("mousemove", myFunction);})
} else if (document.attachEvent) {
    document.attachEvent("onmousemove", myFunction);
}

function myFunction() {
x = event.clientX;
   y = event.clientY;
  var coor = "X coords: " + x + ", Y coords: " + y;
    console.log(coor)
test.style.left = x +"px"
test.style.top = y +"px"
}
document.getElementById("moveArea").addEventListener("mouseup", removeHandler)
function removeHandler() {
    if (document.removeEventListener) {
        document.removeEventListener("mousemove", myFunction);
    } else if (document.detachEvent) {
        document.detachEvent("onmousemove", myFunction);
    }
}