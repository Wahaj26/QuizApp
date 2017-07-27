var pos = 0,right=0,name;
function get(x){
return document.getElementById(x);
}
var questions = [

    ['Inside which HTML element do we put the JavaScript?','javascript','scripting','script','C'],
    [" What is the correct JavaScript syntax to change the content of the HTML element below? p id='demo'This is a demonstration.</p>"," document.getElement('p').innerHTML = 'Hello World!';","document.getElementByName('p').innerHTML = 'Hello World!';","document.getElementById('demo').innerHTML = 'Hello World!';","C"],
    ["Where is the correct place to insert a JavaScript?","Both the head section and the body section are correct","The head section","The body section","C"],
    ["The external JavaScript file must contain the script tag.","True","False","Don't know","A"],
    ["How do you create a function in JavaScript?","function = myFunction()","function:myFunction()","function myFunction()","C"],
    [ "How can you detect the client's browser name?","client.navName","navigator.appName"," browser.name","B"]

];

 function Question(){
    var test,test_status,chA,chB,chC,question,choices,choice,per;
    
  test = get("test");
  if(pos>=questions.length){
      per = Math.floor((right*100)/pos);
  
      test.innerHTML = "<h2> Correct Answers: "+right+"</h2>";
      test.innerHTML +="<h2> Percentage: "+per+"%</h2>";
      test.innerHTML += "<h3>Thanks for your participation..!</h3>";
      pos=0;
      right = 0;
      return false;
  }
 test_status = get("test-status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
question = questions[pos][0];
chA = questions[pos][1];
chB = questions[pos][2];
chC = questions[pos][3];
test.innerHTML = "<h1>"+question+"</h1>";
test.innerHTML += "<input type = 'radio' name ='choices' value='A'>" +chA+ "<br>";
test.innerHTML += "<input type = 'radio' name ='choices' value='B'>" +chB+ "<br>";
test.innerHTML += "<input type = 'radio' name ='choices' value='C'>" +chC+ "<br><br>";
test.innerHTML += "<button right:'10px' onclick='checkAnswer()'>Next</button>"

 
 }
 function checkAnswer(){
    choices = document.getElementsByName("choices");
    for(var i = 0 ; i  < choices.length; i++){

        if(choices[i].checked){
            choice = choices[i].value;
        }
    } 
    if(choice  == questions[pos][4]){
      right++;
    }
    pos++;
    Question();

 }
 window.addEventListener("load",Question,false);
