let num1;
let result;
let inp;
let btn;
let op;
$('.colbt').on('click', function(e){
    
     inp = $('.collbl').text();
   
    btn = $(this).text();

    if(btn=='AC'){
        inp =0;
        num1=0;
        result=0;
    }
   
    
    
    if(!isNaN(btn) || btn=="."){
        if(inp.charAt(0) == 0){
            inp = btn;
        }else{
            inp = inp+ btn;
        }
    }

    if(btn == '+/-'){
        inp = inp * (-1);
    }

    if(btn=="%"){
        inp = inp / 100;
    }
   
    if(btn == '+'){
       num1 = inp;
       inp=0;
       op = "+";
    }

    if(btn == '-'){
        num1 = inp;
        inp=0;
        op = "-";
     }

     if(btn == '*'){
        num1 = inp;
        inp=0;
        op = "*";
     }

     if(btn == '/'){
        num1 = inp;
        inp=0;
        op = "/";
     }

     if(inp == 0 && op== undefined ){
        alert("Enter a number first");
    }

    if(btn == "=" && op == '+'){
      inp = Number(inp);
      num1 = Number(num1);
      inp = inp + num1;
    }

    
    if(btn == "=" && op == '-'){
        inp = Number(inp);
        num1 = Number(num1);
        inp =  num1 - inp;
      }

      
    if(btn == "=" && op == '*'){
        inp = Number(inp);
        num1 = Number(num1);
        inp = inp * num1;
      }

     
    if(btn == "=" && op == '/'){
        inp = Number(inp);
        num1 = Number(num1);
        inp = num1 / inp;
      }
    
    $('.collbl').html(inp);
    e.preventDefault();
})

$('.col0').on('click', function(e){
    btn = $(this).text();
    inp = inp+ btn;
    $('.collbl').html(inp);
    e.preventDefault();
})


