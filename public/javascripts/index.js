Ext.setup({
  onReady: function() {
      new Ext.Panel({
          fullscreen: true,
          style: "background-color: #fee",
          items: [],
          dockedItems: [
            {
                dock: "top",
                html: "A docked item",
                style: "background-color: #fcc;"
            },
            {
                dock: "top",
                html: "Another docked item",
                style: "background-color: #caa;"
            }
          ]
      })
  }
});
