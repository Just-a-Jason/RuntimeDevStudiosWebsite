interface ContentLoaderProps {
  loading: string;
}

const ContentLoader = ({ loading }: ContentLoaderProps) => {
  return (
    <div className="ContentLoader">
      <img src="images/spinner.webp" alt="loading spinner" draggable="false" />
      <p>Loading {loading}...</p>
    </div>
  );
};
export default ContentLoader;
