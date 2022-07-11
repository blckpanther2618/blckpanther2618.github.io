function main()
{
    var input = 0;
   function A()
   {
        document.getElementById("a1").style.borderRightColor="red";
        document.getElementById("a2").style.backgroundColor="red";
        document.getElementById("a3").style.borderLeftColor="red";
   }
   function B()
   {
        document.getElementById("b1").style.borderBottomColor="red";
        document.getElementById("b2").style.backgroundColor="red";
        document.getElementById("b3").style.borderTopColor="red";
   }
   function C()
   {
        document.getElementById("c1").style.borderBottomColor="red";
        document.getElementById("c2").style.backgroundColor="red";
        document.getElementById("c3").style.borderTopColor="red";
   }
   function D()
   {
        document.getElementById('d1').style.borderRightColor="red";
        document.getElementById('d2').style.backgroundColor="red";
        document.getElementById("d3").style.borderLeftColor="red";
   }
   function E()
   {
        document.getElementById("e1").style.borderBottomColor="red";
        document.getElementById("e2").style.backgroundColor="red";
        document.getElementById("e3").style.borderTopColor="red";
   }
   function F()
   {
        document.getElementById("f1").style.borderBottomColor="red";
        document.getElementById("f2").style.backgroundColor="red";
        document.getElementById("f3").style.borderTopColor="red";    
   }
   function G()
   {   
        document.getElementById('g1').style.borderRightColor="red";
        document.getElementById('g2').style.backgroundColor="red";
        document.getElementById("g3").style.borderLeftColor="red";
   }
   function clear()
   {
        document.getElementById('a1').style.borderRightColor="rgb(17,17,17)";
        document.getElementById('a2').style.backgroundColor="rgb(17,17,17)";
        document.getElementById("a3").style.borderLeftColor="rgb(17,17,17)";

        document.getElementById("b1").style.borderBottomColor="rgb(17,17,17)";
        document.getElementById("b2").style.backgroundColor="rgb(17,17,17)";
        document.getElementById("b3").style.borderTopColor="rgb(17,17,17)";

        document.getElementById("c1").style.borderBottomColor="rgb(17,17,17)";
        document.getElementById("c2").style.backgroundColor="rgb(17,17,17)";
        document.getElementById("c3").style.borderTopColor="rgb(17,17,17)";

        document.getElementById('d1').style.borderRightColor="rgb(17,17,17)";
        document.getElementById('d2').style.backgroundColor="rgb(17,17,17)";
        document.getElementById("d3").style.borderLeftColor="rgb(17,17,17)";

        document.getElementById("e1").style.borderBottomColor="rgb(17,17,17)";
        document.getElementById("e2").style.backgroundColor="rgb(17,17,17)";
        document.getElementById("e3").style.borderTopColor="rgb(17,17,17)";

        document.getElementById("f1").style.borderBottomColor="rgb(17,17,17)";
        document.getElementById("f2").style.backgroundColor="rgb(17,17,17)";
        document.getElementById("f3").style.borderTopColor="rgb(17,17,17)";

        document.getElementById('g1').style.borderRightColor="rgb(17,17,17)";
        document.getElementById('g2').style.backgroundColor="rgb(17,17,17)";
        document.getElementById("g3").style.borderLeftColor="rgb(17,17,17)";
   }
   function count()
   {
    console.log(input);
     if(input==0)
     {
          //afcdeb    
          A();B();C();D();E();F();
     }
     else if(input==1)
     {
          //cb
          clear();
          C();B();    
     }
     else if(input ==2)
     {
          //abged
          clear();
          A();B();G();E();D();
     }
     else if(input ==3)
     {
          //abgcd
          clear();
          A();B();G();C();D();
     }
     else if(input ==4)
     {
          //fgbc
          clear();
          F();G();B();C();            
     }
     else if(input ==5)
     {
          //afgcd
          clear();
          A();F();G();C();D();
     }
     else if(input==6)
     {
          //afgcde
          clear();
          A();F();G();C();D();E();        
     }
     else if (input ==7)
     {
          //abc
          clear();
          A();B();C();        
     }
     else if(input==8)
     {
          //abcdefg
          clear();
          A();B();C();D();E();F();G();
     }
     else if(input==9)
     {
          //abgfc
          clear();
          A();B();G();C();F();
     }
     else{
        clear();
     }
     input++;
     console.log("input : "+input);      
     if(input==10){input=0;window.location.reload();}     
   }
    setInterval(count,1000);
}