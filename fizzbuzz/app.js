var main = function() {
    "use strict";

    var fizzbuzz = function(num) {
        if (num%3 === 0 && num%5 ===0){
            return "FizzBuzz";
        } else if (num%3 === 0){
            return "Fizz";
        } else if (num%5 === 0){
            return "Buzz";
        } else {
            return num;
        }
    };

    var fizzbuzz_1 = function() {
        var i, $output;
        for(i = 1; i <=100; i = i + 1){
            $output = $("<p>").text(fizzbuzz(i));
            $(".fizzbuzz1").append($output);
       }
    };
    fizzbuzz_1();

};

$(document).ready(main);