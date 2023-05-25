function toggleCategoryDisplay(category) {
  var checkbox = document.getElementById("check-" + category);

  var grids = document.querySelectorAll('.grid');
  if(grids.length == 0) {
    // We're on the skills by time page
    //var checkBoxDiv = document.getElementById("skillCheckboxes");
    //var checkBoxes = checkBoxDiv.querySelectorAll("input");
    var elements = document.getElementsByClassName("div-skill");

    for (var i = 0; i < elements.length; i++) {
      // display the element if both of its categories are checked
      var element = elements[i];
      var categories = element.getAttribute('categories').split(' ');
      var showElement = true;
      for (var j = 0; j < categories.length; j++) {
        var category = categories[j];
        var checkbox = document.getElementById("check-" + category);
        if (!checkbox.checked) {
          showElement = false;
          break;
        }
      }
      if (showElement) {
        element.style.display = "block";
      } else {
        element.style.display = "none";
      }
    }

    return;
  }

  for (var i = 0; i < grids.length; i++) {
    var grid = grids[i];
    var masonry = Masonry.data(grid);
    var elements = masonry.getItemElements();
    for (var j = 0; j < elements.length; j++) {
      var element = elements[j];
      if (element.getAttribute('category') === category) {
        if (checkbox.checked) {
          // reveal
          element.style.display = "block";
          //masonry.reveal(element);
          masonry.layout();
        } else {
          // hide
          element.style.display = "none";
          //masonry.hide(element);
          masonry.layout();
        }
      }
    }
  }
}

//var elements = document.getElementsByClassName("div-" + category);

/*
for (var i = 0; i < elements.length; i++) {
  elements[i].style.display = "block";
  elements[i].style.margin = "";
  elements[i].style.padding = "";
}
*/

/*
  // Re-load and re-layout the grid
  var grid = document.querySelector('.grid');
  var masonry = new Masonry(grid, {
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  masonry.reloadItems();
  masonry.layout();
*/
