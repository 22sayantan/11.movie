import "./home.css";
import MovieImg from "../../../assets/react.svg";
function Home() {
  const Home_index_list = ["Trending Now", "Hit List", "Old 90's"];
  const Trending_Now = [
    "movie_1",
    "movie_2",
    "movie_3",
    "movie_4",
    "movie_5",
    "movie_6",
    "movie_7",
  ];
  const Hit_List = [
    "movie_8",
    "movie_9",
    "movie_10",
    "movie_11",
    "movie_12",
    "movie_13",
    "movie_14",
  ];
  const Old_90_s = [
    "movie_15",
    "movie_16",
    "movie_17",
    "movie_18",
    "movie_19",
    "movie_20",
    "movie_21",
  ];

  function nameChange(elem) {
    return elem.replace(/[ ']/g, "_");
  }

  function EvalVal(value) {
    return eval(value);
  }
  return (
    <>
      <section className="home">
        <ol>
          {Home_index_list.map((event) => {
            return (
              <li key={event}>
                {event}
                <div>
                  <ul>
                    {EvalVal(nameChange(event)).map((e) => {
                      return (
                        <>
                          <li key={e}>
                            <img src={MovieImg} alt="" />
                            {e}
                          </li>                     
                        </>
                      )
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}

export default Home;
