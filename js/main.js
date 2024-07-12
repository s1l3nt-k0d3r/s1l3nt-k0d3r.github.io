const myRoutes = [
  { "menuItem" : 'Angular', "template": 'angular.html' }
  , { "menuItem": 'home', "template": 'home.html', "isDefault": true }
  , { "menuItem": 'vueJS', "template": 'vueJS.html' }
];

window.onload = function()
{
  var htmlWrapper = document.getElementById("menu");

  if (htmlWrapper !== undefined ) {
    myRoutes.forEach((route) => {
      htmlWrapper.innerHTML = (htmlWrapper.innerHTML + `<li><a href=#${route.menuItem}>${route.menuItem}</li>`);
    })

    var router = new Router([ myRoutes ]);
  }
}
