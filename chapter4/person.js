function person(name){
    this.name=name
}
person.prototype.talk=function(){
    console.log(`my name ${this.name}`)
}

module.exports=person