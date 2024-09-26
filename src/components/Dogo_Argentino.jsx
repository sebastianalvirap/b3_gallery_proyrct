import dogoargentino from '../assets/img/dogoargentino.jpg'
import PropTypes from 'prop-types';

export const Dogo_Argentino = ({className}) => {
  return (
    <img src={dogoargentino} alt="Dogo_Argentino" className={className}/>
  )
}
Dogo_Argentino
Dogo_Argentino.propTypes ={
    className: PropTypes.string    
}