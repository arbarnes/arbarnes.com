function copyText(){
  const email = "hi@arbarnes.com";
  var textCopy = document.getElementsByClassName("copy");
  textCopy.value = email;    
  document.execCommand("copy");
  }

