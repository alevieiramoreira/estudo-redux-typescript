import React, { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';

import { Field, Action } from '../../types/index';
import * as formActions from '../../actions/form';

interface StateProps {
  form: Field[],
}

interface ActionProps {
  handleToggle(event: React.ChangeEvent<HTMLInputElement>): Action,
  handleText(event: React.ChangeEvent<HTMLInputElement>): Action,
  handleSelection(event: React.ChangeEvent<HTMLSelectElement>): Action,
  handleTextArea(event: React.ChangeEvent<HTMLTextAreaElement>): Action
}

type Props = StateProps & ActionProps;
/*
  Dúvida: o único jeito que funcionou foi interseccionar minhas props num type
  Se declaro as Props Separadas como Component<StateProps, ActionProps>
  Me é retornado o erro:

  Property 'handleSelection' does not exist on type 'Readonly<StateProps>
  & Readonly<{ children?: ReactNode; }>'.ts(2339)
*/
class Form extends Component<Props> {
  constructor(props: Props) {
    super(props);
    console.log('state', props);
  }

  componentDidMount() { }

  render() {
    const {
      form,
      handleText,
      handleSelection,
      handleToggle,
      handleTextArea,
    } = this.props;

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
}

const mapStateToProps = (state: StateProps) => ({
  form: state.form,
});

const mapDispatchToProps = (dispatch: Dispatch): ActionProps => (
  bindActionCreators(formActions, dispatch)
  // Percebi que o bindActionCreators não ficou claro pra mim...
);

export default connect(mapStateToProps, mapDispatchToProps)(Form);
