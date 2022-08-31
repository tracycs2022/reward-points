import { render, screen, cleanup } from '@testing-library/react';
import Transactions from './transactions';


test.afterEach(cleanup);

test('renders transactions',() => {
  const data = [
    {
      "date": "6.1.2022",
      "transaction": "120"
  },
  {
      "date": "6.2.2022",
      "transaction": "55"
  },
  {
      "date": "7.3.2022",
      "transaction": "85"
  },
  {
      "date": "7.5.2022",
      "transaction": "200"
  }
  ];
  render(<Transactions transactionList = {data}/>);
  expect(screen.getByRole('button')).toHaveTextContent('Show total points');
  
})
