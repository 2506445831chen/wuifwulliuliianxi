// 给原始数据变形
function f(arr) {
    let k, v, o = {};
    arr.forEach(item => {
        k = item.city;
        v = item.county;
        if (!o[k]) {
            o[k] = {}
        }else if(!o[k][v]){
            o[k][v]=true;
        }
    });
    return o;
}
// 调用函数
let o=f(fun);
// function magic(tag,className,content,target){
//     let x=document.createElement(tag);
//     x.classList.add(className);
//     x.innerHTML=content;
//     let y=document.querySelector(target);
//     y.appendChild(x);
//     return null;
// }
// 变力得到的合适的数据
for(let city in o){
    let jk=o[city];
    magic('li','fixed',city,'.contate ul');
    for(let county in jk){
        if(county!=='undefined'){
            magic('li','nav',county,'.contate ul')
        }
    }

}


