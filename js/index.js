var $number = $('.buttons').has("span");
var calculate = false;
//var $screen = $('#screen');
var values;
var reset = false;
$number.click(function(e) {
  //var sum = [];
  values = $(e.target).text();
  var sum = [];
  var number;
  var symbol;
  var display;
  var string = document.getElementById('screen').innerHTML;
  // var convert = {
  //   '+': function(x,y){return x + y},
  //   '-': function(x,y){return x - y},
  //   '*': function(x,y){return x * y},
  //   '/': function(x,y){return x / y}
  // };
  //number = parseInt(values);
  function converter(str) {
    return new Function('return ' + str)();
  }

  //console.log( evil('12/5*9+9.4*2') );
  console.log(number);
  if (values == "=") {
    sum.push(document.getElementById('screen').innerHTML);
    document.getElementById('screen').innerHTML = converter(sum);
    reset = true;
    console.log("Scatman");
    //number = parseInt(document.getElementById('screen').innerHTML)
    //document.getElementById('screen').innerHTML = numb2 + numb2;
  } else if (values == "C") {
    document.getElementById('screen').innerHTML = null;
    sum = 0;

  }
  //else if(values == '÷' || values == 'x' ){
  //symbol = values;
  //console.log(symbol);
  //  sum.push(parseInt(document.getElementById('screen').innerHTML));
  //  document.getElementById('screen').innerHTML += values;
  //console.log(sum);
  //calculate = true;
  //  }
  // else if(calculate && typeof numb2 == "number"){
  //   convert[values](numb2,numb3);
  // }
  else {

    if (values == 'x') {
      values = '*';
    } else if (values == '÷') {
      values = '/';
    }

    if (reset == true) {
      document.getElementById('screen').innerHTML = null;
      sum = 0;
      reset = false;
    }
    if (isNaN(parseInt(string[string.length - 1])) && isNaN(parseInt(values))) {
      console.log("Wrong");
    }
    else {
      document.getElementById('screen').innerHTML += values;
      //console.log(document.getElementById('screen').innerHTML);
    }
  }

  //if(numb == '=')

  //document.getElementById('screen').innerHTML += values;
})
