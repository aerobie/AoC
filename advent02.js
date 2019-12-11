console.time("bla");

function computer() {
    let x = 0;
    let y = 0;
    while (x < 100) {
        while( y < 100) {
            let opcodeList = [1, x, y, 3, 1, 1, 2, 3, 1, 3, 4, 3, 1, 5, 0, 3, 2, 1, 9, 19, 1, 13, 19, 23, 2, 23, 9, 27, 1, 6, 27, 31, 2, 10, 31, 35, 1, 6, 35, 39, 2, 9, 39, 43, 1, 5, 43, 47, 2, 47, 13, 51, 2, 51, 10, 55, 1, 55, 5, 59, 1, 59, 9, 63, 1, 63, 9, 67, 2, 6, 67, 71, 1, 5, 71, 75, 1, 75, 6, 79, 1, 6, 79, 83, 1, 83, 9, 87, 2, 87, 10, 91, 2, 91, 10, 95, 1, 95, 5, 99, 1, 99, 13, 103, 2, 103, 9, 107, 1, 6, 107, 111, 1, 111, 5, 115, 1, 115, 2, 119, 1, 5, 119, 0, 99, 2, 0, 14, 0];
            thing = 0;
            for (i = 0; opcodeList[thing] !== 99; i = thing) {
                let opcode = opcodeList[thing];
                switch (opcode) {
                    case 1:
                        let first1 = opcodeList[opcodeList[thing + 1]];
                        let second1 = opcodeList[opcodeList[thing + 2]];
                        let third1 = opcodeList[thing + 3];
                        opcodeList[third1] = (first1 + second1);
                        thing += 4;
                        break;
                    case 2:
                        let first2 = opcodeList[opcodeList[thing + 1]];
                        let second2 = opcodeList[opcodeList[thing + 2]];
                        let third2 = opcodeList[thing + 3];
                        opcodeList[third2] = (first2 * second2);
                        thing += 4;
                        break;
                    case 99:
                        thing = 99;
                        break;

                    default:
                        console.log("fault");
                        break;
                }
            }
            if (opcodeList[0] === 19690720) {
                x = 100;
                y = 100;
            }
            y++;
        }
        x++;
    }
}
computer();
console.timeEnd("bla");