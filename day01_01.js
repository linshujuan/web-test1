const add = (a, b) => (a + b);
console.log(add(3, 5));

// exports.add = add;
module.exports.add = add; //两个地址指向一样，但是如果地址更改了（不一样），以module为准
//三生三世枕上书