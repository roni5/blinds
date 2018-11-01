import * as React from 'react';

export interface IFormProps {
  text: string;
  age?: number;
}
 export interface Istate {
  email: "string" ;
  name:  "string" ;
}

export default class IForm extends React.Component<IFormProps, Istate> {
     state: Istate = {
      email: "string",
      name:  "string",
    }
  public render() {
    const { text } = this.props;
    const { name } = this.state;
    return (
      <div>
        <div> {text} </div>
        <div> { name} </div>
      </div>
    );
  }
}


