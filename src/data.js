const author1 = JSON.stringify({
    "id":303,
    "name":'Jessica Voss',
    "posts":['My trip to Las Vegas', 'Spring break in Cartagena!, My trip to Morocco'],
    "desc":["I visited Las Vegas with my family in December 2010. It was like dream comes true.", "Deep dive into Caribbean Islands and rich history. Lift your spirits with a seasonal spring vacay in Colombia.", "Ah, Morocco. A place that was at the top of my bucket list for so long. I had a sense before visiting Morocco that it was a destination I would fall in love with, but after seeing it for myself, I was pleasantly surprised to find that there really is something in Morocco for everyone to enjoy."],
    "imgs": ["https://happinesstravelshere.com/wp-content/uploads/2018/12/Las-Vegas-Excalibur-Hotel.jpg", "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F987925972%2FColombia-Experiences-Tourism-Boom-in-Cartagena%2F960x0.jpg%3Ffit%3Dscale", "https://heremag-prod-app-deps-s3heremagassets-bfie27mzpk03.s3.amazonaws.com/wp-content/uploads/2020/01/15175132/chefchaouen-morocco-heidi-kaden-NncAbldgViA-unsplash-1200x800.jpg"]
  });

const author2 = JSON.stringify({
    "id": 720,
    "name":"Alejandro Armas",
    "posts": ['Reflections of a Digital Nomad', 'High Desert to Ogden', 'Second Week In Greece'],
    "desc":["Hospitality is not only an art, but a reflection of your character.", "So how much water is in the Colorado River anyway ? I made a special visit to Riverside Park in Grand Junction to find out.", "After only 2 weeks, I can confidently say I will be staying here for the time being."],
    "imgs": ["https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Digital_nomad.jpg/1200px-Digital_nomad.jpg", "https://ogden_images.s3.amazonaws.com/www.mauinews.com/images/2018/11/10060203/11-PAUBigBendReflection_DavidPettit.jpg", "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F60775432203575340c0e4174%2FSantorini-island--Greece-%2F960x0.jpg%3FcropX1%3D0%26cropX2%3D1609%26cropY1%3D82%26cropY2%3D987"]
});

const author3 = JSON.stringify({
    "id":1034,
    "name": "Eric Jonston",
    "posts":["Walking in England - Freshwater, Sunday 1999 August 22"],
    "desc": ["Weather is much milder here than in the Lake District. The wind blows to the land. Too windy to wear my sun hat, but it wasn’t particularly cold – jacket in the morning and shirt sleeves in the afternoon. Mix of sun and cloud."],
    "imgs": ["https://mediaim.expedia.com/destination/2/700fccc2abc468a0bc8ab95c8369ea4d.jpg"]
})

const author4 = JSON.stringify({
    "id": 225,
    "name": "Vanessa Hilton",
    "posts": ["Sometime it's all about food and wine! Four days between Cape Town and Franschoek", "Animal Encounters in a World of Wind and Waves"],
    "desc": ["Moving on from Denmark towards Albany on the Bibbulmun Track entails getting either around or across Wilson Inlet first. Unlike each of the other inlets encountered along the Southern Ocean coastline, this crossing can be done neither by wading nor by paddling - unless you have your own canoe or kayak."],
    "imgs": ["https://www.christiesrealestate.com/localimagereader.ashx?imageurl=http%3A%2F%2FRealEstateAdminImages.gabriels.net%2F170%2F78190%2F170-120201111042946904-665.jpg&imagecache=true", "https://www.australiangeographic.com.au/wp-content/uploads/2018/06/sea-kayak-paddling-101.jpg"]
});

const resources = {
    author1,
    author2,
    author3,
    author4
}

export {resources as default};
