import React, {useEffect, useState} from "react";

const classCounter = {
    parentBox: 'count flex-colo overflow-hidden rounded',
    firstBox: 'py-2 px-2 text-lg font-black tracking-wider text-whites',
    secondBox: 'px-2 w-full h-6 bg-whites font-medium flex-colo italic text-xs'
}

const Counter = () => {

    const [timeDays, setTimeDays] = useState(0);
    const [timeHours, setTimeHours] = useState(0);
    const [timeMinutes, setTimeMinutes] = useState(0);
    const [timeSeconds, setTimeSeconds] = useState(0);

    let interval;

    const timer = () => {
        const dropDay = new Date("July 31, 2022").getTime();

        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = dropDay - now;

            const days = Math.floor(distance/ (24 * 60 * 60 * 1000));
            const hours = Math.floor(
                (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
              );
            const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
            const seconds = Math.floor((distance % (60 * 1000)) / 1000);
           
            if(distance < 0){
                clearInterval(interval.current);
            } else {
                setTimeDays(days);
                setTimeHours(hours);
                setTimeMinutes(minutes);
                setTimeSeconds(seconds)
            }
        });

    };

    useEffect(() => {
        timer();
    })

    return(
        <div className="grid grid-cols-4 2xl:gap-8 lg:gap-2 sm:gap-8 gap-3 w-full mt-5">
            <div className={classCounter.parentBox}>
                <div className={classCounter.firstBox}>{timeDays}</div>
                <div className={classCounter.secondBox}>days</div>
            </div>
            <div className={classCounter.parentBox}>
                <div className={classCounter.firstBox}>{timeHours}</div>
                <div className={classCounter.secondBox}>hours</div>
            </div>
            <div className={classCounter.parentBox}>
                <div className={classCounter.firstBox}>{timeMinutes}</div>
                <div className={classCounter.secondBox}>mins</div>
            </div>
            <div className={classCounter.parentBox}>
                <div className={classCounter.firstBox}>{timeSeconds}</div>
                <div className={classCounter.secondBox}>seconds</div>
            </div>
        </div>
    )

}

export default Counter