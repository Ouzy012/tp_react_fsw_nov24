import "./footer.css";

const Footer = () => {
  const annee = new Date();
  
  return (
    <footer>
      <div className="container">
        <p>&copy; {annee.getFullYear()} Mon Blog. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
