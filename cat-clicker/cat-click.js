(function(){

	function Cat( name, id, src ) {
		this.name = name;
		this.id = id;
		this.src = src;
		this.tally = 0;
	};

	function addCat( cat ) {
		document.getElementById( cat.id + "-name" ).innerHTML = cat.name;
		document.getElementById( cat.id + "-img" ).src = cat.src;
		document.getElementById( cat.id + "-img" ).addEventListener( 'click', function(){
			cat.tally++;
			document.getElementById( cat.id + "-tally" ).innerHTML = cat.tally;
		}, false );
	};

	var cat1 = new Cat( "Garfield", "cat1", 'http://lorempixel.com/400/200/cats/1/' );
	addCat(cat1);

	var cat2 = new Cat( "Fritz", "cat2", 'http://lorempixel.com/400/200/cats/4/' );
	addCat(cat2);

})();