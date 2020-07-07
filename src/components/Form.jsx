import React, { Fragment, useState } from 'react';
import uuid from 'uuid/dist/esm-node/v4';
import PropTypes from 'prop-types';

const Form = ({ createDating }) => {
  // Create State of dating
  const [dating, updateDating] = useState({
    pet: '',
    boss: '',
    date: '',
    time: '',
    symptoms: '',
  });

  // Function eject every time user writing on input
  const handleChange = (e) => {
    updateDating({
      ...dating,
      [e.target.name]: e.target.value,
    });
  };

  const [error, updateError] = useState(false);

  // Extract values
  const { pet, boss, date, time, symptoms } = dating;

  // When user press Add Dating
  const submitDating = (e) => {
    e.preventDefault();

    // Validation
    if (
      pet.trim() === '' ||
      boss.trim() === '' ||
      date.trim() === '' ||
      time.trim() === '' ||
      symptoms.trim() === ''
    ) {
      updateError(true);
      return;
    }

    // Delete preview message error
    updateError(false);

    // Set ID
    dating.id = uuid();

    // Create dating
    createDating(dating);

    // Reset form

    updateDating({
      pet: '',
      boss: '',
      date: '',
      time: '',
      symptoms: '',
    });
  };

  return (
    <Fragment>
      <h2>Create Appointment</h2>

      {error ? <p className='alerta-error'>All labels required</p> : null}

      <form onSubmit={submitDating}>
        <label>Name Pet</label>
        <input
          type='text'
          name='pet'
          className='u-full-width'
          placeholder='Name Pet'
          onChange={handleChange}
          value={pet} //update State
        />

        <label>Name Boss</label>
        <input
          type='text'
          name='boss'
          className='u-full-width'
          placeholder='Name Boss'
          onChange={handleChange}
          value={boss}
        />

        <label>Date</label>
        <input
          type='date'
          name='date'
          className='u-full-width'
          onChange={handleChange}
          value={date}
        />

        <label>Time</label>
        <input
          type='time'
          name='time'
          className='u-full-width'
          onChange={handleChange}
          value={time}
        />

        <label>Symptoms</label>
        <textarea
          name='symptoms'
          className='u-full-width'
          onChange={handleChange}
          value={symptoms}
        ></textarea>

        <button type='submit' className='u-full-width button-primary'>
          Add dating
        </button>
      </form>
    </Fragment>
  );
};

Form.propTypes = {
  createDating: PropTypes.func.isRequired,
};

export default Form;
