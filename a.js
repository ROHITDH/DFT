
function hello(){
    var x = document.getElementById("tx").value;
    var res = x.split(",");
    //alert(res);
    console.log("res ",res);
    var x1 =  intt(res);
    var x2 = DFT(x1);
    console.log("X1 ",x1);
    console.log("X2 ",x2);
    document.getElementById("o").textContent =x2;
}

function intt(a)
{
    var x=[];
    var temp=0;

    for (var i=0;i<a.length;i++) {
        temp = Number(a[i])
        if(isNaN(temp)) return [NaN];
        x.push(temp);
    }
    return x;
}

function DFT(xn)
{
    if(isNaN(xn[0])) return "Invalid";
    var k = 0;
    var n = 0;
    const N = xn.length;
    var X = [];
    var temp1 = 0;
    var temp2 = 0;

    for(k = 0; k < N;k++)
    {
        temp1 = 0;
        temp2 = 0;

        for(n = 0;n<N;n++)
        {
          temp1 += xn[n]*(Math.cos((-2*Math.PI*k*n)/(N)));
          temp2 += xn[n]*(Math.sin((-2*Math.PI*k*n)/(N)));
        }
        X.push(String((Math.round(temp1*1000)/1000))+((temp2<0)?"-":"+")+String(Math.abs((Math.round(temp2*1000)/1000)))+"i"+"\t");
    }
    return X;
}