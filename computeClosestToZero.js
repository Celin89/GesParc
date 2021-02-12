function computeClosesToZero(ts){

if(!ts.length)
{
    return 0;
}

closest=0;
for( let i=0; i<ts.length ; i++ )
{
    if(closest===0)
    { 
        closest=ts[i];
    }
    else if (ts[i]>0 && ts[i]<=Math.abs(closest)){
        closest=ts[i];
    } else if (ts[i]<0 && -ts[i]<Math.abs(closest)){
        closest=ts[i];
    }
}
 return closest ;

}

tab = Array(1,2,3);
computeClosesToZero(tab);
