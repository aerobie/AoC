console.time("bla");

function combo(c) {
    var r = [],
        len = c.length;
    tmp = [];

    function nodup() {
        var got = {};
        for (var l = 0; l < tmp.length; l++) {
            if (got[tmp[l]]) return false;
            got[tmp[l]] = true;
        }
        return true;
    }

    function iter(col, done) {
        var l, rr;
        if (col === len) {
            if (nodup()) {
                rr = [];
                for (l = 0; l < tmp.length; l++)
                    rr.push(c[tmp[l]]);
                r.push(rr);
            }
        } else {
            for (l = 0; l < len; l++) {
                tmp[col] = l;
                iter(col + 1);
            }
        }
    }
    iter(0);
    return r;
}

function computer() {
    let sets = [];
    let res = [];
    // sets = combo([4,3,2,1,0], 5);
    sets = combo([9, 8, 7, 6, 5], 5);

    let t = 0;
    while (t < sets.length) {
        let input = 0;
        let output = 0;
        let s = 0;
        let instPointer = 0;
        let round = 0;
        // let opcodeList = [3, 26, 1001, 26, -4, 26, 3, 27, 1002, 27, 2, 27, 1, 27, 26,
        //     27, 4, 27, 1001, 28, -1, 28, 1005, 28, 6, 99, 0, 0, 5
        // ];
        let opcodeList = [3,8,1001,8,10,8,105,1,0,0,21,34,59,68,89,102,183,264,345,426,99999,3,9,102,5,9,9,1001,9,5,9,4,9,99,3,9,101,3,9,9,1002,9,5,9,101,5,9,9,1002,9,3,9,1001,9,5,9,4,9,99,3,9,101,5,9,9,4,9,99,3,9,102,4,9,9,101,3,9,9,102,5,9,9,101,4,9,9,4,9,99,3,9,1002,9,5,9,1001,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,99];

        let opcodeList0 = [];
        let opcodeList1 = [];
        let opcodeList2 = [];
        let opcodeList3 = [];
        let opcodeList4 = [];
        let instPointer0 = 0;
        let instPointer1 = 0;
        let instPointer2 = 0;
        let instPointer3 = 0;
        let instPointer4 = 0;
        let numInput = 1;
        while (s < sets[t].length) {
            let end = 0;
            if (round === 0) {
                switch (s) {
                    case 0: {
                        break;
                    }
                    case 1: {
                        opcodeList0 = [...opcodeList];
                        instPointer0 = instPointer;
                        instPointer = 0;
                        break;
                    }
                    case 2: {
                        instPointer1 = instPointer;
                        opcodeList1 = [...opcodeList];
                        instPointer = 0;
                        break;
                    }
                    case 3: {
                        instPointer2 = instPointer;
                        opcodeList2 = [...opcodeList];
                        instPointer = 0;
                        break;
                    }
                    case 4: {
                        instPointer3 = instPointer;
                        opcodeList3 = [...opcodeList];
                        instPointer = 0;
                        break;
                    }
                }
            } else {
                switch (s) {
                    case 0: {
                        instPointer4 = instPointer;
                        opcodeList4 = [...opcodeList];
                        opcodeList = [...opcodeList0];
                        instPointer = instPointer0;
                        input = output;
                        break;
                    }
                    case 1: {
                        opcodeList0 = [...opcodeList];
                        instPointer0 = instPointer;
                        opcodeList = [...opcodeList1];
                        instPointer = instPointer1;
                        input = output;
                        break;
                    }
                    case 2: {
                        opcodeList1 = [...opcodeList];
                        instPointer1 = instPointer;
                        opcodeList = [...opcodeList2];
                        instPointer = instPointer2;
                        input = output;
                        break;
                    }
                    case 3: {
                        opcodeList2 = [...opcodeList];
                        instPointer2 = instPointer;
                        opcodeList = [...opcodeList3];
                        instPointer = instPointer3;
                        input = output;
                        break;
                    }
                    case 4: {
                        opcodeList3 = [...opcodeList];
                        instPointer3 = instPointer;
                        opcodeList = [...opcodeList4];
                        instPointer = instPointer4;
                        input = output;
                        break;
                    }
                }
            }

            while (end !== 99 && end !== 4) {
                if (numInput === 2) {
                    input = output
                    numInput++;
                } else if (numInput === 1) {
                    input = sets[t][s];
                }
                let a = opcodeList[instPointer].toString();
                let abcde = a.padStart(5, '0');
                let opcode = abcde[3] + abcde[4];
                switch (+opcode) {
                    case 01:
                        let first1;
                        let second1;
                        let third1;
                        if (abcde[2] === '0') {
                            first1 = opcodeList[opcodeList[instPointer + 1]];
                        } else {
                            first1 = opcodeList[instPointer + 1];
                        }
                        if (abcde[1] === '0') {
                            second1 = opcodeList[opcodeList[instPointer + 2]];
                        } else {
                            second1 = opcodeList[instPointer + 2];
                        }
                        third1 = opcodeList[instPointer + 3];
                        opcodeList[third1] = (first1 + second1);
                        instPointer += 4;
                        break;
                    case 02:
                        let first2;
                        let second2;
                        let third2;
                        if (abcde[2] === '0') {
                            first2 = opcodeList[opcodeList[instPointer + 1]];
                        } else {
                            first2 = opcodeList[instPointer + 1];
                        }
                        if (abcde[1] === '0') {
                            second2 = opcodeList[opcodeList[instPointer + 2]];
                        } else {
                            second2 = opcodeList[instPointer + 2];
                        }
                        third2 = opcodeList[instPointer + 3];
                        opcodeList[third2] = (first2 * second2);
                        instPointer += 4;
                        break;
                    case 03:
                        numInput++;
                        if (abcde[2] === '0') {
                            opcodeList[opcodeList[instPointer + 1]] = input;
                        } else {
                            opcodeList[instPointer + 1] = input;
                        }
                        instPointer += 2;
                        break;
                    case 04:
                        if (abcde[2] === '0') {
                            output = opcodeList[opcodeList[instPointer + 1]];
                        } else {
                            output = opcodeList[instPointer + 1];
                        }
                        instPointer += 2;
                        end = 4;
                        break;
                    case 05:
                        if (abcde[2] === '0') {
                            if (opcodeList[opcodeList[instPointer + 1]] !== 0) {
                                if (abcde[1] === '0') {
                                    instPointer = opcodeList[opcodeList[instPointer + 2]];
                                } else {
                                    instPointer = opcodeList[instPointer + 2];
                                }
                            } else {
                                instPointer += 3;
                            }
                        } else {
                            if (opcodeList[instPointer + 1] !== 0) {
                                if (abcde[1] === '0') {
                                    instPointer = opcodeList[opcodeList[instPointer + 2]];
                                } else {
                                    instPointer = opcodeList[instPointer + 2];
                                }
                            } else {
                                instPointer += 3;
                            }
                        }
                        break;
                    case 06:
                        if (abcde[2] === '0') {
                            if (opcodeList[opcodeList[instPointer + 1]] === 0) {
                                if (abcde[1] === '0') {
                                    instPointer = opcodeList[opcodeList[instPointer + 2]];
                                } else {
                                    instPointer = opcodeList[instPointer + 2];
                                }
                            } else {
                                instPointer += 3;
                            }
                        } else {
                            if (opcodeList[instPointer + 1] === 0) {
                                if (abcde[1] === '0') {
                                    instPointer = opcodeList[opcodeList[instPointer + 2]];
                                } else {
                                    instPointer = opcodeList[instPointer + 2];
                                }
                            } else {
                                instPointer += 3;
                            }
                        }
                        break;
                    case 07:
                        if (abcde[2] === '0' && abcde[1] === '0') {
                            if (opcodeList[opcodeList[instPointer + 1]] < opcodeList[opcodeList[instPointer + 2]]) {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 1;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 1;
                                    instPointer += 4;
                                }
                            } else {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 0;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 0;
                                    instPointer += 4;
                                }
                            }
                        } else if (abcde[2] === '1' && abcde[1] === '0') {
                            if (opcodeList[instPointer + 1] < opcodeList[opcodeList[instPointer + 2]]) {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 1;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 1;
                                    instPointer += 4;
                                }
                            } else {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 0;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 0;
                                    instPointer += 4;
                                }
                            }
                        } else if (abcde[2] === '0' && abcde[1] === '1') {
                            if (opcodeList[opcodeList[instPointer + 1]] < opcodeList[instPointer + 2]) {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 1;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 1;
                                    instPointer += 4;
                                }
                            } else {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 0;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 0;
                                    instPointer += 4;
                                }
                            }
                        } else if (abcde[2] === '1' && abcde[1] === '1') {
                            if (opcodeList[instPointer + 1] < opcodeList[instPointer + 2]) {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 1;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 1;
                                    instPointer += 4;
                                }
                            } else {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 0;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 0;
                                    instPointer += 4;
                                }
                            }
                        }
                        break;
                    case 08:
                        if (abcde[2] === '0' && abcde[1] === '0') {
                            if (opcodeList[opcodeList[instPointer + 1]] === opcodeList[opcodeList[instPointer + 2]]) {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 1;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 1;
                                    instPointer += 4;
                                }
                            } else {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 0;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 0;
                                    instPointer += 4;
                                }
                            }
                        } else if (abcde[2] === '1' && abcde[1] === '0') {
                            if (opcodeList[instPointer + 1] === opcodeList[opcodeList[instPointer + 2]]) {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 1;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 1;
                                    instPointer += 4;
                                }
                            } else {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 0;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 0;
                                    instPointer += 4;
                                }
                            }
                        } else if (abcde[2] === '0' && abcde[1] === '1') {
                            if (opcodeList[opcodeList[instPointer + 1]] === opcodeList[instPointer + 2]) {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 1;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 1;
                                    instPointer += 4;
                                }
                            } else {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 0;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 0;
                                    instPointer += 4;
                                }
                            }
                        } else if (abcde[2] === '1' && abcde[1] === '1') {
                            if (opcodeList[instPointer + 1] === opcodeList[instPointer + 2]) {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 1;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 1;
                                    instPointer += 4;
                                }
                            } else {
                                if (abcde[0] === '0') {
                                    opcodeList[opcodeList[instPointer + 3]] = 0;
                                    instPointer += 4;
                                } else {
                                    opcodeList[instPointer + 3] = 0;
                                    instPointer += 4;
                                }
                            }
                        }
                        break;
                    case 99:
                        end = 99;
                        break;
                    default:
                        console.log("fault");
                        end = 99;
                        break;
                }
            }
            if (s === 4 && end !== 99) {
                s = 0;
                round++;
                end = 0
            } else if (s === 4 && end === 99) {
                s++;
                round = 0;
                numInput = 1;
            } else if (round === 0){
                numInput = 1;
                s++;
            } else {
                s++
            }
        }
        res.push(output);
        t++;
    }
    console.log(Math.max(...res));
}
computer();
computer2();
console.timeEnd("bla");


