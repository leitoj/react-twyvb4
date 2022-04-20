import React, { useState, useEffect } from 'react';

const CrudTableRow = ({ id, name, position }) => {
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{position}</td>
      <td>
        <button>Editar</button>
        <button>Eliminar</button>
      </td>
    </tr>
  );
};

export default CrudTableRow;
