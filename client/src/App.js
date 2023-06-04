import './App.css';
import { Toaster } from 'react-hot-toast';
import AppRouter from './routes';

function App() {
  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: 'black',
            color: 'white',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />
      <AppRouter />
    </div>
  );
}

export default App;
