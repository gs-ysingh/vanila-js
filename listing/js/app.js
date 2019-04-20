class App {
  constructor(props) {
    this.state = {};
    this.element = props.element;
    this.fetchData().then((res) => {
      this.state.filters = res[0].filters;
      this.state.products = res[1].products;
      this.render();
    });
  }

  fetchData() {
    let filtersPromise = fetch('https://demo1853299.mockable.io/filters').then((res) => {
      return res.json();
    });
    
    let productsPromise = fetch('https://demo1853299.mockable.io/products').then((res) => {
      return res.json();
    });

    return Promise.all([filtersPromise, productsPromise])
      .then((response) => {
      return response;
    });
  }

  callback(filters) {
    this.state.products = this.state.products.filter((product) => {
      return product.colour.color === filters.color;
        // && product.brand.toLowerCase().indexOf(product.brand) !== -1;
    })
  }

  render() {
    var listing = new Listing({
      parent: document.getElementsByClassName('container'),
      products: this.state.products,
    });

    var filters = new Filters({
      parent: document.getElementsByClassName('container'),
      filters: this.state.filters,
      callback: this.callback.bind(this)
    });

    this.element[0].appendChild(filters.getElement());
    this.element[0].appendChild(listing.getElement());
  }
}

class Listing {
  constructor(props) {
    this.parent = props.parent;
    this.element = null;
    this.products = props.products;
    this.render();
  }

  template() {
    const getOff = (mrp, final) => {
      if(mrp && final) {
        return Math.round((mrp - final) * 100 / mrp) + '% off';
      }
      return '';
    };
    
    let template = this.products.map((product) => {
      return `
        <div class="item">
          <div><img src="${product.image}"></div>
          <div>${product.title}</div>
          <div>${product.rating}</div>
          <div>
            <span>${product.price.final_price ? product.price.final_price : ''}</span>
            <span class="mrp">${product.price.mrp ? product.price.mrp : ''}</span>
            <span class="off">${getOff(product.price.mrp, product.price.final_price)}</span>
          </div>
        </div>`;
    });
    
    return template.join('');
  }

  getElement() {
    return this.element;
  }

  render() {
    this.element = document.createElement('div');
    this.element.classList.add('listing');
    this.element.innerHTML = this.template();
    this.parent[0].appendChild(this.element);
  }
}

class Filters {
  constructor(props) {
    this.parent = props.parent;
    this.element = null;
    this.filters = props.filters;
    this.callback = props.callback;
    this.config = {
      price: {
        min: 0,
        max: Number.MAX_VALUE,
      },
      brand: '',
      color: '',
    };
    this.render();
    this.bindEvents();
  }

  getElement() {
    return this.element;
  }

  bindEvents() {
    this.element.addEventListener('change', (e) => {
      if(e.target.className === 'max') {
        this.config.price.max = parseInt(e.target.value);
        this.callback(this.config);
      }
      if(e.target.className === 'min') {
        this.config.price.min = parseInt(e.target.value);
        this.callback(this.config);
      }
    });

    this.element.addEventListener('keyup', (e) => {
      if(e.target.nodeName === 'INPUT') {
        this.config.brand = e.target.value;
        this.callback(this.config);
      }
    });

    this.element.addEventListener('click', (e) => {
      if(e.target.type === 'checkbox') {
        this.config.color = e.target.value;
        this.callback(this.config);
      }
    });
  }

  createPrice() {
    let ele = document.createElement('div');
    ele.classList.add('price');
    let priceList = this.filters[2];
    
    //min
    let str = '<select class="min">';
    priceList.values.forEach((item, index) => {
      str += `<option ${index === 0 ? "selected": ""} value=${item.key}>${item.displayValue}</option>`
    });
    str += '</select>';

    //max

    let str2 = '<select class="max">';
    priceList.values.forEach((item, index) => {
      str2 += `<option ${index ===  priceList.values.length - 1 ? "selected": ""} value=${item.key}>${item.displayValue}</option>`
    });
    str2 += '</select>';

    ele.innerHTML = `
      <div class="title">Price</div>
      ${str}
      ${str2}
    `;
    return ele;
  }

  createBrand() {
    let ele = document.createElement('div');
    ele.classList.add('brand');
    ele.innerHTML = `
      <div class="title">Brand</div>
      <input type="text" />
    `;
    return ele;
  }


  createColor() {
    let ele = document.createElement('div');
    ele.classList.add('color');
    let colorList = this.filters[1];
    
    //min
    let str = '';
    colorList.values.forEach((item, index) => {
      str += `<input type="checkbox" value="${item.color}">${item.title}</input>`
    });
    str += '';

    ele.innerHTML = `
      <div class="title">Brand</div>
      ${str}`;
    return ele;
  }

  template() {
    let ele = document.createElement('div');
    ele.appendChild(this.createPrice());
    ele.appendChild(this.createBrand());
    ele.appendChild(this.createColor());
    return ele;
  }

  render() {
    this.element = document.createElement('div');
    this.element.classList.add('filters');
    this.element.appendChild(this.template());
    this.parent[0].appendChild(this.element);
  }
}

var app = new App({
  element: document.getElementsByClassName('container'),
});