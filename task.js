let clickIn = 1, clickOff = 1;
const getHole = index => document.getElementById(`hole${index}`);


function defaults(result) {
    clickIn = 1;
    clickOff = 1;
    document.getElementById('dead').textContent = 0;
    document.getElementById('lost').textContent = 0;
    alert(result);
};


for (let i = 0; i < 9; i++) {
    const hole = getHole(i + 1);
    hole.onclick = () => {
        if (hole.className.includes('hole_has-mole')) {
            document.getElementById('dead').textContent = clickIn;
            clickIn++;
        } else {
            document.getElementById('lost').textContent = clickOff;
            clickOff++;
        };

        if (clickIn > 10) {
            defaults('Победа!')
        } else if (clickOff > 5) {
            defaults('Поражение!')
        }
    };
};
