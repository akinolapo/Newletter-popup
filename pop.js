$(document).ready(function(){
    
   function showModal(){
       $('#modal-container').show();
       $('html body').css('overflow', 'hidden');
   } 
    
    function closeModal(){
        $('#modal-container').hide();
    }
    
    setTimeout(showModal, 3000);
    
    $('#close').click(function(){
        closeModal();
    })
    
});