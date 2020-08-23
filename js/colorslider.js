var divB = document.getElementById("thumbie");

	divB.addEventListener("mousedown", onColorDown);
	divB.addEventListener("mouseup", onColorUp);

	function onColorDown() {
	  $(this).addClass("pop");
	  $(this).parent(".sliderio").addClass("grad");
	}

	function onColorUp() {

	  $(this).removeClass("pop");
	  $(this).parent(".sliderio").removeClass("grad");
	  changeSlider();

	}

	function changeSlider(){
		
		if (sessionStorage.getItem("setHexColor").length !== 0) {
		var thisColor = sessionStorage.getItem("setHexColor");
		
		$('.sliderio').css('background-color',thisColor);
		$('.bg-custom').css('background-color',thisColor);
		
	  }
	  
	  if (sessionStorage.getItem("setOffsetColor").length !== 0) {
		
		var offsetColor = sessionStorage.getItem("setOffsetColor");
		
		
		
		if(offsetColor === 0){
			alert("1");
		}
		else if(offsetColor === 40){alert("1");}
		else if(offsetColor === 60){alert("1");}
		else if(offsetColor === 100){alert("1");}
		else if(offsetColor === 150){alert("1");}
		else if(offsetColor === 170){alert("1");}
		else if(offsetColor === 190){alert("1");}
		else if(offsetColor === 200){alert("1");}
		else if(offsetColor === 220){alert("1");}
		else if(offsetColor === 240){alert("1");}
		else if(offsetColor === 260){alert("1");}
		else if(offsetColor === 280){alert("1");}
		else if(offsetColor === 300){alert("1");}
		else if(offsetColor === 330){alert("1");}
		
		
	  }
	  
	}


	var divA = document.getElementById("thumbie");

    divA.addEventListener('mousedown', function() {
      startDrag();
    });

    function startDrag() {
      document.onmouseup = finishDrag;

      document.onmousemove = function(e) {
		
		if(divA.offsetLeft >= 0){
		   divA.style.left = (divA.offsetLeft + e.movementX) + "px";
		}
		
		if(divA.offsetLeft < 0){
			divA.style.left = (0 + 0) + "px";
		}
		
		if(divA.offsetLeft > 340){
			divA.style.left = (340 + 0) + "px";
		}
        
		
		document.getElementById("offsetie").innerHTML = divA.offsetLeft;
		
		var hexColor = hslToHex(divA.offsetLeft,100,50);
		document.getElementById("hexie").innerHTML = hexColor;
		
		document.getElementById("thumbie").style.backgroundColor = hexColor;
		
		sessionStorage.setItem("setOffsetColor", divA.offsetLeft);
		sessionStorage.setItem("setHexColor", hexColor);
		
		
      }
    }
	
	function hslToHex(h, s, l) {
	  h /= 360;
	  s /= 100;
	  l /= 100;
	  let r, g, b;
	  if (s === 0) {
		r = g = b = l; // achromatic
	  } else {
		const hue2rgb = (p, q, t) => {
		  if (t < 0) t += 1;
		  if (t > 1) t -= 1;
		  if (t < 1 / 6) return p + (q - p) * 6 * t;
		  if (t < 1 / 2) return q;
		  if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
		  return p;
		};
		const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
		const p = 2 * l - q;
		r = hue2rgb(p, q, h + 1 / 3);
		g = hue2rgb(p, q, h);
		b = hue2rgb(p, q, h - 1 / 3);
	  }
	  const toHex = x => {
		const hex = Math.round(x * 255).toString(16);
		return hex.length === 1 ? '0' + hex : hex;
	  };
	  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
	}
	
    function finishDrag() {
		
      document.onmouseup = null;
      document.onmousemove = null;
	  onColorUp();
	  
    }