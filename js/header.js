// Task #1
// put event handlers for header links here
$(document).ready(function () {
  // get modal reference
  let $modal = $("[rel='js-modal']");

  // event handlers
  $("[rel='js-controls']").on("click", "[rel*='js-']", function (evt) {
    // stop reload
    evt.preventDefault();
    evt.stopPropagation(); // Unnecessary but no harm to use all 3
    evt.stopImmediatePropagation(); // ditto

    // grab href value of clicked link
    const url = $(evt.target).attr("href");
    // ajax call
    $.ajax(url,{ dataType: "text" })
    // callback to show contents in modal
    .then( function(contents) {
      $modal.html(contents).show();
    });
  });

});
