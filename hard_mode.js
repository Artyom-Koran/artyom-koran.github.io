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
	image: 'img/hard/Alpine_A110_II.jpg',
	text: 'Его предшественник выпускался с 1960 по 1970 г.',
	answer_1: 'Lotus Evora',
	answer_2: 'Toyota GT86',
	answer_3: 'Alpine A110',
	radioV_1: '0',
	radioV_2: '0',
	radioV_3: '1'
}

var taskCard_2 = {
	number: '2/10',
	image: 'img/hard/Porsche_914.jpg',
	text: 'Выпускался с 1969 по 1976 г.',
	answer_1: 'TVR Tasmin',
	answer_2: 'Triumph TR7',
	answer_3: 'Porsche 914',
	radioV_1: '0',
	radioV_2: '0',
	radioV_3: '1'
}

var taskCard_3 = {
	number: '3/10',
	image: 'img/hard/Spyker_C8.jpg',
	text: 'Выпускается в Дании',
	answer_1: 'Spyker C8',
	answer_2: 'PGO Hemera',
	answer_3: 'Dallara Stradale',
	radioV_1: '1',
	radioV_2: '0',
	radioV_3: '0'
}

var taskCard_4 = {
	number: '4/10',
	image: 'img/hard/Bentley_T-Series.jpg',
	text: 'Выпускался: 1965 - 1980 г.',
	answer_1: 'Toyota Century',
	answer_2: 'Bentley T-Series',
	answer_3: 'Nissan President',
	radioV_1: '0',
	radioV_2: '1',
	radioV_3: '0'
}

var taskCard_5 = {
	number: '5/10',
	image: 'img/hard/Morgan_Aero SuperSports.jpg',
	text: 'Британец',
	answer_1: 'Morgan Aero SuperSports',
	answer_2: 'Wiesmann GT',
	answer_3: 'Donkervoort D8',
	radioV_1: '1',
	radioV_2: '0',
	radioV_3: '0'
}

var taskCard_6 = {
	number: '6/10',
	image: 'img/hard/Trabant_600.jpg',
	text: '',
	answer_1: 'Subaru 360',
	answer_2: 'Renault Dauphine',
	answer_3: 'Trabant 600',
	radioV_1: '0',
	radioV_2: '0',
	radioV_3: '1'
}

var taskCard_7 = {
	number: '7/10',
	image: 'img/hard/Bufori_Geneva.jpg',
	text: '',
	answer_1: 'Bufori Geneva',
	answer_2: 'Maybach Exelero',
	answer_3: 'Jaguar XJR',
	radioV_1: '1',
	radioV_2: '0',
	radioV_3: '0'
}

var taskCard_8 = {
	number: '8/10',
	image: 'img/hard/De_Tomaso_Pantera.jpg',
	text: 'Выпускался в Италии',
	answer_1: 'De Tomaso Pantera',
	answer_2: 'Maserati Khamsin',
	answer_3: 'Lamborghini Espada',
	radioV_1: '1',
	radioV_2: '0',
	radioV_3: '0'
}

var taskCard_9 = {
	number: '9/10',
	image: 'img/hard/Invicta_S1.jpg',
	text: 'Не, ну, а вдруг знаешь?',
	answer_1: 'Invicta S1',
	answer_2: 'Noble M12 GTO',
	answer_3: 'MG Xpower SV',
	radioV_1: '1',
	radioV_2: '0',
	radioV_3: '0'
}

var taskCard_10 = {
	number: '10/10',
	image: 'img/hard/Lucid_Air_Concept.jpg',
	text: 'Электрокар из США',
	answer_1: 'Lucid Air Concept',
	answer_2: 'Rezvani Beast',
	answer_3: 'W Motors Fenyr Supersport',
	radioV_1: '2',
	radioV_2: '0',
	radioV_3: '0'
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
  	alert('Правильно!')
  //	variant.classList.add("right")
  	i = i + 1

document.getElementById("p1").innerHTML = cards[i].number;
$("#image").attr('src', cards[i].image);
textOfTask.textContent = cards[i].text
label_text(cards[i].answer_1, cards[i].answer_2, cards[i].answer_3)
radio_value(cards[i].radioV_1, cards[i].radioV_2, cards[i].radioV_3)  		



  } else if (selectedVariant == 0 && insure == 0) {
  	alert('Нет! Ты проиграл!')
  	document.location.href = "index.html"
  } else if(selectedVariant == 0 && insure == 1){
  	alert('Ответ невернвый. Страховка использована')
  	insure = 0
  } else if (selectedVariant == 2){
  	alert("Hard Mode пройден.")
  	localStorage.setItem('hard_winner', 1)
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