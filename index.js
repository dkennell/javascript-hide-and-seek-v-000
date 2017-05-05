function getFirstSelector(selector){
	return document.querySelector(selector)
}

function nestedTarget() {
	return document.querySelector("#nested .target")
}

function deepestChild() {
	var currentNode = document.getElementById('grand-node')
	var childNode = currentNode.children[0]

	while(childNode != null){
		currentNode = childNode
		childNode = currentNode.children[0]
	}

	return currentNode
}

function increaseRankBy(n) {
	var ranked_lists = document.querySelectorAll(".ranked-list")
	ranked_lists.forEach(function(list){

		Array.prototype.forEach.call(list.children, function(list_element) {
			var rank = list_element.textContent
			var new_rank = parseInt(rank) + n
			list_element.textContent = new_rank
		});
	})

	return ranked_lists
}

// increases the ranks in all of the .ranked-lists by n. (You might need to make use of parseInt()