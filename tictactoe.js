var y=0;
        row1= new Array(3).fill(0);
        col1= new Array(3).fill(0);
        row2= new Array(3).fill(0);
        col2= new Array(3).fill(0);
function mark(a,r,c) {
     if (a.innerHTML == "") {    
       if(y%2==0)
       {
            a.innerHTML = "X";
            a.style.color = "blue";   
        if(++row1[r]==3)
        {  for(i=0;i<3;i++)
            document.getElementById(r.toString()+i.toString()).style.background="yellow";}
       if(++col1[c]==3)
       {for(i=0;i<3;i++)
            document.getElementById(i.toString()+c.toString()).style.background="yellow";}
        }
        else
        {
            a.innerHTML = "O";
            a.style.color = "green";
           if(++row2[r]==3)
           {for(i=0;i<3;i++)
            document.getElementById(r.toString()+i.toString()).style.background="yellow";}
       if(++col2[c]==3)
       {for(i=0;i<3;i++)
        document.getElementById(i.toString()+c.toString()).style.background="yellow";}
        }
        y++;
        if((r-c)==0)
        {
            if(document.getElementById('00').innerHTML==document.getElementById('11').innerHTML&&document.getElementById('11').innerHTML==document.getElementById('22').innerHTML)
            {for(i=0;i<3;i++)
            document.getElementById(i.toString()+i.toString()).style.background="yellow";}
        }
        if(Math.abs(r-c)==2||(r==1&&c==1))
        {if(document.getElementById('02').innerHTML==document.getElementById('11').innerHTML&&document.getElementById('11').innerHTML==document.getElementById('20').innerHTML)
            {
            document.getElementById('02').style.background="yellow";
            document.getElementById('11').style.background="yellow";
            document.getElementById('20').style.background="yellow";}}
            }
        }