class Usuario {
    constructor (nombre,apellido){
        this.nombre = nombre
        this.apellido = apellido


        
this.libro = [

    {nombre: "principito" , autor: "Antoine de Saint-Exupéry"}
    
    {nombre: "Lo que el viento se llevó" , autor: "Margaret Mitchell"}]
    
    this.mascotas = ["gato"]
    }




getFullName (){
    return (`El nombre de usuario es ${this.nombre, this.apellido}`)
}
addMascotas (felipe){
    return(
        this.mascotas.push(felipe)
    )
}

counMascotas() {
    return ((`El usuario tiene ${this.mascotas.length} mascotas`) )
}


addBook (nombre, autor){
    let newBook = {nombre: nombre, autor: autor}
this.libros.push (newBook)
}

getBookNames (){
    return (this.nombre)
}
}

const Usuario = new Usuario ("Pamela", "sch")

Usuario.addBook ("libro1", "libro2")
console.log (usuario.getBookNames())
console.log (usuario)