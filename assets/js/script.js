var onLoad = function() {
    for (var i = 9; i < 18; i++ ) {
        var task = localStorage.getItem("hour" + i)
        document.getElementById(i).textContent = task
    } 
}
// adding current day under the top of the calendar
var currentDay = moment().format("MMMM Do, YYYY - hh:mm:ss a");
console.log(currentDay);
var displayDate = document.getElementById("currentDay")
displayDate.innerHTML = currentDay




//button to save user input
$(".saveBtn").on("click", function(){
var hourEl = $(this).siblings("textarea").attr("id")
console.log(hourEl)


// retrieve user input
var textEl = $(this).siblings("textarea").val()
console.log(textEl)
localStorage.setItem("hour"+ hourEl, textEl)
});


onLoad()

// indicate past, present, or future using color code

if (moment().isAfter(currentDay)) {
$(hourEl).addClass("time-block").attr("hh:mm:ss");
}