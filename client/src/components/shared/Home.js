import { Image } from 'semantic-ui-react';
import { MainHead, SecHead, MainImg, MainP } from '../../styledComponents/sharedStyles';
import { Fade } from 'react-reveal';
const Home = () => (
  <>
    <MainHead>Home page</MainHead>
    <SecHead>Home page as well</SecHead>
    <Fade left>
      <MainP>
        Spicy jalapeno bacon ipsum dolor amet quis excepteur bresaola ham. Sausage veniam consectetur kevin, ham hock capicola irure commodo velit salami. Tempor kielbasa lorem beef ribs burgdoggen meatloaf. In andouille incididunt, ut dolore short loin brisket chicken. Incididunt sunt occaecat, nisi hamburger aliquip flank anim. Pork belly leberkas aute, officia pork chop adipisicing nisi. Ullamco ex turkey aliqua venison buffalo.
      </MainP>
    </Fade>
    <Fade right>
      <MainP>
        Fugiat aute ground round, tri-tip pancetta ut capicola in sausage eiusmod enim. Ut short ribs beef ribs kielbasa tenderloin ground round tongue salami mollit. Swine elit non, minim sed nulla chicken jerky. Labore corned beef porchetta hamburger pig ribeye cupidatat ut pancetta turkey strip steak quis t-bone. Tongue ut ribeye burgdoggen short ribs ipsum picanha pariatur porchetta pig do meatloaf id. Dolore frankfurter esse, doner pig officia kevin occaecat tongue short loin duis adipisicing in chicken shankle. Nulla pork chop beef spare ribs.
      </MainP>
    </Fade>
    <Fade left>
      <MainP>
        Jerky flank excepteur minim sed deserunt landjaeger swine ex dolore esse. Rump pork ex ut. Turducken do kielbasa bresaola. Aliqua duis aliquip hamburger kevin. In shoulder nostrud anim chuck. Ham non veniam corned beef sirloin rump kevin chicken id sed elit jowl. Prosciutto occaecat in jerky, corned beef pancetta culpa kevin porchetta in turkey eu.
      </MainP>
    </Fade>
    <Fade right>
      <MainP>
        Shoulder est dolor commodo prosciutto anim, aute minim shankle enim landjaeger meatloaf dolore cupidatat. Frankfurter chicken cillum commodo, ea nostrud ut jerky consectetur duis ullamco flank tenderloin rump. Sunt adipisicing velit commodo esse cupim veniam in ipsum tenderloin duis. Ut occaecat cow, t-bone andouille adipisicing pancetta burgdoggen. Sausage kevin laborum pastrami, pork loin officia short loin kielbasa chicken. Spare ribs meatloaf in, sunt pork belly picanha laborum mollit ad irure velit ex consectetur. Sausage bacon sunt, t-bone ad tongue est non proident kevin culpa.
      </MainP>
    </Fade>
    <Fade bottom>
      <MainP>
        Exercitation sed porchetta reprehenderit duis. Burgdoggen bacon ribeye mollit chislic adipisicing brisket andouille shank flank beef laboris. Shoulder beef lorem biltong porchetta tail corned beef reprehenderit laboris consectetur ut sed tenderloin capicola. Spare ribs ex excepteur brisket, filet mignon chicken boudin landjaeger est veniam kevin reprehenderit flank cow. Picanha exercitation strip steak porchetta. Exercitation ad et boudin sed tail drumstick qui leberkas shankle biltong non burgdoggen.
      </MainP>
    </Fade>
    <MainImg 
      src="https://images.unsplash.com/photo-1612392166886-ee8475b03af2?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2251&q=80"
      alt="hot dogs" 
    />
  </>
)
export default Home;