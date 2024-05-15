window.onload = initialise;
window.onwheel = scrollPage;

let nodes;

function initialise() {
    nodes = document.querySelectorAll('.node');
    
    drawLinesBetweenNodes();
}

function drawLinesBetweenNodes() {
    if (nodes.length < 2) return;
    
    for (i = 0; i < nodes.length - 1; i++) {
        const node = nodes[i];
        const line = document.createElement('div');
        
        line.classList.add('line');
        node.appendChild(line);
    }
}

function scrollPage() {
    window.scrollTo(window.scrollX + event.deltaY, 0);
}