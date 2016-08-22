(function(){
	var oldHide = Foundation.DropdownMenu.prototype._hideSome;
	var oldShow = Foundation.DropdownMenu.prototype._show;

	//element is the dropdown menu context (ul). not the li element
	var newShow = Foundation.DropdownMenu.prototype._show = function($elem){
		this.$element.trigger('pn.dropdownmenu.showing', [this, $elem]);
		oldShow.apply(this, [$elem]);
		this.$element.trigger('pn.dropdownmenu.show', [this, $elem]);
	}

	//Foundation.DropdownMenu.prototype._hide calls _hideOthers
	var newHide = Foundation.DropdownMenu.prototype._hideSome = function($elem){
		this.$element.trigger('pn.dropdownmenu.hiding', [this, $elem]);
		oldHide.apply(this, [$elem]);
		this.$element.trigger('pn.dropdownmenu.hide', [this, $elem]);
	}

	var getSubMenu = function(el){
		return el.find('>ul');
	}

	/* Arrays become parameters, plus an event */
	$('[data-dropdown-menu]').on('pn.dropdownmenu.showing', function(e, main, el){
		if (!el.data('SubmenuShowing')){
			getSubMenu(el).css("display", "none");//keep hidden
		}
	});

	$('[data-dropdown-menu]').on('pn.dropdownmenu.show', function(e, main, el){
		var submenu = getSubMenu(el)
		if (!el.data('SubmenuShowing')){
			el.data("SubmenuShowing", true);
			Foundation.Motion.animateIn(submenu, 'fade-in', function(){
				submenu.css("display", "block");//fade in
			});
		}
	});

	$('[data-dropdown-menu]').on('pn.dropdownmenu.hiding', function(e, main, el){
		if (el.data('SubmenuShowing')){
			getSubMenu(el).css("display", "block");//keep shown
		}
	});

	$('[data-dropdown-menu]').on('pn.dropdownmenu.hide', function(e, main, el){
		var submenu = getSubMenu(el)
		if (el.data('SubmenuShowing')){
			el.data("SubmenuShowing", false);
			Foundation.Motion.animateOut(submenu, 'fade-out', function(){
				submenu.css("display", "none");//fade in
			});
		}
	});
}())

Nexus.DropdownMenuBase = class NexusDropdownMenuBase extends Nexus.Component{
	constructor(){
		super();
		this.template = "<>";
		this.container = $("body");
	}
}
Nexus.DropdownMenu = class NexusDropdownMenu extends Nexus.DropdownMenuBase{
	constructor(){
		super();
	}
}