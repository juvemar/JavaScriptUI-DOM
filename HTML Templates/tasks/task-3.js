function solve(){
  return function(){
    $.fn.listview = function(data){
      var $this = $(this),
          template = $('#' + $this.attr('data-template')).html();

      var compiler = handlebars.compile(template);

      for (var i = 0, len = data.length; i < len; i += 1) {
          $this.append(compiler(data[i]));
      }

      return this;
    };
  };
}

module.exports = solve;