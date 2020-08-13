 var listEl = document.querySelector('.container');
    var btnLeftEl = document.querySelector('.btn#minus');
    var btnRightEl = document.querySelector('.btn#plus');
    count = 0;
    btnLeftEl.addEventListener("click", function(e) {
        count++;
        listEl.style.minus = count * 286 + 'px';
        if (count > -2) {
            btnRightEl.style.display = 'block';
        }
        if (count >= 0) {
            btnLeftEl.style.display = 'none';
        }
    });
    
    btnRightEl.addEventListener("click", function(e) {
        count--;
        listEl.style.left = count * 286 + 'px';
        if (count < 0) {
            btnLeftEl.style.display = 'block';
        }
        if (count <= -2) {
            btnRightEl.style.display = 'none';
        }
    });