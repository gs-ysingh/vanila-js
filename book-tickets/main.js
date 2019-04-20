var data = {
  "rows": 4,
  "cols": 12,
  "data": [
    [
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      }
    ],
    [
      {
        "available": 1,
        "category": "club",
        "active": 0,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 0,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      },
      {
        "available": 1,
        "category": "club",
        "active": 1,
        "price": 300
      }
    ],
    [
      {
        "available": 1,
        "category": "executive",
        "active": 0,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 0,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 0,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 0,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      }
    ],
    [
      {
        "available": 1,
        "category": "executive",
        "active": 0,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 0,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 0,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 0,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      },
      {
        "available": 1,
        "category": "executive",
        "active": 1,
        "price": 200
      }
    ]
  ]
};

var maxSelection = 10;

function renderBooking() {
  var ele = document.getElementById('container');
  document.querySelectorAll('.content').forEach(function(item) {
    item.innerHTML = '';
  })
  var child = null;
  var rows = data.rows;
  var cols = data.cols;
  var mat = data.data;
  var template = '';
  var span = '';
  var childContainer = null;
  for(var i = 0; i < rows; i++) {
    childContainer = document.createElement('div');
    for(var j = 0; j < cols; j++) {
      child = mat[i][j].category;
      span = document.createElement('span');
      if(mat[i][j].active) {
        span.classList.add('active');
      } else {
        span.classList.add('inactive');
      }
      if(mat[i][j].available) {
        span.classList.add('available');
      } else {
        span.classList.add('unavailable');
      }
      span.innerHTML = j + 1;
      span.setAttribute('data-row', i);
      span.setAttribute('data-col', j);
      childContainer.appendChild(span);
    }
    document.querySelector('#' + child + ' .content').appendChild(childContainer);
  }
}

function bindEvents() {
  var sum = 0;
  document.getElementById('container').addEventListener('click', function(e) {
    if(e.target.tagName === 'SPAN') {
      var row = parseInt(e.target.getAttribute('data-row'));
      var col = parseInt(e.target.getAttribute('data-col'));
      var rows = data.rows;
      var cols = data.cols;
      var mat = data.data;
      var start = col;
      var finish = col + maxSelection < data.cols ? col + maxSelection : data.cols;
      sum = sum + (finish - start)
      if(sum > maxSelection) {  
        sum = 0;
        sum = (finish - start);
        for(var i = 0; i < rows; i++) {
          for(var j = 0; j < cols; j++) {
            mat[i][j].available = 1;
          }
        }
      }
      for(var i = start; i < finish; i++) {
        mat[row][i].available = 0;
      }
      renderBooking();
    }
  });
}


renderBooking();
bindEvents();