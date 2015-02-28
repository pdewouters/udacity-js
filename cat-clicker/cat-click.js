(function(){

	function Cat( name, id, src ) {
		this.name = name;
		this.id = id;
		this.src = src;
		this.tally = 0;
	};

	function addCat( cat ) {

		var catMenu = document.querySelector('.cat-menu');
		var cats = document.querySelector('.cats');

		// Build menu
		var menuItem = document.createElement("li");
		var link = document.createElement("a");
		link.textContent = cat.name;
		link.href = "#" + cat.id;
		link.id = cat.id;
		menuItem.appendChild(link);
		catMenu.appendChild(menuItem);

		// Build main content
		var catDiv = document.createElement("div");
		cats.appendChild(catDiv);

		var catImg = document.createElement("img");
		catImg.id = cat.id + "-img";
		catImg.src = cat.src;
		catDiv.appendChild(catImg);

		var catDesc = document.createElement("p");
		var catName = document.createElement("span");
		catName.textContent = cat.name + ' ';
		catName.id = cat.id + "-name";
		var catTally = document.createElement("span");
		catTally.id = cat.id + "-tally";
		catTally.textContent = cat.tally + ' likes.';
		catDesc.appendChild(catName);
		catDesc.appendChild(catTally);
		catDiv.appendChild(catDesc);

		document.getElementById( cat.id + "-img" ).addEventListener( 'click', function(){
			cat.tally++;
			document.getElementById( cat.id + "-tally" ).innerHTML = cat.tally + " likes";
		}, false );
	};

	var names = ['Garfield', 'Fritz', 'Boston', 'Phoenix', 'Lizzy', "Marmaduke"];

	for ( var i=0; i < names.length; i++ ) {
		var cat = new Cat( names[i], names[i].toLowerCase(), "http://lorempixel.com/400/200/cats/" + i.toString() + "/" );
		addCat( cat );

	}

})();
