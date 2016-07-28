/**
 * navigation.js
 *
 * Handles toggling the navigation menu for small screens.
 */
( function() {
	var container, button, menu;

	container = document.getElementById( 'masthead' );
	if ( ! container )
		return;

	button = container.getElementsByClassName( 'menu-toggle' )[0];

	menu = container.getElementsByClassName( 'side-masthead' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	if ( -1 === menu.className.indexOf( 'nav-menu' ) )
		menu.className += ' nav-menu';

	button.onclick = function() {
		if ( -1 !== menu.className.indexOf( 'toggled' ) )
			menu.className = menu.className.replace( ' toggled', '' );
		else
			menu.className += ' toggled';
	};
} )();

/**
 * Simple toggle for search on primary navigation
 */
( function() {
	search = document.getElementsByClassName( 'search-toggle' )[0];

	search.addEventListener('click', function(e){
        e.preventDefault();
 
        menu = search.parentNode;

        if ( -1 !== menu.className.indexOf( 'toggled' ) )
			menu.className = menu.className.replace( ' toggled', '' );
		else
			menu.className += ' toggled';
   });
} )();