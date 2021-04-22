import { Image } from 'semantic-ui-react';
import { MainHead, SecHead } from '../../styledComponents/sharedStyles';
const Home = () => (
  <>
    <MainHead>Home page</MainHead>
    <SecHead>Home page as well</SecHead>
    <Image
      src="https://images.unsplash.com/photo-1612392166886-ee8475b03af2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
      alt="hot dogs"
    />
  </>
)
export default Home;