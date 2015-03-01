$( function() {
	'use strict';

	var model = {
		cats: [
				{
					catName: 'Figaro',
					clickCount: 0,
					imageURL: 'http://lorempixel.com/400/200/cats/0/'
				},
				{
					catName: 'Biggles',
					clickCount: 0,
					imageURL: 'http://lorempixel.com/400/200/cats/1/'
				},
				{
					catName: 'Lizzy',
					clickCount: 0,
					imageURL: 'http://lorempixel.com/400/200/cats/2/'
				},
				{
					catName: 'Boston',
					clickCount: 0,
					imageURL: 'http://lorempixel.com/400/200/cats/3/'
				},
				{
					catName: 'Phoenix',
					clickCount: 0,
					imageURL: 'http://lorempixel.com/400/200/cats/4/'
				},															
		]
	};

	var menuView = {
		init: function() {
			this.$menuItems = $('.cat-menu');
			this.menuItemTemplate = $('script[data-template="menu-item"]').html();

            // Delegated event to listen for clicks
            this.$menuItems.on('click', '.menu-item > a', function(e) {
                
                var id = ($(this).attr( "href" )).substr(1);
                octopus.switchCat(id);

                return false;
            });
            this.render();
		},
		render: function() {
			var $menuItems = this.$menuItems,
				menuItemTemplate = this.menuItemTemplate;

            // Clear and render
            $menuItems.html('');
            octopus.getAllCats().forEach(function(cat) {
                // Replace template markers with data
                var thisTemplate = menuItemTemplate.replace(/{{id}}/g, cat.catName.toLowerCase());
                thisTemplate = thisTemplate.replace(/{{name}}/g, cat.catName);
                $menuItems.append(thisTemplate);
            });
		},

	};

	var catView = {
		init: function() {
			this.$catContainer = $('.cat-container');
			this.catTemplate = $('script[data-template="cat"]').html();

			this.$catContainer.on( 'click', '.cat', function(e){
				var id = ($(this).attr( "id" )).substr(1);
				octopus.addClick(id);
			});

			this.render(octopus.currentCat);
		},
		render: function(cat){
			var $catContainer = this.$catContainer,
				catTemplate = this.catTemplate;

			$catContainer.html('');
			var thisTemplate = catTemplate.replace(/{{id}}/g, cat.catName.toLowerCase());
			thisTemplate = thisTemplate.replace(/{{name}}/g, cat.catName);
			thisTemplate = thisTemplate.replace(/{{tally}}/g, cat.clickCount);
			thisTemplate = thisTemplate.replace(/{{url}}/g, cat.imageURL);
			$catContainer.append(thisTemplate);
		},
		clear: function() {
			this.$catContainer.html('');
		}
	};

	var octopus = {
		currentCat: model.cats[0],
		getAllCats: function() {
			return model.cats.sort( function(a,b) {
				return a.catName > b.catName;
			});
		},
		getCat: function(catId) {
			for(var i=0;i<model.cats.length;i++) {
				if (model.cats[i].catName.toLowerCase() === catId ) {
					return model.cats[i];
				} 
			}
		},
		init: function() {
			menuView.init();
			catView.init();
		},
		switchCat: function(id){
			if ( id !== this.currentCat.catName.toLowerCase() ) {
                	catView.clear();
                	var cat = this.getCat(id);
                	catView.render(cat);  
                	this.currentCat = cat;             	
            }
		},
		addClick: function(id) {
			catView.clear();
			this.currentCat.clickCount++;
			catView.render(this.currentCat);
		}
	};

	octopus.init();
});