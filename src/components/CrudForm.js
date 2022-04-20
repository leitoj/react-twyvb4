import React, { useState, useEffect } from 'react';

const initalForm = {
  name: '',
  position: '',
  id: null,
};

const CrudForm = () => {
  const [form, setForm] = useState(initalForm);

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};
  const handleReset = (e) => {};

  return (
    <div>
      <h3>Agregar</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          onChange={handleChange}
          value={form.name}
        />
        <input
          type="text"
          name="position"
          placeholder="Poscicion"
          onChange={handleChange}
          value={form.position}
        />
        <input type="reset" value="Enviar" onClick={handleReset} />
        <input type="submit" value="Limpiar" />
      </form>
    </div>
  );
};

export default CrudForm;
