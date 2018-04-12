printPyramid(8);

function printPyramid(height) {
    function drawRowPart(n, divRow, className)
    {
        for (let i=0;i<n;i++)
            divRow.append(`<div class="${className}"/>`);
    }

    const container = $("#pyramid");
    for (var i=1;i<=height;i++){
        var added = container.append(`<div id="r${i}" class="rowblock"/>`);
        let divRow = $(`#r${i}`);
        drawRowPart(height-i, divRow, "block emptyblock");
        drawRowPart(i+1, divRow, "block");
    }
    
    $("#construction").remove();
};