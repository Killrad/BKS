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
        Kb = parseInt(prompt("Введите ключ, удовлетворяющий условиям:\n1 < key <= " + phi_N + "\nНОД(key, " + phi_N + ") == 1"));
        
    } while(Kb <= 1 || Kb > phi_N || NOD([Kb, phi_N]) != 1);

    let u = [0, 1, phi_N];
    let v = [1, 0, Kb];
    let q;
    let t = [];

    while(v[2] != 0) {
        q = parseInt(u[2] / v[2]);
        
        t = [u[0] - (v[0] * q), u[1] - (v[1] * q), u[2] - (v[2] * q)];
        
        u = v.slice(0);
        v = t.slice(0);
        
    }
    
    let kb = u[0] % phi_N;
    
    let encode_message = messageEncryption(codingLetters(params.message), params.N, Kb);
    let decode_message = messageEncryption(encode_message, params.N, kb, 1);
    
    return {message: params.message.split(''), message_num: codingLetters(params.message), encode: encode_message, decode: decode_message};
}
function messageEncryption(message, N, Kb, code = 0){
    let M = message; //массив с числами и символами
    let C = [];
    
    for (let i = 0; i < M.length; i++){
        if(typeof M[i] == 'number') {
            C.push((Math.pow(parseInt(M[i]), Kb) % N));
        } else { C.push(M[i]); }
    }
    
    if(code == 1){
        C = codingLetters(C, 1);
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
function codingLetters(message, code = 0){
    let alphabet = ' abcdefghijklmnopqrstuvwxyz'.split('');
    let code_message = [];
    let mess;
    
    //во второй раз message приходит массивом чисел
    if(typeof message == 'string'){
        mess = (message.toLowerCase()).split('').slice(0);
    } else { mess = message.slice(0); }
    
    if(code == 0){
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

export default methods3;