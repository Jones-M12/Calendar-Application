
// console.log("test");

//Format to create the current day displayed on the calendar
var currentMoment= moment().format('LLLL');
console.log(currentMoment);

$("#currentDay").text(currentMoment);


// Save button function 
$(".saveBtn").on("click", function(){
    var textContent= $(this).siblings("#textInput").val();
    var timeBlock= $(this).parent().attr("id");
    console.log(textContent);
    localStorage.setItem("timeBlock", textContent);
});

//attempt to render data so it will save, does not work

$("#textInput").each(function(){

var id =$(this).parent().attr("id");
$(this).val(localStorage.getItem(id));

});




//Using a format

// currentMoment = ()


// moment().format('MMMM Do YYYY, h:mm:ss a')
// console.log(m.toString());
// moment('01/12/2016', 'DD/MM/YYYY', true).format()
// "2016-12-01T00:00:00-06:00"

