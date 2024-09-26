import akita from '../assets/img/akita.jpg'
import PropTypes from 'prop-types';

export const Akita = ({className}) => {
  return (
    <img src={akita} alt="Akita Japones" className={className}/>
  )
}

Akita.propTypes ={
    className: PropTypes.string    
}