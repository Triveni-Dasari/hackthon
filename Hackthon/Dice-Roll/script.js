
document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('dicecanvas');
    const context = canvas.getContext('2d');

    function drawDice(number) {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '100px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillStyle = '#000';
        context.fillText(number, canvas.width / 2, canvas.height / 2);
    }

    function rollDice() {
        const number = Math.floor(Math.random() * 6) + 1;
        drawDice(number);
    }

    document.addEventListener('keydown', (event) => {
        if (event.code === 'Space') {
            rollDice();
        }
    });

    // Draw initial dice face
    drawDice(1);
});

