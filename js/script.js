function item() {
  let listCollection = $('#list');
  let listItem = $('<li></li>');

  let input = $('#input');
  if (input.val() === '') {
    return alert('You must write something');
  }

  // Add list item
  listItem.append(input.val());
  listCollection.append(listItem);

  // Cross out list item
  function crossOutItem() {
    listItem.toggleClass('strike');
  }

  listItem.on('dblclick', crossOutItem);

  // Delete list item
  let deleteBtn = $('<deleteBtn></deleteBtn>');
  deleteBtn.append(document.createTextNode('X'));
  listItem.append(deleteBtn);

  function deleteItem() {
    // listItem.addClass('delete');
    listItem.remove();
  }

  deleteBtn.on('click', deleteItem);

  // Change order of list items
  $('#list').sortable();
}
