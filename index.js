const back = document.querySelector('#back');
const next = document.querySelector('#next');

const artsArray = [
    {
        artPic: "1.jpeg",
        artName: `"Mona Lisa"`,
        artDescription:`Artist: Leonardo da Vinci <br> Estimated date: 1503 to 1519 <br> Where to see it: Louvre Museum <br> (Paris)`
    },

    {
        artPic: "2.jpeg",
        artName: `"The Last Supper"`,
        artDescription:`Artist: Leonardo da Vinci <br> Estimated date: 1495 to 1498 <br> Where to see it: Santa Maria delle Grazie <br> (Milan, Italy)`
    },

    {
        artPic: "3.jpeg",
        artName: `"The Starry Night"`,
        artDescription:`Artist: Vincent van Gogh <br> Date: 1889 <br> Where to see it: Museum of Modern Art <br> (New York City)`
    },

    {
        artPic: "4.jpeg",
        artName: `"The Scream"`,
        artDescription: `Artist: Edvard Munch <br> Date: 1893 <br> Where to see it: National Museum <br> (Oslo, Norway)`
    },

    {
        artPic: "5.jpeg",
        artName:`"Guernica"`,
        artDescription:  `Artist: Pablo Picasso <br> Date: 1937 <br> Where to see it: Museo Reina Sofía <br> (Madrid)`
    },

    {
        artPic: "6.jpeg",
        artName:  `"The Kiss"`,
        artDescription: `Artist: Gustav Klimt <br> Estimated date: 1907 to 1908 <br> Where to see it: Upper Belvedere museum <br> (Vienna, Austria)`,
    },

    {
        artPic: "7.jpeg",
        artName: `"Girl With a Pearl Earring"`, 
        artDescription: `Artist: Johannes Vermeer <br>Estimated date: 1665 <br> Where to see it: Mauritshuis <br> (The Hague, Netherlands)`, 
    },

    {
        artPic: "8.jpeg",
        artName: `"The Birth of Venus"`, 
        artDescription: `Artist: Sandro Botticelli <br> Estimated date: 1485 <br> Where to see it: Le Gallerie Degli Uffizi <br> (Florence, Italy)`, 
    },

    {
        artPic: "9.jpeg",
        artName: `"Las Meninas"`, 
        artDescription: `Artist: Diego Velázquez <br> Date: 1656 <br> Where to see it: Museo del Prado <br> (Madrid)`, 

    },

    {
        artPic: "10.jpeg",
        artName: `"Creation of Adam"`,
        artDescription: `Artist: Michelangelo <br> Date: 1508 to 1512 <br> Where to see it: Sistine Chapel <br> (Vatican City`
    }
]

let i = 0;

const artPic = document.querySelector('.paintings');
const artName = document.querySelector('.name');
const artDescr = document.querySelector('.text');


next.addEventListener('click', () => {
    i++;
    if (i > artsArray.length - 1) {
            i = 0;
        }
    artPic.src = artsArray[i].artPic;
    artName.innerHTML = artsArray[i].artName;
    artDescr.innerHTML = artsArray[i].artDescription;
    }
)

back.addEventListener ('click', () => {
    i--;
    if (i < 0) {
        i = artsArray.length -1
    }
    artPic.src = artsArray[i].artPic;
    artName.innerHTML = artsArray[i].artName;
    artDescr.innerHTML = artsArray[i].artDescription;

})

