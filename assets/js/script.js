const contactForm = document.getElementById("contactForm")
let users = []

class User {
	constructor (username, email, work, phone, bio) {
		this.username = username
		this.email = email
		this.work = work
		this.phone = phone
		this.bio = bio
	}
}

contactForm.addEventListener("submit", (e) => {
	e.preventDefault()
	let username = document.getElementById("username").value
	let email = document.getElementById("email").value
	let work = document.getElementById("work").value
	let phone = document.getElementById("phone").value
	let bio = document.getElementById("bio").value

	let newUser = new User(username, email, work, phone, bio)

	users.push(newUser)
	showInfo(newUser)
	createTable()
	clearUser()
})

function showInfo (user) {
	document.getElementById("cardUsername").innerHTML = user.username
	document.getElementById("cardEmail").innerHTML = user.email
	document.getElementById("cardJob").innerHTML = user.work
	document.getElementById("cardPhone").innerHTML = user.phone
	document.getElementById("cardBio").innerHTML = user.bio
}

function clearUser () {
	document.getElementById("contactForm").reset()
}

function createTable () {
	let acc = ""
	users.forEach((user, idx) => {
		acc += `
		<tr>
			<th scope="row">${idx + 1}</th>
			<td>${user.username}</td>
			<td>${user.email}</td>
			<td>${user.work}</td>
			<td>${user.phone}</td>
		</tr>
		`
	})

	document.getElementById("tableBody").innerHTML = acc
}