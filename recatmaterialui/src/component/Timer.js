import react, { useEffect, useRef, useState } from "react";
const Timer = () => {
  // let time = new Date().toLocaleTimeString();
  // const [cTime, setCTime] = useState(time);
  // //   const [stop, setStop] = useState(time);
  // const upDateTime = () => {
  //   let time = new Date().toLocaleTimeString();
  //   setCTime(time);
  // };
  // const stopTime = () => {
  //   clearInterval(time);

  // };
  // // setInterval(upDateTime, 1000);

  // setInterval(() => {
  //   let time = new Date().toLocaleTimeString();
  //   setCTime(time);
  //   // clearInterval(time);
  // }, 1000);

  // console.log(" chhgtime", cTime);
  // return (
  //   <>
  //     <h1>Timer</h1>
  //     <h1>{cTime}</h1>
  //     <button onClick={stopTime}>stop</button>
  //   </>
  // );

  const [Days, setDays] = useState("00");
  const [hours, sethours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  let interval = useRef();
  const startTimer = () => {
    const countDown = new date("July,28,2023").getTimer();
    interval = setInterval(() => {
      const now = new Date().getTimer();
      distance = countDown - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)/(1000*60*60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000*60));
      const seconds = Math.floor((distance % (1000 * 60 * 60 * 24)) /1000);
  
  if (distance<0){
    clearInterval (interval.current);
  }
  else{
    setDays(days);
    sethours(hours);
    setMinutes(minutes);
    setSeconds(seconds);

  }
  
    }, 1000)

    useEffect(()=>{
      startTimer();
      return ()=>{
clearInterval(interval.current)
      }
    })
  return (
    <>
      <h1>{Days}</h1>
      <h1>::</h1>
      <h1>{hours}</h1>
      <h1>::</h1>
      <h1>{minutes}</h1>
      <h1>::</h1>
      <h1>{seconds}</h1>
    </>
  );
};
export default Timer;
