fetch(`https://api.weatherapi.com/v1/current.json?key=bcef58108fec4111a83150508242002&q=tashkent&aqi=yes`)
    .then(res => res.json())
    .then(data => weatherApp(data))

    form.addEventListener("submit", (e)=> {
        e.preventDefault();
        fetch(`https://api.weatherapi.com/v1/current.json?key=bcef58108fec4111a83150508242002&q=${inp.value == "" ? "tashkent": `${inp.value}`}&aqi=yes`)
    .then(res => res.json())
    .then(data => weatherApp(data))
    inp.value = ""
    }) 


    function weatherApp(data){
        country.innerText = data.location.region;
        icon.setAttribute("src", `${data.current.condition.icon}`)
        condition.innerText = data.current.condition.text
        temp.innerText = `${data.current.temp_c} ℃`;
        time.innerText = data.location.localtime;
    }