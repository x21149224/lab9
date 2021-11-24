function bottles(){
    for(i=99;i>=0;i=i-1){
		if(i>0){
			document.getElementById("main").innerHTML+="<br />"+i+ " bottles of beer on the wall, "+i+" bottles of beer";
			document.getElementById("main").innerHTML+="<br />"+"Take one down and pass it around, "+(i-1)+" bottles of beer on the wall"+"<br />";
		}
		else{
			document.getElementById("main").innerHTML+="<br />"+"No more bottles of beer on the wall, no more bottles of beer"+"<br />"+"Go to the store and buy some more, 99 bottles of beer on the wall";
		}
	}
}