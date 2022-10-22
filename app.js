const quotes = [
    { quote: 'Corona', author: '23' },
    { quote: 'Bohemia', author: '30' },
    { quote: 'Pacfico', author: '18' },
    { quote: 'Modelo', author: '24' }
    
]


const app = Vue.createApp({

    data() {
        return {
            quotes, //quotes: quotes
            newQuote: 'Producto deseado.',
            newPrice: 'Precio'
        }
    },
    methods: {
        addQuote(){//event
            // if (event.code == 'Enter'){
            //     this.quotes.unshift({
            //         quote: this.newQuote
            //     })
            // }
            this.quotes.unshift({
                quote: this.newQuote,
                author: this.newPrice
            })
        }
    }
})

app.mount('#myApp')

// Initialize and add the map
function initMap() {
    // The location of 20.681387, -100.337318
    //20.68301534158221, -100.32561378179129
    const uluru = { lat: 20.68301534158221, lng: -100.32561378179129 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;