// Number 2
let priceUah = 42;
let summaryUah = 1;
let amountUsd = 10;
while (amountUsd <= 100) {
    summaryUah = amountUsd * priceUah;
    document.write(summaryUah + "UAH" + ", ");
    amountUsd = amountUsd + 10;
}
document.write("<br>")