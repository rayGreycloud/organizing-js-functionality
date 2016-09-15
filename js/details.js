// Task #3 - Refactor into module

const Details = (function () {

	function loadPerson(evt) {
		const ID = $(evt.target).attr("rel").replace(/^.*(\d+)$/,"$1");
		$.ajax("details/" + ID + ".html", { dataType: "text" })
			.then(function(contents) {
				$content.html(contents);
		});
	}

	function init() {
		$items = $("[rel=js-carousel] > [rel=js-content] > [rel=js-items]");
		$content = $("[rel=js-details]");
		
		$items.on("click", "[rel*='js-item-']", loadPerson);
	}

	let $items, $content;

	return {
    init: init
  };

})();

$(document).ready(Details.init);
