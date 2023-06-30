
export default function Donut(){

    function setDonutProgress(progress) {
        const donutSegment = document.getElementById('donut-segment');
        const donutText = document.getElementById('donut-text');
        
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (progress / 100) * circumference;
        
        donutSegment.style.strokeDasharray = `${circumference} ${circumference}`;
        donutSegment.style.strokeDashoffset = offset;
        
        donutText.textContent = `${progress}%`;
    }

    setDonutProgress(75);

    function setDonutProgress2(progress) {
        const donutSegment = document.getElementById('donut-segment2');
        const donutText = document.getElementById('donut-text2');
        
        const circumference = 2 * Math.PI * 45;
        const offset = circumference - (progress / 100) * circumference;
        
        donutSegment.style.strokeDasharray = `${circumference} ${circumference}`;
        donutSegment.style.strokeDashoffset = offset;
        
        donutText.textContent = `${progress}%`;
    }

    setDonutProgress2(85);

}