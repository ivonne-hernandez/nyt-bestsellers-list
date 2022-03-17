import './Dropdown.css';

const Dropdown = ({setSelectedList, selectedList, options}) => {
  const renderListOptions = () => {
    const allOptions = [
      <option
        className='list-option' 
        name="All" 
        value="All"
        key="All">
          All
      </option>
    ];
    const listOptions = options.map(option => {
      return (
        <option 
          className='list-option' 
          name={option} 
          value={option}
          key={option} >
          {option}
        </option>
      );
    });
    allOptions.push(...listOptions);
    return allOptions;
  }
  return (
    <div className='Dropdown'>
      <label htmlFor='dropdown' className='dropdown-label'>
        Select Bestseller List
      </label>
      <select
        id='dropdown'
        value={selectedList}
        onChange={(event) => setSelectedList(event.target.value)}>
        {renderListOptions()}
      </select>
    </div>
  )
}

export default Dropdown;