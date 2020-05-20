import { GlobalStyle } from '../theme/Global';
import Meta from './Meta';
import Grid from '../theme/Grid';

class Page extends React.Component {
  render() {
    return (
      <>
        <Grid />
        <Meta />
        <GlobalStyle />
        {this.props.children}
      </>
    );
  }
}

export default Page;
