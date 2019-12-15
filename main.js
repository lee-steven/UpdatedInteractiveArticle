$(window).scroll(function() {
    if ( $(window).scrollTop() >= window.innerHeight / 2 ) {
        let brightness = 30;
            $('#intro-color').fadeIn("slow");
    } else{
        $('#intro-color').fadeOut("slow");
    }
});

// Button options 'clicked'
$('#standard-day').click(function(){
    $('#option-result').html("Wow! You chose standard shipping. Why did you choose this option?");
    $('#article-container').fadeIn(1000);
    $('#standard-day').css('border', '5px solid white');
    $('#two-day').css('border', '5px solid rgba(23, 23, 23, 0.5)')
    $('#many-day').css('border', '5px solid rgba(23, 23, 23, 0.5)')
})

$('#two-day').click(function(){
    $('#option-result').html("So you chose the two-day delivery option. Why wouldn’t you? It’s free and it’s faster than the 5-6 business day option. It couldn’t hurt right?");
    $('#article-container').fadeIn(1000);
    $('#standard-day').css('border', '5px solid rgba(23, 23, 23, 0.5)');
    $('#two-day').css('border', '5px solid white')
    $('#many-day').css('border', '5px solid rgba(23, 23, 23, 0.5)')
})

$('#many-day').click(function(){
    $('#option-result').html("Mindful choice! Many people don't choose this option.");
    $('#article-container').fadeIn(1000);
    $('#standard-day').css('border', '5px solid rgba(23, 23, 23, 0.5)');
    $('#two-day').css('border', '5px solid rgba(23, 23, 23, 0.5)')
    $('#many-day').css('border', '5px solid white')
})

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



$(document).on('scroll', function() {
    // if($(this).scrollTop()>=$('#section1').position().top){
       
    // }
    if(isScrolledIntoView($('#section1-header')))
    {

        // $("#loader").fadeIn("slow", function() {
        //     $(this).addClass("loader");
        // });
        // $('#section1-background').fadeIn(3000);
        // $('#section1').css('background-image', 'url(primePlane.jpg)')
        // $('#section1').css('background-size', 'cover    ')
        // $('#section1').css('background-repeat', 'no-repeat')
        // $('#section1').css('background-position', 'center center')

        
        // $('#container').css('background-image', 'url(primePlane.jpg)')


        // $('#section1').fadeIn("slow", function(){
        //     $(this).addClass("section1-background");
        // })
        // $('#section1').addClass("section1-background");
        
    }    
})



