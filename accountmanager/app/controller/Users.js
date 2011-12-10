Ext.define('AM.controller.Users', {
    extend: 'Ext.app.Controller',
	
	view: [
        'user.List'
    ],
	
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The panel was rendered');
    }
});