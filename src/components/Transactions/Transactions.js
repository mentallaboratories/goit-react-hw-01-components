import PropTypes from 'prop-types';
import {Table, Transaction} from './Transactions.styled';

export const Transactions = ({items}) =>{
    return(
        <Table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <Transaction>
            {items.map((item)=>(
                
                <tr key = {item.id}>
                    <td>{item.type}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency}</td>
                </tr>
            ))}
        </Transaction>
      </Table>
    );
};

Transactions.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        ammount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired
    })
}