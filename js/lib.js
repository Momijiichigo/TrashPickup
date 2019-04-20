//key board array
var input_key_buffer = new Array();


document.addEventListener("keydown",function (e){
	if(!e) e = window.event; // レガシー

	input_key_buffer[e.keyCode] = true;
});

document.addEventListener("keyup",function (e){
	if(!e) e = window.event; // レガシー

	input_key_buffer[e.keyCode] = false;
});

window.onblur = function (){
	input_key_buffer.length = 0;
};

function KeyIsDown(key_code){

	if(input_key_buffer[key_code])	return true;

	return false;
}
