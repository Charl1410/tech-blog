module.exports = {
    format_date: (date) => { 
      const newDate = new Date(date)
      // Format date as MM/DD/YYYY
      return newDate.toLocaleDateString();
    },
    
  };
  