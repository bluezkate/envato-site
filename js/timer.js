window.onload = function() // дожидаемся загрузки страницы
{
     initializeTimer(); // вызываем функцию инициализации таймера
}


function initializeTimer() {
	var endDate = new Date(2018,7,20); // получаем дату истечения таймера
	var currentDate = new Date(); // получаем текущую дату
	console.log(currentDate);
	var seconds = (endDate-currentDate) / 1000; // определяем количество секунд до истечения таймера
	if (seconds > 0) {
		var minutes = seconds/60; // определяем количество минут до истечения таймера
		var hours = minutes/60; // определяем количество часов до истечения таймера
		var days = hours/24;
		seconds = Math.floor((minutes - Math.floor(minutes)) * 60); // подсчитываем кол-во оставшихся секунд в текущей минуте
		if (seconds < 10) {
			seconds = '0' + seconds;
		}
		minutes = (hours - Math.floor(hours)) * 60; // подсчитываем кол-во оставшихся минут в текущем часе
		hours = (days - Math.floor(days)) * 24; // целое количество часов до истечения таймера
		minutes = Math.floor(minutes); // округляем до целого кол-во оставшихся минут в текущем часе
		hours = Math.floor(hours);
		days = Math.floor(days);
		
		setTimePage(days,hours,minutes,seconds); // выставляем начальные значения таймера
		
		function secOut() {
		  if (seconds == 0) { // если секунду закончились то
			  if (minutes == 0) { // если минуты закончились то
				  if (hours == 0) { // если часы закончились то
					  showMessage(timerId); // выводим сообщение об окончании отсчета
				  }
				  else {
					  hours--; // уменьшаем кол-во часов
					  minutes = 59; // обновляем минуты 
					  seconds = 59; // обновляем секунды
				  }
			  }
			  else {
				  minutes--; // уменьшаем кол-во минут
				  seconds = 59; // обновляем секунды
			  }
		  } else {
			  seconds--; // уменьшаем кол-во секунд
		  }
		  setTimePage(days,hours,minutes,seconds); // обновляем значения таймера на странице
		}
		timerId = setInterval(secOut, 1000) // устанавливаем вызов функции через каждую секунду
	}
	else {
		document.querySelector('.welcome__timer').innerHTML('<p>You missed your chance! The event already happened!</p>');
	}
}

function setTimePage(d,h,m,s) { // функция выставления таймера на странице
	var element = document.querySelector('.welcome__timer');
	element.innerHTML = `
		
			<div class="timer__element"> <span class="timer__numbers">${d}</span> <br> <span class="timer__letters">Days</span> </div>
			<br>
			<div class="timer__element"><span class="timer__numbers">${h}</span> <br> <span class="timer__letters">Hours</span></div>
			<br>
			<div class="timer__element"><span class="timer__numbers">${m}</span> <br> <span class="timer__letters">Minutes</span></div>
			<br>
			<div class="timer__element"><span class="timer__numbers">${s}</span><br> <span class="timer__letters">Seconds</span></div>
		
	`; // выставляем новые значения таймеру на странице
}

function showMessage(timerId) { // функция, вызываемая по истчению времени
	alert("Время истекло!");
	clearInterval(timerId); // останавливаем вызов функции через каждую секунду
}


