

// // Object
// var obj = {

//     width : 10,
//     height : 20,
//     area : function() {
//         //var a =  this.width*this.height
//         console.log( "this is area" );
//     }
// }

// //obj.length = 30;

// obj.area();

// for(var key in obj){

// console.log(key,obj[key]);

// }

// //console.log(obj.length);


var mobile  = {

    color : 'red',
    height : 5,
    length : 6,
    call : function(){

        console.log(typeof mobile.call);

}

}

//mobile.call();

//console.log(typeof mobile.call);

// Key

mobile.color = "black";
mobile[color] = 'Green';

for(var key in mobile){

console.log(key,mobile[key]);

}













