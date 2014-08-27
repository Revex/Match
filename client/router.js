Router.configure({
    layoutTemplate: 'layout'
});

var _routerContext;

Router.map(function() {
    _routerContext = this;
    SetupDefaultRoute("home");
    SetupHomeRoutes();
    SetupItemsRoutes();
});

function SetupDefaultRoute(routeName) {
    //when blank url is hit it will navigate to the route 'routeName'
    _routerContext.route('default', {
        path: '/',
        onAfterAction: function() {
            Router.go(routeName);
        }
    });
}

function SetupHomeRoutes() {
    _routerContext.route('home', {
        path: '/home/',
        template: 'home'
    });
    _routerContext.route('about', {
        path: '/home/about'
    });
    _routerContext.route('contact', {
        path: '/home/contact'
    });
}

function SetupItemsRoutes() {
    _routerContext.route('items', {
        path: '/items/',
        template: 'items'
    });
}
