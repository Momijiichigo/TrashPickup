//key board array
var input_key_buffer = new Array();


document.addEventListener("keydown",function (e){
	input_key_buffer[e.key] = true;
});

document.addEventListener("keyup",function (e){
	input_key_buffer[e.key] = false;
});

window.onblur = function (){
	input_key_buffer.length = 0;
};

function KeyIsDown(key){

	if(input_key_buffer[key])	return true;

	return false;
}
