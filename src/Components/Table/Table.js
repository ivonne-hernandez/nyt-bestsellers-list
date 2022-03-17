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
          return <a href={link.url} key={`${book.title}-${link.name}`}>{link.name}</a>
        });

        return(
          <tr key={`${list.list_name}-${book.title}`}>
            <td>
              {list.list_name}
            </td>
            <td>
              {book.title}
            </td>
            <td>
              {book.author}
            </td>
            <td>
              {book.description}
            </td>
            <td>
              {book.publisher}
            </td>
            <td>
              {book.rank}
            </td>
            <td>
              {purchaseLinks}
            </td>
          </tr>
        );
      });
      allRows.push(...listRows);
    })
    return allRows;
  }
  
  return (
    <main className='table-container'>
      <p>
        Currently Viewing {date} week's list
      </p>
      <p>
        Number of entries: {calculateNumberOfEntries()}
      </p>
      <table>
        <thead>
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
    </main>
  )
}

export default Table;