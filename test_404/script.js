(function() {
    // Creates a new canvas element and appends it as a child
    // to the parent element, and returns the reference to
    // the newly created canvas element


    function createCanvas(parent, width, height) {
        var canvas = {};
        canvas.node = document.createElement('canvas');
        canvas.context = canvas.node.getContext('2d');
        canvas.node.width = width || 100;
        canvas.node.height = height || 100;
        parent.appendChild(canvas.node);
        return canvas;
    }

    function init(container, width, height, fillColor) {
        var canvas = createCanvas(container, width, height);
        var ctx = canvas.context;
        // define a custom fillCircle method
        ctx.fillCircle = function(x, y, radius, fillColor) {
            this.fillStyle = fillColor;
            this.beginPath();
            this.moveTo(x, y);
            this.arc(x, y, radius, 0, Math.PI * 2, false);
            this.fill();
        };
        ctx.clearTo = function(fillColor) {
            ctx.fillStyle = fillColor;
            ctx.fillRect(0, 0, width, height);
        };
        ctx.clearTo(fillColor || "#ddd");

        // bind mouse events
        canvas.node.onmousemove = function(e) {
            if (!canvas.isDrawing) {
               return;
            }
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            var radius = 100; // or whatever
            var fillColor = '#ff0000';
            ctx.globalCompositeOperation = 'destination-out';
            ctx.fillCircle(x, y, radius, fillColor);
        };
        canvas.node.onmouseover = function(e) {
            canvas.isDrawing = true;
        };
        // canvas.node.onmouseup = function(e) {
        //     canvas.isDrawing = false;
        // };
    }

    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;
    var container = document.getElementById('canvas');
    init(container, x, y, '#FFFFFF');

  })();

  jQuery(function($) {
      var currentMousePos = { x: -1, y: -1 };
      $(document).mousemove(function(event) {
          x = event.pageX;
          y = event.pageY;
          $("#image").css("top",y-50);
          $("#image").css("left",x-50);

      });

      // ELSEWHERE, your code that needs to know the mouse position without an event
      if (currentMousePos.x < 10) {
          // ....
      }
});
