//----------Constructor de objetos---------------//

class articulos {
    constructor(id, marca, tipo, modelo, precio){
        this.id = id
        this.marca = marca.toUpperCase()
        this.tipo = tipo.toUpperCase()
        this.modelo = modelo.toUpperCase()
        this.precio = precio
    }
}


//------------Instanciar Objetos------------------//
const producto1 = new articulos (1, "akai", "controlador midi", "mpk mini plus", 800.00)

const producto2 = new articulos (2, "Aokeo", "panel acustico", "Escudo de aislamiento de micrófono", 200)

const producto3 = new articulos (3, "CODN", "panel acustico", "Escudo de aislamiento de micrófono", 350)

const producto4 = new articulos (4, "Rokit", "speakers ", "KRK RP5 Profesional Bi-Ampl", 1000)

const producto5 = new articulos (5, "M-Audio", "interfaz de audio", "AIR - Interfaz de audio USB C de 192 x 4", 800)

const producto6 = new articulos (6, "Pioneer", "audifonos", "DJ CUE1", 200)


//----------Arreglo de productos------------//
const stock = [producto1, producto2, producto3, producto4, producto5, producto6]

const carrito = []

console.log(stock)

//----------Funciones--------------------//
function menu(){
    let salirMenu = false
    do{
        salirMenu = elegirServicio (salirMenu)
    }while(!salirMenu)
}

function elegirServicio(salir){
    let opcionIngresada = parseInt(prompt(`Bienvenido
    1 - Ver productos disponibles
    2 - Buscar Productos
    3 - Agregar Producto    
    4 - Salir del Menu`))

    switch(opcionIngresada){
        case 1:
            productosDisponibles(stock)
        break;
        case 2: 
            filtrar()
        break;
        case 3:
            agregarProducto()
        break;
        case 4:
            alert("Gracias por su visita")
            salir= true
            return salir
        break;
        default:
            alert("Ingresa una opcion de la lista")
        break;
    }
}

//---------Funcion para ver productos de array---------//
function productosDisponibles(array){
    let listaDeProductos = array.forEach(productos => {
        alert(`Estos son nuestros productos disponibles:\n 
        ID: ${productos.id}        
        Marca: ${productos.marca}
        Tipo: ${productos.tipo}
        Modelo: ${productos.modelo}
        Precio: ${productos.precio}
        `)        
    });    
}
//---------Funcion para filtrar---------------//
function filtrar (array) {
    //-----Menu para filtrado-------//
    let opcionDeFiltrado = parseInt(prompt(`
        1_ Buscar Remeras por MARCA
        2_ Buscar Remeras por PRECIO
        3_ Buscar Remeras por MODELO
        4_ Buscar Remeras por TIPO
    `))
    switch(opcionDeFiltrado){
        case 1:
            productosPorMarca(array)
        break;
        case 2:
            productosPorPrecio(array)
        break;
        case 3:
            productosPorModelo(array)
        break;
        case 4:
            productosPorTipo(array)
        break;
        default:
            alert("Elegi una opcion de la Lista")
        break
    }    
}
//-----Funciones de busqueda ------//
function productosPorMarca(){
    let MarcaBuscado = prompt("Ingresa la marca que buscas")    
    let elementosEcontrados = stock.filter(p => p.marca == MarcaBuscado.toUpperCase())
    if(elementosEcontrados == 0){
        alert("No contamos con esa marca en Stock")
    }else{
        productosDisponibles(elementosEcontrados)
    }
}

function productosPorTipo(){
    let TipoBuscado = prompt("Ingresa el tipo de producto que buscas")    
    let elementosEcontrados = stock.filter(p => p.tipo == TipoBuscado.toUpperCase())
    if(elementosEcontrados == 0){
        alert("No contamos con ese producto en Stock")
    }else{
        productosDisponibles(elementosEcontrados)
    }
}

function productosPorPrecio(){
    let precioBuscado = parseInt(prompt("Ingresa el precio buscado (Min: $100 - Max:$6000)"))
    let elementosEcontrados = stock.filter(p => p.precio == precioBuscado)
    if(elementosEcontrados == 0){
        alert("No contamos con productos de ese Precio en Stock")
    }else{
        productosDisponibles(elementosEcontrados)
    }
}

function productosPorModelo(){
    let modeloBuscado = prompt("Ingresa el modelo de remera que buscas")    
    let elementosEcontrados = stock.filter(p => p.modelo == modeloBuscado.toUpperCase())
    if(elementosEcontrados == 0){
        alert("No contamos con ese modelo en Stock")
    }else{
        productosDisponibles(elementosEcontrados)
    }
}



//---------Funcion para agregar producto------//
function agregarProducto(){
    let marca = prompt("Ingresa el marca de producto")
    let tipo = prompt("Ingresa el tipo de producto")
    let modelo = prompt("Ingresa el modelo del producto")
    let precio = parseInt(prompt("Ingresa el precio del producto")) 
    let idNuevo = parseInt(prompt("Ingresa el ID del producto"))

    
    const idDuplicado = stock.some((p) => p.id === idNuevo)
    if (!idDuplicado){
        let nuevoProducto = "producto" + idNuevo            
    }else{
        alert("El ID ya existe, por favor ingresa uno diferente")
        agregarProducto()
    }
    
    const nuevoProducto = new articulos(idNuevo, marca, tipo, modelo, precio)
    console.log(nuevoProducto)
    stock.push(nuevoProducto)
}

menu()