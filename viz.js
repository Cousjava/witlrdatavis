Viz = {};

$(function () {
  Viz.data = {};
  
  Viz.buttonSelect = function (name, id) {
    $('#' + id + ' button').click(function() {
      Viz.data[name] = this.value;
      $.deck('next');
    });
  };
});