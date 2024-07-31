import { MdOutlineMail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { contact } from "../../utils/types";

interface ContactItemProps {
  contact: contact;
}

const ContactItem = ({ contact }: ContactItemProps) => {
  return (
    <div className="bg-secondary-color flex gap-2 px-4 py-2  items-center justify-start w-52">
      {contact.type === "phone" && <FaPhone size={16} />}
      {contact.type === "email" && <MdOutlineMail size={18} />}
      {contact.type === "linkedin" && <CiLinkedin size={18} />}
      <p className="text-secondary-text-color">
        {contact.name ? contact.name : contact.value}
      </p>
    </div>
  );
};

export default ContactItem;
