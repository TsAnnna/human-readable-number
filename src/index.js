module.exports = 

function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
                    'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

    const dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if(number >= 0 && number < 20) return units[number];
    if(number % 10 == 0 && number < 100) return dozens[number / 10];
    if(number % 100 == 0) return `${units[number / 100]} hundred`;
    if(number > 19 && number < 100) return `${dozens[Math.floor(number / 10)]} ${units[number % 10]}`;
    if(number > 99 && number < 1000) {
        let hundredths = Math.floor(number / 100);
        let ten = (number - 100 * hundredths);
        if(ten % 10 == 0) return `${units[hundredths]} hundred ${dozens[ten / 10]}`;
        if(units[ten]) return `${units[hundredths]} hundred ${units[ten]}`;
        return `${units[hundredths]} hundred ${dozens[Math.floor(ten / 10)]} ${units[ten % 10]}`;
    }
    
}

// console.log(toReadable(917));












//The FIRST ETEMPT

// function toReadable (number) {
//     let units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
//                   'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
//     let dozens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
//     let result = '';
  
  
  
//     if(number >= 0 && number < 20) {
//       return result += `${units[number]}`;
//     }
  
//     if(number >= 20 && number < 100) {
//       number = number.toString(); 
//       for(i = 1; i >= 0; i--){
//         if(number[i] == 0) {
//           return result += `${dozens[number[0]]}`;
//         } else {
//           return result += `${dozens[number[0]]} ${units[number[1]]}`;
//         }
//       }
//     }
  
//     if(number >= 100 && number < 1000){
//       number = number.toString(); 
//       for(let i = 1; i <= number.length; i++){
//         if (i == 1) {
//           result += `${units[number[i - 1]]} hundred`;
//         } else if( i == 2 && number[i - 1] != 1) {
//           result += ` ${dozens[number[i - 1]]}`;
//         } else if( number[i - 1] == 0 ) {
//           return result.trim();
//         } else if( number[i - 1] == 1 && i != 3) {
//           result += ` ${units[number.slice(1)]}`;
//           return result;
//         } else {
//           result += ` ${units[number[i - 1]]}`;
//         }
//       }
//       return result.replace('  ', ' ');
//     }
//   }
  