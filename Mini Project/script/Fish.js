const fish = document.getElementById('fish');
const tank = document.getElementById('tank');
const spaceX = -70;
const spaceY = 30;
let lastX = 0;

tank.addEventListener('mousemove', (e) => {
    const tankSize = tank.getBoundingClientRect();
    const fishWidth = fish.offsetWidth;
    const fishHeight = fish.offsetHeight;


    let x = e.clientX - tankSize.left - fishWidth / 2 + spaceX;
    let y = e.clientY - tankSize.top - fishHeight / 2 + spaceY;


    if (x < 0) x = 0;
    if (y < 0) y = 0;
    if (x + fishWidth > tankSize.width) x = tankSize.width - fishWidth;
    if (y + fishHeight > tankSize.height) y = tankSize.height - fishHeight;

    if (e.clientX < lastX) {

        fish.style.transform = `translate(${x}px, ${y}px) scaleX(-1)`;
    } else {

        fish.style.transform = `translate(${x}px, ${y}px) scaleX(1)`;
    }


    lastX = e.clientX;
});

let BT_fish = document.getElementById('fish-BT');
let CheckedFish = true;

function BTfish(){
    if(CheckedFish == true){
        BT_fish.style.filter = 'grayscale(100%)';
        fish.style.display = 'none';
        CheckedFish = false;
    }else if(CheckedFish == false){
        BT_fish.style.filter = 'grayscale(0%)';
        fish.style.display = 'flex';
        CheckedFish = true;
    }
}