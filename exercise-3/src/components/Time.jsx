function Time() {
  let time = new Date().toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true, 
  });

  return (
    <h2>
      The time now is: {time}
    </h2>
  );
}

export default Time;