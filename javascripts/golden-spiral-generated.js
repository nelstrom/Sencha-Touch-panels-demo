var rootPanel,
    innerPanels = [],
    dimensions = [340,210,130,80,50,30,20,10],
    cycleEdges = ['top', 'right', 'bottom', 'left'],
    widthAt  = function(n) { return ( n%2 === 0) ? n : n+1; },
    heightAt = function(n) { return ( n%2 !== 0) ? n : n+1; };

for (var i=0; i <= dimensions.length; i++) {
  innerPanels[i] = new Ext.Panel({
    width:  dimensions[widthAt(i)],
    height: dimensions[heightAt(i)],
    dock:   cycleEdges[i % cycleEdges.length],
    cls:    "panel-" + (i+1)
  });
}

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
