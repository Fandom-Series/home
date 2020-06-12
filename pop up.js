$(function(){
  
  $('#lista').on('click', function (){
    $('#subramo').css('display', 'block');
    $('.icon-plus').attr('class', 'icon-minus');
  });
  
  
  // *** Popup para visualizar el reporte
  //Para que el popup se movible
  $('#popup').draggable({
    handle: '.modal-header' //se pueda mover solo cuando estamos en el header
  });
  //Para cambiar el popup de tamaño
  $('#popup').resizable();
  
  
  // *** Menu contextual que aparece al presionar el boton derecho del mouse
  //Se oculta el menú al cargar la página
  $('#contextMenu').hide();
  
  /* Mostramos el menu al hacer click derecho con el raton*/
  $('#report-menu').bind('contextmenu', function(e){
    $('#contextMenu').css({
      'display': 'block',
         'left': e.pageX,
          'top': e.pageY
    });
    return false;
  });
  
  //Al hacer click el menu desaparecera
  $(document).click(function(e){
    if(e.button == 0){
      $('#contextMenu').css('display', 'none');
    }
  });
  
  //Al pulsar la tecla ESC el menu desaparecera.
  $(document).keydown(function(e){
    if(e.keyCode == 27){
      $('#contextMenu').css('display', 'none');
    }
  });
  
  
  // *** Código para los checkbox
  //bloque de código para agregar la clase isSelected a cualquier input de tipo checkbox
  $("input[type='checkbox']").on("click", function(){
    if(this.checked === true){
      $(this).parent().toggleClass("isSelected");
    }else{
      $(this).parent().removeClass("isSelected");
    }
  });


});
