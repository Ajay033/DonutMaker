(function() {
    const addBtn = document.getElementById("add");
    const counter = document.getElementById("donut-counter");
    const autoClicker = document.getElementById("auto-click");
    const buyAutoClicker = document.getElementById("purchase");
    const nextClickCost = document.getElementById("next-click-cost");

    let autoClickerCount = 0;
    let autoClickerCost = 100;

    addBtn.addEventListener("click", () => {
        counter.innerText = parseInt(counter.innerText) + 1;
    });

    function incrementCount() {
        counter.innerText = parseInt(counter.innerText) + autoClickerCount;
    }
    
    function startInterval() {
        setInterval(incrementCount, 1000);
    }

    buyAutoClicker.addEventListener("click", () => {
        if(parseInt(counter.innerText) >= autoClickerCost) {
            counter.innerText = parseInt(counter.innerText) - autoClickerCost;
            autoClickerCount = autoClickerCount + 1;
            autoClicker.innerText = autoClickerCount;
            nextClickCost.innerText = autoClickerCost;
            autoClickerCost = Math.round(autoClickerCost + (autoClickerCost * 0.1));
            nextClickCost.innerText = autoClickerCost.toString();
        } else {
            alert("Not enough donuts! Keep grinding, playa!");
            return;
        }
    });

    startInterval();
})();
