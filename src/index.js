import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import store from './store';
import showResults from './showResults';
import MaterialUiForm from './MaterialUiForm';

import App from './App';
//import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<App />, document.getElementById('content'));

const rootEl = document.getElementById('root');

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <div style={{ padding: 15 }}>
                <MaterialUiForm onSubmit={showResults} />
            </div>
        </MuiThemeProvider>
    </Provider>,
    rootEl,
);
