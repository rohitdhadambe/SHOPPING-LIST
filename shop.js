 document.addEventListener("DOMContentLoaded", function() {
  const addButton = document.querySelector('.button-o');
  const inputField = document.querySelector('input[type="text"]');
  const itemList = document.querySelector('.boxes');
  const filterInput = document.querySelector('.Filter');
  const clearButton = document.querySelector('.clear');

  function addItem() {
    const newItemText = inputField.value.trim();
    const boxes = document.querySelectorAll('.box');
    
    let n = boxes.length;                                           //ADDITIONAL FEATURE
    for (let i = 0; i < n; i++) {
      const text = boxes[i].textContent.trim();

      console.log(newItemText);
      console.log( text);

      
      if (text == newItemText) {                                       
        alert("ELEMENT ALREADY PRESENT IN THE SHOPPING LIST...!");                      
        return;                                                    //ADDITIONAL FEATURE
      }
    }
 

    if (newItemText === '') {
      alert(" NO ELEMENT TO ADD...!"); 
      return;
    }
    
  
    if (newItemText != '') {

      const newItem = document.createElement('div');
      newItem.classList.add('box');
      newItem.innerHTML = `${newItemText}<div class="delete"><button class="Delete"><i class="fa-solid fa-square-xmark"></i></button></div>`;
      itemList.appendChild(newItem);
      inputField.value = '';
    }
    
  }

  function filterItems() {
    const filterText = filterInput.value.toLowerCase();
    const items = document.querySelectorAll('.box');
    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(filterText) ? 'flex' : 'none';
    });
  }

  addButton.addEventListener('click', addItem);

  filterInput.addEventListener('input', filterItems);

  itemList.addEventListener('click', function(event) {
    if (event.target.classList.contains('Delete')  ) {
      const item = event.target.closest('.box');
      item.remove();
    }
  });
  
  clearButton.addEventListener('click', function() {
    itemList.innerHTML = '';
  });
});


