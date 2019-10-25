import './sass/main.sass';
import App from './components/App';

const render = (MyApp) => {
  ReactDOM.render(
      <MyApp />,
      document.getElementById('root'),
  );
};

render(App);