function computer2() {
    let sets = [];
    let res=[];  
    sets = combo([4,3,2,1,0], 5);

    let t=0;
while(t < sets.length){
    let input = 0;
    let output = 0;
    let s=0;
    while (s < sets[t].length) {
        let numInput = 1; 
        let opcodeList = [3,8,1001,8,10,8,105,1,0,0,21,34,59,68,89,102,183,264,345,426,99999,3,9,102,5,9,9,1001,9,5,9,4,9,99,3,9,101,3,9,9,1002,9,5,9,101,5,9,9,1002,9,3,9,1001,9,5,9,4,9,99,3,9,101,5,9,9,4,9,99,3,9,102,4,9,9,101,3,9,9,102,5,9,9,101,4,9,9,4,9,99,3,9,1002,9,5,9,1001,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,101,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,99,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1001,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,99,3,9,101,1,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,102,2,9,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,101,2,9,9,4,9,99,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,102,2,9,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,3,9,101,1,9,9,4,9,3,9,1001,9,1,9,4,9,3,9,1001,9,2,9,4,9,3,9,1002,9,2,9,4,9,99];

        input = sets[t][s];
        let instPointer =0;
        let end = 0;
        for (i = 0; i !== 99; i = end) {
            if (numInput === 2){
                input = output
                numInput++;
            }

            let a = opcodeList[instPointer].toString();
            let abcde = a.padStart(5, '0');
            let opcode = abcde[3] + abcde[4];
            switch (+opcode) {
                case 01:
                    let first1;
                    let second1;
                    let third1;
                    if (abcde[2] === '0') {
                        first1 = opcodeList[opcodeList[instPointer + 1]];
                    } else {
                        first1 = opcodeList[instPointer + 1];
                    }
                    if (abcde[1] === '0') {
                        second1 = opcodeList[opcodeList[instPointer + 2]];
                    } else {
                        second1 = opcodeList[instPointer + 2];
                    }
                    third1 = opcodeList[instPointer + 3];
                    opcodeList[third1] = (first1 + second1);
                    instPointer += 4;
                    break;
                case 02:
                    let first2;
                    let second2;
                    let third2;
                    if (abcde[2] === '0') {
                        first2 = opcodeList[opcodeList[instPointer + 1]];
                    } else {
                        first2 = opcodeList[instPointer + 1];
                    }
                    if (abcde[1] === '0') {
                        second2 = opcodeList[opcodeList[instPointer + 2]];
                    } else {
                        second2 = opcodeList[instPointer + 2];
                    }
                    third2 = opcodeList[instPointer + 3];
                    opcodeList[third2] = (first2 * second2);
                    instPointer += 4;
                    break;
                case 03:
                    numInput++;
                    if (abcde[2] === '0') {
                        opcodeList[opcodeList[instPointer + 1]] = input;
                    } else {
                        opcodeList[instPointer + 1] = input;
                    }
                    instPointer += 2;
                    break;
                case 04:
                    if (abcde[2] === '0') {
                        output = opcodeList[opcodeList[instPointer + 1]];
                    } else {
                        output = opcodeList[instPointer + 1];
                    }
                    instPointer += 2;
                    break;
                case 05:
                    if (abcde[2] === '0') {
                        if (opcodeList[opcodeList[instPointer + 1]] !== 0) {
                            if (abcde[1] === '0') {
                                instPointer = opcodeList[opcodeList[instPointer + 2]];
                            } else {
                                instPointer = opcodeList[instPointer + 2];
                            }
                        } else {
                            instPointer += 3;
                        }
                    } else {
                        if (opcodeList[instPointer + 1] !== 0) {
                            if (abcde[1] === '0') {
                                instPointer = opcodeList[opcodeList[instPointer + 2]];
                            } else {
                                instPointer = opcodeList[instPointer + 2];
                            }
                        } else {
                            instPointer += 3;
                        }
                    }
                    break;
                case 06:
                    if (abcde[2] === '0') {
                        if (opcodeList[opcodeList[instPointer + 1]] === 0) {
                            if (abcde[1] === '0') {
                                instPointer = opcodeList[opcodeList[instPointer + 2]];
                            } else {
                                instPointer = opcodeList[instPointer + 2];
                            }
                        } else {
                            instPointer += 3;
                        }
                    } else {
                        if (opcodeList[instPointer + 1] === 0) {
                            if (abcde[1] === '0') {
                                instPointer = opcodeList[opcodeList[instPointer + 2]];
                            } else {
                                instPointer = opcodeList[instPointer + 2];
                            }
                        } else {
                            instPointer += 3;
                        }
                    }
                    break;
                case 07:
                    if (abcde[2] === '0' && abcde[1] === '0') {
                        if (opcodeList[opcodeList[instPointer + 1]] < opcodeList[opcodeList[instPointer + 2]]) {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 1;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 1;
                                instPointer += 4;
                            }
                        } else {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 0;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 0;
                                instPointer += 4;
                            }
                        }
                    } else if (abcde[2] === '1' && abcde[1] === '0') {
                        if (opcodeList[instPointer + 1] < opcodeList[opcodeList[instPointer + 2]]) {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 1;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 1;
                                instPointer += 4;
                            }
                        } else {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 0;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 0;
                                instPointer += 4;
                            }
                        }
                    } else if (abcde[2] === '0' && abcde[1] === '1') {
                        if (opcodeList[opcodeList[instPointer + 1]] < opcodeList[instPointer + 2]) {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 1;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 1;
                                instPointer += 4;
                            }
                        } else {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 0;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 0;
                                instPointer += 4;
                            }
                        }
                    } else if (abcde[2] === '1' && abcde[1] === '1') {
                        if (opcodeList[instPointer + 1] < opcodeList[instPointer + 2]) {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 1;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 1;
                                instPointer += 4;
                            }
                        } else {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 0;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 0;
                                instPointer += 4;
                            }
                        }
                    }
                    break;
                case 08:
                    if (abcde[2] === '0' && abcde[1] === '0') {
                        if (opcodeList[opcodeList[instPointer + 1]] === opcodeList[opcodeList[instPointer + 2]]) {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 1;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 1;
                                instPointer += 4;
                            }
                        } else {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 0;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 0;
                                instPointer += 4;
                            }
                        }
                    } else if (abcde[2] === '1' && abcde[1] === '0') {
                        if (opcodeList[instPointer + 1] === opcodeList[opcodeList[instPointer + 2]]) {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 1;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 1;
                                instPointer += 4;
                            }
                        } else {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 0;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 0;
                                instPointer += 4;
                            }
                        }
                    } else if (abcde[2] === '0' && abcde[1] === '1') {
                        if (opcodeList[opcodeList[instPointer + 1]] === opcodeList[instPointer + 2]) {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 1;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 1;
                                instPointer += 4;
                            }
                        } else {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 0;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 0;
                                instPointer += 4;
                            }
                        }
                    } else if (abcde[2] === '1' && abcde[1] === '1') {
                        if (opcodeList[instPointer + 1] === opcodeList[instPointer + 2]) {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 1;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 1;
                                instPointer += 4;
                            }
                        } else {
                            if (abcde[0] === '0') {
                                opcodeList[opcodeList[instPointer + 3]] = 0;
                                instPointer += 4;
                            } else {
                                opcodeList[instPointer + 3] = 0;
                                instPointer += 4;
                            }
                        }
                    }
                    break;
                case 99:
                    end = 99;
                    break;
                default:
                    console.log("fault");
                    instPointer = 99;
                    break;
            }
        }
        s++;
    }
    res.push(output);
    t++;
}
// console.log(res);
console.log(Math.max(...res));
}