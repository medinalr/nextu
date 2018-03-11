
/* variables Globales*/
var xx, x=0,xi=1,coma=0, ni=0, op="no";
var oper, ni, x,sol,sl;

//se capturan los numeros de las imagenes
document.getElementById("0").addEventListener("click",function(){
numerox(0)
})

document.getElementById("1").addEventListener("click",function(){
numerox(1)
})

document.getElementById("2").addEventListener("click",function(){
numerox(2)
})

document.getElementById("3").addEventListener("click",function(){
numerox(3)
})

document.getElementById("4").addEventListener("click",function(){
numerox(4)
})

document.getElementById("5").addEventListener("click",function(){
numerox(5)
})

document.getElementById("6").addEventListener("click",function(){
numerox(6)
})

document.getElementById("7").addEventListener("click",function(){
numerox(7)
})

document.getElementById('8').addEventListener("click", function() {
numerox(8)
})

document.getElementById("9").addEventListener("click",function(){
numerox(9)

})

document.getElementById("mas").addEventListener("click",function(){
s="+"
operar(s)
})

document.getElementById("dividido").addEventListener("click",function(){
s="/"
operar(s)

})

document.getElementById("por").addEventListener("click",function(){
s="*"
operar(s)
})


document.getElementById("menos").addEventListener("click",function(){
s="-"
operar(s)
})

document.getElementById("igual").addEventListener("click",function(){
igualar();

})

document.getElementById("on").addEventListener("click",function(){
display.innerHTML=0; //poner pantalla a 0
         
}) 

document.getElementById("punto").addEventListener("click",function(){
numerox(".") //poner el punto en la pantalla 
         
}) 



function numerox(xx) { //recoge el número pulsado
      var str = display.innerHTML;
      var n= str.length;

      if (n <=8){


         if (x=="0" || xi==1  ) { // inicializar un número, 
            display.innerHTML=xx; //mostrar en pantalla
            x=xx; //guardar número
            if (xx==".") { //si escribimos una coma al principio del número
               display.innerHTML="0."; //escribimos 0.
               x=xx; //guardar número
               coma=1; //cambiar estado de la coma
               }
               
           }
           else { //continuar escribiendo el número
               if (xx=="." && coma==0) { //si escribimos una coma decimal la primera vez
                   display.innerHTML+=xx;
                   x+=xx;
                   coma=1; //cambiar  estado de la coma  
               }
              //si intentamos escribir una segunda coma, no realiza ninguna acción.
               else if (xx=="." && coma==1) {} 
               //Escribir un número del 0 al 9:    
               else {
                   display.innerHTML+=xx;
                   x+=xx
                   
               }
            }
            xi=0 //el número está iniciado y se puede ampliar.
         }

}

function operar(s) {
         igualar() //si hay operaciones pendientes se realizan
         ni=x //ponemos el 1º número en "numero en espera" para  escribir el segundo.
         op=s; //guardamos la operación.
         xi=1; //inicializo pantalla.
         }  
function igualar() {
         if (op=="no") { //no hay  operación pendiente.
            display.innerHTML=x; //muestro el mismo número 
            }
         else { //con operación pendiente resolvemos
            sl=ni+op+x; // escribimos la operación en una cadena
            sol=eval(sl) //convertimos la cadena a código y resolvemos
            display.innerHTML=sol //mostramos la solución
            x=sol; //guardamos la solución
            op="no"; //ya no hay operaciones pendientes
            xi=1; //se reiniciar la pantalla.
            }
        }