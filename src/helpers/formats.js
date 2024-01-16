export const truncateProductName = (name, maxLength) => {
    return name.length > maxLength
        ? `${name.substring(0, maxLength)}...`
        : name;
}

export const formatCurrency = (amount) => {
    const formatter = new Intl.NumberFormat('es-CL', {
      style: 'currency',
      currency: 'CLP',
    });
  
    return formatter.format(amount);
  };