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