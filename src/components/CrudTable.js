import React, { useState, useEffect } from 'react';
import CrudTableRow from './CrudTableRow';

const CrudTable = ({ data }) => {
  return (
    <div>
      <h3>Tabla de Datos</h3>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Constelacion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="3">Sin datos</td>
            </tr>
          ) : (
            data.map((el) => (
              <CrudTableRow key={el.id} name={el.name} position={el.position} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CrudTable;
