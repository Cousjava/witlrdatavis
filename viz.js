Viz = {};

$(function () {
  Viz.data = {};
  
  Viz.buttonSelect = function (name, id) {
    $('#' + id + ' button').click(function() {
      Viz.data[name] = this.value;
      $.deck('next');
    });
  };
  
  Viz.onSlide = function (id, handler) {
    $(document).bind('deck.change', function (event, from, to) {
      if ($.deck('getSlide', to)[0].id == id) {
        handler();
      }
    });
  };

  Viz.maskSvg = function (id, percent) {
	  var mask = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
	  mask.setAttribute('width', '100%');
	  mask.setAttribute('height', (100 - percent).toString() + '%');
	  mask.setAttribute('x', 0);
	  mask.setAttribute('y', 0);
	  mask.style.fill = 'rgba(255, 255, 255, 0.6)';
	  document.getElementById(elId).appendChild(mask);
  };
	
	Viz.blurSvgElement = function (svgId, id, newOpacity) {
		var svgDoc = document.getElementById(svgId).getSVGDocument();
		svgDoc.getElementById(id).style.opacity = newOpacity.toString();
	};
});
