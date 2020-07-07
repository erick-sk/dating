import React from 'react';
import PropTypes from 'prop-types';

const Dating = ({ dating, deleteDating }) => (
  <div className='cita'>
    <p>
      Pet: <span>{dating.pet}</span>
    </p>
    <p>
      Boss: <span>{dating.boss}</span>
    </p>
    <p>
      Date: <span>{dating.date}</span>
    </p>
    <p>
      Time: <span>{dating.time}</span>
    </p>
    <p>
      Symptoms: <span>{dating.symptoms}</span>
    </p>

    <button
      className='button eliminar u-full-width'
      onClick={() => deleteDating(dating.id)}
    >
      Delete &times;
    </button>
  </div>
);

Dating.propTypes = {
  dating: PropTypes.object.isRequired,
  deleteDating: PropTypes.func.isRequired,
};

export default Dating;
