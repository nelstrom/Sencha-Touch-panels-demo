Ext.setup({
  onReady: function() {
      new Ext.Panel({
          fullscreen: true,
          style: "background-color: #fee",
          items: [],
          dockedItems: [
            {
                dock: "bottom",
                html: "A docked item",
                style: "background-color: #fcc;"
            },
            {
                dock: "right",
                html: "Another docked item",
                style: "background-color: #caa;"
            }
          ]
      })
  }
});
