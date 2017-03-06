var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');

var product = [
  new Product({
      imgpath:'http://cdn.edgecast.steamstatic.com/steam/apps/311210/header.jpg?t=1479852239',
      title:'Call of Duty BO3',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
      price:30
  }),
  new Product({
      imgpath:'https://www.vossey.com/userfiles/images/csgo-giveaway.jpg',
      title:'Counter Strike Global offensive',
      description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
      price:14
  }),
  new Product({
      imgpath:'https://www.zone-actu.com/wp-content/uploads/RocketLeague.jpg',
      title:'Rocket League',
      description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ',
      price:14
  })

];
var done = 0;
for (var i = 0; i < product.length; i++) {
  product[i].save(function(err,result){
    done++
    if (done === product.length){
      exit();
    }
  });
}
function exit(){
  mongoose.disconnect();
}
