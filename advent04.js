function pw() {
    console.time("bla");
    let pws = 0;
    let b = 0;
    let a = 245554;
    while (245553 < a && a < 700000) {
        switch (a) {
            case 250000: { 
                a = 255555;
                thing();
                break;
            }
            case 260000: {
                a = 266666;
                thing();
                break;
            }
            case 270000: {
                a = 277777;
                thing();
                break;
            }
            case 280000: {
                a = 288888;
                thing();
                break;
            }
            case 290000: {
                a = 299999;
                thing();
                break;
            }
            case 300000: {
                a = 333333;
                thing();
                break;
            }
            case 340000: {
                a = 344444;
                thing();
                break;
            }
            case 350000: {
                a = 355555;
                thing();
                break;
            }
            case 360000: {
                a = 366666;
                thing();
                break;
            }
            case 370000: {
                a = 377777;
                thing();
                break;
            }
            case 380000: {
                a = 388888;
                thing();
                break;
            }
            case 390000: {
                a = 399999;
                thing();
                break;
            }
            case 400000: {
                a = 444444;
                thing();
                break;
            }
            case 450000: {
                a = 455555;
                thing();
                break;
            }
            case 460000: {
                a = 466666;
                thing();
                break;
            }
            case 470000: {
                a = 477777;
                thing();
                break;
            }
            case 480000: {
                a = 488888;
                thing();
                break;
            }
            case 490000: {
                a = 499999;
                thing();
                break;
            }
            case 500000: {
                a = 555555;
                thing();
                break;
            } 
            case 560000: {
                a = 566666;
                thing();
                break;
            } 
            case 570000: {
                a = 577777;
                thing();
                break;
            } 
            case 580000: {
                a = 588888;
                thing();
                break;
            } 
            case 590000: {
                a = 599999;
                thing();
                break;
            } 
            case 600000: {
                a = 666666;
                thing();
                break;
            } 
            case 670000: {
                a = 677777;
                thing();
                break;
            } 
            case 680000: {
                a = 688888;
                thing();
                break;
            } 
            case 690000: {
                a = 699999;
                thing();
                break;
            } 
            default: {
                thing();
            }
        } 
        // 95;
        //65;
        function thing() {
        let x = a.toString();
        if (((x[0] <= x[1]) && (x[1] <= x[2]) && (x[2] <= x[3]) && (x[3] <= x[4]) && (x[4] <= x[5]))) {
            if (x[0] === x[1] || x[1] === x[2] || x[2] === x[3] || x[3] === x[4] || x[4] === x[5]) {
                b++
                if((+x[5] === +x[4] && +x[4] !== +x[3]) || (+x[4] === +x[3] && (+x[3] !== +x[2] && +x[4] !== +x[5])) || (+x[3] === +x[2] && (+x[2] !== +x[1] && +x[3] !== +x[4])) || (+x[2] === +x[1] && (+x[1] !== +x[0] && +x[2] !== +x[3])) || (+x[1] === +x[0] && +x[1] !== +x[2])) {
                    pws++;
                    a++;
                } else {
                    a++
                }
            } else {
                a++;
            }
        } else {
            a++;
        }
    }
    }
    console.log(pws);
    console.log(b);
}

pw();
console.timeEnd("bla");