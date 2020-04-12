import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';

import { Field } from '../../types/index';

interface StateProps {
  form: Field[],
}

export default function Form() {
  const dispatch: Dispatch = useDispatch();
  const form = useSelector((state: StateProps) => state.form);

  // DÚVIDA: Devo definir um retorno do tipo Action pro useCallback abaixo?

  const handleText = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'TEXT', id: event.target.id, value: event.target.value });
  }, [dispatch]);

  const handleTextArea = useCallback((event: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({ type: 'TEXTAREA', id: event.target.id, value: event.target.value });
  }, [dispatch]);

  const handleToggle = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'TOGGLE', id: event.target.id, value: event.target.value });
  }, [dispatch]);

  const handleSelection = useCallback((event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'SELECT', id: event.target.id, value: event.target.value });
  }, [dispatch]);


  return (
    <form>
      <input type="text" value={form['input-1']} id="input-1" onChange={handleText} />
      <input type="text" value={form['input-2']} id="input-2" onChange={handleText} />

      <textarea value={form['textarea-1']} id="textarea-1" onChange={handleTextArea} />
      <textarea value={form['textarea-2']} id="textarea-2" onChange={handleTextArea} />

      <input type="checkbox" value={form['checkbox-1']} id="checkbox-1" onChange={handleToggle} />
      <input type="checkbox" value={form['checkbox-2']} id="checkbox-2" onChange={handleToggle} />

      <input type="radio" value={form['radio-1']} id="radio-1" onChange={handleToggle} />
      <input type="radio" value={form['radio-2']} id="radio-2" onChange={handleToggle} />

      <select value={form['select-1']} id="select-1" onChange={handleSelection}>
        <option value="" disabled selected>selecionar...</option>
        <option>arroz</option>
        <option>feijão</option>
      </select>

      <select value={form['select-2']} id="select-2" onChange={handleSelection}>
        <option value="" disabled selected>selecionar...</option>
        <option>carne</option>
        <option>batata</option>
      </select>
      <ul>
        {form.map((field) => (
          <li key={field.id}>{field.value.toString()}</li>
        ))}
      </ul>
    </form>
  );
}
