window.onload = function () {
    let btn = document.getElementById('done');

    btn.addEventListener('click', () => {
        let inputX = document.getElementById('chunkX').value;
        let inputZ = document.getElementById('chunkY').value;
        let lblOutput = document.getElementById('output');


        let regionX = Number(inputX) >> 5;
        let regionZ = Number(inputZ) >> 5;

        lblOutput.innerText = `r.${regionX}.${regionZ}.mca`;
    });
};
