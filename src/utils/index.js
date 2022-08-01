export const ApiWebUrl="https://prueba12320211.000webhostapp.com/prueba/"; //http://localhost/api_inventario/

export const usuarioLocal=()=>{
    if(localStorage.getItem('DatosUsuario')!==null){
        return JSON.parse(localStorage.getItem('DatosUsuario'))
    }else{
        return null
    }
}