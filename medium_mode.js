"use strict"

var textOfTask = document.querySelector(".textOfTask")

var selectedVariant
var insure = 0


var label_text = function(l1, l2, l3){
    $(".label_1").text(l1)
    $(".label_2").text(l2)
    $(".label_3").text(l3)
 }

var radio_value = function(v1, v2, v3){
	$("#radio1").attr('value', v1);
    $("#radio2").attr('value', v2);
    $("#radio3").attr('value', v3);
}



var taskCard_1 = {
	number: '1/10',
	image: 'img/medium/bugatti_EB_110.jpg',
	text: 'Установил рекорд скорости для машин на метане(344,7 км/ч, установлен в 1994 году) и при движении по льду(296,34 км/ч, 1995 год)',
	answer_1: 'Bugatti EB 110',
	answer_2: 'Lamborghini Diablo',
	answer_3: 'Vector W8 Twin Turbo',
	radioV_1: '1',
	radioV_2: '0',
	radioV_3: '0'
}

var taskCard_2 = {
	number: '2/10',
	image: 'img/medium/Lamborghini_Murcielago.jpg',
	text: 'Пришёл на смену Lamborghini Diablo',
	answer_1: 'Lamborghini Gallardo',
	answer_2: 'Lamborghini Murcielago',
	answer_3: 'Lamborghini Reventon',
	radioV_1: '0',
	radioV_2: '1',
	radioV_3: '0'
}

var taskCard_3 = {
	number: '3/10',
	image: 'img/medium/Maserati_Levante_I.jpg',
	text: 'Все на одно лицо?',
	answer_1: 'Acura RDX',
	answer_2: 'Maserati Levante',
	answer_3: 'Porsche Macan',
	radioV_1: '0',
	radioV_2: '1',
	radioV_3: '0'
}

var taskCard_4 = {
	number: '4/10',
	image: 'img/medium/TVR_Sagaris.jpg',
	text: 'Выпускался с 2004 по 2006 год. Британец.',
	answer_1: 'Noble M15',
	answer_2: 'Vauxhall Monaro',
	answer_3: 'TVR Sagaris',
	radioV_1: '0',
	radioV_2: '0',
	radioV_3: '1'
}

var taskCard_5 = {
	number: '5/10',
	image: 'img/medium/LINCOLN_CONTINENTAL.jpg',
	text: 'Представительский класс',
	answer_1: 'Lancia Lybra',
	answer_2: 'Rover 600',
	answer_3: 'Lincoln Continental',
	radioV_1: '0',
	radioV_2: '0',
	radioV_3: '1'
}

var taskCard_6 = {
	number: '6/10',
	image: 'img/medium/Toyota_Century.jpg',
	text: 'Тойота такое выпускает?',
	answer_1: 'Toyota Century',
	answer_2: 'Cadillac CT6',
	answer_3: 'Buick Regal',
	radioV_1: '1',
	radioV_2: '0',
	radioV_3: '0'
}

var taskCard_7 = {
	number: '7/10',
	image: 'img/medium/De_Tomaso_Guara.jpg',
	text: 'Итальянец, годы выпуска: 1993 - 2001',
	answer_1: 'De Tomaso Guara',
	answer_2: 'Venturi 300 Atlantique',
	answer_3: 'Vector M12',
	radioV_1: '1',
	radioV_2: '0',
	radioV_3: '0'
}

var taskCard_8 = {
	number: '8/10',
	image: 'img/medium/Chevrolet_Suburban.jpg',
	text: 'Какой-то американский внедорожник :)',
	answer_1: 'GMC',
	answer_2: 'Chevrolet',
	answer_3: 'Ford',
	radioV_1: '0',
	radioV_2: '1',
	radioV_3: '0'
}

var taskCard_9 = {
	number: '9/10',
	image: 'img/medium/Spyker_C12.jpg',
	text: 'Можно перепутать с самолётом',
	answer_1: 'Pagani',
	answer_2: 'Spyker',
	answer_3: 'Beechcraft', // Самолёт
	radioV_1: '0',
	radioV_2: '1',
	radioV_3: '0'
}

var taskCard_10 = {
	number: '10/10',
	image: 'img/medium/Maserati_Merak.jpg',
	text: '',
	answer_1: 'Lamborghini Miura',
	answer_2: 'Lamborghini Urraco',
	answer_3: 'Maserati Merak',
	radioV_1: '0',
	radioV_2: '0',
	radioV_3: '2'
}

var cards = [taskCard_1, taskCard_2, taskCard_3, taskCard_4, taskCard_5,
			taskCard_6, taskCard_7, taskCard_8, taskCard_9, taskCard_10]







document.getElementById("p1").innerHTML = cards[0].number;
$("#image").attr('src', cards[0].image);
textOfTask.textContent = cards[0].text
label_text(cards[0].answer_1, cards[0].answer_2, cards[0].answer_3)
radio_value(cards[0].radioV_1, cards[0].radioV_2, cards[0].radioV_3)



var i = 0
$("#radioForm").submit(function( event ) {
  event.preventDefault();
  selectedVariant =  $( "input:radio[name=variant]:checked" ).val();


 	
 	if(selectedVariant == 1){
  	alert('Ответ верный.')
  	i = i + 1

document.getElementById("p1").innerHTML = cards[i].number;
$("#image").attr('src', cards[i].image);
textOfTask.textContent = cards[i].text
label_text(cards[i].answer_1, cards[i].answer_2, cards[i].answer_3)
radio_value(cards[i].radioV_1, cards[i].radioV_2, cards[i].radioV_3)  		



  } else if (selectedVariant == 0 && insure == 0) {
  	alert('Ответ неверный.')
  	document.location.href = "index.html"
  } else if(selectedVariant == 0 && insure == 1){
  	alert('Ответ невернвый. Страховка использована')
  	insure = 0
  } else if (selectedVariant == 2){
  	alert("Medium Mode пройден.")
  	localStorage.setItem('medium_winner', 1)
  	document.location.href = "index.html"
  }

// Снятие зачеркивания от подсказки
 label_1.classList.remove("false_variant_hepler")
 label_2.classList.remove("false_variant_hepler")
	if(insure == 1){
 	insure = 0
 	alert("Страховка обнулена")
	}
});

var help1 = document.querySelector('.help_1')
var help2 = document.querySelector('.help_2')

var label_1 = document.querySelector('.label_1')
var label_2 = document.querySelector('.label_2')
var label_3 = document.querySelector('.label_3')

$(".help_1").one('click', function(){  
	insure = 1
	help1.classList.add("help_used")
	alert('Ответ застрахован')
})

$(".help_2").one('click', function(){  

	if( $("#radio1").val() == 0 ){
	label_1.classList.add("false_variant_hepler")
	} else {
		label_2.classList.add("false_variant_hepler")
	}
 help2.classList.add("help_used")
 alert('1 Вариант исключён')
})