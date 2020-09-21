function search(){

  //Получили текстовое поде 
  let search_text = document.querySelector('#text').value;

var elems = document.querySelectorAll('.cell');
var count = 0;

// Окрашивает прежние красные обратно
for(var i = 0; i < elems.length; i++){
  var q = elems[i];
  if(q.style.background = 'red'){
    q.style.background = 'none';
  }
}

for(var i = 0; i < 5; i++){
  for(var j = 0; j < 5; j++){
    if(substring(search_text, elems[i * 5 + j].innerHTML) && (search_text.length > 0)){
      count++;
      var q = elems[i * 5 + j];
      q.style.background = 'red';
    }
  }
}

  // Выведи текстовоое поле
  if(count > 0){
    document.getElementById("search-results").innerHTML = count;
  }
  else{
    document.getElementById("search-results").innerHTML = 'Ничего не найдено';
  }
}

function substring(str1, str2) {
  var str1_1 = str1.toLowerCase();
  var str2_2 = str2.toLowerCase();

  return (str2_2.includes(str1_1)) ? true : false;

  //return (result > 0) ? true : false;  
}