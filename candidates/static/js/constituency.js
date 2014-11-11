/* Javascript for the constituency page, dealing with:
   - Popping up the source attribution boxes
   - Hiding or revealing the the new candidate form
*/

$(function() {

  /* If Javascript's enabled, hide the source-confirmation
     boxes and the add new candidate form. */
  $('.source-confirmation').hide();
  $('.candidates__new').hide();

  /* Set up the hide / reveal for the add new candidate form */
  $('.show-new-candidate-form').on('click', function(){
    $('.candidates__new').slideDown(function(){
      $('.candidates__new input:text').eq(0).focus();
    });
  });
  $('.hide-new-candidate-form').on('click', function(){
    $('.candidates__new').slideUp();
  });

  /* Handle showing/hiding the source confirmation box */
  $('.js-toggle-source-confirmation').on('click', function(){
    var $confirmation = $(this).parents('li').children('.source-confirmation');
    if($confirmation.is(':visible')){
      $confirmation.hide();
    } else {
      $confirmation.show().find('input:text').focus();
    }
  })
});
