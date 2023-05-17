function changeFill() {
    console.clear();
    console.log("aquí está el error");

    var svgPath = document.getElementById('svg-path');
    svgPath.style.fill = '#ff4e50';
}

function changeStroke() {
    console.clear();
    console.log("aquí está el error");

    var svgPath = document.getElementById('svg-path');
    svgPath.style.stroke = '#45ada8';  
    svgPath.style.strokeWidth = '5'; 
    }
 function resetSVG() {
        console.clear();
        console.log("aquí está el error");

        var svgPath = document.getElementById('svg-path');
        svgPath.style.fill = '';  
        svgPath.style.stroke = ''; 
        svgPath.style.strokeWidth = ''; 
    }