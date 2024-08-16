import LazyImage from "./LazyImage";

interface TileProps {
  isActive: boolean;
  icon: string;
}

const Tile = ({ icon, isActive }: TileProps) => {
  return (
    <div className={(isActive && "tile active") || "tile"}>
      <LazyImage alt="tile" name={icon} path="Sprites" />
    </div>
  );
};

export default Tile;
