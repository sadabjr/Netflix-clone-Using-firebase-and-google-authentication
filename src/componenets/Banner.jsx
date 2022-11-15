import React from "react";
import "./Banner.css";

const Banner = () => {
    const truncate = (string, n) =>{
        return string?.length > n ? string.substr(0, n-1) + '...': string;
    }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://wallpapercave.com/wp/wp8741529.jpg")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">Movie Name</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner__description">
            {
                truncate(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos tempore nisi, blanditiis neque vel, optio aperiam, laboriosam adipisci officiis amet molestiae officia deserunt tempora eaque. Quia, facilis eum dolorum ullam obcaecati eius quod in? Odio sequi doloremque expedita veniam impedit, corrupti debitis ullam molestiae quibusdam maiores reprehenderit ad aliquam ipsa quisquam, sit mollitia, suscipit error. Nihil quas quod reiciendis corporis officia eos enim hic molestiae mollitia voluptas. Ipsam repellat, quo voluptatem, ullam consequuntur dolorum vitae impedit asperiores ducimus quidem perferendis expedita nesciunt quasi repudiandae totam ad minima et, hic maxime itaque ab in quam! Labore, nobis tempore. Doloribus repudiandae inventore culpa perspiciatis aliquid nam asperiores veritatis quasi`, 150)
            }
        </h1>
      </div>
      <div className="banner__fadeBottom"/>
    </header>
  );
};

export default Banner;
