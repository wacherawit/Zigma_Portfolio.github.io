new Vivus('Mysvg', {
    type: "oneByOne",
    delay: 0,
    duration: 500,
    animTimingFunction: Vivus.EASE_IN
},
    function (obj) {
        obj.el.classList.add("finished")
        document.getElementById('Loading').classList.add("Fadeout");
        setTimeout(function(){
            document.getElementById('Loading').style.display = 'none';
          }, 3000);
    }
);