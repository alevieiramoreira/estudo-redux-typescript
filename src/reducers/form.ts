import { State, Field, Action } from '../types/index';

const myState: State = {
  form: [
    { id: 'checkbox-1', value: false },
    { id: 'checkbox-2', value: false },
    { id: 'radio-1', value: false },
    { id: 'radio-2', value: false },
    { id: 'input-1', value: '' },
    { id: 'input-2', value: '' },
    { id: 'textarea-1', value: '' },
    { id: 'textarea-2', value: '' },
    { id: 'select-1', value: '' },
    { id: 'select-2', value: '' },
  ],
};

export default function form(state = myState.form, action: Action) {
  switch (action.type) {
    case 'TOGGLE':
      return state.map((field: Field) => (
        field.id === action.id ? { ...field, value: !field.value } : field
      ));
    case 'TEXT':
    case 'TEXTAREA':
    case 'SELECT':
      return state.map((field: Field) => (
        field.id === action.id ? { ...field, value: action.value } : field
      ));
    default:
      return state;
  }
}
