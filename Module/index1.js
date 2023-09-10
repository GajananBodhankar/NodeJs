function add(a,b){
    return a+b
}

function prod(a,b){
    return a*b
}
//If there is one function or anything to export, we can use module.exports=name 
//If there are multiple to export, use module.exports={name1,name2}

module.exports={add,prod}