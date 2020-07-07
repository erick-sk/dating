import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form.jsx';
import Dating from './components/Dating.jsx';

function App() {
  // Datings on local storage
  let datingsStarted = JSON.parse(localStorage.getItem('datings'));
  if (!datingsStarted) {
    datingsStarted = [];
  }

  // Array of dating
  const [datings, saveDatings] = useState(datingsStarted);

  // Use effect for relize kind somethings happens on dating
  useEffect(() => {
    let datingsStarted = JSON.parse(localStorage.getItem('datings'));
    if (datingsStarted) {
      localStorage.setItem('datings', JSON.stringify(datings));
    } else {
      localStorage.setItem('datings', JSON.stringify([]));
    }
  }, [datings]);

  // Function take datings currents and add new
  const createDating = (dating) => {
    saveDatings([...datings, dating]);
  };

  // Function delete datings
  const deleteDating = (id) => {
    const newsDatigs = datings.filter((dating) => dating.id !== id);
    saveDatings(newsDatigs);
  };

  // Message conditional
  const title =
    datings.length === 0 ? 'No appointments' : 'Manage your Datings';

  return (
    <Fragment>
      <h1>Patient Manager</h1>
      <div className='container'>
        <div className='row'>
          <div className='one-half column'>
            <Form createDating={createDating} />
          </div>
          <div className='one-half column'>
            <h2>{title}</h2>
            {datings.map((dating) => (
              <Dating
                key={dating.id}
                dating={dating}
                deleteDating={deleteDating}
              />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
