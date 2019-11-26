function pretraga() {
    var input = document.getElementById("textfieldPretraga");
    var filter = input.value.toLowerCase();
    var nodes = document.getElementsByClassName('target');
  
    for (i = 0; i < nodes.length; i++) {
      if (nodes[i].innerText.toLowerCase().includes(filter)) {
        nodes[i].style.display = "block";
      } else {
        nodes[i].style.display = "none";
      }
    }
  }
  
  function reset(){
    var div = document.getElementsByClassName('target');
    for(i=0;i<div.length;i++){
      div[i].style.display="block";
    }
    document.getElementById("textfieldPretraga").value = "";
  
  }