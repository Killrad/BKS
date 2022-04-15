/*
params = {message: входное сообщение, A: целое число, B: целое число,
          gamma0: символ, e: число, t: целое число}

окончательный результат = {synch: {}, asynch: {}}, где внутренние объекты содержат
{message: массив из начального сообщение; binary_message: начальное сообщение, где каждый символ - двоичное число;
 encode: закодированное сообщение, binary_encode: каждый символ закодированного сообщения - двоичное число};
*/


function SynchronousStreamCipher(params){
    let inc = []; //символы открытого текста
    let tmp = []; //символы закрытого текста
    let tmp1 = [];
    let gamma = [];
    let encode = [];
    let binary_encode = [];

    gamma.push(params.gamma0.charCodeAt(0).toString(2));
  
    for(let i = 0; i < params.message.length; i++){

        inc.push(params.message.charCodeAt(i).toString(2).padStart(16, '0'));
    
        tmp.push(String.fromCharCode(parseInt(inc[i], 2) ^ parseInt(gamma[i], 2)));
        tmp1.push(check_nonGraphic_symbols(tmp[i]));
    
        //в десятичной системе:
        gamma.push(((params.A * parseInt(gamma[i], 2) + params.B) % params.e).toString(2));
    
        //строка
        encode.push(tmp1[i]);
        binary_encode.push(tmp1[i].charCodeAt(0).toString(2).padStart(16, '0'));
    }
  
    return {message: params.message.split(''), binary_message: inc, encode: encode, binary_encode: binary_encode};
}

function AsynchronousStreamCipher(params) {
    let inc = []; //символы открытого текста
    let tmp = []; //символы закрытого текста
    let tmp1 = [];
    let gamma = [];
    let binary_encode = [];
    let encode = [];

    gamma.push(params.gamma0.charCodeAt(0).toString(2));
  
    for(let i = 0; i < params.message.length; i++){
        inc.push(params.message.charCodeAt(i).toString(2).padStart(16, '0'));
    
        if(i >= params.t){
            let gamma_ = tmp[0].charCodeAt(0);
            
            for(let j = 1; j <= i - 1; j++){
                gamma_ = gamma_ ^ tmp[j].charCodeAt(0);
            }
            gamma_ = gamma_ ^ parseInt(gamma[i], 2);
            tmp.push(String.fromCharCode(parseInt(inc[i], 2) ^ gamma_));
            tmp1.push(check_nonGraphic_symbols(tmp[i]));

        } else {
            tmp.push(String.fromCharCode(parseInt(inc[i],2) ^ parseInt(gamma[i], 2)));
            tmp1.push(check_nonGraphic_symbols(tmp[i]));
            gamma.push(((params.A * parseInt(gamma[i], 2) + params.B) % params.e).toString(2));
        }
    
        encode.push(tmp1[i]);
        binary_encode.push(tmp1[i].charCodeAt(0).toString(2).padStart(16, '0'));
    }
  
    return {message: params.message.split(''), binary_message: inc, encode: encode, binary_encode: binary_encode};
}
function check_nonGraphic_symbols(message){
    let rezult = '';
    let str;
    
    for(let i = 0; i < message.length; i++){
        if(message[i].charCodeAt(i) <= 32){
            str = description_nonGraphic_symbols(message[i].charCodeAt(i));
        } else {
            str = message[i];
        }
        rezult = rezult + str;
        
    }

    return rezult;
}
function description_nonGraphic_symbols(num){
    let rezult;

    switch(num){
        case 0:
            rezult = 'NUL';
            break;
        case 1:
            rezult = 'SON';
            break;
        case 2:
            rezult = 'STX';
            break;
        case 3:
            rezult = 'ETX';
            break; 
        case 4:
            rezult = 'EOT';
            break;
        case 5:
            rezult = 'ENQ';
            break;
        case 6:
            rezult = 'ACK';
            break;
        case 7:
            rezult = 'BEL';
            break;
        case 8:
            rezult = 'BS';
            break;
        case 9:
            rezult = 'TAB';
            break;
        case 10:
            rezult = 'LF';
            break;
        case 11:
            rezult = 'VT';
            break; 
        case 12:
            rezult = 'FF';
            break;
        case 13:
            rezult = 'CR';
            break;
        case 14:
            rezult = 'SO';
            break;
        case 15:
            rezult = 'SI';
            break;
        case 16:
            rezult = 'DLE';
            break;
        case 17:
            rezult = 'DC1';
            break;
        case 18:
            rezult = 'DC2';
            break;
        case 19:
            rezult = 'DC3';
            break; 
        case 20:
            rezult = 'DC4';
            break;
        case 21:
            rezult = 'NAK';
            break;
        case 22:
            rezult = 'SYN';
            break;
        case 23:
            rezult = 'ETB';
            break;
        case 24:
            rezult = 'CAN';
            break;
        case 25:
            rezult = 'EM';
            break;
        case 26:
            rezult = 'SUB';
            break;
        case 27:
            rezult = 'ESC';
            break; 
        case 28:
            rezult = 'FS';
            break;
        case 29:
            rezult = 'GS';
            break;
        case 30:
            rezult = 'RS';
            break;
        case 31:
            rezult = 'US';
            break;
        case 32:
            rezult = '(sp)';
            break;
        default:
            rezult = num;
    }

    return rezult;
}

const methods1 = {
    Sync: SynchronousStreamCipher,
    Async: AsynchronousStreamCipher,
}
export default methods1;