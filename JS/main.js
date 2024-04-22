// Selecciono los elementos del DOM necesarios
const contenedorServicios = document.querySelector("#contenedor-servicios");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".servicio-agregar");
const numerito = document.querySelector("#numerito");
const mensajeAgregarCarrito = document.querySelector("#mensaje-carrito");
const msjsinServicios = document.querySelector("#msjsinServicios");

// Defino un array de servicios con sus detalles
const servicios = [
  {
    id: "reggaeton",
    titulo: "beats de reggaeton",
    imagen: "./img/beats/reggaeton.jpg",
    descripcion:
      "servicion de creacion de beats de reggaeton",
    categoria: {
      nombre: "beats",
      id: "beats",
    },
    precio: 500,
  },
  {
    id: "rock",
    titulo: "beat rock",
    imagen: "./img/beats/rock.jpg",
    descripcion:
      "servicion de creacion de beats de rock",
    categoria: {
      nombre: "beats",
      id: "beats",
    },
    precio: 600,
  },
  {
    id: "pop",
    titulo: "beat pop",
    imagen: "./img/beats/pop.jpg",
    descripcion: "servicion de creacion de beats de pop",
    categoria: {
      nombre: "beats",
      id: "beats",
    },
    precio: 1000,
  },
  {
    id: "salsa",
    titulo: "beat salsa",
    imagen: "./img/beats/salsa.jpg",
    descripcion: "servicion de creacion de beats de salsa",
    categoria: {
      nombre: "beats",
      id: "beats",
    },
    precio: 1200,
  },
  {
    id: "clasica",
    titulo: "beat musica clasica",
    imagen: "./img/beats/clasica.jpg",
    descripcion: "servicion de creacion de beats de musica clasica",
    categoria: {
      nombre: "beats",
      id: "beats",
    },
    precio: 1400,
  },
  {
    id: "reggae",
    titulo: "reggae",
    imagen: "./img/beats/reggae.jpg",
    descripcion: "servicion de creacion de beats de musica reggae",
    categoria: {
      nombre: "beats",
      id: "beats",
    },
    precio: 500,
  },
  {
    id: "grabacion personalizada",
    titulo: "grabacion con orquesta",
    imagen: "./img/grabacion/img2.jpg",
    descripcion:
      "Servicio de grabacion personalizada con orquesta en vivo",
    categoria: {
      nombre: "grabacion",
      id: "graba",
    },
    precio: 3200,
  },
  {
    id: "grabacion personalizada",
    titulo: "grabacion con sinfonica",
    imagen: "./img/grabacion/img1.jpg",
    descripcion:
      "Servicio de grabacion personalizada con sinfonica en vivo",
    categoria: {
      nombre: "grabacion",
      id: "graba",
    },
    precio: 5200,
  },
  
  {
    id: "grabacion personalizada",
    titulo: "grabacion musica urbana en estudio profesional",
    imagen: "./img/grabacion/img3.webp",
    descripcion:
      "Servicio de grabacion personalizada con productor urbano",
    categoria: {
      nombre: "grabacion",
      id: "graba",
    },
    precio: 2500,
  },
  {
    id: "grabacion personalizada",
    titulo: "grabacion musica urbana en a domicilio",
    imagen: "./img/grabacion/img4.jpg",
    descripcion:
      "Servicio de grabacion personalizada en cualquier lugar del planeta",
    categoria: {
      nombre: "grabacion",
      id: "graba",
    },
    precio: 2500,
  },
  
  {
    id: "distribucion",
    titulo: "promocion de canciones en spotify",
    imagen: "./img/promocion/spotify.jpg",
    descripcion:
      "Servicio de distribucion y promocion en plataformas digitales",
    categoria: {
      nombre: "promocion",
      id: "promo",
    },
    precio: 2000,
  },
  {
    id: "distribucion",
    titulo: "promocion de canciones en deezer",
    imagen: "./img/promocion/DEZER.png",
    descripcion:
      "Servicio de distribucion y promocion en plataformas digitales",
    categoria: {
      nombre: "promocion",
      id: "promo",
    },
    precio: 2000,
  },
  {
    id: "distribucion",
    titulo: "promocion de canciones en youtube",
    imagen: "./img/promocion/youtube.png",
    descripcion:
      "Servicio de distribucion y promocion en plataformas digitales",
    categoria: {
      nombre: "promocion",
      id: "promo",
    },
    precio: 2000,
  },
  {
    id: "distribucion",
    titulo: "promocion de canciones en apple music",
    imagen: "./img/promocion/app.jpeg",
    descripcion:
      "Servicio de distribucion y promocion en plataformas digitales",
    categoria: {
      nombre: "promocion",
      id: "promo",
    },
    precio: 2000,
  },
  
];

