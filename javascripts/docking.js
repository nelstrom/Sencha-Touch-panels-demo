Ext.setup({
  onReady: function() {
    new Ext.Panel({
      fullscreen: true,
      dockedItems: [
        {
          html: "A docked panel",
          style: "background-color: #ccc;",
          dock: "left"
        }
      ],
      items: []
    });
  }
});
