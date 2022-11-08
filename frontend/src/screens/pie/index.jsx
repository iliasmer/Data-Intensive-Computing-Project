import { Box } from '@mui/material';
import Header from '../../components/Header';
import PieChart from '../../components/PieChart';

const Pie = () => {
  return (
    <Box m='20px'>
      <Header
        title='Top 5 Days - 404 Errors'
        subtitle='Top 5 days where 404 response was received'
      />
      <Box height='75vh'>
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
