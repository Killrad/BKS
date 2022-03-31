/*
message - входящее сообщение
input = {A: целое число, B: целое число,
    gamma0: символ, e: число, t: целое число}
*/

function methods(message, input){

    //синхронный поточный шифр:
    SynchronousStreamCipher(message, input);
    AsynchronousStreamCipher(message, input);
    //message11 = AsynchronousStreamCipher("xyzwnfs", {A: 3, B: 5, gamma0: 'z', e: 32, t: 2});
    //console.log(message11);
    //console.log(AsynchronousStreamCipher(message11, {A: 3, B: 5, gamma0: 'z', e: 32, t: 2}));
}

function SynchronousStreamCipher(message, input){

    let inc = []; //символы открытого текста
    let tmp = []; //символы закрытого текста
    let gamma = [];
    let cryp_message = '';

    gamma.push(input.gamma0.charCodeAt(0).toString(2));
  
    for(let i = 0; i < message.length; i++){

        inc.push(message.charCodeAt(i).toString(2));
    
        tmp.push(String.fromCharCode(parseInt(inc[i],2) ^ parseInt(gamma[i], 2)));
    
        //в десятичной системе:
        gamma.push(((input.A * parseInt(gamma[i], 2) + input.B) % input.e).toString(2));
    
        //строка
        cryp_message += tmp[i];
    }
  
    return cryp_message;
}

function AsynchronousStreamCipher(message, input) {
    let inc = []; //символы открытого текста
    let tmp = []; //символы закрытого текста
    let gamma = [];
    let cryp_message = '';

    gamma.push(input.gamma0.charCodeAt(0).toString(2));
  
    for(let i = 0; i < message.length; i++){

        inc.push(message.charCodeAt(i).toString(2));
    
        if(i >= input.t){
            let gamma_ = tmp[0].charCodeAt(0);
            
            for(let j = 1; j <= i - 1; j++){
                gamma_ = gamma_ ^ tmp[j].charCodeAt(0);
            }
            gamma_ = gamma_ ^ parseInt(gamma[i], 2);

            //ошибка тут:
            tmp.push(String.fromCharCode(parseInt(inc[i], 2) ^ gamma_));
            console.log(tmp[i].charCodeAt(0));

        } else {

            tmp.push(String.fromCharCode(parseInt(inc[i],2) ^ parseInt(gamma[i], 2)));
            gamma.push(((input.A * parseInt(gamma[i], 2) + input.B) % input.e).toString(2));
        }
    
        cryp_message += tmp[i];
    }
  
    return cryp_message;
}

export default methods;