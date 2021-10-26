const author1 = JSON.stringify({
    "id":100,
    "name":'Jessica Voss',
    "posts":['My trip to Las Vegas', 'Spring break in Cartagena!, My trip to Morocco'],
    "desc":["I visited Las Vegas with my family in December 2010. It was like dream comes true.", "Deep dive into Caribbean Islands and rich history. Lift your spirits with a seasonal spring vacay in Colombia.", "Ah, Morocco. A place that was at the top of my bucket list for so long. I had a sense before visiting Morocco that it was a destination I would fall in love with, but after seeing it for myself, I was pleasantly surprised to find that there really is something in Morocco for everyone to enjoy."]
  });

const author2 = JSON.stringify({
    "id": 101,
    "name":"Alejandro Armas",
    "posts": ['Reflections of a digital nomad', 'High Desert to Ogden', '2nd Week In Greece'],
    "desc":["Hospitality is not only an art, but a reflection of your character.", "So how much water is in the Colorado River anyway ? I made a special visit to Riverside Park in Grand Junction to find out.", "After only 2 weeks, I can confidently say I will be staying here for the time being."]
});

const author3 = JSON.stringify({
    "id":102,
    "name": "Eric Jonston",
    "posts":["Walking in England - Freshwater, Sunday 1999 August 22"],
    "desc": ["Weather is much milder here than in the Lake District. The wind blows to the land. Too windy to wear my sun hat, but it wasn’t particularly cold – jacket in the morning and shirt sleeves in the afternoon. Mix of sun and cloud."]
})

const author4 = JSON.stringify({
    "id": 103,
    "name": "Vanessa Hilton",
    "posts": ["Sometime it's all about food and wine! Four days between Cape Town and Franschoek...", "Animal Encounters in a World of Wind and Waves"],
    "desc": ["Moving on from Denmark towards Albany on the Bibbulmun Track entails getting either around or across Wilson Inlet first. Unlike each of the other inlets encountered along the Southern Ocean coastline, this crossing can be done neither by wading nor by paddling - unless you have your own canoe or kayak."]
});

const resources = {
    author1,
    author2,
    author3,
    author4
}

export {resources as default};
