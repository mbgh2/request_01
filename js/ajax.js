
let xhttp = new XMLHttpRequest();
xhttp.open('post', 'back.php', true);
xhttp.setRequestHeader('Content-type', "application/x-www-form-urlencoded");

xhttp.send('name = vasya');

xhttp.onreadystatechange = function(){
   if(this.readyState == 4 && this.status == 200) {
      console.log(this);
   } 
}

