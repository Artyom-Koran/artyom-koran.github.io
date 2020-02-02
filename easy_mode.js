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
	image: 'img/easy/vaz_2101.jpg',
	text: 'Выпускалось с 1970 по 1988, 59-69л.с.',
	answer_1: 'Mersedes-Benz W115',
	answer_2: 'Peugeot 104',
	answer_3: 'ВАЗ 2101',
	radioV_1: '0',
	radioV_2: '0',
	radioV_3: '1'
}

var taskCard_2 = {
	number: '2/10',
	image: 'img/easy/lada_2121(niva).jpg',
	text: 'Современный дизайн, да?',
	answer_1: 'УАЗ 469',
	answer_2: 'LADA 2121',
	answer_3: 'ГАЗ 69',
	radioV_1: '0',
	radioV_2: '1',
	radioV_3: '0'
}

var taskCard_3 = {
	number: '3/10',
	image: 'img/easy/Moskvich_2140.jpg',
	text: 'Зеркала тут не нужны',
	answer_1: 'Tesla Cybertruck',
	answer_2: 'ЗАЗ 968',
	answer_3: 'Москвич 2140',
	radioV_1: '0',
	radioV_2: '0',
	radioV_3: '1'
}

var taskCard_4 = {
	number: '4/10',
	image: 'img/easy/GAZ_24.jpg',
	text: 'Выпускались версии с 5.5 л. и автоматом',
	answer_1: 'Nissan GT-R',
	answer_2: 'Lamborgini Diablo',
	answer_3: 'ГАЗ 24',
	radioV_1: '0',
	radioV_2: '0',
	radioV_3: '1'
}

var taskCard_5 = {
	number: '5/10',
	image: 'img/easy/moskvich_401.jpg',
	text: 'Выпускался с 1954 по 1956 г.',
	answer_1: 'Mercury Eight lll',
	answer_2: 'Москвич 401',
	answer_3: 'Mersedes-Benz W136',
	radioV_1: '0',
	radioV_2: '1',
	radioV_3: '0'
}

var taskCard_6 = {
	number: '6/10',
	image: 'img/easy/Bentley_Bentayga.jpg',
	text: 'Скоро и Ferrari выпустит свой кроссовер',
	answer_1: 'Bentley Bentayga',
	answer_2: 'Bentley Arnage',
	answer_3: 'Bentley Brooklands',
	radioV_1: '1',
	radioV_2: '0',
	radioV_3: '0'
}

var taskCard_7 = {
	number: '7/10',
	image: 'img/easy/Acura_NSX(2002-2005).jpg',
	text: 'Сделано в Японии',
	answer_1: 'Marussia B1',
	answer_2: 'Donkervoort D8 GT',
	answer_3: 'Acura NSX',
	radioV_1: '0',
	radioV_2: '0',
	radioV_3: '1'
}

var taskCard_8 = {
	number: '8/10',
	image: 'img/easy/Jaguar_XJ220.jpg',
	text: 'Судя по дискам - Maybach',
	answer_1: 'Isdera Commendatore 112i',
	answer_2: 'Unipower GT',
	answer_3: 'Jaguar XJ220',
	radioV_1: '0',
	radioV_2: '0',
	radioV_3: '1'
}

var taskCard_9 = {
	number: '9/10',
	image: 'img/easy/CHEVROLET-IMPALA-64.jpg',
	text: 'Модель на фото: 1964 год выпуска',
	answer_1: 'Cadillac Eldorado',
	answer_2: 'Chevrolet Impala',
	answer_3: 'Ford Thunderbird',
	radioV_1: '0',
	radioV_2: '1',
	radioV_3: '0'
}

var taskCard_10 = {
	number: '10/10',
	image: 'img/easy/Chrysler_Crossfire.jpg',
	text: 'Выдвижной спойлер',
	answer_1: 'Mitsubishi Eclipse IV',
	answer_2: 'Chrysler Crossfire',
	answer_3: 'Lotus Europa S',
	radioV_1: '0',
	radioV_2: '2',
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
  	alert("Easy Mode пройден.")
  	localStorage.setItem('easy_winner', 1)
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