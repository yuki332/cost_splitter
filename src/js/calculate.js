export default class Calc{
	constructor(total, people){
		this.total = total;
		this.people = people;
		this.messages = [];
		this.validattionStatus = false;
	}

	get result(){
		return this.total/this.people;
	}

	get status(){
		return this.validattionStatus;
	}

	get errorMessages(){
		return this.messages;
	}

	validate(){
		let message = 'Please Enter Number to ';
		this.messages['total'] = (isNaN(this.total) || this.total === '') && message + 'total';
		this.messages['people'] = (isNaN(this.people) || this.people === '') && message + 'people';
		this.validattionStatus = (!isNaN(this.total) && !isNaN(this.people) && this.total !== '' && this.people !== '') && true;
	}
}
