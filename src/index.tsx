import ReactDOM from 'react-dom/client';
import App from './App';
import 'antd/dist/reset.css';
import { Provider } from 'react-redux';
import CreateStore from './configureStore';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = CreateStore();
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
