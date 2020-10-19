/* Owl carousel */
$(document).ready(function () {
    $(".dropdown-menu li a").click(function () {
        var selText = $(this).text();
        $(this).parents('.btn-group').find('.dropdown-toggle').html(selText + ' <span class="caret"></span>');
    });
	$(".dropdown-content-my-account, .dropdown.withmydibdaa").hover(function(){
	   $('#zoom_demo-zoomContainer').css('position','');
		}, function(){
	   $('#zoom_demo-zoomContainer').css('position','absolute');
	});
	$(window).resize(resize);
	resize();
});
 
 function resize() {
    if ($(window).width() > 480) {
        $('.pb-3.collapseborder.collapse').addClass('show');
    }
    else {
        $('.pb-3.collapseborder.collapse').removeClass('show');
    }
}