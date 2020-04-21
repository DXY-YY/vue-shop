const formatprice=function(price){
	const arr=price.toString().split(".")
	let num=parseInt(arr[1])
	if(isNaN(num)||num===0){
		return arr[0]
	}
	return arr[0]+arr[1]/100
}
export{
	formatprice
}