(function(){
	class formHandler {
		constructor() {
			this.form = null
			this.arrival = null
			this.departure = null
			this.adult = null
			this.child = null
			this.link = null
		}
	// спрятать форму
		hideForm() {
			this.form.classList.add("visually-hidden")
		}
	// инициировали форму
		init(form, link) {
			this.form = form
			this.link = link
			this.arrival = this.form.querySelector('[name=arrival-date')
			this.departure = this.form.querySelector('[name=departure-date]')
			this.child = this.form.querySelector('[name=child-number]')
			this.adult = this.form.querySelector('[name=adult-number]')
		
			this.link.onclick = event => { this.linkHandler(event) }
		
			this.form.onsubmit = event => { this.submitHandler(event) }
			
			return this
		}
	// обработчик клика по ссылке	
		linkHandler(event) {
			const e = event || window.event
			e.preventDefault()
			this.form.classList.toggle("visually-hidden")
			this.form.classList.remove("search-hotels-bounce")
			this.form.classList.add("search-hotels-bounce")
			this.arrival.focus()
		}
	// проверка на валидность формы	
		formValid() {
			return this.arrival.value &&
				this.departure.value &&
				this.adult.value &&
				this.child.value
		}
	// обработка отправки формы	
		submitHandler(event) {
			if(!this.formValid()) {
				const e = event || window.event
				e.preventDefault()
				console.log("Нужно ввести данные")
				this.form.classList.remove("search-hotels-error")
				this.form.classList.add("search-hotels-error")
			} else {
				this.hideForm()
			}
		}
	}
	
	const myFormHandler = new formHandler()
	myFormHandler
	.init(
		document.querySelector('.search-hotels'),
		document.querySelector('.preview')
	)
	.hideForm()
})()


