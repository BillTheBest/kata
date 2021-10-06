function getCard() {
    var card = [];
    var key = {'B': [1,15], 'I':[16,30], 'N':[31,45], 'G': [46,60], 'O':[61,75]};
    var repeat;
    
    function random(arr){
      return Math.round(Math.random()*(arr[1]-arr[0]))+arr[0]
    }
    
    for(var column in key){
      (column == 'N') ? repeat = 4 : repeat = 5;
      var count = 0;
      
      while(count < repeat){
        var tile = column + random(key[column])
        if(card.indexOf(tile) == -1){
          card.push(tile);
          count++
        }
      }
      
    }
    
    return card
}

getCard()
