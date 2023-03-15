let xhttp = new XMLHttpRequest();

// открываем запрос и указываем куда посылать
xhttp.open('post', 'back.php', true);

// конфигурирование типа данных запроса
xhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

// добавляем данные и посылаем на сервер
xhttp.send('name = vasya');

// отслеживаем когда придет ответ от сервера
xhttp.onreadystatechange = function() {
// проверяем состояние ответа и статус
   if(this.readyState == 4 && this.status == 200) {
      console.log(this);
   }
}
