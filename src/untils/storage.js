const STORAGE_NAME = "shose_mall"
class Storage{
	static getitem(name,moudle=null){
		const storage=Storage.getStorage()
		if(moudle!=null){
			if(Reflect.has(storage,moudle)){
				return storage[moudle][name]
			}else{
				return ''
			}
			
		}else{
			return storage[name]||''
		}
	}
	static setitem(name,value){
		const storage=Storage.getStorage()
		storage[name]=value
		sessionStorage.setItem(STORAGE_NAME,JSON.stringify(storage))
	}
	static getStorage(){
		return JSON.parse(sessionStorage.getItem(STORAGE_NAME) || '{}')
	}
	static deleteitem( name,moudle){
		const storage=Storage.getStorage()
		if(moudle!=null){
			if(Reflect.has(storage,moudle)){
				Reflect.deleteProperty(storage[moudle],name)
			}
			}else{
				Reflect.deleteProperty(storage,name)
			}
	}
	static clear(){
		sessionStorage.removeItem(STORAGE_NAME)
	}
}
export{
	Storage
}