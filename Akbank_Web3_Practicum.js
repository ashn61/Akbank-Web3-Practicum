function oddishOrEvenish(a){
    let toplam= a.toString()
    let sonuc=0;
    for(let i=0; i<toplam.length;i++){
        sonuc=sonuc+parseInt(toplam[i]);
    }
    if (sonuc % 2 == 0 ){
        return "Even"
    }
    else
    return "Odd"

}


console.log(oddishOrEvenish(43));
console.log(oddishOrEvenish(373));
console.log(oddishOrEvenish(4433));