// genel değişkenler
var durum=false, opt="", sonuc=0;

//Nesnelerin Oluşturulmsı
//querySelectorAll == tüm hepsi seçildiğinde, hepsini seç demiş oluyoruz
//querySelctor == sadece bunda işlem yap
rakam = document.querySelectorAll(".rakam"); //rakamlar
islem = document.querySelector("#islem");
opr = document.querySelectorAll(".opr");
gosterge = document.querySelector("#gosterge");
btnC = document.querySelector(".btnC");
btnCE = document.querySelector(".btnCE");
esit = document.querySelector(".esit");
nokta = document.querySelector(".nokta");

//forEach ==> herhangi birine basıldığında anlamına gelir, dizi görevi görür 
rakam.forEach(function(element){
    element.onclick=function(){
        //baştaki 0 ı kaldırmak için 
        if(islem.textContent=="0" || durum){
            islem.textContent="";
        }

        //Text nesnelerini okumak gerekiyor. Bunları td içerisinde birleştirdik 
        islem.textContent += this.textContent;
        durum=false;
    }
});

opr.forEach(function(element){

    element.onclick=function(){
        durum=true; // durum hatalımı basılıp basılmadığının kontrolunu sağlıyor,

        opr = this.textContent;

        //gösterge paneline yazdırma
        gosterge.textContent = gosterge.textContent + " " + islem.textContent + " " + opr;

        //sonuc yazdırma işlemi
        switch(opt){
            //switch case ==> işlem bir defa döner ve benim dönmesini istediğimi döndür.


            case "+": islem.textContent= (sonuc + Number(islem.textContent));break;
            case "-": islem.textContent= (sonuc - Number(islem.textContent));break;
            case "/": islem.textContent= (sonuc / Number(islem.textContent));break;
            case "*": islem.textContent= (sonuc * Number(islem.textContent));break;
            default:break;//default swich i tamamen bitirir break kırar
        }
        sonuc= Number(islem.textContent);
        opt = opr;
    }

})

btnC.onclick=function(){
    islem.textContent="0";
}

btnCE.onclick=function(){
    islem.textContent="0"
    gosterge.textContent="";
    sonuc=0;
    opt="";
}

esit.onclick=function(){
    gosterge.textContent="";
    durum=true;
    switch(opt){
            //switch case ==> işlem bir defa döner ve benim dönmesini istediğimi döndür.


            case "+": islem.textContent= (sonuc + Number(islem.textContent));break;
            case "-": islem.textContent= (sonuc - Number(islem.textContent));break;
            case "/": islem.textContent= (sonuc / Number(islem.textContent));break;
            case "*": islem.textContent= (sonuc * Number(islem.textContent));break;
            default:break;//default swich i tamamen bitirir break kırar
    }

    sonuc=Number(islem.textContent);
    islem.textContent=sonuc;
    sonuc=0;
    opt="";
}

nokta.onclick=function(){
    if(!durum && !islem.textContent.includes(".")){
        islem.textContent+=".";
    }
    else if(durum){//durum hatalıysa 0 yap
        islem.textContent="0";
    }

    durum=false;
}