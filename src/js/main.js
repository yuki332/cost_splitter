import msg from './notification';
import Calc from './calculate';

let submit = document.getElementById('btn_submit');

submit.addEventListener('click', function(){
	let total = document.getElementById('total').value;
	let people = document.getElementById('people').value;
	let target = document.getElementById('result');
	let calc = new Calc(total, people);
	calc.validate();
	if(calc.status){
		target.innerHTML = calc.result.toFixed(2);
	}else{
		let errorMessages = [];
		for(let key in calc.messages){
			if(calc.messages[key] != false){
				msg.log(calc.messages[key]);
				errorMessages.push(calc.messages[key]);
			}
		}
		target.innerHTML = errorMessages.join('</br>');
	}
});
