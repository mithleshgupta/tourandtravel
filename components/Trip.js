import "./TripStyles.css";
import TripData from "./TripData";
function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Places where you can Travel Around</p>
      <div className="trip-card">
        <TripData
          image="https://images.unsplash.com/photo-1604999333679-b86d54738315?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80"
          heading="Trip to Bali"
          text="Bali is a province of Indonesia and the westernmost of the Lesser Sunda Islands. East of Java and west of Lombok, the province includes the island of Bali and a few smaller neighbouring islands, notably Nusa Penida, Nusa Lembongan, and Nusa Ceningan to the"
        />
        <TripData
          image="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1194&q=80"
          heading="Trip to Tokyo"
          text="Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples. The opulent Meiji Shinto Shrine is known for its towering gate and surrounding woods. The Imperial Palace sits amid large public gardens. The city's many museums offer exhibits ranging from classical art (in the Tokyo National Museum"
        />
        <TripData
          image="https://images.unsplash.com/photo-1612977512598-3b8d6a498bbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          heading="Trip to Jeju"
          text="Jeju province encompasses the South Korean island of Jeju in the Korea Strait. It's known for its beach resorts and volcanic landscape of craters and cavelike lava tubes. Hallasan Mountain, a dormant volcano, features hiking trails, a crater lake at the 1,950m summit and nearby Gwaneumsa Temple."
        />
      </div>
    </div>
  );
}

export default Trip;
