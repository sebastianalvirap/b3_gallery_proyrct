import pastoraleman from '../assets/img/pastoraleman.jpg'
import PropTypes from 'prop-types';

export const Pastor_Aleman = ({className}) => {
  return (
    <img src={pastoraleman} alt="Pastor Aleman" className={className}/>
  )
}

Pastor_Aleman.propTypes ={
    className: PropTypes.string    
}