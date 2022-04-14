/*
params = {message: исходное сообщение, key: массив из 8 четырёхзначных чисел}
*/

function methods2(params){
    let rezult = BlockCipher(params);
    return rezult;
}
function BlockCipher(params){
    let replacementMatrix = [ //таблица замен:
    [1,7,14,13,0,5,8,3,4,15,10,6,9,12,11,2],
    [8,14,2,5,6,9,1,12,15,4,11,0,13,10,3,7],
    [5,13,15,6,9,2,12,10,11,7,8,1,4,3,14,0],
    [7,15,5,10,8,1,6,13,0,9,3,14,11,4,2,12],
    [12,8,2,1,13,4,15,6,7,0,10,5,3,14,9,11],
    [11,3,5,8,2,15,10,13,14,1,7,4,12,9,6,0],
    [6,8,2,3,9,10,5,12,1,14,4,7,11,13,0,15],
    [12,4,6,2,10,5,11,9,14,8,13,7,0,3,15,1]];

    let N1, N2; //32-разрядные накопители
    let CM1, CM2;
    let R;      //32-разрядный регистр циклического сдвига
    let T = [];
    let mess = params.message.split("");
    let binary_message = [];
    let big_binary_mess = "";

    for(let i = 0; i < mess.length; i++){
        binary_message.push(mess[i].charCodeAt(i).toString(2).padStart(16, '0'));
        big_binary_mess = big_binary_mess + binary_message[i];
    }

    for(let i = 0; i < 64; i++){ //деление на блоки и на из правые и левые части
        T.push({L: big_binary_mess.slice(i, i + 32), R: big_binary_mess.slice(32 + i, i + 64)});
    }
    


    return {message: mess, binary_message: binary_message};
}
function encoding_BC(){

}
function decoding_BC(){

}
function addition_2(a, b){
    return a ^ b;
}
function addition_2_32(a, b){
    let count = pow(2, 32);
    let sum;
    if(a + b < count){
        sum = a + b;
    } else {
        sum = a + b - count;
    }
    return sum;
}
function addition_2_32_1(a, b){
    let count = pow(2, 32) - 1;
    let sum;
    if(a + b < count){
        sum = a + b;
    } else {
        sum = a + b - count;
    }
    return sum;
}

export default methods2;