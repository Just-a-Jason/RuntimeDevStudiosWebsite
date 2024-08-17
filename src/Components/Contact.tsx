import ContactButton from "./ContactButton";

interface Props {
  showPopup: () => void;
}

const Contact = ({ showPopup }: Props) => {
  return (
    <div className="contact-us">
      <ContactButton type="E-Mail" />
      <ContactButton type="Discord" onClick={showPopup} />
    </div>
  );
};
export default Contact;
