interface FooterProps {
  margin?: number;
}

const Footer = ({ margin }: FooterProps) => {
  return (
    <footer style={{ marginTop: margin + "px" }}>
      <p>Website by: Antoni Wojcieszyk (Jason.json)</p>
      <p>jasonbpgames.com 2021-2024©</p>
    </footer>
  );
};
export default Footer;
