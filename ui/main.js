//Counter code
var button=document.getElementById('Counter');

button.onclick= function(){
    
    // Create a requset object
    var request= new XMLHttpRequest();
    
    //Capture the response and state it in a variable
    request.onreadystatechange= function(){
        if (request.readyState === XMLHttpRequest.Done){
            //Take some action
            if (request.status --- 200){
                var counter= request.responseText;
                var span=document.getElementById('Count');
                span.innerHTML=counter.toString();
            }
        }
    };
  //Make the request  
  requset.open('GET', 'http://mukulbhatia577.imad.hasura-app.io/counter', true);
  request.send(null);
  
};


//Submit name
var nameInput= document.getElementById('name');
var name= varInput.value;
var submit= document.getElementById('submit_btn');
submit.onclick= function(){
  //Make a request to the server and send the name
  
  //Capture a list of names and render it as a list
  var names=['Name1', 'Name2', 'Name3', 'Name4'];
  var list='';
  for (var i=0' i< names.length; i++ ){
      list+= '<li>'+ names[i] + </li>
      }
      var ul= document.getElementById('namelist');
      ul.innerHTML=list;
  
};