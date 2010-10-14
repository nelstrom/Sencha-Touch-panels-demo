var rootPanel,
    innerPanels = [],
    dimensions = [340,210,130,80,50,30,20,10],
    cycleEdges = ['bottom', 'right', 'top', 'left', ];

// Create the panels
for (var i=0; i <= dimensions.length; i++) {
  innerPanels[i] = new Ext.Panel({
    width:  dimensions[ ( i%2 === 0) ? i : i+1 ],
    height: dimensions[ ( i%2 !== 0) ? i : i+1 ],
    dock:   cycleEdges[ i % cycleEdges.length ],
    cls:    "panel-" + (i+1)
  });
}

// Dock each panel inside the previous one (Russian dolls)
for (var i=0; i < dimensions.length; i++) {
  innerPanels[i].addDocked(innerPanels[i+1]);
}

Ext.setup({
  onReady: function() {
    rootPanel = new Ext.Panel({
      fullscreen: true,
      items: [innerPanels[0]]
    });
  }
});
