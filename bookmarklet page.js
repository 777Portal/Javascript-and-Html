var up = true;
var value = 0;
var increment = 1;
var ceiling = 0;

setInterval(ChangeTitle, 500);

var tab = window.open('about:blank', '_blank');
tab.write
newTitle = ">>>BMH<<<"


/*hahah funny cosmetic title change that slows down the browser and the rest of the javascript go burrrr*/
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


