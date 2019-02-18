function average (arr) {
    const sum = arr.reduce((sum,num)=>{
        return sum + num;
    })
    return sum/arr.length
}

module.exports = {average}