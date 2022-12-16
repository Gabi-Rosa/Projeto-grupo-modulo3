import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from '../components/Footer'



import imgFundo from '../Img/imgFundo.jpg';

const Home = () => {
    return(
        <div>
            <div className='carousel'>
                <img className='rounded float-right shadow-lg' width="500" src = {imgFundo} alt= "imagem de livros"/>
            </div>

            <Footer/>
        </div>
    )
    
}

export default Home