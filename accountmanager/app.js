Ext.application({
    name: 'AM',
	
	/*requires: [
		'AM.controller.Users',
		'AM.view.user.List'
	],*/
	
    appFolder: 'app',
	
	autoCreateViewport	: false,
	
	controller: [
		'Users'
	],
	
	view: [
        'user.List'
    ],

    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'userlist'
                }
            ]
        });
    }
});