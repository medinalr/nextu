/* variables Globales*/
var xx, x=0,xi=1,coma=0, ni=0, op="no";
var oper, ni, x,sol,sl;
var cambio;

//se capturan los numeros de las imagenes
document.getElementById("0").addEventListener("click",function(){
numerox(0)
})
document.getElementById('0').addEventListener("mousedown", function(){
document.getElementById('0').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('0').addEventListener("mouseout", function(){
document.getElementById('0').setAttribute("style","transform:scale(1,1)")
})


document.getElementById("1").addEventListener("click",function(){
numerox(1)
})
document.getElementById('1').addEventListener("mousedown", function(){
document.getElementById('1').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('1').addEventListener("mouseout", function(){
document.getElementById('1').setAttribute("style","transform:scale(1,1)")
})


document.getElementById("2").addEventListener("click",function(){
numerox(2)
})
document.getElementById('2').addEventListener("mousedown", function(){
document.getElementById('2').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('2').addEventListener("mouseout", function(){
document.getElementById('2').setAttribute("style","transform:scale(1,1)")
})


document.getElementById("3").addEventListener("click",function(){
numerox(3)
})
document.getElementById('3').addEventListener("mousedown", function(){
document.getElementById('3').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('3').addEventListener("mouseout", function(){
document.getElementById('3').setAttribute("style","transform:scale(1,1)")
})


document.getElementById("4").addEventListener("click",function(){
numerox(4)
})
document.getElementById('4').addEventListener("mousedown", function(){
document.getElementById('4').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('4').addEventListener("mouseout", function(){
document.getElementById('4').setAttribute("style","transform:scale(1,1)")
})


document.getElementById("5").addEventListener("click",function(){
numerox(5)
})
document.getElementById('5').addEventListener("mousedown", function(){
document.getElementById('5').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('5').addEventListener("mouseout", function(){
document.getElementById('5').setAttribute("style","transform:scale(1,1)")
})


document.getElementById("6").addEventListener("click",function(){
numerox(6)
})
document.getElementById('6').addEventListener("mousedown", function(){
document.getElementById('6').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('6').addEventListener("mouseout", function(){
document.getElementById('6').setAttribute("style","transform:scale(1,1)")
})

document.getElementById("7").addEventListener("click",function(){
numerox(7)
})
document.getElementById('7').addEventListener("mousedown", function(){
document.getElementById('7').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('7').addEventListener("mouseout", function(){
document.getElementById('7').setAttribute("style","transform:scale(1,1)")
})


document.getElementById('8').addEventListener("click", function() {
numerox(8)
})
document.getElementById('8').addEventListener("mousedown", function(){
document.getElementById('8').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('8').addEventListener("mouseout", function(){
document.getElementById('8').setAttribute("style","transform:scale(1,1)")
})

document.getElementById("9").addEventListener("click",function(){
numerox(9)
})
document.getElementById('9').addEventListener("mousedown", function(){
document.getElementById('9').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('9').addEventListener("mouseout", function(){
document.getElementById('9').setAttribute("style","transform:scale(1,1)")
})


document.getElementById("mas").addEventListener("click",function(){
s="+"
operar(s)
})
document.getElementById('mas').addEventListener("mousedown", function(){
document.getElementById('mas').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('mas').addEventListener("mouseout", function(){
document.getElementById('mas').setAttribute("style","transform:scale(1,1)")
})



document.getElementById("dividido").addEventListener("click",function(){
s="/"
operar(s)
})
document.getElementById('dividido').addEventListener("mousedown", function(){
document.getElementById('dividido').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('dividido').addEventListener("mouseout", function(){
document.getElementById('dividido').setAttribute("style","transform:scale(1,1)")
})


document.getElementById("por").addEventListener("click",function(){
s="*"
operar(s)
})
document.getElementById('por').addEventListener("mousedown", function(){
document.getElementById('por').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('por').addEventListener("mouseout", function(){
document.getElementById('por').setAttribute("style","transform:scale(1,1)")
})



document.getElementById("menos").addEventListener("click",function(){
s="-"
operar(s)
})
document.getElementById('menos').addEventListener("mousedown", function(){
document.getElementById('menos').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('menos').addEventListener("mouseout", function(){
document.getElementById('menos').setAttribute("style","transform:scale(1,1)")
})


document.getElementById("igual").addEventListener("click",function(){
igualar();
})
document.getElementById('igual').addEventListener("mousedown", function(){
document.getElementById('igual').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('igual').addEventListener("mouseout", function(){
document.getElementById('igual').setAttribute("style","transform:scale(1,1)")
})


document.getElementById("on").addEventListener("click",function(){
display.innerHTML=0; //poner pantalla a 0
}) 
document.getElementById('on').addEventListener("mousedown", function(){
document.getElementById('on').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('on').addEventListener("mouseout", function(){
document.getElementById('on').setAttribute("style","transform:scale(1,1)")
})


document.getElementById("punto").addEventListener("click",function(){
numerox(".") //poner el punto en la pantalla 
}) 
document.getElementById('punto').addEventListener("mousedown", function(){
document.getElementById('punto').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('punto').addEventListener("mouseout", function(){
document.getElementById('punto').setAttribute("style","transform:scale(1,1)")
})

document.getElementById("sign").addEventListener("click",function(){
 
var pantalla = document.getElementById('display');

if (! pantalla.innerHTML.includes('-')) {
pantalla.innerHTML="-"+pantalla.innerHTML;
}else {
pantalla.innerHTML=pantalla.innerHTML.replace('-','');
}
})

cambiarSigno("pantalla")
document.getElementById('sign').addEventListener("mousedown", function(){
document.getElementById('sign').setAttribute("style","transform:scale(0.95,0.95)")
})
document.getElementById('sign').addEventListener("mouseout", function(){
document.getElementById('sign').setAttribute("style","transform:scale(1,1)")
})



function numerox(xx) { //recoge el nÃºmero pulsado
      var str = display.innerHTML;
      var n= str.length;

      if (n <=8){


         if (x=="0" || xi==1  ) { // inicializar un nÃºmero, 
            display.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar nÃºmero
            if (xx==".") { //si escribimos una coma al principio del nÃºmero
               display.innerHTML="0."; //escribimos 0.
               x=xx; //guardar nÃºmero
               coma=1; //cambiar estado de la coma
               }
               
           }
           else { //continuar escribiendo el nÃºmero
               if (xx=="." && coma==0) { //si escribimos una coma decimal la primera vez
                   display.innerHTML+=xx;
                   x+=xx;
                   coma=1; //cambiar  estado de la coma  
               }
              //si intentamos escribir una segunda coma, no realiza ninguna acciÃ³n.
               else if (xx=="." && coma==1) {} 
               //Escribir un nÃºmero del 0 al 9:    
               else {
                   display.innerHTML+=xx;
                   x+=xx
                   
               }
            }
            xi=0 //el nÃºmero estÃ¡ iniciado y se puede ampliar.
         }

}

function operar(s) {
         igualar() //si hay operaciones pendientes se realizan
         ni=x //ponemos el 1Âº nÃºmero en "numero en espera" para  escribir el segundo.
         op=s; //guardamos la operaciÃ³n.
         xi=1; //inicializo pantalla.
         }  
function igualar() {
         if (op=="no") { //no hay  operaciÃ³n pendiente.
            display.innerHTML=x; //muestro el mismo nÃºmero 
            }
         else { //con operaciÃ³n pendiente resolvemos
            sl=ni+op+x; // escribimos la operaciÃ³n en una cadena
            //alert(sl) pruebo calculo
            sol=eval(sl) //convertimos la cadena a cÃ³digo y resolvemos
            display.innerHTML=sol //mostramos la soluciÃ³n
            x=sol; //guardamos la soluciÃ³n
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se reiniciar la pantalla.
            }
        }

function cambiarSigno(valor){
display = document.getElementById("display");
valor = (valor * (-1));
escribir(valor);
}
/*parseFloat(numero)
sol=eval(sl)*/

