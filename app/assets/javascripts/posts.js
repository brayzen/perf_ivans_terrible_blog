(function() {
  jQuery(function() {
    return $(window).scroll(function() {
      var docHeight = $(document).height() - $(window).height() - 70
      var url = $('.pagination a.next_page').attr('href');
      if (url && $(window).scrollTop() > docHeight) {
        var url = $('.pagination a.next_page').attr('href');
        return $.get(url, function(data) {
          post = $('body').html(data)
          // console.log(post)
          return $(window).append(post);
        });
      }
    });
  });

}).call(this);
