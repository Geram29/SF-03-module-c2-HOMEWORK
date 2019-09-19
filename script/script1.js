$('#voted').hide();
$("#result").prop("disabled", true);

// Функция формирующая POST-запрос	
function postRequest(voteAnimal) {
	// Создаем аудио-объект
	let audio = new Audio('audio/' + voteAnimal + '.mp3');
	audio.play()
	// Создаём новый XMLHttpRequest-объект
	let xhr = new XMLHttpRequest();
	// Создаем новый URL-объект
	let urls = new URL('https://sf-pyw.mosyag.in/sse/vote/' + voteAnimal)
	// Открываем запрос
	xhr.open('POST', urls)
	// Отсылаем POST-запрос с "пустым телом"
	xhr.send();

	$("#dogs").prop("disabled", true);
	$("#cats").prop("disabled", true);
	$("#parrots").prop("disabled", true);
	$('#voted').show()
	$("#result").prop("disabled", false);
}