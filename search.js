let text = "te se sacará de la plataform y se buscará otro similar que este autorizado su publicación. Lo que no se puede es publicar sin autorización de los autores, es decir siempre respetar el derecho de autor."

const cleanText = text => {
    const cleanead = text.toLowerCase().replace(/[,!.]/g, "").split(" ");
    return cleanead;
} 

const repeatedWord = text => {
    let dic = {};
    const separatedWord = text.split(" ");
    for(word of separatedWord){
        if(cleanText(word) in dic)
            ++dic[cleanText(word)];
        else
            dic[cleanText(word)] = 1;
    }
    console.log(dic)
}

console.log(repeatedWord(text));
