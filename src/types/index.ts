// ACTION
export interface FormAction {
  type: string;
  id: string;
  value: string | boolean;
}

// STATE
export interface State {
  form: Field[];
}

export interface Field {
  id: string;
  value: string | boolean;
}

/*
  OBS: Vi alguns modelos de patterns p/ redux mas não segui nada específico,
  Apenas separei os types das actions e states mesmo...
*/
