import React from 'react';
import './App.css';
import NavButton from "./components/NavButton";
import Product from "./components/Product";
import Tile from "./components/Tile";

import handyBag from "./assets/bag_1.png"
import stylishBag from "./assets/bag_2.png"
import simpleBag from "./assets/bag_3.png"
import trendyBag from "./assets/bag_4.png"
import brand from "./assets/brand.png"
import story from "./assets/our_story.png"


function App() {
  return (
      <>
        <h1>Handbags & Purses</h1>
        <nav>
            <NavButton
                buttonName={"to the collection"}
            />
            <NavButton
                buttonName={"shop all bags"}
            />
            <NavButton
                buttonName={"pre-orders"}
                disabled={true}
            />
        </nav>
        <main>
            <Product
                redLabel={"Best seller"}
                image={handyBag}
                bagName={"The handy bag"}
                price={"€400,-"}
            />
            <Product
                redLabel={"Best seller"}
                image={stylishBag}
                bagName={"The stylish bag"}
                price={"€250,-"}
            />
            <Product
                redLabel={"New collection"}
                image={simpleBag}
                bagName={"The simple bag"}
                price={"€300,-"}
            />
            <Product
                redLabel={"New collection"}
                image={trendyBag}
                bagName={"The trendy bag"}
                price={"€150,-"}
            />
        </main>
        <footer>
            <Tile title={"the brand"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium, aut autem blanditiis doloribus earum eius excepturi exercitationem in itaque iure minus, modi nemo nihil numquam officiis optio quos totam?</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, assumenda, consectetur, culpa cupiditate dolores et eum ipsum nihil optio placeat sapiente soluta sunt. Deserunt dicta ea, impedit labore qui rem.</p>
            </Tile>
            <Tile image={brand}/>
            <Tile image={story}/>
            <Tile title={"our story"}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium amet autem debitis harum incidunt labore libero nam non, odit optio perferendis provident quam qui recusandae repudiandae veritatis vero voluptates?</p>
            </Tile>
        </footer>
      </>

  );
}

export default App;



