import { Action } from '../types/index';

export function handleToggle(event: React.ChangeEvent<HTMLInputElement>) : Action {
  return {
    type: 'TOGGLE',
    id: event.target.id,
    value: event.target.value,
  };
}

export function handleText(event: React.ChangeEvent<HTMLInputElement>): Action {
  return {
    type: 'TEXT',
    id: event.target.id,
    value: event.target.value,
  };
}

export function handleSelection(event: React.ChangeEvent<HTMLSelectElement>): Action {
  return {
    type: 'SELECT',
    id: event.target.id,
    value: event.target.value,
  };
}

export function handleTextArea(event: React.ChangeEvent<HTMLTextAreaElement>): Action {
  return {
    type: 'TEXTAREA',
    id: event.target.id,
    value: event.target.value,
  };
}

/*
  DÚVIDA: Como o React.ChangeEvent recebe um elemento genérico,
  eu poderia definir o TextArea e o Input de textos juntos na funcão handleText?
  Digo isso pq tem duas funções super repetidas (handleText, handleTextArea)

  Também pensei em criar uma interface que recebesse valores genéricos para alternar
  Algo como: CustEvent<T exends HtmlElement> extends React.ChangeEvent... mas
  como o change do React em si já espera um generic talvez não faça sentido.
*/
