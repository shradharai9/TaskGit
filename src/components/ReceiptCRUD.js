import React, { useState } from 'react';

const ReceiptCRUD = () => {
  const [receiptNumber, setReceiptNumber] = useState('');
  const [receiptDate, setReceiptDate] = useState(new Date());
  const [personName, setPersonName] = useState('');
  const [rate, setRate] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [remarks, setRemarks] = useState('');

  const handleSave = () => {
    // Save the receipt data to local storage
  };

  const handleCancel = () => {
    // Clear the form fields and go back to Receipt List page
  };

  return (
    <div>
      <h1>Receipt CRUD</h1>
      <label>
        Receipt Number:
        <input type="text" value={receiptNumber} disabled />
      </label>
      <br />
      <label>
        Receipt Date:
        <input type="date" value={receiptDate} onChange={e => setReceiptDate(e.target.value)} />
      </label>
      <br />
      <label>
        Person's Name:
        <input type="text" value={personName} onChange={e => setPersonName(e.target.value)} />
      </label>
      <br />
      {/* Add other form fields for rate, quantity, amount, remarks */}
      <button type="button" onClick={handleSave}>Save</button>
      <button type="button" onClick={handleCancel}>Cancel</button>
    </div>
  );
};

export default ReceiptCRUD;
