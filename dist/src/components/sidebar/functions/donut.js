
export default function DonutFunctions(){

    function animateDonutChart(segmentId, textId, maxPercent) {
        const segment = document.getElementById(segmentId);
        const text = document.getElementById(textId);
    
        let percent = 0;
        const interval = Math.floor(2000 / maxPercent); 
    
        const timer = setInterval(() => {
            segment.style.strokeDasharray = `${percent}, 100`;
            text.textContent = `${percent}%`;
            percent++;
    
            if (percent > maxPercent) {
                clearInterval(timer);
            }
        }, interval);
    }
    
    animateDonutChart('donut-segment', 'donut-text', 75); 
    animateDonutChart('donut-segment2', 'donut-text2', 95); 

}