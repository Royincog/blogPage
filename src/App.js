import { Grommet,Box } from 'grommet';
import BlogPageHeader from './components/BlogPageHeader/BlogPageHeader';
import { Helmet } from 'react-helmet';
const theme = {
  global: {
    colors:{
    control: "lime-green",
    text: "off-white",
    "off-white": "#FFFFF0",
    "background-back": "royal-blue",
    "lime-green": "#ABC123",
    "royal-blue": "#123ABC",
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
      color : '#333'
    },
  },
};
function App() {
  return (
      <Grommet theme={theme}>
       <head>
       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
       <Helmet>
       <title>Damaged !!</title>
       </Helmet>
       </head>
       <Box align="center">
        <BlogPageHeader></BlogPageHeader>
        <h4>Hello World</h4>
        </Box>
      </Grommet>
  );
}

export default App;
