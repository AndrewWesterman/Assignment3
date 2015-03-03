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

    var fizzbuzz_2 = function (num1,num2){
        var i, $output;
        for(i = num1; i <=num2; i = i + 1){
            $output = $("<p>").text(fizzbuzz(i));
            $(".fizzbuzz2").append($output);
       }
    };
    fizzbuzz_2(200,300);

    var fizzbuzz_3 = function(arr){
        var i, $output;
        arr.forEach(function(i) {
            $output = $("<p>").text(fizzbuzz(i));
            $(".fizzbuzz3").append($output);
       });

    };
    fizzbuzz_3([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);

    var fizzbuzz_4 = function(obj){
        var newThree = obj.divisibleByThree;
        var newFive = obj.divisibleByFive;
        var i, val, $output;
        for(i = 1; i<=100; i = i+1){
            val = fizzbuzz(i);
            if(val === "FizzBuzz"){
                val = newThree + newFive;
            } else if (val === "Fizz"){
                val = newThree;
            } else if (val === "Buzz"){
                val = newFive;
            }
            $output = $("<p>").text(val);
            $(".fizzbuzz4").append($output);
        }
    };
    fizzbuzz_4({ divisibleByThree: "foo", divisibleByFive: "bar"});

    var fizzbuzz_5 = function(arr,obj){
        var newThree = obj.divisibleByThree;
        var newFive = obj.divisibleByFive;
        var i, val, $output;
        arr.forEach(function(i){
            val = fizzbuzz(i);
            if(val === "FizzBuzz"){
                val = newThree + newFive;
            } else if (val === "Fizz"){
                val = newThree;
            } else if (val === "Buzz"){
                val = newFive;
            }
            $output = $("<p>").text(val);
            $(".fizzbuzz5").append($output);
        });
    };
    fizzbuzz_5([101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115],
        { divisibleByThree: "foo", divisibleByFive: "bar"});


};

$(document).ready(main);