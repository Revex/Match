Router.configure({
    layoutTemplate: 'layout'
});

var _routerContext;

Router.map(function() {
    _routerContext = this;
    SetupDefaultRoute("home");
    SetupHomeRoutes();
    SetupItemRoutes();
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

function SetupItemRoutes() {
    _routerContext.route('itemList', {
        path: '/item/'
    });
    _routerContext.route('itemCreate', {
        path: 'item/create'
    });
    _routerContext.route('itemDetails', {
        path: '/item/details/:_id',
        data: function() {
            var item = Items.findOne(this.params._id);
            //if (item != null)
                return item;
            //else //TODO announce that the item has been deleted or is no longer available,
                //and when the user confirms they understand they will be navigated back to the list
             //   Router.go('itemList');
        }
    });
    _routerContext.route('itemEdit', {
        path: 'item/edit/:_id',
        data: function() {
            return Items.findOne(this.params._id)
        }
    });
    _routerContext.route('itemDelete', {
        path: 'item/delete/:_id',
        data: function() {
            return Items.findOne(this.params._id)
        }
    });
}
