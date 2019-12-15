// $(window).scroll(function() {
//     if ( $(window).scrollTop() >= window.innerHeight / 2 ) {
//         let brightness = 30;
//             $('#myVideo').css('filter', 'brightness(' + brightness + '%)');
//     } else{
//         $('#myVideo').css('filter', 'brightness(50%)');
//     }
// });

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



// var windw = this;

// $.fn.followTo = function ( pos ) {
//     var $this = $('#myVideo'),
//         $window = $(windw);
    
//     $window.scroll(function(e){
//         if ($window.scrollTop() > pos) {
//             $this.css({
//                 position: 'absolute',
//                 top: pos
//             });
//         } else {
//             $this.css({
//                 position: 'fixed',
//                 top: 0
//             });
//         }
//     });
// };
// let pos = $('#introduction').outerHeight(true);
// $('#myVideo').followTo(300);
