/*name: Hoang Anh Kiet Pham
 * id : 1001904809
 * due date: Oct 4th, 2022
 */

//task 1
const inputtable = [1,2,3,4,5,6,7,8,9,10];
console.log("task 1: ");
console.log(inputtable)
console.log();

//task 2a
const mult = x => y => x*y;
const mult5 = mult(5);
const fiveTable = inputtable.map(mult5);
console.log("task 2a: ");
console.log(fiveTable);
//task 2b
const mult13 = mult(13);
const thirteenTable = inputtable.map(mult13);
console.log("task 2b: ");
console.log(thirteenTable);
//task 2c
const square = x => x*x;
const squareTable = inputtable.map(square);
console.log("task 2c: ");
console.log(squareTable);
console.log();


//task 3 - for this task, we are assuming the range is always (0,100)
const isOdd = x => x%2==1;
//using recursion
function get_odd_in_multFive(start, end, count){
    if(start > end){
        return;
    }
    else if (isOdd(start)){
        console.log("%d: %d", count, start)
        get_odd_in_multFive(start+5, end, count+1)
    }
    else{
        get_odd_in_multFive(start+5, end, count)
    }
    
}
console.log("task 3 using recursion: ")
get_odd_in_multFive(0,100,1);
console.log();

//task 3 if the solution requires store the result in a list (using recursion)
function get_odd_in_multFive_list(start, end, result){
    if(start > end){
        return result;
    }
    else if (isOdd(start)){
        //again, concate is an pure function, so there is no side effect
        return get_odd_in_multFive_list(start+5, end, result.concat([start]));
    }
    return get_odd_in_multFive_list(start+5, end, result);
}
const odd_in_multFive_list = get_odd_in_multFive_list(0, 100, []);
console.log("task 3 using recursion and return a list: ")
console.log(odd_in_multFive_list);
console.log();

//task 3 if use map and filter
const add = x => y => x+y;
const add10 = add(10);
//concat is a pure function, so it gurantees that there is no side effect
const inputtable_fix = inputtable.concat(inputtable.map(add10)); 
const fiveTable_task3 = inputtable_fix.map(mult5);
const odd_in_fiveTable = fiveTable_task3.filter(isOdd);
console.log("task 3 if use map and filter: ")
console.log(odd_in_fiveTable);
console.log();

//task 4 - for this task we are assuming the range is always (0,100)
const isEven = x => x%2==0;
//using recursion
function get_sum_of_even_in_multSeven(start, end, sum){
    if(start > end){
        return sum;
    }
    else if (isEven(start)){
        return get_sum_of_even_in_multSeven(start+7, end, sum+start);
    }
    else{
        return get_sum_of_even_in_multSeven(start+7, end, sum);
    }
}
const sum_even_in_sevenTable_recursion = get_sum_of_even_in_multSeven(0,100,0);
console.log("task 4 using recursion");
console.log(sum_even_in_sevenTable_recursion);
console.log();

//task 4 if use map, filter and reduce
const sevenTabe = inputtable_fix.map(mult(7));
const even_in_senvenTable = sevenTabe.filter(x => (isEven(x) && x<100));
console.log(even_in_senvenTable);
const sum_even_in_sevenTable = even_in_senvenTable.reduce((a,b)=>a+b);
console.log("task 4 using map, filter, and reduce");
console.log(sum_even_in_sevenTable);
console.log();


//task 5
const cylinder_volume = r => h => 3.14*r*r*h;
const cylinder_volume_rad5 = cylinder_volume(5);
console.log("task 5: ")
console.log(cylinder_volume_rad5(10));
console.log(cylinder_volume_rad5(17));
console.log(cylinder_volume_rad5(11));
console.log();

//task 6
makeTag = function(beginTag, endTag){ 
    return function(textcontent){ 
       return beginTag +textcontent +endTag; 
    } 
} 
console.log("task 6: ");
console.log(makeTag("<html>", "<html>")("hello"));
console.log();


//bonus: genetic version of task 3 and 4

//for grader to choose different multiplier, range, and condition
const mult_num = 9; 
const start = 0;
const end = 100;
const cond = isOdd; //can be replaced by isOdd

//task 3 - genetic version
function get_even_or_odd_in_multNum_table(start, end, mult_num, cond, result){
    function recursion(s, res){
        if(s > end){
            return res;
        }
        else if (cond(s)){
            return recursion(s+mult_num, res.concat([s]));
        }
        return recursion(s+mult_num, res);
    }
    return recursion(start- (start%mult_num) + mult_num, result);
}
console.log("extra credit: ")
const even_or_odd_in_multNum_table = get_even_or_odd_in_multNum_table(start,end,mult_num,cond,[]);
console.log(even_or_odd_in_multNum_table);

//task 4 - genetic version
function get_sum_even_or_odd_in_multNum_table(start, end, mult_num, cond, result){
    function recursion(s, res){
        if(s > end){
            return res;
        }
        else if (cond(s)){
            return recursion(s+mult_num, res+s);
        }
        return recursion(s+mult_num, res);
    }
    return recursion(start- (start%mult_num) + mult_num, result);
}
const sum_even_or_odd_in_multNum_table = get_sum_even_or_odd_in_multNum_table(start,end,mult_num,cond,0);
console.log(sum_even_or_odd_in_multNum_table);


