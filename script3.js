function validacija(){
    var pomocna = true;
    if (document.forms[0].ime.value=="") {
        document.forms[0].ime.placeholder ="Niste uneli ime i prezime!"; 
        document.forms[0].ime.style.border = "2px solid red";
        pomocna = false;
    }
    if (document.forms[0].telefon.value=="") {
        document.forms[0].telefon.placeholder = "Niste uneli broj telefona!";
        document.forms[0].telefon.style.border = "2px solid red";
        pomocna = false;
    }
    if (isNaN(document.forms[0].telefon.value)==true) {
        document.forms[0].telefon.placeholder = "Format nije odgovarajući!";
        document.forms[0].telefon.value="";
        document.forms[0].telefon.style.border = "2px solid red";
        pomocna = false;
    }
    if (document.forms[0].email.value=="") {
        document.forms[0].email.placeholder = "Niste uneli e-mail adresu!";
        document.forms[0].email.style.border = "2px solid red";
        pomocna = false;
    }
    if(document.forms[0].email.value.indexOf("@") == -1){
        document.forms[0].email.placeholder="Format nije odgovarajući!";
        document.forms[0].email.value = "";
        document.forms[0].email.style.border = "2px solid red";
        pomocna = false;
    }
    if(document.forms[1].komentar.value==""){
        document.forms[1].komentar.placeholder="Niste uneli komentar";
        document.forms[1].komentar.value = "";
        document.forms[1].komentar.style.border = "2px solid red";
        pomocna = false;
    }
    if(document.getElementById("checkbox").checked==false){
        document.getElementById("greska").style.display="inline";
        pomocna = false;
    }
    if (pomocna == true) {
        reset();
    }

    function reset() {
        document.forms[0].ime.value = '';
        document.forms[0].telefon.value = '';
        document.forms[0].email.value = '';
        document.forms[1].komentar.value = '';

        document.forms[0].ime.placeholder='Ime i prezime';
        document.forms[0].telefon.placeholder='Telefon';
        document.forms[0].email.placeholder='E-mail';
        document.forms[1].komentar.placeholder='Komentar';

        document.getElementById("checkbox").checked=false;
        document.forms[0].ime.style.border = "black";
        document.forms[0].telefon.style.border = "black";
        document.forms[0].email.style.border = "black";
        document.forms[1].komentar.style.border = "black";
        document.getElementById("greska").style.display="none";
}
}