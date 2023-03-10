import logoBQ from '../../Resources/LogoAjustado.png';
import breakfast from '../../Resources/Desayuno.jpg'

function WaiterUI() {
      
    return (
      <>

        <header className='mainHeader'>
          <img src={logoBQ} alt="" className='mainLogo'></img>
        </header>

        <section>
          <h1>
            ¡Hola, Natalia!
          </h1>
          <p>Mesera</p>
          <h2>
            ¡Vamos a hacer de hoy un día delicioso!
          </h2>

        </section>
        <section className='optionForProduct'>
          <article>
            <div>
              <img alt="" src={breakfast}className="imageForProduct"></img>
            </div>
            <div className='buttonForProduct'>
              <p>perro</p>
              
            </div>



          </article>
          <article>
            
          </article>



        </section>


       
        <footer>
          <p>Made by Yeny and Natha</p>
        </footer>

      </>
    )
}

export { WaiterUI }