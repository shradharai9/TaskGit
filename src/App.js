import React from 'react';
import LoginPage from './components/LoginPage';
import ReceiptList from './components/ReceiptList';
import ReceiptCRUD from './components/ReceiptCRUD';

const App = () => {
  // Your app logic here
  
  return (
    <div>
      {/* Your app content */}
      <LoginPage />
      <ReceiptList />
      <ReceiptCRUD />
    </div>
  );
};

export default App;
