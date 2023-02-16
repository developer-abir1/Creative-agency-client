import { ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import router from './app/router/router';
import { themes } from './app/utils/themes';

function App() {
  return (
    <ThemeProvider theme={themes}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
