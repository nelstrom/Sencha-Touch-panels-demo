Ext.setup({
	onReady: function() {
		
		var toolbar = new Ext.Toolbar({
			dock: 'top',
			title: 'Toolbar',
			items: [{text: 'Button'}]
		});
		
		new Ext.Panel({
			fullscreen: true,
			dockedItems: [toolbar]
		});
	}
});
