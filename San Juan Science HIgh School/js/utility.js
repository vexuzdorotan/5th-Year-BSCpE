function GetID(node, offset){
	var content = {};
	for(var i = 0; i < node.length - offset; i++){
		content[i] = node[i].id;
	}
	return content;
}