import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WalletProvider } from '@tronweb3/tronwallet-adapter-react-hooks';
import { WalletModalProvider } from '@tronweb3/tronwallet-adapter-react-ui';
import MainPage from './components/mainPage'; // Import your MainPage
import ProfilePage from './components/ProfilePage'; // Import the ProfilePage (you'll create this)
import { Dataprovider } from './datacontext';
import '@tronweb3/tronwallet-adapter-react-ui/style.css'; // Import necessary wallet styles

function App() {
  return (
    <Dataprovider>
    <WalletProvider>
      <WalletModalProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            
          </Routes>
        </Router>
      </WalletModalProvider>
    </WalletProvider>
    </Dataprovider>
  );
}

export default App;
