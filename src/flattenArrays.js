function flatten (arr){
    return arr.reduce((flat, nested)=>{
        return flat.concat(nested)
    },[])
}

module.exports = flatten