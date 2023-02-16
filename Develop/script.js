//refresh webpage
var refreshButtonEl = $('#refresh-btn');
var clearButtonEl = $('#clear-btn');

// Function refresh  the web
refreshButtonEl.on('click', function () {
    location.reload();
  });

  // function clear contents
  $("#clearFieldsBtn").click(function (event) {
    event.preventDefault;
    $("textarea").val("");
    localStorage.clear();
  });


// Actual Date
var actualDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(actualDate);

$(document).ready(function () {
    
    $(".saveBtn").on("click", function () {
        
        var textarea = $(this).siblings(".description").val();
        var updatetime = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(updatetime, textarea);
    })
   
    function timers() {

        //Variable que define la fecha actual
        var currentTime = moment().format("MMMM Do YYYY");
        $("#currentDay").text(currentTime);

        
        $(".time-block").each(function () {
            var TimeBlock = parseInt($(this).attr("id").split("hour")[1]);

            
            if (TimeBlock < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (TimeBlock === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));


    timers();
})

