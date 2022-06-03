import React from 'react';
import { Link } from 'react-router-dom';

function FooterTienda() {
    
    return (
        
        <footer class="footerTienda text-center text-white">
  
  <div class="container p-4 pb-0">
   
    <section class="mb-4 row">
      
      <div className='col-4'>
      <div class="textoFooterTienda">
         <br/>
          <h6 class="text-uppercase fw-bold">
            Diseño e Impresion 3D
          </h6>
          <br/>
          <p>
            Brindamos servicios de diseño 3D de tipo industrial, low poly, voxelart y comercial.
          </p>
          <p>
            Ofrecemos precios especiales para revendedores y mayoristas.
          </p>
        </div>
    </div>
    <div className='col-5 textoFooterTienda footerRedes'>
        <br/>
        <h5>Encontranos en:</h5>
        <br/>
        <a class="linkEncontranos" href="https://goo.gl/maps/ZHe6UsMTzGJCABPs9" role="button"
        >Estrada 99 - Tandil</a> 
        <br/>
        
        <a class="linkEncontranos" href="https://www.instagram.com/3dart_tandil" role="button"
        >Instagram</a>
        
    </div>
     
     <div className='col-2'>
         <br/>
         <h4 className='textoFooterDev'>DEV:</h4>
         <h6 className='textoFooterDev'>Mauro J. Castaño</h6>
         <a class="btn btn-outline-light btn-floating m-1 botonDevFooter hov-git" href="https://github.com/MauroJotta" role="button"
        >Github</a>
        
         <a class="btn btn-outline-light btn-floating m-1 botonDevFooter hov-whatsapp" href="https://wa.me/5492281654688" role="button"
        >Whatsapp</a>
    </div>
    </section>
  
  </div>


 
  <div class="text-center p-3">
    
  </div>
  
</footer>
    );
}

export default FooterTienda;