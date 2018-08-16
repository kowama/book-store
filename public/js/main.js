$("#editBookModal").on("show.bs.modal", function(event) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this);
  modal.find("#editTitle").val(button.data("title"));
  modal.find("#editAuthor").val(button.data("author"));
  modal.find("#editCategory").val(button.data("category"));
  modal.find("#editEditor").val(button.data("editor"));
  modal.find("#editDescription").val(button.data("description"));
  modal.find("#editPublishedAt").val(button.data("publishedat"));
  modal.find("#editQuantity").val(Number(button.data("quantity")));
  modal.find("#editPrice").val(Number(button.data("price")));
  modal.find("#editBook").attr("action", button.data("action"));
  console.log(Number(button.data("quantity")));
});

//
$(function() {
  $('[data-toggle="tooltip"]').tooltip({
    boundary: "window"
  });
});
