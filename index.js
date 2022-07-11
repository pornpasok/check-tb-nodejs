// npm install prompt-sync

const prompt = require('prompt-sync')();

const chars = prompt('Enter หมวดอักษร: ');
console.log(`หมวดอักษร: ${chars}`);

const prefix_ch = chars.split("");

//console.log(`${prefix_ch[0]}`);
//console.log(`${prefix_ch[1]}`);


let prefix_score = [
    ["กดถทภฤ", 1],
    ["ขบปงช", 2],
    ["ตฑฒฆ", 3],   
    ["คธรญษ", 4],
    ["ฉณฌนมหฮฎฬ", 5],
    ["จลวอ", 6],
    ["ซศส", 7],
    ["ยผฝพฟ", 8],
    ["ฏฐ", 9]
];

let score_checker_map = [
    [[4, 5, 6, 9, 14, 15, 19, 23, 24, 32, 36, 40, 41, 42, 44, 45, 46, 50, 51, 54], "A+"],
    [[8, 10, 13, 16, 18, 22, 25, 26, 28, 31, 35, 38, 39, 47, 49, 52, 53], "A"],
    [[3, 7, 11, 12, 17, 20, 21, 27, 29, 30, 33, 34, 37, 43, 48], "F"]
];

//console.log(score_checker_map[0][1]);

function check_score_grade(tb_sum) {
    let score_grade = "";
    for (i=0; i<=2; i++) {
        if (score_checker_map[i][0].indexOf(tb_sum) > -1) {
            //console.log(score_checker_map[i][0]);
            //console.log(score_checker_map[i][1]);
            score_grade = score_checker_map[i][1];
        }
    }
    //console.log(score_grade);
    return score_grade;
}

//console.log(check_score_grade(5));

//process.exit(0);

function check_prefix_score (ch) {
    let score = 0;
    for (i=0; i<=8; i++) {
        if (prefix_score[i][0].indexOf(ch) > -1) {
            // console.log(prefix_score[i][0]);
            // console.log(prefix_score[i][1]);
            score = prefix_score[i][1];
        }
    }
    return score;
}

prefix_sum = check_prefix_score(prefix_ch[0]) + check_prefix_score(prefix_ch[1]);
console.log(`${chars} = ${prefix_sum}`);

let tbs = [
    1001, 1100, 1010,
    2002, 2200, 2020,
    3003, 3300, 3030,
    4004, 4400, 4040,
    5005, 5500, 5050,
    6006, 6600, 6060,
    7007, 7700, 7070,
    8008, 8800, 8080,
    9009, 9900, 9090,
    1221, 1122, 1212, 2112, 2211, 2121,
    1331, 1133, 1313, 3113, 3311, 3131,
    1441, 1144, 1414, 4114, 4411, 4141,
    8899, 9988, 8998, 8989, 9898, 9889,
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    11, 22, 33, 44, 55, 66, 77, 88, 99,
    111, 222, 333, 444, 555, 666, 777, 888, 999,
    1111, 2222, 3333, 4444, 5555, 6666, 7777, 8888, 9999,
    1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000,
    123, 234, 345, 456, 567, 678, 789,
    1234, 2345, 3456, 4567, 5678, 6789,
    1551, 1155, 1515, 5115, 5511, 5151,
    1661, 1166, 1616, 6116, 6611, 6161,
    1771, 1177, 1717, 7117, 7711, 7171,
    1881, 1188, 1818, 8118, 8811, 8181,
    1991, 1199, 1919, 9119, 9911, 9191,
    2332, 2233, 2323, 3223, 3322, 3232,
    2442, 2244, 2424, 4224, 4422, 4242,
    2552, 2255, 2525, 5225, 5522, 5252,
    2662, 2266, 2626, 6226, 6622, 6262,
    2772, 2277, 2727, 7227, 7722, 7272,
    2882, 2288, 2828, 8228, 8822, 8282,
    2992, 2299, 2929, 9229, 9922, 9292,
    3443, 3344, 3434, 4334, 4433, 4343,
    3553, 3355, 3535, 5335, 5533, 5353,
    3663, 3366, 3636, 6336, 6633, 6363,
    3773, 3377, 3737, 7337, 7733, 7373,
    3883, 3388, 3838, 8338, 8833, 8383,
    3993, 3399, 3939, 9339, 9933, 9393,
    4554, 4455, 4545, 5445, 5544, 5454,
    4664, 4466, 4646, 6446, 6644, 6464,
    4774, 4477, 4747, 7447, 7744, 7474,
    4884, 4488, 4848, 8448, 8844, 8484,
    4994, 4499, 4949, 9449, 9944, 9494,
    5665, 5566, 5656, 6556, 6655, 6565,
    5775, 5577, 5757, 7557, 7755, 7575,
    5885, 5588, 5858, 8558, 8855, 8585,
    5995, 5599, 5959, 9559, 9955, 9595,
    6776, 6677, 6767, 7667, 7766, 7676,
    6886, 6688, 6868, 8668, 8866, 8686,
    6996, 6699, 6969, 9669, 9966, 9696,
    7887, 7788, 7878, 8778, 8877, 8787,
    7997, 7799, 7979, 9779, 9977, 9797
];

function digit_sum(str) {
    let sum = 0;
    for (let char of str) {
      sum += +char;
    }
    return sum
}


for (j = 0; j < tbs.length; j++) {
    let tb_sum = 0;
    //console.log(tbs[j]);
    //console.log(digit_sum(tbs[j].toString()));
    tb_sum = prefix_sum + digit_sum(tbs[j].toString());
    //console.log(tb_sum);
    
    // TB, Score, Grade, Color
    if (check_score_grade(tb_sum) == 'A+') {
        console.log('\x1b[32m%s\x1b[0m', `${chars} ${tbs[j]} : ${tb_sum} : ${check_score_grade(tb_sum)}`);
    }
    else if (check_score_grade(tb_sum) == 'F') {
        console.log('\x1b[31m%s\x1b[0m', `${chars} ${tbs[j]} : ${tb_sum} : ${check_score_grade(tb_sum)}`);
    }
    else {
        console.log(`${chars} ${tbs[j]} : ${tb_sum} : ${check_score_grade(tb_sum)}`);
    }
    
}
