import React, { useState } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';

const initalDB = [
  {
    id: 1,
    name: 'Shoyo Hinata',
    position: 'Bloqueador Central',
  },
  {
    id: 2,
    name: 'Nishinoya',
    position: 'Libero',
  },
  {
    id: 3,
    name: 'Kenma',
    position: 'Colocador',
  },
  {
    id: 4,
    name: 'Oikawa',
    position: 'Armador',
  },
  {
    id: 5,
    name: 'Miya',
    position: 'Armador',
  },
];

const CrudApp = () => {
  const [db, setDb] = useState(initalDB);

  return (
    <div>
      <h2>CRUD APP</h2>
      <CrudForm />
      <CrudTable data={db} />
    </div>
  );
};

export default CrudApp;
