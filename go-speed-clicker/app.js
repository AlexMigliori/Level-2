var display = document.getElementById('click-display');
        var clickBtn = document.getElementById('clickBtn')
        var clicks = 0
        document.addEventListener('click', function getClick(){
            clicks += 1
            display.textContent = clicks
            

        })
localStorage.setItem("clicks", clicks)