const counters=document.querySelectorAll('.counter');

counters.forEach(counter=>{

counter.innerText='0';

const update=()=>{

const target=+counter.getAttribute('data-target');

const count=+counter.innerText;

const increment=target/100;

if(count<target){

counter.innerText=Math.ceil(count+increment);

setTimeout(update,20);

}else{

counter.innerText=target+'+';

}

}

update();

});
document.getElementById("bookingForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let phone = document.getElementById("phone").value;
let eventType = document.getElementById("event").value;
let date = document.getElementById("date").value;
let location = document.getElementById("location").value;
let packageType = document.getElementById("package").value;

let selectedServices = [];

document.querySelectorAll('input[name="service"]:checked')
.forEach(function(service){
selectedServices.push(service.value);
});

let services = selectedServices.join(", ");

let message =
"📸 KANHA STUDIO BOOKING REQUEST\n\n" +
"👤 Name: " + name + "\n" +
"📞 Phone: " + phone + "\n" +
"🎉 Event: " + eventType + "\n" +
"📅 Date: " + date + "\n" +
"📍 Location: " + location + "\n" +
"💰 Package: " + packageType + "\n" +
"🎥 Services: " + services;

let whatsapp =
"https://wa.me/919580108005?text=" +
encodeURIComponent(message);

window.open(whatsapp, "_blank");

});