import {Link} from 'react-router-dom';
import {Akita} from'./Akita'
import {Doberman} from'./Doberman'
import { Dogo_Argentino } from './Dogo_Argentino';
import { Pastor_Aleman } from './Pastor_Aleman';
import { Pitbull } from './Pitbull';
import { Rottweiler } from './Rottweiler';


export const Znavigation = () => {
  return (
    <div className='container thumbnail-container mt2'>
      <Link to='/Akita' className='links'>
        <figure className='thumbnail-image-size'>
          <Akita />
          <figcaption>Akita</figcaption>
        </figure>
      </Link>
     
      <Link to='/Doberman' className='links'>
        <figure className='thumbnail-image-size'>
          <Doberman />
          <figcaption>Doberman</figcaption>
        </figure>
      </Link>

      <Link to='/Dogo_Argentino' className='links'>
        <figure className='thumbnail-image-size'>
          <Dogo_Argentino />
          <figcaption>Dogo_Argentino</figcaption>
        </figure>
      </Link>

      <Link to='/Pastor_Aleman' className='links'>
        <figure className='thumbnail-image-size'>
          <Pastor_Aleman />
          <figcaption>Pastor_Aleman</figcaption>
        </figure>
      </Link>

      <Link to='/Pitbull' className='links'>
        <figure className='thumbnail-image-size'>
          <Pitbull />
          <figcaption>Pitbull</figcaption>
        </figure>
      </Link>

      <Link to='/Rottweiler' className='links'>
        <figure className='thumbnail-image-size'>
          <Rottweiler />
          <figcaption>Rottweiler</figcaption>
        </figure>
      </Link>
   
    
    </div>
  )
}
