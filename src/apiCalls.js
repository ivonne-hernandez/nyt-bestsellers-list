const apiKey = process.env.REACT_APP_API_KEY;

const getCurrentWeeksBestSellers = () => {
  return fetch(`https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      return response.json();
    });
}

module.exports = {
  getCurrentWeeksBestSellers
}