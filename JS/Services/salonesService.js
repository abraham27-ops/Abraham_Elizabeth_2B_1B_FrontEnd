//Url del endpoint
const API_URL = ""

//Funcion iobtener datos
export async function getSalones(){
    try{
        const respuesta = await fetch (API_URL);

        if (!respuesta.ok){
            throw new Error ("Error al obtener los productos")
        }
        const salones = await respuesta.json();
        return salones;
    } catch (error){
        console.error("Error al cargar los productos")
        throw error;
    }
}

export async function createSalones(salones){
    try{
        const respuesta = await fetch (API_URL,{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(salones)
        });
        if (!respuesta.ok){
            throw new Error ("Error al crear los salones")
        }

        const nuevoSalon = await respuesta.json();
        return nuevoSalon;
    }
    catch(error){
        console.error("Error al insertar los salones")
        throw error;
    }
}

export async function deleteSalones(id) {
    try {
        const respuesta = await fetch (`${API_URL}/${id}`,{
            method: "DELETE"
        });
        if (!respuesta.ok){
            throw new Error ("Error al eliminar los salones")
        }
        return true;
    } catch (error) {
        console.error ("Error al Borrar los salones:" + error);
        throw error;
    }
}

export async function getLounge(id){
    try {
        const respuesta = await fetch (`${API_URL}${id}`);
        if (!respuesta.ok){
            throw new Error ("Error al obtener los salones")
        }
        const salones = await respuesta.JSON();
        return salones;
    } catch (error) {
        console.error ("Error al obtener los salones" );
        throw error;
    }
}

export async function updateSalon(id, salon){
    try {
        const respuesta = await fetch (`${API_URL}/${id}`,{
            method: "PUT",
            headers:{
                "content-type":"application/Json"
            },
            body: JSON.stringify(salon)
        })
        if (!respuesta.ok){
            throw new Error ("Error al actualizar los salones" + respuesta.statusText);
        }
    } catch (error) {
        console.error ("Error al actualizar los salones" );
        throw error;
    }
}