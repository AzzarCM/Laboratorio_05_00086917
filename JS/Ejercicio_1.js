
function texto(word)
{
	word=word.replace(/ /g, "");
 
	for (var i=0;i<word.length;i++){
		if(word[i]!=word[word.length-i-1]){
			return false;
		}
	}
	return true;
}
//Ahora pegamos las alertas

if(texto())
{
	alert("ES PALINDROMO!!");
}else{
	alert("NO ES PALINDROMO");
}
