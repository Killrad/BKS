/*
params = {message: исходное сообщение, key: массив из 8 четырёхзначных чисел}
*/

//console.log(methods2({message: "hello", key:[1123,0350,6431,9202,7265,3304,7782,9955]}))

function methods2(params){
    let rezult = BlockCipher(params);
    return rezult;
}
function BlockCipher(params){
    let replacementMatrix = generateReplaceMatrix();

    let T = [], T_new = [];
    let mess = params.message.split("");
    let binary_message = [];
    let big_binary_mess = "";
    let encode_bin = [];
    let count_bloks = 0;

    for(let i = 0; i < mess.length; i++){ //перевод символов в двоичную систему ascii
        binary_message.push(mess[i].charCodeAt(0).toString(2).padStart(16, '0'));
        big_binary_mess = big_binary_mess + binary_message[i];
    }

    for(let i = 0; i < big_binary_mess.length; i += 64){ //деление на блоки и на правые и левые части
        T.push({L: big_binary_mess.slice(i, i + 32), R: big_binary_mess.slice(32 + i, i + 64).padStart(16, '0')});
        count_bloks++;
    }
    
    for(let i = 0; i < count_bloks; i++){
        T_new.push(encoding_BC(T[i], params, count_bloks, replacementMatrix)); //функция возвращает массив символов
        encode_bin.push(T_new.toString(2).padStart(16, '0'));
    }
    
    return {message: mess, binary_message: binary_message, encode: T_new, encode_binary: encode_bin};
}
function encoding_BC(t, params, count, table){
    let T = [];
    let T_rez;
    let arr_T = [];
    let rezult_str = [];

    T.push(t); //0-е значение

    for(let i = 1; i <= 32; i++){ //цикл зашифрования
        if(i <= 24){
            T.push({L: func(addition_2_32(T[i - 1].L, params.key[(i - 1) % 8]), table[i]) ^ T[i - 1].R, R: T[i - 1].L});

        } else if(i > 24 && i <= 31) {
            T.push({L: func(addition_2_32(T[i - 1].L, params.key[31 - i]), table[i]) ^ T[i - 1].R, R: T[i - 1].L});

        } else if(i == 32) {
            T_rez = {L: (T[i - 1].L).toString(2), R: (func(addition_2_32(T[i - 1].L, params.key[0]), table[i]) ^ T[i - 1].R).toString(2)};
        }
    }
    
    arr_T = T_rez.L.match(/.{1,16}/g);
    
    for(let i = 0; i < arr_T.length; i++){
        //console.log(arr_T[i])
        rezult_str.push(generateReplaceMatrix(parseInt(arr_T[i], 2)));
    }
    console.log(rezult_str)
    
    return arr_T;
}
function func(elem, table){
    let bin_elem = elem.toString(2).padStart(32, '0').slice(0);
    let arr_4elem = bin_elem.match(/.{4}/g);
    let new_elem = "";
    
    
    for(let i = 0; i < arr_4elem.length; i++){
        for(let k = 0; k < table.length; k++){
            if(k == Math.abs(parseInt(arr_4elem[i], 2))){
                console.log(table[k].toString(2))
                new_elem = new_elem + table[k].toString(2).padStart(4, '0');
                break;
            }
        }
    }
    //чёт не то... есть числа больше 4 цифр
    console.log(new_elem)
    
    return new_elem.padStart(32, "0");
}
function generateReplaceMatrix(){
    let table = new Array(33);
    var nums;
    let i, j;
    
    for(let k = 0; k < 33; k++){
        table[k] = new Array(16);
        nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
        i = nums.length;
        let z = 0;
        j = 0;
        
        while (i--) {
            j = Math.floor(Math.random() * (i+1));
            table[k][z] = nums[j];
            nums.splice(j, 1);
            z++;
        }
    }
    
    return table;
}

function addition_2_32(a, b){
    return ((a + b.toString(2).padStart(16, '0')) % (Math.pow(2, 32)));
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
            rezult = String.fromCharCode(num);
    }

    return rezult;
}
export default methods2;