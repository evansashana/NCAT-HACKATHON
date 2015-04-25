var addPost =function(){
	 var x = document.forms;
	 var post=x[0]['post'].value;
	 var email=x[0]['inputEmail'].value;
	 var email=x[0]['inputEmail'].value;
     alert(post);
	 var div = document.createElement('div');
     div.className = 'col-sm-6 col-sm-offset-3 col-md-4 col-md-offset-4';
     div.innerHTML = post;
     document.getElementById('post').appendChild(div);
};