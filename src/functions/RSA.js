/*
message - входящее сообщение
input = {P: , Q: }
*/

function methods3(message, input){
    let rezult = RSA(message, input);
    return rezult;
}
function RSA(message, input){
    //пользователь В:
    //подготовка ключей
    let N = input.P * input.Q;
    let phi_N = eilerFunction(N);
    
    //выплывающее окно с вопросом об открытом ключе
    let Kb;
    do {
        Kb = parseInt(prompt("Введите ключ, удовлетворяющий условиям:\n1 < key <= " + phi_N + "\nНОД(key, " + phi_N + ") == 1"));
        
    } while(Kb <= 1 || Kb > phi_N || NOD([Kb, phi_N]) != 1);

    let u = [0, 1, phi_N];
    let v = [1, 0, Kb];
    let q;
    let t = [];

    let i = 0;
    while(u[2] != 1) {
        q = parseInt(u[2] / v[2]);
        
        t = [u[0] - (v[0] * q), u[1] - (v[1] * q), u[2] - (v[2] * q)];
        
        u = v.slice(0);
        v = t.slice(0);
        
        i++
    }

    //let count1 = (Kb * u[0] + phi_N * u[1]) % phi_N;
    let kb = u[0] % phi_N;
    
    let encode_message = messageEncryption(message, N, Kb);
    let decode_message = messageEncryption(encode_message, N, kb);

    return {encode: encode_message, decode: decode_message};
}
function messageEncryption(message, N, Kb){
    //предположим, что числа вводятся через пробел
    let M = message.split(' ');
    let C = '';
    
    for (let i = 0; i < M.length; i++){
        C = C + (Math.pow(parseInt(M[i]), Kb) % N).toString();
        
        if(i < M.length - 1) { C = C + ' '; }
    }

    return C;
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

export default methods3;