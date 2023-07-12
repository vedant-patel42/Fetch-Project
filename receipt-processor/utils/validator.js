validateReceipt = (receiptData) => {
  const { retailer, purchaseDate, purchaseTime, items, total } = receiptData;
  if (!retailer || typeof retailer !== 'string') {
    return 'Retailer name is missing or invalid';
  }
  if (!purchaseDate || !isValidDate(purchaseDate)) {
    return 'Purchase date is missing or invalid';
  }
  if (!purchaseTime || !isValidTime(purchaseTime)) {
    return `Purchase time is missing or invalid`;
  }
  if (!items || !Array.isArray(items) || items.length === 0) {
    return 'Items are missing or invalid';
  }
  if (!total || !isValidAmount(total)) {
    return 'Total amount is missing or invalid';
  }
  return null; // Validation passed
};

// Helper functions for validation
function isValidDate(date) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(date);
}

function isValidTime(time) {
  const regex = /^\d{2}:\d{2}$/;
  return regex.test(time);
}

function isValidAmount(amount) {
  const regex = /^\d+(\.\d{1,2})?$/;
  return regex.test(amount);
}

module.exports = { validateReceipt };