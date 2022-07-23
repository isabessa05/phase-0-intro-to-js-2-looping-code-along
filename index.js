// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(array, name){

  let message = []
  for (let i=0; i < array.length; i++) {
    message.push(`Thank you, ${array[i]}, for the wonderful ${name} gift!`);
  }
  console.log(message)
  return message;
}

// writeCards(["Charlie", "Samip", "Ali"], "birthday")

function countDown(num){
  while (num >= 0 ){
    console.log(num);
    num--;
}
}