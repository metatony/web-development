

var database = [
    {
        username: 'kent',
        password: 'secret',
    }
]

var nwesfeed = [
    {
        username: 'blake',
        timeline: 'having fun',
    },
    {

        username: 'sally',
        timeline: 'javascript is pretty',
    },
    {
        username: 'mitch',
        password: 'javascript is cool',

    }
]

var usernamePrompt = prompt('what is your username');
var passordPrompt = prompt('what is your password ');

function signIn(user, pass){
    if(user === database[0].username && pass === database[0].password){
        console.log(nwesfeed);
    } else{
        alert('sorry user doesn\'t exist');
    }
}
signIn(usernamePrompt, passordPrompt);