import Container from "../Container";
import ContactItem from "./ContactItem";

import contacts from "../../utils/contacts";

const Contact = () => {
  return (
    <Container>
      <div
        id="contact"
        className="flex flex-col space-y-4 items-center text-center"
      >
        <h2 className="text-secondary-text-color font-semibold uppercase text-sm">
          contatos
        </h2>
        <h3 className="font-bold text-2xl">entre em contato comigo</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}
      </div>
    </Container>
  );
};

export default Contact;
