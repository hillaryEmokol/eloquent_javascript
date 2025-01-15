//Number 1: Write a loop that makes seven calls to console.log to output the following triangle:

let block = "#";
let count = 1;

// while(count < 6){
//     console.log(block);
//     block += '*';
//     count ++;
// }
for(count = 1; count < 6; count ++){
    console.log(block);
    block += '#';
}