$(document).ready(function() {

   var source = document.getElementById("entry-template").innerHTML;
   var template = Handlebars.compile(source);


   var lista = [
      {
         text: "Prepare la cena",
         isChecked: true
      },
      {
         text: "Fare la spesa",
         isChecked: false
      },
      {
         text: "Lavare i piatti",
         isChecked: false
      },
      {
         text: "Revisione",
         isChecked: true
      },
      {
         text: "Riordinare camera",
         isChecked: false
      },

   ];

   for(var i = 0; i < lista.length; i++) {
      var html = template(lista[i]);
      $("#to-do_list").append(html);
   }




});
