//soal no 2 A IF-ELSE
/*function pertemuanHariEsok(hari) {
    // Kode yang ingin dieksekusi
    if (hari == 'senin') {
        alert('selasa');
    } else if(hari == 'selasa'){
        alert(`rabu`);
    } else if(hari == 'rabu'){
        alert(`kamis`);
    } else if(hari == 'kamis'){
        alert(`jumat`);
    } else if(hari == 'jumat'){
        alert(`sabtu`);
    } else if(hari == 'sabtu'){
        alert(`minggu`);
    } else if(hari == 'minggu'){
        alert(`senin`);
    }else{
        alert('lupa hari apa')
    }
}
let hariIni = prompt('besok hari apa? kalau hari ini hari');
pertemuanHariEsok(hariIni);*/

//soal no 2 Switch-Case
/*function pertemuanHariEsok(hari) {
    switch (hari) {
        case 'senin':
            alert('selasa');
            break;
        case 'selasa':
            alert('rabu');
            break;
        case 'rabu':
            alert('kamis');
            break;
        case 'kamis':
            alert('jumat');
            break;
        case 'jumat':
            alert('sabtu');
            break;
         case 'sabtu':
            alert('minggu');
            break;
         case 'minggu':
            alert('senin');
            break;
        default:
            alert('lupa hari apa')
    }
}
let hariIni = prompt('besok hari apa? kalau hari ini hari');
pertemuanHariEsok(hariIni);*/


//soal no 2 B

/*function deretGenap(genap) {
    let bilangan = belilanganGenap;
    for (genap = 0; genap <= bilangan; genap= genap+2) {
        alert(genap)
    }
}
let belilanganGenap = prompt('Masukan Nilai Input');
deretGenap(belilanganGenap);*/


//soal no 2 C
/*function deretGanjil(ganjil) {
    let bilangan = belilanganGanjil;
    for (ganjil = 1; ganjil <= bilangan; ganjil= ganjil+2) {
        alert(ganjil)
    }
}
let belilanganGanjil = prompt('Masukan Nilai Input');
deretGanjil(belilanganGanjil);*/


//Soal no 2 D

function deretPrima( prima ) {
    var max = Math.sqrt(prima);
    for(i = 2; i <= max; i++ ) {
    if( prima % i == 0 )
    return false;
    }
    return true;
    }
     
    for(  prima = 2; prima <= 18; prima++ ) {
    if( deretPrima(prima) ) {
    document.write( prima + '<BR>' );
    }
    }