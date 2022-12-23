var objPeople = [
	{ // Object @ 0 index
		username: "admin",
		password: "isol"
	}
]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value
	var label = document.getElementById('label').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			// stop the function if this is found to be true
            window.location.href = 'https://sch-wp.000webhostapp.com/sch-wp';
			return
            
		}
	}
	console.log("incorrect username or password")
}