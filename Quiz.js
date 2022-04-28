player_1_name= localStorage.getItem("player_1");
player_1_name= localStorage.getItem("player_2");

function ask(){
    number1= document.getElementById("n1").value;
    number2= document.getElementById("n2").value;
    exp_answer= parseInt(number1)* parseInt(number2);
    document.getElementById("qn1").innerHTML=" "+ number1;
    document.getElementById("qn2").innerHTML=" "+ number2;
}