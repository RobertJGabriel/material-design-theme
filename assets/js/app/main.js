ljs.load(['http://ajax.googleapis.com/ajax/libs/angularjs/1.3.14/angular.min.js', 'dist/js/lib/jquery-1.11.3.js',  'dist/js/lib/firebase.js'], 'dist/js/lib/core.js',
  'dist/js/lib/bootstrap.min.js', 'dist/js/app/settings.js', 'dist/js/lib/ripples.js', 'dist/js/lib/material.js', 'dist/js/lib/cookie.js',
  function() {

    $.material.init();

  });


function regexUrlextensioncheck(n) {

  var s = document.URL,
    e = new RegExp(n);


  return e.test(s);
}
