const tbody = document.querySelector('#tbody');

const getdata = async () => {
  const endpoint = "https://cem.mmtcpamp.com/pvt/getNonExecutableQuote",
        response = await fetch(endpoint, 
            {
                method: 'POST',
                body: {"currencyPair":"XAU/INR","type":"SELL"}
            }
        ),
        data = await response.json(),
        Countries = data;

 Countries.forEach(countryObj => {
    let {Country, NewConfirmed, TotalConfirmed, NewDeaths, TotalDeaths, NewRecovered, TotalRecovered} = countryObj;
    tbody.innerHTML += `<tr>
        <td>${Country}</td>
        <td>${NewConfirmed}</td>
        <td>${TotalConfirmed}</td>
        <td>${NewDeaths}</td>
        <td>${TotalDeaths}</td>
        <td>${NewRecovered}</td>
        <td>${TotalRecovered}</td>
    </tr>`;
 });

}
getdata();