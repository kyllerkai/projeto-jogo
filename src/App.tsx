import React, { Suspense, lazy } from 'react';
import Spinner from './components/SpinnerPage/spinner';
import './styles/scss/main.scss';
// import './scss/index.scss';
import ProviderTheme from './content';
const AppRouter = lazy(() => import('./routes/Routes'));
export default function App() {
  return (
    <ProviderTheme>
        <Suspense fallback={<Spinner />}>
          <AppRouter />
        </Suspense>
    </ProviderTheme>
  );
};
