import DestinationData from "./DestinationData";
import "./DestinationStyles.css";
const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Places to explore around the word</p>
      <DestinationData
        className="first-des"
        heading="Explore Island,Volcanoes"
        text="Neemrana town is located in Alwar in Rajasthan on Delhi-Jaipur highway. It is famous for its magnificent Neemrana Fort Palace. It was built in 1464 AD, a palace from where Rajput Maharaja Prithvi Raj Chauhan III reigned. Neemrana fort is now converted into one of the Rajasthan's oldest heritage luxury hotels. Neemrana town is located in Alwar in Rajasthan on Delhi-Jaipur highway. It is famous for its magnificent Neemrana Fort Palace. It was built in 1464 AD, a palace from where Rajput Maharaja Prithvi Raj Chauhan III reigned. Neemrana fort is now converted into one of the Rajasthan's oldest heritage luxury hotels."
        img1="https://cdn.pixabay.com/photo/2018/10/28/09/56/mountains-3778244_960_720.jpg"
        img2="https://cdn.pixabay.com/photo/2016/10/21/14/50/plouzane-1758197_960_720.jpg"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Explore Island,Volcanoes"
        text="Even though the island of Oahu is the most populated island in Hawaii, it’s just as beautiful as the other islands, and there are so many good things to do in Oahu for every kind of traveler.

Some of the best things to do in Oahu Hawaii include hikes, beaches, waterfalls, botanical gardens, water sports, wildlife sightings, and more.

There are also some less conventional things to do in Oahu island, like seeing lighthouses, visiting the Pear Harbor memorial, or touring the Jurassic Park film site.

I’ve been privileged to visit the Hawaiian islands many times (often for months at a time), so I’ve done a bunch of hiking, exploring, and sightseeing all over Oahu, including some of the most far flung corners of the island.

This travel guide is our complete list of the best things to do in Oahu Hawaii!"
        img1="https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_960_720.jpg"
        img2="https://cdn.pixabay.com/photo/2019/07/23/13/00/railway-station-4357699_960_720.jpg"
      />
    </div>
  );
};

export default Destination;
