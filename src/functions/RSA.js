/*
params = {message: входящее сообщение, N: число}

rezult = {}, где
message - первоначальное сообщение; message_num - закодированные буквы сообщения числами от 0 до 32;
encode - закодированное сообщение; decode - раскодированное сообщение в буквах
*/

function methods3(params){
    let rezult = RSA(params);
    return rezult;
}
function RSA(params){
    //подготовка ключей
    let phi_N = eilerFunction(params.N);

    //выплывающее окно с вопросом об открытом ключе
    let Kb;
    do {
        Kb = parseInt(prompt("Введите ключ, удовлетворяющий условиям:\n1 < key < " + phi_N + "\nНОД(key, " + phi_N + ") == 1"));
        
    } while(Kb <= 1 || Kb >= phi_N || NOD([Kb, phi_N]) != 1);

    let u = [0, 1, phi_N];
    let v = [1, 0, Kb];
    let q;
    let t = [];

    while(u[2] != 1) {
        q = parseInt(u[2] / v[2]);
        
        t = [u[0] - (v[0] * q), u[1] - (v[1] * q), u[2] - (v[2] * q)];
        
        u = v.slice(0);
        v = t.slice(0);
        
    }
    
    //let kb = u[0] % phi_N;
    
    let kb = generation_kb(parseInt(params.N), phi_N, Kb);
    //if(kb < 0) { kb *= -1; }
    
    let encode_message = messageEncryption(coding_ascii(params.message), params.N, Kb);
    let decode_message = messageEncryption(encode_message, params.N, kb, 1);
    console.log(decode_message)

    let buf = [];
    //let cut = coding_ascii(encode_message, 1);
    for(let i = 0; i < encode_message.length; i++){
        buf.push(check_nonGraphic_symbols(encode_message[i]));
    }
    //return {message: params.message.split(''), message_num: coding_ascii(params.message), encode: encode_message, decode: decode_message};
    return {message: check_nonGraphic_symbols(encode_message), message_num: encode_message, encode:  params.message.split(''), decode: coding_ascii(params.message)};
}
function messageEncryption(message, N, Kb, code = 0){
    let M = message.slice(0); //массив с числами и символами
    let C = [];
    
    for (let i = 0; i < M.length; i++){
        if(typeof M[i] == 'number') {
            console.log(i, Kb)
            C.push((Math.pow(parseInt(M[i]), Kb) % N));
        } else { C.push(M[i]); }
    }
    
    if(code == 1){ //для декодирования
        C = coding_ascii(C, 1); //из цифр в буквы
    }
    return C;
}
function NOD(A){   
    let n = A.length;
    let x = Math.abs(A[0]);
    
    for (let i = 1; i < n; i++) {
        let y = Math.abs(A[i]);
        while(x && y){ x > y ? x %= y : y %= x; }
        x += y;
    }
    
    return x;
}
function coding_ascii(message, code = 0){
    let new_message = [];

    if(code == 0){ //если шифрование
        let mess = message.split('').slice(0); //сообщение из букв разбивается на массив

        for(let i = 0; i < mess.length; i++){
            new_message.push(mess[i].charCodeAt(0)); //перевод в десятичный  код ascii
        }

    } else { //дешифрование
        for(let i = 0; i < message.length; i++){
            new_message.push(String.fromCharCode(message[i])); //перевод в буквы
        }
    }
    return new_message;
}
function eilerFunction(N){ 
    let phi = 0;
    for (let i = 1; i < N; i++){
        if(NOD([N, i]) == 1) {
            phi++;
        }
    }

    return phi;
}
function generation_kb(N, phi_N){
    let i = 1;
    let kb = i;

    while(i < 1000000){
        console.log((i * N) % phi_N)
        if(Math.abs((i * N) % phi_N) == 1){
            kb = i;
            break;
        }
        
        i++;
    }

    return kb;
}
function check_nonGraphic_symbols(message){
    let rezult = [];
    let str;
    
    for(let i = 0; i < message.length; i++){
        if(message[i] <= 32){
            str = description_nonGraphic_symbols(message[i]);
        } else {
            str = String.fromCharCode(message[i]);
        }
        rezult.push(str);
        
    }

    return rezult;
}
function description_nonGraphic_symbols(num){
    let rezult;

    switch(parseInt(num)){
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

export default methods3;

/*function codingLetters(message, code = 0){
    let alphabet = ' abcdefghijklmnopqrstuvwxyz'.split('');
    let code_message = [];
    let mess;
    
    //во второй раз message приходит массивом чисел
    if(typeof message == 'string'){
        mess = (message.toLowerCase()).split('').slice(0);
    } else { mess = message.slice(0); }
    
    if(code == 0){ //шифрование
        for(let i = 0; i < mess.length; i++){
            let buf = 0;
            for(let j = 0; j < alphabet.length; j++){
                if(mess[i] == alphabet[j]){
                    code_message.push(j);
                    buf = 1;
                    break;
                }
            }
            if(buf == 0){
                code_message.push(mess[i]);
                buf = 0;
            }
        }
    } else {
        for(let i = 0; i < mess.length; i++){
            let buf = 0;
            for(let j = 0; j < alphabet.length; j++){
                if(mess[i] == j){
                    code_message.push(alphabet[j]);
                    buf = 1;
                    break;
                }
            }
            if(buf == 0){
                code_message.push(mess[i]);
                buf = 0;
            }
        }
    }
    
    return code_message;
} */