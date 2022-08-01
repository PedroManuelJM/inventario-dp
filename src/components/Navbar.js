import React, { useState,useEffect } from "react";
import { useNavigate ,Link} from "react-router-dom";
import { usuarioLocal } from "../utils";
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDoorClosed, faHome, faComputer,faBuilding,faUser } from '@fortawesome/free-solid-svg-icons'
import '../styles/navbar.css';
import logo from '../assets/images/escudo_peru.svg';

const Navbar = ({show})=>{
   
    /* importante para no permitir mostrar la página */
    const navigate = useNavigate();
    const [usuario, setUsuario] = useState(null);  
    const usuarioL = usuarioLocal();
    
    const CerrarSesion= () => {
            localStorage.removeItem("DatosUsuario")
            setUsuario(null)
            Swal.fire({
              title: `Cerrando Sesión`,
              text: ' Usted '+ usuario.nombres + usuario.apellidos +' ha cerrado sesión.',
              timer: 2000,
              icon: "success",
              timerProgressBar: true,
            })
            navigate('/login')
    };
          
    useEffect(()=> {
        if (usuarioL !== null) {
      
           setUsuario(usuarioL)
       
         }else{
           Swal.fire({
                title: `Página no Permitida`,
                text: ' ¡ Debes iniciar sesión. !',
                timer: 1000,
                icon: "info",
                timerProgressBar: true,
          })
           // direcciona a la página principal
           navigate('/login')
         
         }
      
       }, [])
    
        return(
           <div className={show ? 'sidenav active': 'sidenav'}>
       
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 465 468.625" className="logo animation-up-down">
            <g xmlns="http://www.w3.org/2000/svg">
                <path className="st0" d="M283.418,366.381c1.204-0.107,1.992-0.126,2.003-0.126c0.079-0.001,0.156-0.006,0.234-0.013   c0.707-0.067,17.441-1.78,26.927-12.607c11.74-13.396,16.817-36.768,6.043-47.998c-5.288-5.523-11.604-7.916-17.783-6.743   c-6.163,1.171-11.581,5.78-14.139,12.03c-0.547,1.34-0.099,2.88,1.081,3.717c1.182,0.837,2.785,0.747,3.864-0.211   c2.701-2.395,5.343-3.396,7.435-2.828c1.879,0.512,3.459,2.356,4.337,5.063c0.792,2.438,0.311,5.736-1.172,8.018   c-0.498,0.767-1.549,2.076-2.979,2.225c-4.637,0.503-11.471-5.2-18.692-11.208c-7.133-5.933-15.217-12.657-24.321-16.377   c-12.339-5.062-46.242-12.499-70.014,5.392c-0.102,0.061-0.207,0.113-0.303,0.185c-0.585,0.444-14.24,10.908-17.279,22.029   c-4.928,10.428-5.575,20.155-1.928,29.002c-2.984,2.376-4.621,5.347-4.621,8.584c0,7.11,7.985,12.762,18.499,13.378   c-1.079,1.652-1.684,3.482-1.684,5.424c0,7.537,8.965,13.44,20.411,13.44c8.343,0,15.349-3.14,18.549-7.756   c3.196,4.616,10.196,7.756,18.528,7.756c11.452,0,20.423-5.903,20.423-13.44c0-1.921-0.59-3.76-1.675-5.427   c6.715-0.405,12.625-2.905,15.866-6.691c0.513-0.081,1.015-0.291,1.45-0.637C274.902,368.635,279.441,367.292,283.418,366.381z    M300.193,355.411c-2.965,1.557-6.01,2.615-8.587,3.319c-0.105-0.029-0.209-0.062-0.317-0.08   c1.799-14.718-6.46-29.035-10.047-34.343c5.06,4.069,9.746,7.344,14.285,8.446C298.411,337.483,301.342,345.059,300.193,355.411z    M274.636,362.456c-0.601-2.081-2.695-5.928-5.633-12.55c-4.555-10.262-14.587-23.895-36.562-30.569   c-29.221-8.88-44.786-4.604-52.229-0.343c0.475-0.568,0.956-1.123,1.443-1.656c0.394-0.184,0.755-0.447,1.055-0.8   c2.191-2.587,4.57-4.796,7.076-6.706c10.159-3.603,25.683-5.19,48.111,1.623c29.932,9.111,38.922,30.834,41.402,39.746   c0.842,3.007,1.436,6.431,1.473,9.211c-0.244,0.033-0.489,0.066-0.743,0.103c-0.578,0.086-1.088,0.334-1.509,0.679   C277.179,361.57,275.876,361.988,274.636,362.456z M229.154,333.134c-4.434,1.082-8.089,3.13-10.408,5.783   c-3.498-3.999-10.031-6.645-17.688-6.645c-2.638,0-5.135,0.326-7.431,0.902c7.495-2.564,16.975-3.304,26.704-1.901   C223.333,331.695,226.289,332.33,229.154,333.134z M201.058,338.495c8.127,0,14.199,3.805,14.199,7.208   c0,1.817-1.681,3.738-4.475,5.128c-0.757,0.367-1.578,0.697-2.448,0.98c-2.193,0.719-4.709,1.098-7.276,1.098   c-8.119,0-14.187-3.804-14.187-7.206C186.871,342.293,192.698,338.495,201.058,338.495z M210.507,358.431   c0.744-0.253,1.591-0.477,2.477-0.663c1.586-0.311,3.236-0.469,4.9-0.469c8.356,0,14.177,3.803,14.177,7.218   c0,3.412-5.821,7.215-14.177,7.215c-8.361,0-14.187-3.803-14.187-7.215C203.698,362.175,206.36,359.789,210.507,358.431z    M222.238,345.703c0-3.409,5.821-7.208,14.175-7.208c1.421,0,2.747,0.114,4.076,0.344c5.643,0.921,10.01,3.825,10.01,6.655v0.208   c0,2.315-2.718,4.768-6.852,6.107c-2.203,0.72-4.697,1.1-7.262,1.1C228.03,352.909,222.238,349.111,222.238,345.703z    M178.925,351.311c-0.232-1.256-0.301-2.513-0.16-3.755c0.338-2.946,1.783-5.714,4.185-8.128c-1.468,1.864-2.302,3.992-2.302,6.276   c0,1.925,0.593,3.741,1.657,5.382C181.151,351.093,180.024,351.18,178.925,351.311z M255.335,350.824   c0.057,0.112,0.104,0.226,0.16,0.339c-0.118-0.008-0.236-0.01-0.356-0.017C255.21,351.04,255.269,350.931,255.335,350.824z    M168.333,364.517c0-1.651,1.388-3.39,3.813-4.777c1.745-0.998,3.915-1.723,6.328-2.103c1.294-0.224,2.655-0.338,4.046-0.338   c8.367,0,14.198,3.803,14.198,7.218c0,1.887-1.736,3.389-2.768,4.113c-2.813,1.972-6.978,3.102-11.43,3.102   C174.159,371.732,168.333,367.929,168.333,364.517z M199.336,390.535c-8.361,0-14.188-3.479-14.188-6.892   c0-3.407,6.067-6.893,14.188-6.893c0.047,0,0.095,0,0.145,0s0.099-0.323,0.15-0.318c0.085,0.008,0.171-0.15,0.258-0.147   c4.152,0.084,8.04,1.07,10.667,2.854c1.112,0.751,2.978,2.264,2.978,4.218C213.533,386.772,207.703,390.535,199.336,390.535z    M236.413,390.535c-8.354,0-14.175-3.803-14.175-7.217c0-1.096,0.58-2.204,1.728-3.297c0.041-0.033,0.081-0.067,0.122-0.103   c2.634-2.356,7.356-3.817,12.325-3.817c2.572,0,5.079,0.382,7.288,1.115c4.135,1.317,6.912,3.768,6.912,6.102   C250.613,386.732,244.78,390.535,236.413,390.535z M266.797,366.507c-1.606,2.517-6.537,5.225-13.567,5.225   c-2.357,0-4.602-0.309-6.692-0.922c-4.482-1.288-7.495-3.817-7.495-6.293c0-2.344,2.683-4.738,6.843-6.102   c2.21-0.73,4.749-1.116,7.343-1.116c1.661,0,3.265,0.152,4.791,0.458c5.452,1.048,9.407,3.891,9.407,6.759   C267.428,365.186,267.221,365.84,266.797,366.507z"/>
                <path className="st0" d="M450.5,291.911V121.99c0-1.94-0.601-3.735-2.275-4.715c-1.674-0.98-3.536-1.002-5.228-0.053l-17.497,9.918   V67.398c0-1.992-1.077-3.826-2.822-4.787c-1.747-0.961-3.876-0.897-5.557,0.17l-83.218,52.685   c-0.752-0.127-1.534,0.154-2.296,0.395c-14.457,4.538-27.939,6.889-40.068,6.889c-0.001,0-0.004,0-0.006,0   c-40.273,0-53.372-25.517-53.898-26.553c-0.866-1.755-2.654-3.447-4.61-3.447c-0.01,0-0.018,0-0.028,0   c-1.945,0-3.732,1.64-4.612,3.377c-0.538,1.06-13.638,26.293-53.905,26.293c-12.123,0-25.604-2.182-40.065-6.724   c-0.358-0.112-0.721-0.111-1.084-0.144L49.881,62.751c-1.684-1.067-4.31-1.115-6.054-0.155c-1.745,0.961-3.327,2.81-3.327,4.802   v59.741l-17.205-9.918c-1.693-0.949-4.091-0.927-5.762,0.053c-1.674,0.98-3.032,2.775-3.032,4.715v169.921   c0,2.491,0.412,43.134,34.167,77.613c30.238,30.885,77.626,46.544,140.28,46.544c0.514,0,1.147-0.093,1.62-0.226   c23.779,6.886,37.201,12.693,37.201,31.885c0,2.852,2.348,5.165,5.201,5.165c2.852,0,5.182-2.314,5.182-5.166   c0-19.33,13.555-25.081,37.657-32.033c0.61,0.235,1.268,0.376,1.958,0.376c62.654,0,109.33-15.659,139.567-46.544   C451.088,335.045,450.5,294.402,450.5,291.911z M153.867,241.969c7.363-2.616,9.906-16.415,9.906-16.415s10.795,7.068,18.928,3.529   c0,3.232-1.027,8.73-1.027,8.73s-1.229,4.047,1.153,8.546c1.196,2.259,2.008,7.483,2.436,10.641   c-3.902-0.124-7.942-0.175-12.09-0.175c-6.801,0-13.322,0.131-19.397,0.512C153.605,251.172,154.028,248.189,153.867,241.969z    M283.925,231.75h13.799c-0.672,7-0.698,14.497,1.416,25.002c-0.199-0.003-0.4,0.058-0.601,0.056l-16.266-1.365   C284.389,245.355,284.497,238.75,283.925,231.75z M396.756,254.494c-9.525,9.874-22.723,14.773-39.285,14.716   c-4.042-11.528-5.997-22.484-6.53-32.629l63.67-35.077C414.689,206.931,414.263,236.342,396.756,254.494z M52.398,201.505   l62.698,34.542c-0.49,10.29-2.437,21.424-6.55,33.152c-16.048-0.138-28.927-5.017-38.254-14.664   C52.817,236.46,52.331,206.945,52.398,201.505z M439.5,131.314v105.719l-27.909,15.625c14.337-22.183,13.909-49.843,13.909-52.423   v-60.567L439.5,131.314z M413.5,133.265l-47.477,26.903c-2.766-3.156-10.195-12.24-25.593-36.41l73.07-46.43V133.265z    M290.366,132.988c12.089-0.001,25.897-2.074,39.934-6.165c15.171,23.96,23.509,34.721,27.643,39.548   c-7.387,11.737-27.442,50.217-12.295,100.378c-7.736-6.663-22.184-9.144-39.809-9.819c-2.369-10.917-2.171-18.18-1.461-25.18   h26.263c2.861,0,1.86-4.807,1.86-8.637v-24.269c0-18.579-9.879-19.619-9.879-19.619s-6.337-0.936-9.487-9.608   c-3.148-8.669-8.243-15.7-16.028-16.638c-7.553-0.907-19.911,5.274-29.535,10.546c-5.896,3.231-6.272,7.586-7.071,13.826   c-1.945,15.233-7.862,14.528-7.862,14.528c-2.86,0-5.138,3.134-5.138,6.964v24.269c0,3.83,2.324,8.637,5.184,8.637h24.608   c0.636,7-0.595,14.022-3.305,25.313c-17.379,0.88-30.487,3.736-39.487,11.011v-155.6   C244.5,121.615,261.649,132.991,290.366,132.988z M224.5,116.503v148.601c-7-4.78-18.388-6.907-32.019-7.764   c-1.387-7.469-1.316-24.952,0.589-29.935c11.121-2.508,11.694-13.782,12.235-23.488c0.392-7.149-2.3-32.06-2.3-32.06   c1.126-0.726,5.976-2.033,6.839-2.42c1.465-0.184,2.899-0.82,3.465-2.347c0.45-1.797,1.128-4.458,0.343-5.507   c-0.831-1.048-6.237-1.618-7.29-3.483c-2.552-2.754-5.064-4.574-7.586-4.258c-3.338,0.227-6.764,0.183-8.716,3.779   c-3.04-2.23-6.237,0.706-9.581-0.25c0,0-0.957,11.44,11.369,10.286l1.267,30.476c0,0,0.889,6.158-7.876,4.461   c-6.479-1.252-22.103-7.233-29.596-5.078c-5.647,1.624-11.81,4.465-15.372,16.315c-3.556,11.85,2.286,7.85,2.286,7.85l6.098-4.155   c0,0,4.449,10.312-0.63,16.161c-4.043,4.652-2.288,8.187-2.288,8.187s1.74,10.648,1.54,15.992   c-11.435,1.162-20.825,3.509-26.803,8.015c14.658-49.739-5.349-87.847-12.691-99.512c4.132-4.827,12.173-15.584,27.353-39.547   c14.041,4.093,27.12,6.165,39.206,6.165C198.932,132.987,214.5,124.64,224.5,116.503z M52.5,77.328l72.648,46.014   c-15.002,23.561-22.258,32.955-25.281,36.473L52.5,133.265V77.328z M40.5,139.669v60.567c0,2.58-0.927,30.24,13.409,52.423   L25.5,237.033V131.316L40.5,139.669z M28.693,308.896l69.894,38.503c0.033,0.018,0.067,0.029,0.1,0.047   c5.851,17.59,19.057,31.335,37.819,45.765c5.198,3.996,10.789,7.215,16.541,9.921c-41.603-4.872-73.752-18.633-95.833-41.096   C39.127,343.638,31.726,322.97,28.693,308.896z M233.005,427.918c-8.403-13.261-25.942-18.21-44.21-23.363   c-15.991-4.513-32.527-9.603-45.994-19.956c-34.626-26.635-47.359-48.85-28.539-101.85H351.75   c18.825,53,6.091,75.211-28.54,101.848c-13.469,10.354-30.004,15.232-45.995,19.745   C258.947,409.497,241.408,414.657,233.005,427.918z M409.95,361.877c-22.314,22.794-54.962,36.656-97.298,41.401   c5.862-2.737,11.561-6.001,16.853-10.07c18.605-14.31,31.748-27.946,37.674-45.321c0.424-0.107,0.841-0.267,1.242-0.488   l69.936-38.526C435.357,322.877,428.002,343.439,409.95,361.877z"/>
                <path className="st0" d="M232.463,88.936c31.831-0.337,56.846-16.283,56.846-36.6c0-20.319-25.015-36.263-56.846-36.602   c-31.961,0.339-56.847,16.283-56.847,36.602C175.616,72.652,200.502,88.599,232.463,88.936z M232.463,29.739   c16.465,0.027,28.118,6.399,28.118,14.846c0,6.037-6.601,11.446-16.847,13.757c-9.727,3.164-6.079,6.55-11.129,9.817   c-0.009,0.004-0.142-0.006-0.142-0.006c-0.009,0-0.019,0.01-0.027,0.006c-5.05-3.267-1.345-6.653-11.072-9.817   c-10.245-2.311-16.933-7.721-16.933-13.757C204.431,36.138,216.475,29.766,232.463,29.739z"/>
            </g>
            </svg><span style={{color:"#FFF" ,maxWidth:"64px"}}> &nbsp; Inventario Despacho Presidencial  </span>
            
            <hr style={{color:"#FFF"}}></hr>
            {usuario!== null ? 
            <>
            <span style={{color:"#FFF"}}> <FontAwesomeIcon icon={faUser} style={{color:"#28ca40"}}/>  &nbsp;  {usuario.nombres}  </span>
            <br></br>
            <span style={{color:"#FFF"}}>&nbsp; &nbsp;&nbsp; {usuario.apellidos} </span>
            </>
            : <> </>}
                <ul>
                    <li> <Link to="/"> <FontAwesomeIcon icon={faHome}/>&nbsp;Inicio </Link></li>
                    <li> <Link to="/dependencia"> <FontAwesomeIcon icon={faBuilding}/> &nbsp;Dependencia </Link></li>
                    <li> <Link to="/equipo"> <FontAwesomeIcon icon={faComputer}/>&nbsp;Equipo </Link></li>
                    <button className="btn btn-outline-dark" onClick={CerrarSesion} style={{color:"#FFF"}}>  <FontAwesomeIcon  icon={faDoorClosed}  /> Cerrar Sesión  </button>
                </ul>
    
           </div> 
        )
    }
    
    export default Navbar;
/*

<img src={logo} alt="logo" className="logo animation-up-down"/> <span style={{color:"#FFF" ,maxWidth:"64px"}}> &nbsp; Inventario Despacho Presidencial  </span>

import React, { useState } from "react";
import { useNavigate ,Link} from "react-router-dom";


const Navbar = () => {

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <div className="container" style={{padding:"0px"}}>
                    
                   <a className="navbar-brand" href="/"> INVENTARIO </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dependencia"> <i className="fa-solid fa-desktop"> </i> Dependencia </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/equipo"> <i className="fa-solid fa-desktop"> </i> Equipos </Link>
                            </li>
                       
                            
                                
                       
                        </ul>
               
                    </div>
               
                </div>
      </nav>

    </>
  );
};

export default Navbar;



*/