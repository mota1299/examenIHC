const searchForm = document.querySelector("#search-form");
const searchFormInput = searchForm.querySelector("input"); // <=> document.querySelector("#search-form input");
const info = document.querySelector(".info");

// The speech recognition interface lives on the browser’s window object
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined

if(SpeechRecognition) {
  console.log("Your Browser supports speech Recognition");
  
  const recognition = new SpeechRecognition();
  recognition.continuous = true;
  // recognition.lang = "en-US";

  searchForm.insertAdjacentHTML("beforeend", '<button type="button"  class="btn btn-outline-dark" data-mdb-ripple-color="dark"> <i class="fas fa-microphone"></i></button>');
  searchFormInput.style.paddingRight = "50px";

  const micBtn = searchForm.querySelector("button");
  const micIcon = micBtn.firstElementChild;

  micBtn.addEventListener("click", micBtnClick);
  function micBtnClick() {
    if(micIcon.classList.contains("fa-microphone")) { // Start Voice Recognition
      recognition.start(); // First time you have to allow access to mic!
    }
    else {
      recognition.stop();
    }
  }

  recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
  function startSpeechRecognition() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    searchFormInput.focus();
    console.log("Voice activated, SPEAK");
  }

  recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
  function endSpeechRecognition() {
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    searchFormInput.focus();
    console.log("Speech recognition service disconnected");
  }

  recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
  function resultOfSpeechRecognition(event) {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    
    if(transcript.toLowerCase().trim()==="detener grabación") {
      recognition.stop();
    }
    if(transcript.toLowerCase().trim()==="ayuda del sitio") {
      window.open("ayuda.html" , "ventana1" , "width=1920,height=1080,scrollbars=NO")
    }
    
    if(transcript.toLowerCase().trim()==="salir del sitio") {
     //window.close();
     
      var mensaje;
      var opcion = confirm("Para salir dar clic en aceptar");
     
      if (opcion == true) {
         mensaje = "Has clickado OK";
         
         window.close();     //window.close();
         recognition.stop();
    } else {
        mensaje = "Has clickado Cancelar";
    }
    document.getElementById("ejemplo").innerHTML = mensaje;
  }
    else {
      
      if(transcript.toLowerCase().trim()==="entra por derecha") {
        var t1 = just.animate({
          targets: "#img",
          duration: 1300,

          web: {
             
              x: [400, 0]
             
          }
       });
       
       t1.play();
      }
      if(transcript.toLowerCase().trim()==="desvanecete") {
        var t1 = just.animate({
          targets: "#img",
          duration: 3300,

              web: {
                 opacity: [1, 0]}
                
                }
        );
           t1.play();
          
       
       
       
       just.tools.player(t1);
      }
      if(transcript.toLowerCase().trim()==="encoger") {
        var t1 = just.animate({
          targets: "#img",
          duration: 3300,

              web: {
                transform: [
                  { offset: 0.9, value: "scale(.5, .5)" },
                  { offset: 0.9, value: "scale(.10, .10)" },
                  { offset: 0.9, value: "scale(.30, .30)" },
                  { offset: 0.8, value: "scale(.50, .50)" },
                  { offset: 0.7, value: "scale(.70, .70)" },
                  { offset: 0.6, value: "scale(.90, .90)" },
                  { offset: 0.5, value: "scale(1.0, 1.0)" },
                  { offset: 0, value: "scale(1, 1)" }
               ]
                }
              });
              
           t1.play();
          
       
       
       
       just.tools.player(t1);
      }
      if(transcript.toLowerCase().trim()==="crece") {
        var t1 = just.animate({
          targets: "#img",
          duration: 7300,

              web: {
                transform: [
                  { offset: 0, value: "scale(1, 1)" },
                  { offset: 0.1, value: "scale(2, 2)" },
                  { offset: 0.2, value: "scale(3, 3)" },
                  { offset: 0.3, value: "scale(4, 4)" },
                  { offset: 0.4, value: "scale(5, 5)" },
                  { offset: 0.5, value: "scale(1, 1)" },
                  
               ]
                }
              });
              
           t1.play();
       just.tools.player(t1);
      }
      if(transcript.toLowerCase().trim()==="estirar") {
        var t1 = just.animate({
          targets: "#img",
          duration: 7300,

              web: {
                transform: [
                  { offset: 0, value: "scale(1, 1)" },
                  { offset: 0.1, value: "scale(1, 2)" },
                  { offset: 0.2, value: "scale(1, 3)" },
                  { offset: 0.3, value: "scale(1, 4)" },
                  { offset: 0.4, value: "scale(1, 5)" },
                  { offset: 0.5, value: "scale(1, 1)" },
                  
               ]
                }
              });
              
           t1.play();
       just.tools.player(t1);
      }
      //
      if(transcript.toLowerCase().trim()==="entra por debajo") {
        var t1 = just.animate({
          targets: "#img",
          duration: 2300,

          web: {
            opacity: [0, 1],
            transform: ["translateY(100px)", "translateY(0)"]
         }
              });
              
           t1.play();
       just.tools.player(t1);
      }
      
      //
      if(transcript.toLowerCase().trim()==="girar") {
        var t1 = just.animate({
          targets: "#img",
          duration: 2300,

          
            web: {
              rotateZ: [-400, 0]
           
         }
              });
              
           t1.play();
       just.tools.player(t1);
      }
      if(transcript.toLowerCase().trim()==="revolver") {
        var t1 = just.animate({
          targets: "#img",
          duration: 2300,

          
            web: {
              rotateX: [50,1800],
              rotateY: [50,1800],
           
         }
              });
              
           t1.play();
       just.tools.player(t1);
      }
      if(transcript.toLowerCase().trim()==="tamaños") {
        var t1 = just.animate({
          targets: "#img",
          duration: 2300,          
            web: {
              transform: [
                { offset: 1, value: "scale(.10, .10)" },
                { offset: 0.9, value: "scale(1, 1)" },
                { offset: 0.8, value: "scale(.20, .20)" },
                { offset: 0.7, value: "scale(.90, .90)" },
                { offset: 0.6, value: "scale(.30, .30)" },
                { offset: 0.5, value: "scale(.80, .80)" },
                { offset: 0.4, value: "scale(.40, .40)" },
                { offset: 0.3, value: "scale(.70, .70)" },
                { offset: 0.2, value: "scale(.50, .50)" },
                { offset: 0.1, value: "scale(.60, .60)" },
                { offset: 0, value: "scale(1, 1)" }
             ]
         }
              });
              
           t1.play();
       just.tools.player(t1);
      }
      if(transcript.toLowerCase().trim()==="rotar") {
        var t1 = just.animate({
          targets: "#img",
          duration: 2300,          
            web: {
              opacity: [0,1,0,1],
              rotateX: [50,1800]
         }
              });
              
           t1.play();
       just.tools.player(t1);
      }



     
     
      else if(transcript.toLowerCase().trim()==="reiniciar") {
        searchFormInput.value = "";
      }
      else {
        searchFormInput.value = transcript;
      }
    }
    // searchFormInput.value = transcript;
    // searchFormInput.focus();
    // setTimeout(() => {
    //   searchForm.submit();
    // }, 500);
  }
  
//  info.textContent = 'Comandos de voz: "detener grabación", "reiniciar", "busca"';
  
}
else {
  console.log("Your Browser does not support speech Recognition");
  info.textContent = "Your Browser does not support Speech Recognition";
}
////
