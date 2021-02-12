function root13(srt){
    /*
     * funcion de cipher, util para entender como funciona el cifrado de claves
     * se pueden cambiar las constantes para ocupar tus propios valores
     * 
     */
    //ignorar caracteres no alfabeticos
    var rooted="";
    var caracteres=[];
    var i, index;
    const length=26, salto=13;
    var caracterActual, caracterNuevo;
    //es importante que abecedario array tengan los mismos caracteres en el mismo orden
    const abecedarioArray=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
    const abecedario ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    srt=srt.toUpperCase();
    caracteres=srt.toString().split('');
    for(i=0;i<caracteres.length;i++){
        caracterActual=caracteres[i];
        index= abecedario.indexOf(caracterActual);
        if(index!=-1){
            index+=salto;
            if(index>=length){
                index-=length;
            }
            caracterNuevo=abecedarioArray[index];
        }
        else{
            caracterNuevo=caracterActual;
        }
        rooted+=caracterNuevo;
    }
    return rooted;
}
