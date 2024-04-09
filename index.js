// Code your solutions in this file

  function writeCards(listOfNames, eventName){
    const messageArray = []
    for (let i = 0; i < listOfNames.length; i++) {
        messageArray[i] = `Thank you, ${listOfNames[i]}, for the wonderful ${eventName} gift!`;
    }
    return messageArray;
  }

  function countDown(posInteger){
    let i = posInteger;
    while (i >= 0){
        console.log(i);
        i --;
    }
  }