const Details = (function () {

	function loadPerson(ID) {
		$.ajax("details/" + ID + ".html", { dataType: "text" })
			.then(function(contents) {
				$content.html(contents);
		});
	}

	function selectPerson(evt) {
		evt.preventDefault();
		evt.stopPropagation();
		evt.stopImmediatePropagation();

		const ID = $(evt.target).attr("data-person").replace(/^.*(\d+)$/,"$1");
		EVT.emit("person-selected", ID);
	}

	function init() {
		$content = $("[rel=js-details]");

		$content.on("click", "[rel=js-select-person]", selectPerson);
	}

	let $content;

	EVT.on("init", init);
	EVT.on("person-selected", loadPerson);

	return {};

})();
