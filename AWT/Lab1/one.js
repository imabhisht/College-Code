function fun(str){
    console.log(str)
}

function fun2(fun, str){
    fun(str)
}

fun2(fun, "Hello World")




function fun3(myfun, str){
    myfun(str)
}

fun3(function(str){
    console.log(str)
}, "Hello World 2")





