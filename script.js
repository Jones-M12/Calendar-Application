
// console.log("test");

//Format to create the current day displayed on the calendar

var currentMoment= function() { 
    var now = moment().format('LLLL');
  console.log(currentMoment);
  
  $("#currentDay").text(now)
  }
  currentMoment()
  setInterval(currentMoment, 60000)

// var currentMoment= moment().format('LLLL');
// console.log(currentMoment);

// $("#currentDay").text(currentMoment);


// Save button function 
$(document).on("click",".saveBtn",function(){
    event.preventDefault();
    var textContent= $(this).siblings(".description").val();
    var timeBlock= $(this).parent().attr("id");
    console.log(timeBlock)
    console.log(textContent);
    localStorage.setItem(timeBlock, textContent);
});

//Render Data: It works, but the last saved input overwrites the prev one. Thought that issue was solved by tartgeting the ID.

// wroked with tutor to do troubleshoorting & resolve issue 

$(".description").each(function(){

var id =$(this).parent().attr("id");
$(this).val(localStorage.getItem(id));

});

//to get the divs to change color

//ccreate a function to add or remove classes if id is greater or less than the current time. hint: if else statements

//Ari's example of how a function works

// function exampleFunction(dough){
//     console.log(dough);
//     dough=dough+"something"
//     console.log(dough)
//     return dough
// }

// var usingAFunction = exampleFunction("RICE FLOUR");
// console.log(usingAFunction)