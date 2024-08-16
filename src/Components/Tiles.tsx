import { useEffect, useState } from "react";
import Tile from "./Tile";

const Tiles = () => {
    const [active, setActive] = useState(0);

    const clickSound = new Audio('sounds/click.ogg');
    clickSound.volume = 0.5;

    const tiles = [
        "William",
        "GoldenFreddy",
        "Cupcake",
        "Springtrap",
        "Foxy",
        "NightmareFoxy",
        "Freddy",
        "Chica",
        "Bonnie",
        "full-pizza",
        "hamburger",
        "lolipop",
        "pizza-slice",
        "soft-drink",
        "robotPice1",
        "robotPice2",
        "robotPice3",
        "robotPice4",
        "flashlight",
        "mask",
        "phone call",
        "BlankWall",
        "door",
        "PizzeriaWall",
        "Wall"
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActive(prevActive => (prevActive + 1) % tiles.length);
            clickSound.play().catch(e=>e);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return <div className="tiles">
        {tiles.map((icon, index) => <Tile icon={icon} key={index} isActive={index === active}/>)}
    </div>
};

export default Tiles;