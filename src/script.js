function myFunction(){
    var n = document.getElementById('name-field').value;
    var a = document.getElementById('age-field').value;
    var weight=document.getElementById('weight-field').value;

    if(a>=5 && a<=7){
        if(weight<15){
            output="Hello " + n + " !!! Your weight is less than the recommended value of " + weight + " kg " + " at an age" + a;
        }
        else if(weight>20){
            output="Hello " + n + " !!! Your weight is greater than the recommended value of " + weight + " kg " + " at an age" + a;
        }else{
            output="Hello " + n + "Your weight is perfect";
        }
    }
    else if(a>=8 && a<=10){
        if(weight<21){
            output="Hello " + n + " !!! Your weight is less than the recommended value of " + weight + " kg " + " at an age" + a;
        }
        else if(weight>25){
            output="Hello " + n + " !!! Your weight is greater than the recommended value of " + weight + " kg " + " at an age" + a;
        }else{
            output="Hello " + n + "Your weight is perfect";
        }
}
    else if(a>=11 && a<=15){
        if(weight<26){
        output="Hello " + n + " !!! Your weight is less than the recommended value of " + weight + " kg " + " at an age" + a;
        }   
        else if(weight>30){
        output="Hello " + n + " !!! Your weight is greater than the recommended value of " + weight + " kg " + " at an age" + a;
        }else{
        output="Hello " + n + "Your weight is perfect";
    }
}
    else if(a>=16 && a<=20){
        if(weight<31){
            output="Hello " + n + " !!! Your weight is less than the recommended value of " + weight + " kg " + " at an age" + a;
        }
        else if(weight>40){
            output="Hello " + n + " !!! Your weight is greater than the recommended value of " + weight + " kg " + " at an age" + a;
        }else{
            output="Hello " + n + "Your weight is perfect";
    }
}
    else {
        output= "The values that your are entered is not correct";
    }
    


display(output);
        
    }
    function display(){
         document.getElementById('result').innerHTML=output;
    }

