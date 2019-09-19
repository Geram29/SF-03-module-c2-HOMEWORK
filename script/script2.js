// создаем объект-заголовков
const header = new Headers({
    'Access-Control-Allow-Credentials': true,
    'Access-Control-Allow-Origin': '*'
})
// Создаем объект-ссылка
const url = new URL('https://sf-pyw.mosyag.in/sse/vote/stats')
// Создаем объект-событие
const ES = new EventSource(url, header)
// Реакция на ошибку сервера
ES.onerror = error => {
    ES.readyState ? $('.container').html("<h2>Server Error</h2>") : null;
}
// Считываем данные с сервера
ES.onmessage = message => {
	voteData = JSON.parse(message.data)
	procDogs =  (voteData.dogs * 100 / (voteData.dogs + voteData.cats + voteData.parrots)).toFixed();
	procCats =  (voteData.cats * 100 / (voteData.dogs + voteData.cats + voteData.parrots)).toFixed();
	procPars =  (voteData.parrots * 100 / (voteData.dogs + voteData.cats + voteData.parrots)).toFixed();
	
	console.log(`Собаки - ${procDogs}% (${voteData.dogs})\nКошки - ${procCats}% (${voteData.cats})\nПопугаи - ${procPars}% (${voteData.parrots})`);

	// Вносим считанные данные в прогресс-бары
	$("#dog-progress").width(String(procDogs) + "%").text(voteData.dogs + ' (' + procDogs + '%' +')');
	$("#cat-progress").width(String(procCats) + "%").text(voteData.cats + ' (' + procCats + '%' +')');
	$("#par-progress").width(String(procPars) + "%").text(voteData.parrots + ' (' + procPars + '%' +')');
}