
Template.navigation.rendered = function() {
    $('.navbar li').click(function(e) {
        $('.navbar li.active').removeClass('active');
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active');
        }
        //e.preventDefault();
    });
};

Template.navItems.helpers({
    activeIfTemplateIs: function(template) {
        var currentRoute = Router.current();
        return currentRoute &&
            template === currentRoute.lookupTemplate() ? 'active' : '';
    }
});
