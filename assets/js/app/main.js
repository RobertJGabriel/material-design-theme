ljs.load(['http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js', 'dist/js/lib/jquery.min.js'], 'dist/js/lib/core.min.js',
  'dist/js/lib/bootstrap.min.js', 'dist/js/lib/ripples.min.js', 'dist/js/lib/material.min.js', 'dist/js/lib/cookie.min.js',
  function() {

    $.material.init();

  });


function regexUrlextensioncheck(n) {

  var s = document.URL,
    e = new RegExp(n);


  return e.test(s);
}
