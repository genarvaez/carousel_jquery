$(document).ready(function(){
	setInterval(change, 5000);
    $("#prev").click(function(){
    	change();
    	change();
    })
    $("#next").click(function(){
    	change();
    })


    function change(){
    	var duplicate = $('ul li:first').clone();
        $(duplicate).appendTo(' ul');
        $('ul li:first').fadeOut(5000).remove();
    }    
})
