// function search(k) {
//     return fun.filter(v=>{
//         return (v.name&&v.name.indexOf(k)!==-1)
//             ||(v.city&&v.city.indexOf(k)!==-1)
//             ||(v.county&&v.county.indexOf(k)!==-1)
//             ||(v.address&&v.address.indexOf(k)!==-1)
//     })
// }





let search = function (k) {
        return fun.filter(v => {
        let total = v.name + v.city + v.county + v.address + (v.phone && v.phone.join(''));
        return total.indexOf(k) !== -1;
    });
}


let create = arr => {
    document.querySelector('ul').innerHTML='';
    arr.forEach(v => {
        if(v.county) {
        let content = `
        <a  class="fix" href="tel:${v.phone ? v.phone[0] : '114'}"></a>
        <img src="images/G8IA57ZVFV97Z~8Y4UD6Q7R_09.png" alt="">
			<div>
				<h1>${v.name.concat(v.county)} <span> 推荐</span></h1>
				<h2>${v.address?v.address:'暂无地址'}</h2>
			</div>
			<a href="tel:${v.phone ? v.phone[0] : '114'}">
				<i class="iconfont icon-dianhua"></i>
			</a>
		
                `;
        magic('li','list', content, 'section ul');

        return null
        }
    })
}
create(fun);
    document.querySelector(".input").oninput=function (a) {
    create(search(a.target.value));
}