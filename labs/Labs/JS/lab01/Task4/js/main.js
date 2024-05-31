let box="";
for (let i = 0; i < 6; i++) {
   
    box+=`<h${i+1}>This is header number ${i+1}</h${i}>`
}
document.write(box);