var user = [
    {
	name: 'riasat',
	pass: '123456',
    },
    {
	name: 'mahee',
	pass: 'haccerman',
    },
];

var timeline = [
    {
	msg: 'Your birthday is tommrow Riasat. Happy Birthday',
    },
    {
	msg: 'It\'s Riasat\'s birthday Mahee. Wish him a happy birthday',
    }
];


function check(u,p){
    var flag = false;
    user.forEach(function(x,i){
	if(u === x.name && p === x.pass){
	    console.log(timeline[i].msg);
	    flag = false;
	    break;
	}else{
	    flag = true;
	}
    });
    if(flag){
	console.log('Invalid usename or password');
    }
};

var username = prompt('What\'s your username');
var password = prompt('What\'s your password');

check(username,password);

