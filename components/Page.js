import { GlobalStyle } from '../theme/Global';
import Meta from './Meta';
import Header from './Header';
import Grid from '../theme/Grid';

class Page extends React.Component {
  render() {
    return (
      <>
        {/* <Grid /> */}
        <Meta />
        <GlobalStyle />
        <Header />
        <div className="wrapper">{this.props.children}</div>
      </>
    );
  }
}

export default Page;
