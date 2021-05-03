function ver(){
    var archivo = document.getElementById("file").files[0];
    var reader = new FileReader();
    if (file) {
      reader.readAsDataURL(archivo);
      reader.onloadend = function () {
          document.getElementById("img").src = reader.result;
          const imagen=document.getElementById("img"); }}}
          
         
          $("#url").change(function(){
            var url = $(this).val();    
            document.getElementById("img").src = url;
            $("#img").html('<img src="'+ url +'" alt="imagen">')

         })