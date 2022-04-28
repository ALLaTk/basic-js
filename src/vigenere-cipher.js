const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

   constructor(reverse = true) {
    this.reverse = reverse;
  }

  encrypt(message, key) {

    if (message === undefined || key === undefined){
      throw new Error('Incorrect arguments!');
    }
  
    const messageUpper = message.toLocaleUpperCase();
    const keyUpper = key.toLocaleUpperCase();
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const str = keyUpper.repeat(Math.ceil(messageUpper.length / keyUpper.length));
  
    const index = [];
    const result = [];
    const code = [];
  
    for (let i = 0; i < messageUpper.length; i++) {
      if (alph.indexOf(messageUpper[i]) === -1){
       index.push(messageUpper[i]);
      } else {
       index.push(alph.indexOf(messageUpper[i]));
      };
    };
   
    let  count = 0;
  
    for (let i = 0; i < index.length; i++) {
     if (typeof index[i] !== 'number'){ 
       result.push(index[i]) ;
       count--;
     } else {
       result.push(index[i] + alph.indexOf(str[count]));
     };
      count++;
    };
    
    result.forEach(el => {
      if (typeof el !== 'number'){
        code.push(el);
      } else if (el >= alph.length){
        code.push(alph[el - alph.length]);
      } else {
        code.push(alph[el]);
      };
    });
     
    if(this.reverse){
      return code.join('');
    } else{
      return code.reverse().join('');
    }
  }

  decrypt(message, key) {

    if (message === undefined || key === undefined){
      throw new Error('Incorrect arguments!');
    }

    const messageUpper = message.toLocaleUpperCase();
    const keyUpper = key.toLocaleUpperCase();
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const str = keyUpper.repeat(Math.ceil(messageUpper.length / keyUpper.length));
    
    const index = [];
    const result = [];
    const code = [];
  
    for (let i = 0; i < messageUpper.length; i++) {
      if (alph.indexOf(messageUpper[i]) === -1){
       index.push(messageUpper[i])
      } else {
       index.push(alph.indexOf(messageUpper[i]))
      }
    } 
   
    let  count = 0;
  
    for (let i = 0; i < index.length; i++) {
     if (typeof index[i] !== 'number'){ 
       result.push(index[i]) 
       count--
     } else {
       result.push(index[i] - alph.indexOf(str[count]))
     }
      count++
    }
  
    result.forEach(el => {
      if (typeof el !== 'number'){
        code.push(el)
      } else if (el < 0){
        code.push(alph[alph.length + el])
      } else {
        code.push(alph[el])
      }
    });
 
    if(this.reverse){
      return code.join('');
    } else{
      return code.reverse().join('');
    }
  }
}

module.exports = {
  VigenereCipheringMachine
};
