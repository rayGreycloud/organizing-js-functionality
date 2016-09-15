// Task #3 - Refactor into module

const Details = (function () {

	function loadPerson(ID) {
		$.ajax("details/" + ID + ".html", { dataType: "text" })
			.then(function(contents) {
				$content.html(contents);
		});
	}

	function init() {
		$content = $("[rel=js-details]");
	}

	let $content;

	return {
    init: init,
		loadPerson: loadPerson
  };

})();

$(document).ready(Details.init);
