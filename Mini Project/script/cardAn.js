const tiltBox = document.querySelector('.card-move-3d');

tiltBox.addEventListener('mousemove', (e) => {
    const box = tiltBox.getBoundingClientRect();
    const centerX = box.left + box.width / 2;
    const centerY = box.top + box.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    const rotateX = (-mouseY / box.height) * 50;
    const rotateY = (mouseX / box.width) * 50;

    tiltBox.querySelector('img').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

tiltBox.addEventListener('mouseleave', () => {
    tiltBox.querySelector('img').style.transform = 'rotateX(0deg) rotateY(0deg)';
});