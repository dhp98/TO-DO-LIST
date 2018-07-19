//javascript

//chech off the items from to do lists
$("ul").on("click","li",function(event){
	$(this).toggleClass("completed");
	event.stopPropogation;
});

//remove the items from the list
$("ul").on("click","span",function(event){
	
	//fadeOut then remove
	$(this).parent().fadeOut(300,function(){
		$(this).remove();
		event.stopPropogation; // to stop bubbling of click function on parent elements
	});
});

//add items to the list from input box
$("input[type='text']").keypress(function(event){
	if(event.which == 13 ){
		var str= $("input[type='text']").val();
		$("input[type='text']").val("");
		$('ul').append("<li><span><i class='fa fa-trash'></i></span> " + str + "</li>");
}
});

$("#plus").click(function(event){
	$("input[type='text']").fadeToggle(200);
	event.stopPropogation;
});