// Función para cargar los servicios en el contenedor del DOM
function cargarServicios(serviciosElegidos) {
  if (serviciosElegidos && serviciosElegidos.length > 0) {
    // Verifica si el array está vacío o tiene servicios
    contenedorServicios.innerHTML = ""; // Vacía el contenedor de servicios
    let html;
    for (const el of serviciosElegidos) {
      // Recorre los servicios y crea una tarjeta para cada uno
      const { imagen, titulo, descripcion, precio, id } = el;

      html = `<div class="card">
                  <img class="servicio-imagen" src="${imagen}" alt="${titulo}">
                  <div class="servicio-detalle">
                      <h3 class="servicio-titulo">${titulo}</h3>
                      <p class="servicio-descripcion">${descripcion}</p>
                      <p class="servicio-precio">$${precio}</p>
                      <button class="servicio-agregar" id="${id}">Agregar</button>
                   </div>
                </div>`;
      //se la agrego al contenedor
      contenedorServicios.innerHTML += html;
    }
  } else {
    msjsinServicios.innerHTML = "No se encontraron servicios disponibles.";
    msjsinServicios.classList.remove("disable");
  }
  actualizarBotonesAgregar(); // Actualiza los botones de agregar al carrito
}

// Función para manejar los eventos de clic en los botones de categorías
//Crea todas las tarjetas, luego al hacer click sobre cada servicio en el assets, los filtra segun su categoria y sino si vuelvo a todos, vuelve a generarlo al hacer click
botonesCategorias.forEach((boton) => {
  cargarServicios(servicios);
  boton.addEventListener("click", (e) => {
    botonesCategorias.forEach((boton) => boton.classList.remove("active"));
    e.currentTarget.classList.add("active");

    if (e.currentTarget.id != "todos") {
      // Filtra los servicios según la categoría seleccionada o muestra todos
      const servicioCategoria = servicios.find(
        (servicio) => servicio.categoria.id === e.currentTarget.id
      );
      tituloPrincipal.innerText = servicioCategoria.categoria.nombre;

      const serviciosBoton = servicios.filter(
        (servicio) => servicio.categoria.id === e.currentTarget.id
      );
      cargarServicios(serviciosBoton);
    } else {
      tituloPrincipal.innerText = "Todos los Servicios";
      cargarServicios(servicios);
    }
  });
});

// Función para actualizar los botones de agregar al carrito
function actualizarBotonesAgregar() {
  botonesAgregar = document.querySelectorAll(".servicio-agregar");
  botonesAgregar.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
}

let serviciosEnCarrito;
let serviciosEnCarritoLS = localStorage.getItem("servicios-en-carrito");

if (serviciosEnCarritoLS) {
  serviciosEnCarrito = JSON.parse(serviciosEnCarritoLS);
  actualizarNumerito();
} else {
  serviciosEnCarrito = [];
}

// Función para agregar un servicio al carrito al hacer clic en el botón correspondiente
function agregarAlCarrito(e) {
  const idBoton = e.currentTarget.id;
  const servicioAgregado = servicios.find(
    (servicio) => servicio.id === idBoton
  );

  // Verificar si el servicio ya está en el carrito
  const categoria = servicioAgregado.categoria.id;
  if (
    serviciosEnCarrito.some((servicio) => servicio.categoria.id === categoria)
  ) {
    // Si el servicio ya está en el carrito, muestra un mensaje indicando que ya está agregado
    mensajeAgregarCarrito.innerHTML = `Ya tienes un servicio de "${servicioAgregado.categoria.nombre}" en el carrito. Si necesitas cambiar, elimina del carrito y vuelve a agregar el servicio deseado`;
    mensajeAgregarCarrito.classList.remove("disable");
    setTimeout(() => {
      mensajeAgregarCarrito.classList.add("disable");
    }, 5000);
  } else {
    // Si el servicio no está en el carrito, lo agrega y muestra un mensaje de éxito
    mensajeAgregarCarrito.innerHTML = `Servicio agregado al carrito con éxito.`;
    mensajeAgregarCarrito.classList.remove("disable");
    setTimeout(() => {
      mensajeAgregarCarrito.classList.add("disable");
    }, 5000);

    // Añadir el servicio al carrito
    servicioAgregado.cantidad = 1;
    serviciosEnCarrito.push(servicioAgregado);
    actualizarNumerito();
    // Guarda los servicios en el carrito en el local storage
    localStorage.setItem(
      "servicios-en-carrito",
      JSON.stringify(serviciosEnCarrito)
    );
  }

  // Si el servicio ya está en el carrito, incrementa su cantidad; de lo contrario, lo añade con cantidad 1
  /* if (serviciosEnCarrito.some((servicio) => servicio.id === idBoton)) {
    const index = serviciosEnCarrito.findIndex(
      (servicio) => servicio.id === idBoton
    );
    serviciosEnCarrito[index].cantidad++;
  } else {
    servicioAgregado.cantidad = 1;
    serviciosEnCarrito.push(servicioAgregado);
  }
  actualizarNumerito();  */ // Actualiza el contador del carrito

  // Guarda los servicios en el carrito en el local storage
  /*   localStorage.setItem(
    "servicios-en-carrito",
    JSON.stringify(serviciosEnCarrito)
  ); */
}

// Función para actualizar el contador del carrito
function actualizarNumerito() {
  // Calcula la cantidad total de servicios en el carrito
  let nuevoNumerito = serviciosEnCarrito.reduce(
    (acc, servicio) => acc + servicio.cantidad,
    0
  );
  numerito.innerText = nuevoNumerito; // Actualiza el texto del contador en el DOM
}
