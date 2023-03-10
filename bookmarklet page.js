var up = true;
var value = 0;
var increment = 1;
var ceiling = 0;

/*New tab*/
var tab = window.open('about:blank', '_blank');
tab.document.body.style.backgroundColor = "black"
newTitle = ">>>BMH<<<"

let favicon = document.createElement('link');
favicon.innerHTML = 'rel="icon" type="image/x-icon" href="https://cdn-icons-png.flaticon.com/512/5968/5968523.png?"'
tab.document.head.appendChild(favicon)

/*hahah funny cosmetic title change that slows down the browser and the rest of the javascript go burrrr*/
setInterval(ChangeTitle, 500);
function ChangeTitle(){
  PerformCalc(9);
  newTitleSub = newTitle.substring(0,value);
  if (tab.document.title != newTitleSub) {
       tab.document.title = newTitleSub;
   }
};

function PerformCalc(ceiling) {
   console.log(value)
 if (up === true && value <= ceiling) {
   value += increment
   if (value == ceiling) {
     up = false;
   }
 } else {
     up = false
     value -= increment;


     if (value === 0) {
       up = true;
     }
 }
}


