import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'

const Footer = () =>{
    return(
        <div>   
            <footer className= 'text-white py-4 bg-black'>
                <div className='container'>
                    <nav className= 'row'>
                        <Link to ='/Home' className= 'col-12 col-md-3 d-flex aling-items-center justyfy-content-center'>
                        © Direitos Reservados 
                        </Link>
                        <ul className='col-12 col-md-2 list-unstyled'>
                            <li className='font-weigth-bold mb-2 '>Siga-nos nas Redes Socias</li>
                            <li className='d-flex justify-content-between'>
                                <i class="bi bi-instagram"></i>
                                <i class="bi bi-envelope"></i>
                                <i class="bi bi-facebook"></i>
                            </li>
                        </ul>
                    </nav>
                </div>

            </footer>
        </div>
    )
}
export default Footer