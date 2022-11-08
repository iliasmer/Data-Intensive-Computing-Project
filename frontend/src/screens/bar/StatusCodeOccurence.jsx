import { Box } from '@mui/material';
import Header from '../../components/Header';
import StatusCodeChart from '../../components/StatusCodeChart';

const StatusCodeOccurence = () => {
  return (
    <Box m='20px'>
      <Header title='HTTP Status Code' subtitle='Http Status Code Occurences' />
      <Box height='75vh'>
        <StatusCodeChart />
      </Box>
    </Box>
  );
};

export default StatusCodeOccurence;
