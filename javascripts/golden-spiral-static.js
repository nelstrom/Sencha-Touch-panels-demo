Ext.setup({
  onReady: function() {

    var dimensions = [340,210,130,80,50,30,20,10];
    
    new Ext.Panel({
      fullscreen: true,
      items: [{
        width: dimensions[0],
        height: dimensions[1],
        cls: 'panel-1',
        dockedItems: [{
          dock: 'right',
          width: dimensions[2],
          height: dimensions[1],
          cls: 'panel-2',
          dockedItems: [{
            dock: 'top',
            width: dimensions[2],
            height: dimensions[3],
            cls: 'panel-3',
            dockedItems: [{
              dock: 'left',
              width: dimensions[4],
              height: dimensions[3],
              cls: 'panel-4',
              dockedItems: [{
                dock: 'bottom',
                width: dimensions[4],
                height: dimensions[5],
                cls: 'panel-5',
                dockedItems: [{
                  dock: 'right',
                  width: dimensions[6],
                  height: dimensions[5],
                  cls: 'panel-6'
                }]
              }]
            }]
          }]
        }]
      }]
    });
  }
});