// Basic Syntax for jQuery
// $("selector").action()


$(document).ready(function(){
    $("#heading").html("Mahalos!");

    // $("p").click(function(){
    //     alert("I was clicked");
    // });

    // $("p").mouseenter(function(){
    //    // alert("mouse over");

    // });

    // $("p").mouseleave(function(){
    //     //alert("Mouse over");
    //     $(this).css("background-color","yellow");
    // })

    $("p").on({
        click:function(){
            alert('clicked');
        },

        mouseenter: function(){
            $(this).css("background-color","red");
        },

        mouseleave: function(){
            $(this).css("background-color", "purple")
        }
    })

    $("button.hide").click(function(){
        $("p").hide();
    })

    $("button.show").click(function(){
        $("p").show();
    })

    $("button.toggle").click(function(){
        $("p").slideToggle(1000, function(){
            $("#heading").html("Shaka")

        });

    });



});
