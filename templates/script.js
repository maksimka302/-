function subhit() {
	let name = document.getElementById('name').value.trim()
	let author = document.getElementById('author').value.trim()
	let year_edition = document.getElementById('year_edition').value.trim()
	let pressmark = document.getElementById('pressmark').value.trim()

	if (name === '' || author === '' || year_edition === '' || pressmark === '') {
		alert('Будь ласка, заповніть усі поля перед пошуком!')
		return
	}

	if (!/^\d+$/.test(year_edition)) {
		alert('Будь ласка, введіть коректно рік випуску')
		return
	}

	alert('Повідомлення відправлено!')
}
