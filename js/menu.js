	if(!localStorage.getItem('header')) {
     $.post('https://my.siberup.com/nav.php', JSON.stringify({}), function(data){
	   localStorage.setItem('header', data);
	   $("header").html(data);
     });
	 
	 }else {
		$("header").html(localStorage.getItem('header'));
	 }
setTimeout(function(){
	 if(!localStorage.getItem('footer')) {
       $.post('https://my.siberup.com/footer.php', JSON.stringify({}), function(data){
         localStorage.setItem('footer', data);
		 $("footer").html(data);
       });
	 } else {
	     $("footer").html(localStorage.getItem('footer'));
	 }
}, 3000);