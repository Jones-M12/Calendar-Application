
// console.log("test");

//Format to create the current day displayed on the calendar
var currentMoment= moment().format('LLLL');
console.log(currentMoment);

$("#currentDay").text(currentMoment);


// Save button function 
$(".saveBtn").on("click", function(){
    event.preventDefault();
    var textContent= $(this).siblings("#textInput").val();
    var timeBlock= $(this).parent().attr("id");
    console.log(textContent);
    localStorage.setItem(timeBlock, textContent);
});

//Render Data: It works, but the last saved input overwrites the prev one. Thought that issue was solved by tartgeting the ID.

$("#textInput").each(function(){

var id =$(this).parent().attr("id");
$(this).val(localStorage.getItem(id));

});


