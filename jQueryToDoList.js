$(document).ready(function () {
  // Adds new list item to <ul>
  const addListItem = function(e) {
    // Check for Enter or left mouse click pressed
    if(e.key === "Enter" || e.button === 0) {
      e.preventDefault();
      const text = $('input').val();

      // Get a reference to the input element
      let newLiElem = $('<li>');
      let newSpanElem = $('<span>').text(text);
      let newAElem = $('<a>', {
        class: 'delete',
        text: 'Delete'
      });

      // Append the new <li> to the to-do list
      newLiElem.append(newSpanElem, newAElem);
      
      // Append the new <li> to the <ul> element
      $('.today-list').append(newLiElem);

      // Clear the <input> element after item is added
      $('input').val('');
    }
  };

  // Add listener for add
  $('.add-item').click(function(e) {
    addListItem(e);
  })

  // Add listener for keydown pressed
  $('#new-todo').on('keydown', function(e) {
    console.log(`keydown`);
    addListItem(e);
  });

  // Add listener for to <ul> to toggle the class to "done" in the <li>
  $('.today-list').on('click', 'li', function(e) { 
    console.log($(e.target).html());
    // if delete is click remove the <li> 
    if($(e.target).attr('class') === 'delete') {
      $(this).fadeOut('slow', function() {
        $(this).remove();  
      });
    // otherwise, toggle 'done'
    } else {
      $(this).toggleClass('done');
    }
  });
});