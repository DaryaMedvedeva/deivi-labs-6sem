App = Ember.Application.create({});

var chosen=[];

var sushi = [{
  id: 1,
  title: "Сет Классика",
  src: safeString('<img class="card-img-top" src="classica.jpg" >'),
  btn: safeString('<button  class="btn btn-warning"  onclick="add(`su`,0)">В корзину</button>')}, {
  id: 2,
  title: "Сет Филадельфия",
  src: safeString('<img class="card-img-top" src="filadelfia.jpg" >'),
  btn: safeString('<button  class="btn btn-warning"  onclick="add(`su`,1)">В корзину</button>')}, {
  id: 3,
  title: "Сет Саяке",
  src: safeString('<img class="card-img-top" src="syake.jpg" >'),
  btn: safeString('<button  class="btn btn-warning"  onclick="add(`su`,2)">В корзину</button>')}, {
    id: 4,
    title: "Сет Васаби",
    src: safeString('<img class="card-img-top" src="vasabi.jpg" >'),
    btn: safeString('<button  class="btn btn-warning"  onclick="add(`su`,3)">В корзину</button>')}];



function safeString(value) {
  return Ember.String.htmlSafe(value)
}


App.Router.map(function() {
  this.resource('choose');
  this.resource('about');
  this.resource('posts');
});

App.ChooseRoute = Ember.Route.extend({
  model: function() {
    console.log("ch");
    return chosen;
  }
});

App.PostsRoute = Ember.Route.extend({
  model: function() {
    console.log("s");
    return sushi;
  }
});

App.AboutRoute = Ember.Route.extend({
  model: function() {
    console.log("p");
    return pizzas;
  }
});


var pizzas = [{
  id: 5,
  title: "Цыпленок Барбекю",
  src: safeString('<img class="card-img-top" src="chicken_bbq.jpg" >'),
  btn: safeString('<button  class="btn btn-warning"  onclick="add(`pz`,0)">В корзину</button>')}, {
  id: 6,
  title: "Гавайская",
  src: safeString('<img class="card-img-top" src="gavai.jpg" >'),
  btn: safeString('<button  class="btn btn-warning"  onclick="add(`pz`,1)">В корзину</button>')}];


function add(str, el){
  if(str=="pz")
  {
    chosen.push(pizzas[el]);
    console.log(pizzas[el]);
    console.log("add pizza");
  }
  else if(str=="su")
  {
    chosen.push(sushi[el]);
    console.log(sushi[el]);
    console.log("add sushi");
  }

}

function all(){
  alert("kl");
  if(chosen.length==0)
  {
    alert("Сначала выберите продукты!");
  }
  chosen.removeAll();
  
}

$("#del").click(function()
{
  alert("ll");
  alert($("#del").before().htm());
});

function del(el){
 console.log(el);
}