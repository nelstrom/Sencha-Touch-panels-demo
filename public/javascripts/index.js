Ext.setup({
  onReady: function() {
    new Ext.Panel({
      fullscreen: true,
      items: [{
        width: 340,
        height: 210,
        cls: 'panel-1',
        html: 'Panel',
        dockedItems: [{
          dock: 'right',
          width: 130,
          height: 210,
          cls: 'panel-2',
          html: 'Inner panel',
          dockedItems: [{
            dock: 'top',
            width: 130,
            height: 80,
            cls: 'panel-3',
            html: 'Innermost panel',
          }]
        }]
      }]
    });
  }
});