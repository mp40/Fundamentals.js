function average (arr) {
    const sum = arr.reduce((sum,num)=>{
        return sum + num;
    })
    return sum/arr.length
}

function containedAverage (arr){
    return arr.reduce((sum, num, dex)=>{
        sum += num
        return dex === arr.length-1 ?
            sum/arr.length :
            sum
    })
}

function reduceAsMap (arr) {
    return arr.reduce((final, num)=>{
        final.push(num*2)
        return final
    },[])
}

module.exports = {average, containedAverage, reduceAsMap}