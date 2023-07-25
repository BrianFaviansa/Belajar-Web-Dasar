const nama = "Brian Faviansa P.D";
let usia = 18;

let biodata = document.getElementById("biodata");

function genBio() {
    let generasi;

    if (usia > 0 && usia <= 5) {
        generasi = "generasi balita";
    } 
    else if (usia > 5 && usia <= 10) {
        generasi = "generasi anak-anak";
    } 
    else if (usia > 10 && usia <= 17) {
        generasi = "generasi remaja";
    } 
    else if (usia > 17 && usia <= 30) {
        generasi = "generasi dewasa";
    } 
    else if (usia > 30) {
        generasi = "generasi tua";
    } 
    else {
        generasi = "generasi ghaib";
    }
    
    return biodata.innerHTML = generasi

}

console.log(`nama saya adalah ${nama} dan usia saya adalah ${usia} tahun`);
genBio();































