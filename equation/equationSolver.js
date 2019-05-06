// var uInput = document.getElementById("equ").value;
var varible;

function place(exper, place, value,veb) {
    newExper = "";
    for (let i = 0; i < exper.length; i++) {
        if (exper[i] == place) {
            newExper += value;
        }else{
            newExper += exper[i];
        }
        
    }
    return check(newExper, veb)
    debugger;
    console.log(exper);

}


function check(uInput, v) {
    varible = v;
    var beforeE = [], afterE = [], beforeParsed = [];
    var beforeE = [], afterE = [];

    for (let i = 0; i < uInput.length; i++) {
        if (uInput[i] == '=') {
            break;
        }

        beforeE.push(uInput[i]);
    }
    for (let i = beforeE.length + 1; i < uInput.length; i++) {


        afterE.push(uInput[i]);
    }
    if (beforeE[0] != '-') {
        beforeE.unshift('+');
    }
    if (afterE[0] != '-') {
        afterE.unshift('+');
    }
    if (beforeE[beforeE.length] != '-') {
        beforeE.push('+');
    }
    if (afterE[afterE.length] != '-') {
        afterE.push('+');
    }



    var beforeParsed = getArray(beforeE);
    var afterParsed = getArray(afterE);

    //x to the left
    for (let i = 0; i < beforeParsed.length; i++) {
        if (beforeParsed[i] == varible) {
            beforeParsed.splice(i, 1);
            afterParsed.push("-" + varible)
            i--;
        } else if (beforeParsed[i] == "-" + varible) {
            beforeParsed.splice(i, 1);
            afterParsed.push(varible)
            i--;

        }
    }

    //number to the right
    for (let i = 0; i < afterParsed.length; i++) {
        if (afterParsed[i] != varible && afterParsed[i] != "-" + varible) {
            isNegetive = checkNeg(afterParsed[i]);
            if (isNegetive == true) {
                beforeParsed.push(-1 * afterParsed[i]);
                afterParsed.splice(i, 1);
                i--;
            } else {
                beforeParsed.push(afterParsed[i]);
                afterParsed.splice(i, 1);
                i--;
            }
        }
    }

    var sumLeft = 0;
    var sumVarible = 0;
    for (let i = 0; i < beforeParsed.length; i++) {
        sumLeft += beforeParsed[i];
    }
    for (let i = 0; i < afterParsed.length; i++) {
        if (afterParsed[i] == varible) {
            sumVarible += 1;
        } else if (afterParsed[i] == "-" + varible) {
            sumVarible -= 1;
        }
    }

    var answer = sumLeft / sumVarible;
    return answer

    console.log(answer);


}

function checkNeg(num) {
    if (num > 0) {
        return true;
    } else {
        return false
    }
}


function getArray(name) {
    var beforeParsed = [];
    var posInArray = 0;
    beforeParsed.push([]);
    for (let i = 1; i < name.length; i++) {
        if (i == name.length - 1) {
            break;
        }
        if (name[i] == '+') {
            posInArray++;
            beforeParsed.push([]);

            continue;
        } else if (name[i] == '*') {
            if (name[i + 1] == varible) {
                beforeParsed[posInArray] += Number(name[i - 1]) + varible;
                i += 2
                continue;
            }
            if (name[i + 1] == '-') {
                // posInArray++;
                // beforeParsed.push([]);
                beforeParsed[posInArray] += Number(Number(name[i - 1]) * Number(name[i + 2]) * -1);
                i += 2;
                continue;
            }
            posInArray++;
            beforeParsed.push([]);
            beforeParsed[posInArray] += Number(name[i - 1]) * Number(name[i + 1]);
            i += 1;


            continue;
        } else if (name[i] == '-') {
            posInArray++;
            beforeParsed.push([]);
            beforeParsed[posInArray] += '-';
            name.splice(i, 1);
            i--



            continue;
        }

        if (name[i + 1] == '*') {
            continue;
        }
        beforeParsed[posInArray] += name[i];

    }
debugger;
    for (i = 0; i < beforeParsed.length; i++) {
        if (beforeParsed[i] != varible && beforeParsed[i] != "-") {

            if (beforeParsed[i].includes(varible)) {
                l = 1;
                if (beforeParsed[i].includes('-')) {
                    l++
                }
                if (beforeParsed[i].length > l) {
                    f = getFactor(beforeParsed[i]);
                    for (let k = 0; k < f[2]; k++) {
                        beforeParsed.push([])
                        beforeParsed[beforeParsed.length - 1] += f[0];
                    }
                    beforeParsed.splice(i, 1);
                    i += loop - 1;
                    
                }
            } else {
                beforeParsed[i] *= 1;
            }
        }
    }

    return beforeParsed
}

// console.log("x =", check("x+x+9-3=6+4*-3+x", "x"))
function getFactor(str) {
    // debugger;
    add = "";
    var numb = str.match(/\d/g);
    loop = Number(numb.join(""));
    pos = 0;
    if (str[0] == '-') {
        pos++;
        add = "-";
    }
    if (numb.length > 1) {
        pos = Number(numb.length - 1);
    } else {
        pos = Number(numb.length);;
    }
    add += varible;
    return [add, pos, loop]

}
        // while (i < str.length) {
        //     if (str[i] != '-' && str[i] != varible) {
        //         k = i;
        //         while (str[k] != varible) {
        //             factor += str[k]
        //             k++
        //         }
        //         times = factor * 1
        //         pos = i;
        //     } else if (str[i] != varible) {
        //         k = 0;
        //         while (k != varible) {
        //             factor += str[k]
        //             k++
        //         }
        //         k = 0;
        //         while (k < factor.length) {
        //             if (factor[k] == '-') {
        //                 continue;
        //             }
        //             times += factor[k]
        //             k++
        //         }
        //         times *= 1;
        //         pos = i;
        //     }
        //     i++;
        // }