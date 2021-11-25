var user = 'Adrian'
var password = '1'

function login(){
    const formUsername = document.getElementById('username').value
    const formPassword = document.getElementById('password').value

    if(user == formUsername){
        if(password == formPassword){
            printMessage(`Welcome ${formUsername}`)
        }
        else{
            printMessage('the password is incorrect')
        }
    }
    else{
            printMessage('The user ' + formUsername + ' does not exist')
    }    
}

function printMessage(message){
    const messageDiv = document.getElementById('message')

    messageDiv.innerHTML = '<p>' + message + '</p>'
}
