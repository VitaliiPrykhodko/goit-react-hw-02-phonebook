import PropTypes from "prop-types";

const Filter= ({filter, handleFilter}) => {
    return (
        <div className="filter_box">
             <label className="filter_label">
        Find contacts by name
        <input
          onChange={handleFilter}
          value={filter}
          className="input_contact input_filter"
          type="text"
        />
      </label>
        </div>
       
    )
}

Filter.propTypes = {
    filter: PropTypes.string,
    handleFilter: PropTypes.func.isRequired
}

export default Filter