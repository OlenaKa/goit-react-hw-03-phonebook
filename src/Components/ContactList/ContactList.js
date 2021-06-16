import PropTypes from "prop-types"
import ContactItem from "../ContactItem"

const ContactList = ({ contacts, onDelete }) => (
  <ul>
    <ContactItem contacts={contacts} onDelete={onDelete} />
  </ul>
)

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
}
export default ContactList
