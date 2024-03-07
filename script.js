//  e8388017a6b341a824bb40ce7cb28e92

// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e8388017a6b341a824bb40ce7cb28e92

// const apikey = "e8388017a6b341a824bb40ce7cb28e92"

// const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=e8388017a6b341a824bb40ce7cb28e92&units=metric"

const city = ()=>{

    const cityinput = document.querySelector("input").value

    return cityinput;


}


const filldata = (data)=>{

    const Temp = document.querySelector(".temp")
    const City = document.querySelector(".city")
    const Humidity = document.querySelector(".humidity")
    const Wind = document.querySelector(".wind")


    Temp.innerText = data.main.temp+"°c"
    City.innerText = data.name
    Humidity.innerText = data.main.humidity+"%"
    Wind.innerText = data.wind.speed+"km/h"



}

// const c =city();
// console.log(c);


const createrror = ()=>{

    const Error = document.querySelector(".error-message")


    // const Error = document.createElement('div')

    const Message = document.querySelector(".message")
    Message.innerText = "City Not Found"

    Error.classList.add('error') 

    // Error.appendChild(Message)



}

const clearerror = ()=>{
    const Error = document.querySelector(".error-message")
    const Message = document.querySelector(".message")
    Error.classList.remove('error')
    Message.innerText="";

}

const getdata = async ()=>{
    
    try{
    const place =  city()
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid=e8388017a6b341a824bb40ce7cb28e92&units=metric"

    const apidata = await fetch(url)

    const data = await apidata.json();
    
    clearerror()
    filldata(data)
    // console.log(data)
    }
    catch{
        createrror()
    }

}

getdata()