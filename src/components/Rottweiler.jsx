import rottweiler from '../assets/img/rottweiler.jpg'
import PropTypes from 'prop-types';

export const Rottweiler = ({className}) => {
  return (
    <img src={rottweiler} alt="Rottweiler" className={className}/>
  )
}
Rottweiler
Rottweiler.propTypes ={
    className: PropTypes.string    
}