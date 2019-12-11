console.time("bla");

function computer() {
    let input = 1
    let output = 0;
    // let opcodeList = [3, 21, 1008, 21, 8, 20, 1005, 20, 22, 107, 8, 21, 20, 1006, 20, 31, 1106, 0, 36, 98, 0, 0, 1002, 21, 125, 20, 4, 20, 1105, 1, 46, 104, 999, 1105, 1, 46, 1101, 1000, 1, 20, 4, 20, 1105, 1, 46, 98, 99];
    // let opcodeList = [3, 12, 6, 12, 15, 1, 13, 14, 13, 4, 13, 99, -1, 0, 1, 9];
    let opcodeList = [3, 225, 1, 225, 6, 6, 1100, 1, 238, 225, 104, 0, 2, 106, 196, 224, 101, -1157, 224, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 7, 224, 1, 224, 223, 223, 1002, 144, 30, 224, 1001, 224, -1710, 224, 4, 224, 1002, 223, 8, 223, 101, 1, 224, 224, 1, 224, 223, 223, 101, 82, 109, 224, 1001, 224, -111, 224, 4, 224, 102, 8, 223, 223, 1001, 224, 4, 224, 1, 223, 224, 223, 1102, 10, 50, 225, 1102, 48, 24, 224, 1001, 224, -1152, 224, 4, 224, 1002, 223, 8, 223, 101, 5, 224, 224, 1, 223, 224, 223, 1102, 44, 89, 225, 1101, 29, 74, 225, 1101, 13, 59, 225, 1101, 49, 60, 225, 1101, 89, 71, 224, 1001, 224, -160, 224, 4, 224, 1002, 223, 8, 223, 1001, 224, 6, 224, 1, 223, 224, 223, 1101, 27, 57, 225, 102, 23, 114, 224, 1001, 224, -1357, 224, 4, 224, 102, 8, 223, 223, 101, 5, 224, 224, 1, 224, 223, 223, 1001, 192, 49, 224, 1001, 224, -121, 224, 4, 224, 1002, 223, 8, 223, 101, 3, 224, 224, 1, 223, 224, 223, 1102, 81, 72, 225, 1102, 12, 13, 225, 1, 80, 118, 224, 1001, 224, -110, 224, 4, 224, 102, 8, 223, 223, 101, 2, 224, 224, 1, 224, 223, 223, 4, 223, 99, 0, 0, 0, 677, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1105, 0, 99999, 1105, 227, 247, 1105, 1, 99999, 1005, 227, 99999, 1005, 0, 256, 1105, 1, 99999, 1106, 227, 99999, 1106, 0, 265, 1105, 1, 99999, 1006, 0, 99999, 1006, 227, 274, 1105, 1, 99999, 1105, 1, 280, 1105, 1, 99999, 1, 225, 225, 225, 1101, 294, 0, 0, 105, 1, 0, 1105, 1, 99999, 1106, 0, 300, 1105, 1, 99999, 1, 225, 225, 225, 1101, 314, 0, 0, 106, 0, 0, 1105, 1, 99999, 7, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 329, 101, 1, 223, 223, 108, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 344, 101, 1, 223, 223, 1108, 226, 677, 224, 102, 2, 223, 223, 1006, 224, 359, 1001, 223, 1, 223, 107, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 374, 1001, 223, 1, 223, 1107, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 389, 1001, 223, 1, 223, 107, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 404, 101, 1, 223, 223, 8, 226, 677, 224, 102, 2, 223, 223, 1005, 224, 419, 101, 1, 223, 223, 7, 226, 677, 224, 1002, 223, 2, 223, 1005, 224, 434, 101, 1, 223, 223, 1007, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 449, 1001, 223, 1, 223, 107, 226, 226, 224, 1002, 223, 2, 223, 1006, 224, 464, 1001, 223, 1, 223, 1007, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 479, 1001, 223, 1, 223, 1008, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 494, 101, 1, 223, 223, 7, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 509, 1001, 223, 1, 223, 108, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 524, 101, 1, 223, 223, 1108, 677, 226, 224, 1002, 223, 2, 223, 1006, 224, 539, 101, 1, 223, 223, 1108, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 554, 101, 1, 223, 223, 8, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 569, 101, 1, 223, 223, 8, 677, 677, 224, 102, 2, 223, 223, 1005, 224, 584, 101, 1, 223, 223, 1107, 226, 226, 224, 102, 2, 223, 223, 1006, 224, 599, 101, 1, 223, 223, 108, 677, 677, 224, 102, 2, 223, 223, 1006, 224, 614, 101, 1, 223, 223, 1008, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 629, 1001, 223, 1, 223, 1107, 677, 226, 224, 102, 2, 223, 223, 1005, 224, 644, 101, 1, 223, 223, 1008, 677, 677, 224, 1002, 223, 2, 223, 1005, 224, 659, 101, 1, 223, 223, 1007, 677, 226, 224, 1002, 223, 2, 223, 1005, 224, 674, 1001, 223, 1, 223, 4, 223, 99, 226];
    instPointer = 0;
    for (i = 0; i !== 99; i = instPointer) {

        let a = opcodeList[instPointer].toString();
        let abcde = a.padStart(5, '0');
        let opcode = abcde[3] + abcde[4];
        // console.log(abcde);
        switch (+opcode) {
            case 01:
                let first1, second1, third1;
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
                let first2, second2, third2;
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
                instPointer = 99;
                break;
            default:
                console.log("fault");
                instPointer = 99;
                break;
        }
    }
    console.log(output);
}
computer();
console.timeEnd("bla");