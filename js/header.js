// Task #3 Refactor into modules
const Header = (function () {

  function headerLinkClicks(evt) {
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
  }

  function init() {
    // get modal reference
    $modal = $("[rel='js-modal']");

    // event handlers
    $("[rel='js-controls']").on("click", "[rel*='js-']", headerLinkClicks);
  }

  let $modal;

  return {
    init: init
  };

})();

$(document).ready(Header.init);
