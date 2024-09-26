import pitbull from '../assets/img/pitbull.jpg'
import PropTypes from 'prop-types';

export const Pitbull = ({className}) => {
  return (
    <img src={pitbull} alt="Pitbull" className={className}/>
  )
}

Pitbull.propTypes ={
    className: PropTypes.string    
}