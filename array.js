let text = "Lorem pluritas ploz musicals ipsum advaem";

const getChars = text => text.toLowerCase().replace(/\s/g, '').split('');

const repeatedChar = text => {
    let dic = {};
    for(char of getChars(text)){
        if(getChars(char) in dic){
            ++dic[getChars(char)] // if the char is in the dic, add another one
        } else {
            dic[getChars(char)] = 1 // if the char isn't the dic, add new value
        }
    }
    console.log(dic)
}

repeatedChar(text)
