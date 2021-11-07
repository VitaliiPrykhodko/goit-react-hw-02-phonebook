import PropTypes from "prop-types";

const ContactList = ({contacts, handleDeleteContact}) => {
    return (
        <ul className="contact_list">
            {contacts.map(({key, name, number}) => {
                return (
                    <li key={key} className="contact_item">
                        <span>{name}</span>: <span>{number}</span>
                        <button className="contact_btn" onClick={()=>handleDeleteContact(key)}>Delete</button>
                    </li>
                )
            })}
          </ul>
    )
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.node.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired
    }))
}
export default ContactList