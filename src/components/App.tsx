import * as React from 'react';
import { Main } from './Main';

export class App extends React.Component<{}, {}> {
    public render() {
        return (
            <Main compiler='TypeScript' framework='React' />
        );
    }
}
