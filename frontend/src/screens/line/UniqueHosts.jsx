import { Box } from '@mui/material';
import Header from '../../components/Header';
import UniqueHostsChart from '../../components/UniqueHostsChart';

const UniqueHosts = () => {
  return (
    <Box m='20px'>
      <Header title='Unique Hosts' subtitle='Unique hosts per day' />
      <Box height='75vh'>
        <UniqueHostsChart />
      </Box>
    </Box>
  );
};

export default UniqueHosts;
