// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".devour-form").on("submit", function(event) {
        event.preventDefault();
      var burger_id = $(this).children(".burger_id").val();
      console.log("devour id: "+burger_id)
        
      // Send the PUT request.
      $.ajax({
        type: "PUT",
        url: "/burgers/" + burger_id
      }).then(
        function(data) {
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  });
  