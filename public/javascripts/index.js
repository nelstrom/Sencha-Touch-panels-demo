Ext.setup({
  onReady: function() {
    new Ext.Panel({
      fullscreen: true,
      items: [{
        width: 340,
        height: 210,
        cls: 'panel-1',
        html: 'Panel'
      }]
    });
  }
});