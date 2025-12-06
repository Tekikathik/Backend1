const Destination = async(name)=>{
    console.log("Checking the Services..❉")
    const Finding= await fetch('https://raw.githubusercontent.com/Tekikathik/data/refs/heads/main/data.json')
    const data=await Finding.json();

    if (data.cities[name]){
        console.log("Our Services is available in City..✅")
        const ciiteee=data.cities[name]
        let c=0;
        for(let city in ciiteee){
            if (ciiteee[city]=='available'){
                c=city;
                break;
            }
        }
        if (c==0){
            console.log("No rider is available in the city Sry..❎")
        }
        else {
            console.log("Rider is Founded .✅")
            const rider=data.riders.find(r=>Number(r.id)===Number(c))
            console.log(`Riders Id : ${rider.id}`)
            console.log(`Riders Phone Number : ${rider.phone}`)
            console.log(`Riders vehicle Number : ${rider.vehicle_no}`)
        }

    }
    else{
        console.log("We don't Provide any Services.❎")
    }
}

const prompt = require("prompt-sync")();

let name = prompt("Enter your Destination: ");
// console.log("Hello " + name);

Destination(name);



