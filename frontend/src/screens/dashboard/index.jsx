import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../themes';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import Header from '../../components/Header';
import StatBox from '../../components/StatBox';
import UniqueHostsChart from '../../components/UniqueHostsChart';
import StatusCodeChart from '../../components/StatusCodeChart';
import AverageDailyRequestsChart from '../../components/AverageDailyRequestsChart';
import {
  twentyFrequentEndPoints,
  twenty404EndPoints,
  twenty404Hosts,
  tenErrorPoints,
} from '../../data/analyzedData';
import Error404PerDayChart from '../../components/Error404PerDayChart';
import PieChart from '../../components/PieChart';

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m='20px'>
      {/* HEADER */}
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Header
          title='DASHBOARD'
          subtitle='NASA Web server Florida - Log Analytics for July and August 1995'
        />
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridAutoRows='140px'
        gap='20px'>
        {/* ROW 1 */}
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <StatBox
            title='3,460,000'
            subtitle='HTTP Requests received'
            progress='1'
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <StatBox
            title='137,933'
            subtitle='Number of Unique Hosts'
            progress='1'
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <StatBox
            title='3,100,524'
            subtitle='Num of 200 Responses'
            progress='0.8961'
            increase='89.6%'
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>
        <Box
          gridColumn='span 3'
          backgroundColor={colors.primary[400]}
          display='flex'
          alignItems='center'
          justifyContent='center'>
          <StatBox
            title='20,899'
            subtitle='Num of 404 responses'
            progress='0.06'
            increase='-0.6%'
            icon={
              <TrafficIcon
                sx={{ color: colors.greenAccent[600], fontSize: '26px' }}
              />
            }
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn='span 8'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}>
          <Box
            mt='25px'
            p='0 30px'
            display='flex '
            justifyContent='space-between'
            alignItems='center'>
            <Box>
              <Typography
                variant='h5'
                fontWeight='600'
                color={colors.grey[100]}>
                Unique Hosts Per Day
              </Typography>
            </Box>
          </Box>
          <Box height='250px' m='-20px 0 0 0'>
            <UniqueHostsChart isDashboard={true} />
          </Box>
        </Box>

        {/* ROW 3 */}
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          overflow='auto'>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p='15px'>
            <Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
              Top 20 Frequent Endpoints Accessed
            </Typography>
          </Box>
          {twentyFrequentEndPoints.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${colors.primary[500]}`}
              p='15px'>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant='h5'
                  fontWeight='600'>
                  {transaction.endpoint}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.count} times
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
            </Box>
          ))}
        </Box>

        <Box
          gridColumn='span 8'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}>
          <Box
            mt='25px'
            p='0 30px'
            display='flex '
            justifyContent='space-between'
            alignItems='center'>
            <Box>
              <Typography
                variant='h5'
                fontWeight='600'
                color={colors.grey[100]}>
                Average Daily Requests Per Host
              </Typography>
            </Box>
          </Box>
          <Box height='250px' m='-20px 0 0 0'>
            <AverageDailyRequestsChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}>
          <Typography
            variant='h5'
            fontWeight='600'
            sx={{ padding: '30px 30px 0 30px' }}>
            HTTP Status Code occurrences
          </Typography>
          <Box height='250px' mt='-20px'>
            <StatusCodeChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          overflow='auto'>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p='15px'>
            <Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
              Top Ten Error Endpoints
            </Typography>
          </Box>
          {tenErrorPoints.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${colors.primary[500]}`}
              p='15px'>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant='h5'
                  fontWeight='600'>
                  {transaction.endpoint}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.count} times
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          overflow='auto'>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p='15px'>
            <Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
              Top 20 404 Response Code Endpoints
            </Typography>
          </Box>
          {twenty404EndPoints.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${colors.primary[500]}`}
              p='15px'>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant='h5'
                  fontWeight='600'>
                  {transaction.endpoint}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.count} times
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
            </Box>
          ))}
        </Box>
        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}
          overflow='auto'>
          <Box
            display='flex'
            justifyContent='space-between'
            alignItems='center'
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p='15px'>
            <Typography color={colors.grey[100]} variant='h5' fontWeight='600'>
              Top Twenty 404 Response Code Hosts
            </Typography>
          </Box>
          {twenty404Hosts.map((transaction, i) => (
            <Box
              key={`${transaction.txId}-${i}`}
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              borderBottom={`4px solid ${colors.primary[500]}`}
              p='15px'>
              <Box>
                <Typography
                  color={colors.greenAccent[500]}
                  variant='h5'
                  fontWeight='600'>
                  {transaction.endpoint}
                </Typography>
                <Typography color={colors.grey[100]}>
                  {transaction.count} times
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{transaction.date}</Box>
            </Box>
          ))}
        </Box>

        <Box
          gridColumn='span 8'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}>
          <Box
            mt='25px'
            p='0 30px'
            display='flex '
            justifyContent='space-between'
            alignItems='center'>
            <Box>
              <Typography
                variant='h5'
                fontWeight='600'
                color={colors.grey[100]}>
                404 Errors per Day
              </Typography>
            </Box>
          </Box>
          <Box height='250px' m='-20px 0 0 0'>
            <Error404PerDayChart isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn='span 4'
          gridRow='span 2'
          backgroundColor={colors.primary[400]}>
          <Typography
            variant='h5'
            fontWeight='600'
            sx={{ padding: '30px 30px 0 30px' }}>
            Top Five Days for 404 Errors
          </Typography>
          <Box height='250px' mt='-20px'>
            <PieChart isDashboard={true} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
