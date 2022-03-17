import './Table.css';

const Table = ({ lists, date }) => {
  const calculateNumberOfEntries = () => {
    return lists.reduce((sum, list) => {
      return sum + list.books.length;
    }, 0);
  }

  const renderTableRows = () => {
    const allRows = [];
    
    lists.forEach(list => {
      const listRows = list.books.map(book => {
        const purchaseLinks = book.buy_links.map(link => {
          return <a href={link.url} key={`${book.title}-${link.name}`} className='purchase-link'>{link.name}</a>
        });

        return(
          <tr key={`${list.list_name}-${book.title}`}>
            <td className='list-name'>{list.list_name}</td>
            <td className='book-title'>{book.title}</td>
            <td className='book-author'>{book.author}</td>
            <td className='book-description'>{book.description}</td>
            <td className='book-publisher'>{book.publisher}</td>
            <td className='book-rank'>{book.rank}</td>
            <td className='book-purchase-links'>{purchaseLinks}</td>
          </tr>
        );
      });
      allRows.push(...listRows);
    })
    return allRows;
  }
  
  const formatDate = () => {
    const formattedDate = new Date(date).toDateString().split(' ');
    formattedDate.shift();
    return formattedDate[0] + ' ' + formattedDate[1] + ', ' + formattedDate[2];
  }
  
  return (
    <main className='Table'>
      <p className='date'>Currently viewing the list for the week of {formatDate()}</p>
      <p className='number-of-entries'>
        Number of entries: {calculateNumberOfEntries()}
      </p>
      <div className='table-container'>
        <table>
          <thead className='head-of-table-columns'>
            <tr>
              <th>
                List Name
              </th>
              <th>
                Title
              </th>
              <th>
                Author(s)
              </th>
              <th>
                Description
              </th>
              <th>
                Publisher
              </th>
              <th>
                Current Rank
              </th>
              <th>
                Purchase Links
              </th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </table>
      </div>
    </main>
  )
}

export default Table;