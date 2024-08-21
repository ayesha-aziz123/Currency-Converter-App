let url = fetch("https://goweather.herokuapp.com/weather/Ny");

url
  .then((respnse) => {
      console.log(respnse);
    return respnse.json();
    
  })
  .then((res) => {
    console.log(res);
  });
