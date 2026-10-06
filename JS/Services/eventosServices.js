//Url del endpoint
const API_URL = ""
const API_URL_CLIENTES = ""
const API_URL_SALONES = ""

//Funcion obtener datos
export async function getSalones(){
    try{
        const respuesta = await fetch (API_URL);

        if (!respuesta.ok){
            throw new Error ("Error al obtener los salones")
        }
        const salones = await respuesta.json();
        return salones;
    } catch (error){
        console.error("Error al cargar los salones")
        throw error;
    }
}

export async function getClientes(){
    try{
        const respuesta = await fetch (API_URL_CLIENTES);

        if (!respuesta.ok){
            throw new Error ("Error al obtener los Clientes")
        }
        const Clientes = await respuesta.json();
        return Clientes;
    } catch (error){
        console.error("Error al cargar los Clientes")
        throw error;
    }
}

export async function getEventos(){
    try{
        const respuesta = await fetch (API_URL_SALONES);

        if (!respuesta.ok){
            throw new Error ("Error al obtener los Eventos")
        }
        const Eventos = await respuesta.json();
        return Eventos;
    } catch (error){
        console.error("Error al cargar los Eventos")
        throw error;
    }
}

export async function createEventos(eventos){
    try{
        const respuesta = await fetch (API_URL,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(eventos)
        });
        if (!respuesta.ok){
            throw new Error ("Error al crear los Eventos")
        }

        const nuevoEvento = await respuesta.json();
        return nuevoEvento;
    }
    catch(error){
        console.error("Error al insertar los Eventos")
        throw error;
    }
}

export async function deleteEventos(id) {
    try {
        const respuesta = await fetch (`${API_URL}/${id}`,{
            method: "DELETE"
        });
        if (!respuesta.ok){
            throw new Error ("Error al eliminar los eventos")
        }
        return true;
    } catch (error) {
        console.error ("Error al Borrar los eventos:" + error);
        throw error;
    }
}

export async function getEvent(id){
    try {
        const respuesta = await fetch (`${API_URL}${id}`);
        if (!respuesta.ok){
            throw new Error ("Error al obtener los eventos")
        }
        const eventos = await respuesta.JSON();
        return eventos;
    } catch (error) {
        console.error ("Error al obtener los eventos" );
        throw error;
    }
}

export async function updateEvento(id, evento){
    try {
        const respuesta = await fetch (`${API_URL}/${id}`,{
            method: "PUT",
            headers:{
                "content-type":"application/Json"
            },
            body: JSON.stringify(evento)
        })
        if (!respuesta.ok){
            throw new Error ("Error al actualizar los Eventos" + respuesta.statusText);
        }
    } catch (error) {
        console.error ("Error al actualizar los Eventos" );
        throw error;
    }
}