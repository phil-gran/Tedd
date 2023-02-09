
function script(){
    document.getElementById('script').style.display="block";
    document.getElementById('get-ubill').style.display="none";
    document.getElementById('resched').style.display="none";
    document.getElementById('salesForm').style.display="none";
    document.getElementById('youtube').style.display="none";
}
function ubill(){
    document.getElementById('script').style.display="none";
    document.getElementById('get-ubill').style.display="block";
    document.getElementById('resched').style.display="none";
    document.getElementById('salesForm').style.display="none";
    document.getElementById('youtube').style.display="none";
}
function resched(){
    document.getElementById('script').style.display="none";
    document.getElementById('get-ubill').style.display="none";
    document.getElementById('resched').style.display="block";
    document.getElementById('salesForm').style.display="none";
    document.getElementById('youtube').style.display="none";
}
function salesForm(){
     //pw protected page
     var password;
     var pass1 = 'buenas2023';
     password = prompt('Enter Page Password')
         if (password==pass1){
             document.getElementById('script').style.display="none";
             document.getElementById('get-ubill').style.display="none";
             document.getElementById('resched').style.display="none";
             document.getElementById('youtube').style.display="none";
             document.getElementById('salesForm').style.display="block";
         }
         else{
            document.getElementById('script').style.display="block";
             document.getElementById('get-ubill').style.display="none";
             document.getElementById('resched').style.display="none";
             document.getElementById('youtube').style.display="none";
             document.getElementById('salesForm').style.display="none";
         }
}
function calendar(){
    window.open("https://www.apricot.energy/tubillcalendar","target_blank");
}
function dialer(){
    window.open("https://teddenergy.readymode.com/login_new/?then=/","target_blank");
}
function appointment(){
         //pw protected page
         var password;
         var pass1 = 'buenas2023';
         password = prompt('Enter Page Password')
             if (password==pass1){
                window.open("https://docs.google.com/spreadsheets/d/1haiiSi5qNByJzhB7W2eis2Px13UhAdapWW1yoU6tXlU/edit?usp=sharing","target_blank");
             }
             else{
                window.location = 'https://teddenergy.netlify.app/';
             }
}


/*REBUTALS JS SCRIPT*/
function display1(){
 document.getElementById('question1').style.display="block";
}
function display2(){
    document.getElementById('question2').style.display="block";
}
function display3(){
    document.getElementById('question3').style.display="block";
}
function display4(){
    document.getElementById('question4').style.display="block";
}
function display5(){
    document.getElementById('question5').style.display="block";
}
function display6(){
    document.getElementById('question6').style.display="block";
}
function display7(){
    document.getElementById('question7').style.display="block";
}
function display8(){
    document.getElementById('question8').style.display="block";
}
function display9(){
    document.getElementById('question9').style.display="block";
}
function display10(){
    document.getElementById('question10').style.display="block";
}
function display11(){
    document.getElementById('question11').style.display="block";
}
function display12(){
    document.getElementById('question12').style.display="block";
}
function display13(){
    document.getElementById('question13').style.display="block";
}
function display14(){
    document.getElementById('question14').style.display="block";
}
function display15(){
    document.getElementById('question15').style.display="block";
}
function display16(){
    document.getElementById('question16').style.display="block";
}


function hide(){
 document.getElementById('question1').style.display="none";
 document.getElementById('question2').style.display="none";
 document.getElementById('question3').style.display="none";
 document.getElementById('question4').style.display="none";
 document.getElementById('question5').style.display="none";
 document.getElementById('question6').style.display="none";
 document.getElementById('question7').style.display="none";
 document.getElementById('question8').style.display="none";
 document.getElementById('question9').style.display="none";
 document.getElementById('question10').style.display="none";
 document.getElementById('question11').style.display="none";
 document.getElementById('question12').style.display="none";
 document.getElementById('question13').style.display="none";
 document.getElementById('question14').style.display="none";
 document.getElementById('question15').style.display="none";
 document.getElementById('question16').style.display="none";
}
