var num =222
var a = {
    num :111,
    say:function(){
        console.log(this.num)
    }
}
var fn = a.say

fn()//输出一
a.say()//输出二
var b = {
    num :333,
    say:function(fn){
        fn()
    }
}
b.say(a.say)//输出三
b.say =a.say
b.say()//输出四