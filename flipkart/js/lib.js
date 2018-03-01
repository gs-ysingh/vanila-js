var lib = (function () {
    function creditCard(options) {
        if(isValid(options)) {
            return new init(options);
        }
    }

    function isValid(options) {
        if(!validateElement(options.element)) {
            return false;
        }
        return true;
    }

    function getElement(ele) {
        var res;

        if(!ele) {
            console.warn('Element not present in page');
            return false;
        }

        if(typeof ele == 'string') {
            res = document.querySelectorAll(ele);
        }
        else if(ele.length) {
            res = ele;
        }
        else {
            res = [ele];
        }

        if(res.length == 0) {
            console.warn('Element not present in page');
            return false;
        }

        return res;
    }

    function validateElement(ele) {
        if(typeof ele == 'undefined') {
            console.warn("Please provide valid element");
            return false;
        }

        ele = getElement(ele);

        if(!ele) {
            return false;
        }

        return true;
    }

    init.prototype.getRowTemplate = function() {
        return `<div class="row">
                    <div class="first">
                        <span class="bank">Citibank Credit Card</span>
                        <button class="edit">EDIT</button>
                        <button class="delete">DELETE</button>
                    </div>
                    <div class="second">
                        <span class="displayCardType">` + this.model.cardType  + `</span>
                        <span class="displayCardNumber">` + this.model.cardNumber + `</span>
                        <span class="displayCvv">` + this.model.cvv + `</span>
                    </div>
                </div>`;
    }

    init.prototype.getCardTemplate = function() {
        return `<form>
                    <label>Card Number</label>
                    <input type="text" placeholder="Card Number" name="cardNumber" class="cardNumber"/>
                    <div class="cardError"></div>
                    <label class="expiry">Expiry</label>
                    <select name="month">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                      <option>8</option>
                      <option>9</option>
                      <option>10</option>
                      <option>11</option>
                      <option>12</option>
                    </select>
                    <select name="year">
                      <option>2018</option>
                      <option>2019</option>
                      <option>2020</option>
                      <option>2021</option>
                      <option>2022</option>
                    </select>
                    <input type="password" placeholder="CVV" name="cvv" class="cvv"/>
                    <div class="cvvError"></div>
                    <button type="button" class="submit">SUBMIT</button>
                </form>
                <div class="parent"></div>`;
    }

    init.prototype.render = function () {
        this.elements.forEach(function (item) {
            var self = this;
            var htmlObject = document.createElement('div');
            htmlObject.innerHTML = this.getCardTemplate();
            item.insertAdjacentElement('beforeend', htmlObject);
        }, this);
    }

    init.prototype.validateForm = function() {
        var card = document.querySelector('.cardError');
        var cvv = document.querySelector('.cvvError');

        card.innerText = '';
        cvv.innerText = '';
        if(!this.model.cardNumber) {
            card.innerText = 'Please Enter the card Number';
            return false;
        }
        else {
            var flag = false;
            for(var key in this.model.cardConfig) {
                if(this.model.cardConfig[key].cardPattern.test(this.model.cardNumber)
                    && this.model.cardNumber.length === this.model.cardConfig[key].cardNumberLength) {
                    this.model.cardType = key;
                
                    flag = true;
                    break;
                }
            }

            if(!flag) {
                card.innerText = 'Please Enter valid card Number';
                return false;
            }
        }
        if(!this.model.cvv) {
            cvv.innerText = 'Please Enter the cvv';
            return false;
        }
        else {
            if(this.model.cardConfig[this.model.cardType].cvv === "required") {
                if(this.model.cvv.length > this.model.cardConfig[this.model.cardType].cvvLength) {
                    cvv.innerText = 'Please Enter valid cvv';
                    return false;
                }
            }
        }
        return true;
    }

    init.prototype.appendRow = function() {
        this.model.cardNumber = document.querySelector('.cardNumber').value;
        this.model.cvv = document.querySelector('.cvv').value;

        var e = document.getElementsByName('month');
        this.model.month = e[0].options[e[0].selectedIndex].value;

        e = document.getElementsByName('year');
        this.model.year = e[0].options[e[0].selectedIndex].value;
        if(this.validateForm()) {
            var html = document.createElement('div');
            html.innerHTML = this.getRowTemplate();

            document.querySelector('.parent').insertAdjacentElement('beforeend', html);
        }
    }

    init.prototype.bindEvents = function () {
        this.elements.forEach(function (item) {
            var self = this;
            item.addEventListener('click', function (evt) {
                if(evt.target.className === 'submit') {
                    this.appendRow();
                }
            }.bind(self));

        }, this);
    }

    function init(options) {
        this.model = options;
        this.model.cardType = 'VISA';
        this.model.cardConfig = {
          "VISA": {
            "cardPattern": /^4/,
            "cardNumberLength": 16,
            "cvv": "required",
            "cvvLength": 3,
            "displayText": "Visa"
          },
          "MASTERCARD": {
            "cardPattern": /^5[1-5]/,
            "cardNumberLength": 16,
            "cvv": "required",
            "cvvLength": 3,
            "displayText": "Master"
          },
          "MAESTRO": {
            "cardPattern": /^(50|63|66|5[6-8]|6[8-9]|600[0-9]|6010|601[2-9]|60[2-9]|61|620|621|6220|6221[0-1])/,
            "cardNumberLength": 19,
            "cvv": "optional",
            "cvvLength": 4,
            "displayText": "Maestro"
          }
        };
        this.defaultConfig = {};
        this.elements = [].slice.call(getElement(this.model.element));
        this.render();
        this.bindEvents();
    }

    return {
        creditCard: creditCard
    }
})();