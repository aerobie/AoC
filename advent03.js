$.ajax({
    url: "cable1.csv",
    async: false,
    success: function (csv) {
        cable1 = $.csv.toArray(csv);
    },
    dataType: "text",
    complete: function () {
        $.ajax({
            url: "cable2.csv",
            async: false,
            success: function (csv) {
                cable2 = $.csv.toArray(csv);
            },
            dataType: "text",
            complete: function () {
                cable(cable1, cable2);
            }
        });
    }
});

function cable(cable1, cable2) {
    console.time("bla");
    let cords1 = [{"x": 0,"y": 0}];
    let cords2 = [{"x": 0,"y": 0}];
    let x1 = 0;let y1 = 0;
    for (x = 0,len=cable1.length;x<len;x++) {
        let value = cable1[x];
        switch (value.slice(0, 1)) {
            case "R":
                x1 += +value.slice(1);
                break;
            case "L":
                x1 -= +value.slice(1);
                break;
            case "U":
                y1 += +value.slice(1);
                break;
            case "D":
                y1 -= +value.slice(1);
                break;
        }
        cords1.push({"x": x1,"y": y1})
    }
    x1 = 0;y1 = 0;
    for (x = 0,len=cable2.length;x<len;x++) {
        let value =cable2[x]
        switch (value.slice(0, 1)) {
            case "R":
                x1 += +value.slice(1);
                break;
            case "L":
                x1 -= +value.slice(1);
                break;
            case "U":
                y1 += +value.slice(1);
                break;
            case "D":
                y1 -= +value.slice(1);
                break;
        }
        cords2.push({"x": x1,"y": y1});
    }
    let arr = [];let arr2 = [];let somex1 = 0;let somey1 = 0;let somex2 = 0;let somey2 = 0;c1len=cords1.length-1;c2len=cords2.length-1;
    for (i = 0;i<c1len;i++) {
        x1 = cords1[i].x;y1 = cords1[i].y;
        ++i
        x3 = cords1[i].x;y3 = cords1[i].y;
        --i;
        somex2 = 0;somey2 = 0;
        for (j = 0; j<c2len;j++) {
            x2 = cords2[j].x;y2 = cords2[j].y;
            ++j;
            x4 = cords2[j].x;y4 = cords2[j].y;
            --j;
            let res = lineIntersect(x1, y1, x3, y3, x2, y2, x4, y4);
            if (res) {
                arr.push(Math.abs(res.x1) + Math.abs(res.y1));
                arr2.push(((somex1 + Math.abs(res.x1 - x1) + somey1 + Math.abs(res.y1 - y1)) + (somex2 + Math.abs(res.x1 - x2) + somey2 + Math.abs(res.y1 - y2))));
            }
            somex2 += Math.abs(x2 - x4);somey2 += Math.abs(y2 - y4);
        }
        somex1 += Math.abs(x1 - x3);somey1 += Math.abs(y1 - y3);
    }
    console.log(Math.min(...arr2));console.log(Math.min(...arr));
}
function lineIntersect(a, b, c, d, p, q, r, s) {
    let x, g, l;
    x = (c - a) * (s - q) - (r - p) * (d - b);
    if (x === 0) {
        return false;
    } else {
        l = ((s - q) * (r - a) + (p - r) * (s - b)) / x;
        g = ((b - d) * (r - a) + (c - a) * (s - b)) / x;
        if ((0 < g && g < 1) && (0 < l && l < 1)) {
            return {
                "x1": (a + (l * (c - a))),
                "y1": (b + (l * (d - b))),
                "lambda": l
            }
        };
    }
}
console.timeEnd("bla");