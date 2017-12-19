exports.run = function(input) {
    var result = input.split(",");
    var summ = 0;
    for (var i=0; i < result.length; i++) {
        summ += Number(result[i]);
    }
    console.log(summ);
    return summ;
};