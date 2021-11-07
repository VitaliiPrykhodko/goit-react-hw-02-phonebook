import PropTypes from "prop-types";

const Form = ({ name, number, handleChange, handleAddContact }) => {
  return (
    <form className="form_contact">
      <label className="form_label">
        Name
        <input
          onChange={handleChange}
          value={name}
          className="input_contact"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className="form_label">
        Number
        <input
          onChange={handleChange}
          value={number}
          className="input_contact"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>
      <button type="button" className="btn_contact" onClick={handleAddContact}>
        Add contact
      </button>
    </form>
  );
};

Form.propTypes = {
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleAddContact: PropTypes.func.isRequired,
  number: PropTypes.string.isRequired,
};

export default Form;
