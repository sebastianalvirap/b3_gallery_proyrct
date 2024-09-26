import doberman from '../assets/img/doberman.jpg'
import PropTypes from 'prop-types';

export const Doberman = ({className}) => {
  return (
    <img src={doberman} alt="Doberman " className={className}/>
  )
}

Doberman.propTypes ={
    className: PropTypes.string    
}