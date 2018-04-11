printPyramid(8);

function printPyramid(height) {
    function drawRowPart(n, divRow, className)
    {
        for (let i=0;i<n;i++)
        {
            let divBlock = document.createElement("div");
            divBlock.className=className;
            divRow.appendChild(divBlock);
        };
    }

    const container = document.body.querySelector("div#pyramid");
    for (var i=1;i<=height;i++){
       
        var divRow = document.createElement("div");
        divRow.className="rowblock";
        container.appendChild(divRow);
        
        drawRowPart(height-i, divRow, "block emptyblock");
        drawRowPart(i+1, divRow, "block fullblock");
    }
    var constructionDiv = document.body.querySelector("div#construction"); 
    constructionDiv.parentElement.removeChild(constructionDiv);
};