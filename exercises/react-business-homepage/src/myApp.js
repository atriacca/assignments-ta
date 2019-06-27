import React from "react";
import './style.css';

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Main3 from "./components/Main3";
import Card from "./components/Card";
import Services from "./components/Services";
import Pics from "./components/Pics";
import Footer from "./components/Footer";

const App = () => {

  const styles = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridRowHeight: "200px",
    textAlign: "center",
  }
  return (
    <div>
      <Navbar/>
      <Main/>
      <div style={styles} className="cardHover">
        <Card 
          title="Kustom Car" 
          subtitle="Resto-mod GTO" 
          imgUrl="https://cdn.dealeraccelerate.com/custom/1/131/24743/790x1024/1966-pontiac-gto" 
          info="1966 Pontiac GTO just like the Monkees drove in their late 60's TV show!" 
          bgColor="rgb(230, 171, 230)"
        />
        <Card 
          title="Kustom Motor" 
          subtitle="Big block Chevy" 
          imgUrl="http://watermanatwork.com/blog/wp-content/uploads/2011/07/56NomadEngine.jpg" 
          info="Custom built motor with twin four barrel carbs."
          bgColor="lightsalmon"
        />
        <Card 
          title="Kustom Paint" 
          subtitle="Chameleon" 
          imgUrl="https://i.ytimg.com/vi/XEWRJHjob5k/maxresdefault.jpg"
          info="This car's custom Chameleon paint makes it look completely different every time you look at it."
          bgColor="rgb(105, 177, 221)"
        />
        <Card 
          title="Kustom Paint" 
          subtitle="Multi-colored metallic" 
          imgUrl="https://www.autoguide.com/blog/wp-content/gallery/best-paint-jobs-sema-2016/Best-Paint-Jobs-at-SEMA-2016-10.jpg"
          info="Transform your car with a completely unique eye-catching paint job."
          bgColor="rgb(105, 177, 221)"
        />
          <Card 
            title="Kustom Interior" 
            subtitle="Old school leather" 
            imgUrl="https://mrkustom.com/wp-content/uploads/2012/11/Car-Upholstrey-Custom-Chicago-Mr-Kustom.jpg"
            info="Classic customizing too if you wish."
            bgColor="rgb(119, 221, 105)"
          />
          <Card 
            title="Kustom Car" 
            subtitle="1970 Camaro" 
            imgUrl="https://mir-s3-cdn-cf.behance.net/project_modules/1400/376f3211063643.560f0afd78f1a.png" 
            info="This resto-mod 1970 Camaro will drive circles around any classic muscle car."
            bgColor="rgb(230, 171, 230)"
          />
        <Card 
          title="Kustom Motor" 
          subtitle="Supercharger" 
          imgUrl="http://www.fmuweb.com/pquentin/web%20final%20pic/pics/ex%20car%20motro.jpg"
          info="Add a Supercharger to your car and leave everyone else in the dust!"
          bgColor="lightsalmon"
        />
          <Card 
            title="Kustom Paint" 
            subtitle="Murals" 
            imgUrl="https://www.craigslist.org/about/best/van/4873367721-20.jpg" 
            info="Custom murals on vans and RVs."
            bgColor="rgb(105, 177, 221)"
          />
        <Card 
          title="Kustom Interior" 
          subtitle="Plush leather in a futuristic layout" 
          imgUrl="https://i.pinimg.com/originals/df/ba/3e/dfba3ecc44ad1cc7c9c055246cd7c94b.jpg"
          info="You may not ever want to bring a French Fry or coffee into this car!"
          bgColor="rgb(119, 221, 105)"
        />
        <Card 
          title="Kustom Car" 
          subtitle="AMG Mercedes" 
          imgUrl="https://farm5.staticflickr.com/4252/35387051946_a0d7670239_b.jpg" 
          info="2017 AMG Mercedes convertible with turbocharged 3.0l and customized interior and sound system."
          bgColor="rgb(230, 171, 230)"
        />
        <Card 
          title="Kustom Motor" 
          subtitle="Hemi with blower" 
          imgUrl="https://i.pinimg.com/originals/29/65/4e/29654ef0226048a9bb9f80d99459a1f3.jpg"
          info="Turbos and Superchargers and Blowers, oh my!!"
          bgColor="lightsalmon"
        />
          <Card 
            title="Kustom Paint" 
            subtitle="1971 Chevelle" 
            imgUrl="https://hot.legendaryfinds.com/wp-content/uploads/2016/09/Candy-Apple-Red-%E2%80%9871-Chevelle-SS.jpg" 
            info="Turn heads in this 1971 Candy apple red Chevelle."
            bgColor="rgb(105, 177, 221)"
          />
        </div>
        <Main2/>
        <Services/>
        <Main3/>
        <Pics/>
        <Footer/>
    </div>
  );
}

export default App;

import React from "react";
// import './index.css';
// document.getElementById("root")

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Main2 from "./components/Main2";
import Services from "./components/Services";
import Pics from "./components/Pics";
import Footer from "./components/Footer";

const App = () => {
    return (
      <div>
          <Navbar/>
          <Main/>
          <Services/>
          <Main2/>
          <Pics/>
          <Footer/>
      </div>
    );
}

export default App;