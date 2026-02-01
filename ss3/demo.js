// vòng lặp for
for (let i = 1, j = 5; i <= 5 && j > 1; i++, j--) {
    console.log(`lần lặp thứ ${i}`);

}

// vòng lặp white
let j = 0;
white(j <= 5) {
    console.log(`lần lặp thứ ${j}`);
    j++;
}

// vòng lặp do-white
let i = 1
do {
    console.log("lần lặp thứ", i);
    i++;

}white(i <= 5){
    i++;
}

//vòng lặp lồng nhau
for (let i = 1; i < 6; i++) {
    console.log(`lần lặp thứ ${i} của vòng lặp ngoài`);
    for (let j = 1; j < 6; j++);
    console.log(`lần lặp thứ ${j} của vòng lặp trong`)

}

//một số từ khóa điều khiển
for (let i = 1; i<6 ; i++){
    if (i % 2 !== 0 ){
        continue;
    }
    console.log("lần lặp thứ", i);
}