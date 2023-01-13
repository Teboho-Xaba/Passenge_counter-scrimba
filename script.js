// initialize count
// listen for button clicks
// increase/increment the count when the button is clicked
// change the h2 element/count-id to reflect the count

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("counter");

let count = 0;

function increment(){
    count++;
    countEl.textContent = count
    console.log(count);
}

increment();

function save(){
    let countstr  = count + " - " 
    saveEl.textContent += countstr
    countEl.textContent = 0
    count = 0
}

save()



