import "./featured.css";
import useFetch from "../../hooks/useFetch";

const Featured = () => {

  const {data, loading, error} = useFetch("http://localhost:8800/api/hotels/countByCity?cities=Minsk,Berlin");
  return (
    <div className="featured">
     {loading? ("Loading please wait"):( 
     <>
     <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/max500/957801.webp?k=a969e39bcd40cdcc21786ba92826063e3cb09bf307bcfeac2aa392b838e9b7a5&o="
          alt=""
          className="featuredImg" />
        <div className="featuredTitles">
          <h1>Minsk</h1>
          <h2>{data[0]}</h2>
        </div>
      </div><div className="featuredItem">
          <img
            src="https://cf.bstatic.com/xdata/images/city/max500/690334.webp?k=b99df435f06a15a1568ddd5f55d239507c0156985577681ab91274f917af6dbb&o="
            alt=""
            className="featuredImg" />
          <div className="featuredTitles">
            <h1>Berlin</h1>
            <h2>{data[1]}</h2>
          </div>
        </div>
     </>
    )}
    </div>
  );
};

export default Featured;
