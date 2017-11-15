import * as React from 'react';
import './../css/main.css';

export interface IMainProps { compiler: string; framework: string; }

export class Main extends React.Component<IMainProps, {}> {
    public render() {
        return <h1 className='red'>Hello from {this.props.compiler} and {this.props.framework}!</h1>;
    }
}
