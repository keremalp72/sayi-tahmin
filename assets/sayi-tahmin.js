let secilenSayi = [];
let sayiSecim;
let randomSayi = Math.floor(Math.random() * 20) + 1;
let cevapHakki = 5;

function sayiBul() {

  for (let i = 0; i < cevapHakki; i++) {

    sayiSecim = Number(prompt("1-20 arası bir sayı tahmin edin"));

    secilenSayi.push(sayiSecim);

    if (sayiSecim > randomSayi ) {

      console.log("daha küçük bir sayı deneyin.");
      
    }
     else if (sayiSecim < randomSayi) {  

      console.log("daha büyük bir sayı deneyin.");
      
    }else if (sayiSecim == randomSayi){
      console.log("TEBRİKLER.");
      return;
    }
    if(i === cevapHakki - 1){
      console.log(`5 tane hatalı seçim yaptınız. Doğru cevap ${randomSayi} olacaktı :)`)
      return;
    }
    
  }
}sayiBul();
