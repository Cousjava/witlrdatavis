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
});