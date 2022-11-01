import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ROUTES } from './constants/routes';
import { MainLayout } from './features/layout/ui/main-layout/component';
import { UnitContainer } from './features/unit/ui/unit/container';
import { TermsPage } from './pages/terms/component';
import { UnitPage } from './pages/units/component';
import { store } from './root-module';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path={ROUTES.Units} element={<UnitPage />}>
              <Route path={ROUTES.Unit} element={<UnitContainer />} />
            </Route>
            <Route path={ROUTES.Terms} element={<TermsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
