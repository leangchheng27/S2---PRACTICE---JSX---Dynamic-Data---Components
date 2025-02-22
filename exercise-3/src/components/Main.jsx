import Time from "./Time.jsx";
function Main() {
  return (
    <div>
      <h2>The date now is:</h2>
      <Time />

      <h4>Did you know ?</h4>
      <p>
        The implementation of Greenwich Mean Time was the first step to
        determine the time zone of other countries in regard to GMT+0, while the
        concept of Coordinated Universal Time (UTC) was designed to provide a
        more accurate timekeeping system. Nevertheless, both of these time
        standards are widely used in the world for a similar purpose of time
        coordination. The differences in the terminology of GMT and UTC still
        create confusion in international cooperation. Even though UTC was
        introduced as a more accurate time standard, the occurrence of the leap
        seconds demonstrated the flaws for the universal time synchronisation.
      </p>
    </div>
  );
}

export default Main;
