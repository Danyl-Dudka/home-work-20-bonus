// Number 3 
let digit = 88;
let i3 = 1;
let doubleI3 = 1;
while (i3 <= 100) {
    doubleI3 = i3 * i3;
    if (doubleI3 <= digit) {
        document.write(i3 + ", ");
    }
    i3++;
}
document.write("<br>")