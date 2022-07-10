function main()
{
    function delay()
    {    
        function clock()        
        {                                               
                var d = new Date();                
                var x=d.toString();
                x=x.slice(0,15);                                    
                var res = d.toTimeString();
                res=res.toString();
                res=res.split(' ')[0];
                var list = res.split(':')  
                var ampm=list[0];                             
                list[0] = (list[0]%12||12).toString();                
                list[0]=list[0].length==1 ? ('0'+list[0]):list[0];
                var time =(list[0])+':'+(list[1])+':'+(list[2])+" "+(ampm>=12 ? 'PM':'AM');                                            
                document.getElementById('p1').innerText=time;
                list = x.split(" ");                
                var temp=list[1];
                list[1]=list[2];
                list[2]=temp;
                var x= list[0]+"    "+list[1]+"/"+list[2]+"/"+list[3];
                //console.log(x);
                //document.getElementById('date').innerHTML=x;
            }        
        setInterval(clock,1000);        
    }
    delay();
}