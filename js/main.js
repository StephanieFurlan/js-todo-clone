$(document).ready(function() {

   // to do list
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

   // to-do template
   var source = document.getElementById("entry-template").innerHTML;
   var template = Handlebars.compile(source);

   //display todo's
   for(var i = 0; i < lista.length; i++) {
      var html = template(lista[i]);
      $("#to-do_list").append(html);
   }

   // delete list item on icon click
   $(document).on("click", ".delete", function() {
      $(this).parent().remove();
   });

   // add input todo
   $('#input_to-do').keypress(function(e) {
    if (e.keyCode == '13') {
      var todo = {
         text: $(this).val(),
         isChecked: false
      };
      //add and display added todo
      lista.push(todo);
      var html = template(todo);
      $("#to-do_list").append(html);

      // delete input value
      $(this).val("");
      }
   });

   //change to do chechbox isChecked property in list on click
   $(document).on("change", ".checkbox", function() {
      var index = $(this).parent().parent().index();
      var todoItem = lista[index];
      todoItem.isChecked = !todoItem.isChecked;
   })

});
