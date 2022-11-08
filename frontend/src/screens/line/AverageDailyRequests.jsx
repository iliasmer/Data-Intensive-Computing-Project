import { Box } from '@mui/material';
import AverageDailyRequestsChart from '../../components/AverageDailyRequestsChart';
import Header from '../../components/Header';

const AverageDailyRequests = () => {
  return (
    <Box m='20px'>
      <Header
        title={'Average Daily Requests'}
        subtitle='Average daily requests per host'
      />
      <Box height='75vh'>
        <AverageDailyRequestsChart />
      </Box>
    </Box>
  );
};

export default AverageDailyRequests;
