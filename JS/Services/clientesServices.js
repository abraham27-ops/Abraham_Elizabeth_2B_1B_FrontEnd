//Url del endpoint
const API_URL = ""

//Funcion obtener datos
export async function getClientes(){
    try{
        const respuesta = await fetch (API_URL);

        if (!respuesta.ok){
            throw new Error ("Error al obtener los Clientes")
        }
        const clientes = await respuesta.json();
        return clientes;
    } catch (error){
        console.error("Error al cargar los clientes")
        throw error;
    }
}

export async function createClientes(clientes){
    try{
        const respuesta = await fetch (API_URL,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(clientes)
        });
        if (!respuesta.ok){
            throw new Error ("Error al obtener los clientes")
        }

        const nuevoSalon = await respuesta.json();
        return nuevoSalon;
    }
    catch(error){
        console.error("Error al cargar los clientes")
        throw error;
    }
}

export async function deleteClientes(id) {
    try {
        const respuesta = await fetch (`${API_URL}/${id}`,{
            method: "DELETE"
        });
        if (!respuesta.ok){
            throw new Error ("Error al eliminar los Clientes")
        }
        return true;
    } catch (error) {
        console.error ("Error al Borrar los Clientes:" + error);
        throw error;
    }
}

export async function getClient(id){
    try {
        const respuesta = await fetch (`${API_URL}${id}`);
        if (!respuesta.ok){
            throw new Error ("Error al obtener los clientes")
        }
        const clientes = await respuesta.JSON();
        return clientes;
    } catch (error) {
        console.error ("Error al obtener los clientes" );
        throw error;
    }
}

export async function updateCliente(id, Cliente){
    try {
        const respuesta = await fetch (`${API_URL}/${id}`,{
            method: "PUT",
            headers:{
                "content-type":"application/Json"
            },
            body: JSON.stringify(Cliente)
        })
        if (!respuesta.ok){
            throw new Error ("Error al actualizar los Clientes" + respuesta.statusText);
        }
    } catch (error) {
        console.error ("Error al actualizar los Clientes" );
        throw error;
    }
}
