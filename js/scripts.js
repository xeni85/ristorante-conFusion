//  <script>
//         $(document).ready(function () {
//             $('[data-toggle="tooltip"]').tooltip();
//         });
//  </script> 
$(function() {
    $('#mycarousel').carousel({ interval: 2000 });
    $('#carouselButton').on('click', function(){
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause')
            $('#carouselButton').children('span').addClass('fa-play')
        } else if ($('#carouselButton').children('span').hasClass('fa-play')) {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play')
            $('#carouselButton').children('span').addClass('fa-pause')        
        }
    });
    
    $('#loginbtn').on('click', function() {
        $('#loginModal').modal('toggle')
    });

    $('#reservebtn').on('click', function() {
        $('#reserveModal').modal('toggle')
    });




    // $('#reservebtn').attr({'data-toggle':'modal','data-target':'#reserveModal', 'data-html':"true", 'data-placement':'bottom'});
    // $('#loginbtn').attr({'data-toggle':'modal', 'data-target':'#loginModal'});
});