import PropTypes from "prop-types"
import "./ContactItem.css"

const ContactItem = ({ contacts, onDelete }) =>
  contacts.map((contact) => (
    <li key={contact.id} className="contactItem">
      <p>
        {contact.name}: {contact.number}
      </p>
      <button
        type="button"
        onClick={() => onDelete(contact.id)}
        className="delete-contact-btn"
      >
        Delete
      </button>
    </li>
  ))

ContactItem.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default ContactItem
