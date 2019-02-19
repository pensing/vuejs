var message="Socks";

var app1 = new Vue({
	el:'#conf-title',
	data: {
		message: 'Speaker configurator'
	}
});

var app2 = new Vue({
  el: '#color',
  data: {
    colors: [
      { text: 'White' },
      { text: 'Black' },
      { text: 'Red' },
      { text: 'Orange' },
      { text: 'Yellow' }
    ]
  }
});

var app3 = new Vue({
  el: '#structure',
  data: {
    structures: [
      { text: 'Oak' },
      { text: 'Walnut' },
      { text: 'Beech' },
      { text: 'Birch' }    
	]
  }
});

var app4 = new Vue({
  el: '#tweeter',
  data: {
    tweeters: [
      { text: 'Visaton KE25SC', price: '160,-' },
      { text: 'Visaton G25FFL', price: '70,-' },
      { text: 'Visaton DSM25FFL', price: '60,-' }
    ]
  }
});

var app5 = new Vue({
  el: '#midtoner',
  data: {
    midtoners: [
      { text: 'Visaton TI100', price: '120,-' },
      { text: 'Visaton G50FFL', price: '90,-' },
      { text: 'Visaton DSM50FFL', price: '80,-' }
    ]
  }
});

var app6 = new Vue({
  el: '#woofer',
  data: {
    woofers: [
      { text: 'Visaton GF200', price: '130,-' },
      { text: 'Visaton AL200', price: '160,-' },
      { text: 'Visaton TIW200XS', price: '190,-' }
    ]
  }
});

var app7 = new Vue({
  el: '#filter',
  data: {
    filters: [
      { text: 'Standard', price: '60,-' },
      { text: 'High-end', price: '120,-' }
	]
  }
});

var app8 = new Vue({
  el: '#terminal',
  data: {
    terminals: [
      { text: 'Standard', price: '20,-' },
      { text: 'High-end', price: '70,-' }
	]
  }
});

