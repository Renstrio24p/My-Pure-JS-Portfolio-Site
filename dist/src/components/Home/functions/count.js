
export default function Count(){

    const counts = {
        'repo-count': 61,
        'react-count': 9,
        'js-count': 7,
        'ts-count': 3,
        'collab-count': 2
    };

    Object.keys(counts).forEach(key => {
        const element = document.getElementById(key);
        const maxCount = counts[key];
        const interval = Math.floor(1500 / maxCount); // Adjust the interval based on the desired animation speed

        let count = 0;
        const timer = setInterval(() => {
            element.innerText = count;
            count++;
            if (count > maxCount) {
                clearInterval(timer);
            }
        }, interval);
    });
}