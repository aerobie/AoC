console.time("bla");

function computer() {
    let input = 2;
    let output = 0;
    let end = 0;
    let base = 0;
    // let opcodeList = [109,1,204,-1,1001,100,1,100,1008,100,16,101,1006,101,0,99];
    let opcodeList = [1102, 34463338, 34463338, 63, 1007, 63, 34463338, 63, 1005, 63, 53, 1102, 3, 1, 1000, 109, 988, 209, 12, 9, 1000, 209, 6, 209, 3, 203, 0, 1008, 1000, 1, 63, 1005, 63, 65, 1008, 1000, 2, 63, 1005, 63, 904, 1008, 1000, 0, 63, 1005, 63, 58, 4, 25, 104, 0, 99, 4, 0, 104, 0, 99, 4, 17, 104, 0, 99, 0, 0, 1101, 0, 33, 1017, 1101, 24, 0, 1014, 1101, 519, 0, 1028, 1102, 34, 1, 1004, 1101, 0, 31, 1007, 1101, 0, 844, 1025, 1102, 0, 1, 1020, 1102, 38, 1, 1003, 1102, 39, 1, 1008, 1102, 849, 1, 1024, 1101, 0, 22, 1001, 1102, 25, 1, 1009, 1101, 1, 0, 1021, 1101, 0, 407, 1022, 1101, 404, 0, 1023, 1101, 0, 35, 1013, 1101, 27, 0, 1011, 1101, 0, 37, 1016, 1102, 1, 26, 1019, 1102, 28, 1, 1015, 1101, 0, 30, 1000, 1102, 1, 36, 1005, 1101, 0, 29, 1002, 1101, 23, 0, 1012, 1102, 1, 32, 1010, 1102, 21, 1, 1006, 1101, 808, 0, 1027, 1102, 20, 1, 1018, 1101, 0, 514, 1029, 1102, 1, 815, 1026, 109, 14, 2107, 24, -5, 63, 1005, 63, 199, 4, 187, 1105, 1, 203, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, -1, 2108, 21, -7, 63, 1005, 63, 225, 4, 209, 1001, 64, 1, 64, 1106, 0, 225, 1002, 64, 2, 64, 109, -16, 1201, 6, 0, 63, 1008, 63, 35, 63, 1005, 63, 249, 1001, 64, 1, 64, 1106, 0, 251, 4, 231, 1002, 64, 2, 64, 109, 9, 2102, 1, 2, 63, 1008, 63, 37, 63, 1005, 63, 271, 1105, 1, 277, 4, 257, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, 11, 1208, -8, 23, 63, 1005, 63, 293, 1105, 1, 299, 4, 283, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, 8, 21107, 40, 39, -8, 1005, 1017, 319, 1001, 64, 1, 64, 1106, 0, 321, 4, 305, 1002, 64, 2, 64, 109, -28, 2101, 0, 6, 63, 1008, 63, 39, 63, 1005, 63, 341, 1106, 0, 347, 4, 327, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, 19, 2107, 26, -7, 63, 1005, 63, 363, 1106, 0, 369, 4, 353, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, 1, 1202, -9, 1, 63, 1008, 63, 39, 63, 1005, 63, 395, 4, 375, 1001, 64, 1, 64, 1105, 1, 395, 1002, 64, 2, 64, 109, 9, 2105, 1, -3, 1106, 0, 413, 4, 401, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, -13, 1207, -4, 26, 63, 1005, 63, 435, 4, 419, 1001, 64, 1, 64, 1105, 1, 435, 1002, 64, 2, 64, 109, -1, 21101, 41, 0, 7, 1008, 1019, 41, 63, 1005, 63, 461, 4, 441, 1001, 64, 1, 64, 1105, 1, 461, 1002, 64, 2, 64, 109, 7, 21107, 42, 43, -2, 1005, 1017, 479, 4, 467, 1105, 1, 483, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, -6, 21108, 43, 46, 0, 1005, 1013, 499, 1106, 0, 505, 4, 489, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, 17, 2106, 0, -2, 4, 511, 1105, 1, 523, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, -27, 1202, -1, 1, 63, 1008, 63, 28, 63, 1005, 63, 547, 1001, 64, 1, 64, 1106, 0, 549, 4, 529, 1002, 64, 2, 64, 109, 18, 1206, -1, 567, 4, 555, 1001, 64, 1, 64, 1106, 0, 567, 1002, 64, 2, 64, 109, -16, 21102, 44, 1, 6, 1008, 1011, 43, 63, 1005, 63, 587, 1106, 0, 593, 4, 573, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, 8, 21102, 45, 1, -1, 1008, 1012, 45, 63, 1005, 63, 619, 4, 599, 1001, 64, 1, 64, 1105, 1, 619, 1002, 64, 2, 64, 109, 7, 1205, 1, 633, 4, 625, 1106, 0, 637, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, -8, 2102, 1, -3, 63, 1008, 63, 25, 63, 1005, 63, 659, 4, 643, 1105, 1, 663, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, 14, 1206, -5, 679, 1001, 64, 1, 64, 1105, 1, 681, 4, 669, 1002, 64, 2, 64, 109, -28, 2101, 0, 2, 63, 1008, 63, 30, 63, 1005, 63, 707, 4, 687, 1001, 64, 1, 64, 1106, 0, 707, 1002, 64, 2, 64, 109, 21, 21101, 46, 0, 0, 1008, 1019, 48, 63, 1005, 63, 727, 1106, 0, 733, 4, 713, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, -3, 21108, 47, 47, 1, 1005, 1017, 751, 4, 739, 1106, 0, 755, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, -13, 1207, 0, 37, 63, 1005, 63, 771, 1105, 1, 777, 4, 761, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, 7, 2108, 21, -9, 63, 1005, 63, 797, 1001, 64, 1, 64, 1105, 1, 799, 4, 783, 1002, 64, 2, 64, 109, 22, 2106, 0, -5, 1001, 64, 1, 64, 1106, 0, 817, 4, 805, 1002, 64, 2, 64, 109, -4, 1205, -8, 829, 1106, 0, 835, 4, 823, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, -4, 2105, 1, 0, 4, 841, 1105, 1, 853, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, -30, 1208, 6, 30, 63, 1005, 63, 871, 4, 859, 1105, 1, 875, 1001, 64, 1, 64, 1002, 64, 2, 64, 109, -2, 1201, 9, 0, 63, 1008, 63, 22, 63, 1005, 63, 897, 4, 881, 1106, 0, 901, 1001, 64, 1, 64, 4, 64, 99, 21101, 27, 0, 1, 21102, 1, 915, 0, 1106, 0, 922, 21201, 1, 66266, 1, 204, 1, 99, 109, 3, 1207, -2, 3, 63, 1005, 63, 964, 21201, -2, -1, 1, 21102, 942, 1, 0, 1105, 1, 922, 22101, 0, 1, -1, 21201, -2, -3, 1, 21101, 0, 957, 0, 1106, 0, 922, 22201, 1, -1, -2, 1105, 1, 968, 21202, -2, 1, -2, 109, -3, 2106, 0, 0]
    instPointer = 0;
    while (end !== 99) {
        let a = opcodeList[instPointer].toString();
        let abcde = a.padStart(5, '0');
        let opcode = abcde[3] + abcde[4];
        switch (+opcode) {
            case 01:
                let first1, second1, third1;
                if (abcde[2] === '0') {
                    first1 = opcodeList[opcodeList[instPointer + 1]];
                } else if (abcde[2] === '1') {
                    first1 = opcodeList[instPointer + 1];
                } else if (abcde[2] === '2') {
                    first1 = opcodeList[base + opcodeList[instPointer + 1]];
                }
                if (abcde[1] === '0') {
                    second1 = opcodeList[opcodeList[instPointer + 2]];
                } else if (abcde[1] === '1') {
                    second1 = opcodeList[instPointer + 2];
                } else if (abcde[1] === '2') {
                    second1 = opcodeList[base + opcodeList[instPointer + 2]];
                }
                if (abcde[0] === '0') {
                    third1 = opcodeList[instPointer + 3];
                    opcodeList[third1] = (first1 + second1);
                } else if (abcde[0] === '2') {
                    third1 = opcodeList[instPointer + 3] + base;
                    opcodeList[third1] = (first1 + second1);
                }
                instPointer += 4;
                break;
            case 02:
                let first2, second2, third2;
                if (abcde[2] === '0') {
                    first2 = opcodeList[opcodeList[instPointer + 1]];
                } else if (abcde[2] === '1') {
                    first2 = opcodeList[instPointer + 1];
                } else if (abcde[2] === '2') {
                    first2 = opcodeList[base + opcodeList[instPointer + 1]];
                }
                if (abcde[1] === '0') {
                    second2 = opcodeList[opcodeList[instPointer + 2]];
                } else if (abcde[1] === '1') {
                    second2 = opcodeList[instPointer + 2];
                } else if (abcde[1] === '2') {
                    second2 = opcodeList[base + opcodeList[instPointer + 2]];
                }
                if (abcde[0] === '0') {
                    third2 = opcodeList[instPointer + 3];
                    opcodeList[third2] = (first2 * second2);
                } else if (abcde[0] === '2') {
                    third2 = opcodeList[instPointer + 3] + base;
                    opcodeList[third2] = (first2 * second2);
                }
                instPointer += 4;
                break;
            case 03:
                
                if (abcde[2] === '0') {
                    opcodeList[opcodeList[instPointer + 1]] = input;
                } else if (abcde[2] === '1') {
                    opcodeList[instPointer + 1] = input;
                } else if (abcde[2] === '2') {
                    opcodeList[base + opcodeList[instPointer + 1]] = input;
                }
                instPointer += 2;
                break;
            case 04:
               
                if (abcde[2] === '0') {
                    output = opcodeList[opcodeList[instPointer + 1]];
                } else if (abcde[2] === '1') {
                    output = opcodeList[instPointer + 1];
                } else if (abcde[2] === '2') {
                    output = opcodeList[base + opcodeList[instPointer + 1]];
                }
                instPointer += 2;
                end = 4;
                break;
            case 05:
              
                if (abcde[2] === '0') {
                    if (opcodeList[opcodeList[instPointer + 1]] !== 0) {
                        if (abcde[1] === '0') {
                            instPointer = opcodeList[opcodeList[instPointer + 2]];
                        } else if (abcde[1] === '1') {
                            instPointer = opcodeList[instPointer + 2];
                        } else if (abcde[1] === '2') {
                            instPointer = opcodeList[base + opcodeList[instPointer + 2]];
                        }
                    } else {
                        instPointer += 3;
                    }
                } else if (abcde[2] === '1') {
                    if (opcodeList[instPointer + 1] !== 0) {
                        if (abcde[1] === '0') {
                            instPointer = opcodeList[opcodeList[instPointer + 2]];
                        } else if (abcde[1] === '1') {
                            instPointer = opcodeList[instPointer + 2];
                        } else if (abcde[1] === '2') {
                            instPointer = opcodeList[base + opcodeList[instPointer + 2]];
                        }
                    } else {
                        instPointer += 3;
                    }
                } else if (abcde[2] === '2') {
                    if (opcodeList[base + opcodeList[instPointer + 1]] !== 0) {
                        if (abcde[1] === '0') {
                            instPointer = opcodeList[opcodeList[instPointer + 2]];
                        } else if (abcde[1] === '1') {
                            instPointer = opcodeList[instPointer + 2];
                        } else if (abcde[1] === '2') {
                            instPointer = opcodeList[base + opcodeList[instPointer + 2]];
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
                        } else if (abcde[1] === '1') {
                            instPointer = opcodeList[instPointer + 2];
                        } else if (abcde[1] === '2') {
                            instPointer = opcodeList[base + opcodeList[instPointer + 2]];
                        }
                    } else {
                        instPointer += 3;
                    }
                } else if (abcde[2] === '1') {
                    if (opcodeList[instPointer + 1] === 0) {
                        if (abcde[1] === '0') {
                            instPointer = opcodeList[opcodeList[instPointer + 2]];
                        } else if (abcde[1] === '1') {
                            instPointer = opcodeList[instPointer + 2];
                        } else if (abcde[1] === '2') {
                            instPointer = opcodeList[base + opcodeList[instPointer + 2]];
                        }
                    } else {
                        instPointer += 3;
                    }
                } else if (abcde[2] === '2') {
                    if (opcodeList[base + opcodeList[instPointer + 1]] === 0) {
                        if (abcde[1] === '0') {
                            instPointer = opcodeList[opcodeList[instPointer + 2]];
                        } else if (abcde[1] === '1') {
                            instPointer = opcodeList[instPointer + 2];
                        } else if (abcde[1] === '2') {
                            instPointer = opcodeList[base + opcodeList[instPointer + 2]];
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
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '1' && abcde[1] === '0') {
                    if (opcodeList[instPointer + 1] < opcodeList[opcodeList[instPointer + 2]]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '0' && abcde[1] === '1') {
                    if (opcodeList[opcodeList[instPointer + 1]] < opcodeList[instPointer + 2]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '1' && abcde[1] === '1') {
                    if (opcodeList[instPointer + 1] < opcodeList[instPointer + 2]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '2' && abcde[1] === '2') {
                    if (opcodeList[base + opcodeList[instPointer + 1]] < opcodeList[base + opcodeList[instPointer + 2]]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '2' && abcde[1] === '1') {
                    if (opcodeList[base + opcodeList[instPointer + 1]] < opcodeList[instPointer + 2]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '1' && abcde[1] === '2') {
                    if (opcodeList[instPointer + 1] < opcodeList[base + opcodeList[instPointer + 2]]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '2' && abcde[1] === '0') {
                    if (opcodeList[base + opcodeList[instPointer + 1]] < opcodeList[opcodeList[instPointer + 2]]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '0' && abcde[1] === '2') {
                    if (opcodeList[opcodeList[instPointer + 1]] < opcodeList[opcodeList[base + instPointer + 2]]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
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
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '1' && abcde[1] === '0') {
                    if (opcodeList[instPointer + 1] === opcodeList[opcodeList[instPointer + 2]]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '0' && abcde[1] === '1') {
                    if (opcodeList[opcodeList[instPointer + 1]] === opcodeList[instPointer + 2]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '1' && abcde[1] === '1') {
                    if (opcodeList[instPointer + 1] === opcodeList[instPointer + 2]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '2' && abcde[1] === '2') {
                    if (opcodeList[base + opcodeList[instPointer + 1]] === opcodeList[base + opcodeList[instPointer + 2]]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '2' && abcde[1] === '1') {
                    if (opcodeList[base + opcodeList[instPointer + 1]] === opcodeList[instPointer + 2]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '1' && abcde[1] === '2') {
                    if (opcodeList[instPointer + 1] === opcodeList[base + opcodeList[instPointer + 2]]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '2' && abcde[1] === '0') {
                    if (opcodeList[base + opcodeList[instPointer + 1]] === opcodeList[opcodeList[instPointer + 2]]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                } else if (abcde[2] === '0' && abcde[1] === '2') {
                    if (opcodeList[opcodeList[instPointer + 1]] === opcodeList[base + opcodeList[instPointer + 2]]) {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 1;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 1;
                            instPointer += 4;
                        }
                    } else {
                        if (abcde[0] === '0') {
                            opcodeList[opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '1') {
                            opcodeList[instPointer + 3] = 0;
                            instPointer += 4;
                        } else if (abcde[0] === '2') {
                            opcodeList[base + opcodeList[instPointer + 3]] = 0;
                            instPointer += 4;
                        }
                    }
                }
                break;
            case 09:
               
                if (abcde[2] === '0') {
                    base += opcodeList[opcodeList[instPointer + 1]];
                } else if (abcde[2] === '1') {
                    base += opcodeList[instPointer + 1];
                } else if (abcde[2] === '2') {
                    base += opcodeList[base + opcodeList[instPointer + 1]];
                }
                instPointer += 2;
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
    console.log(output);
}
computer();
console.timeEnd("bla");