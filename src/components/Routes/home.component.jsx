import { Fragment } from "react"
import Hero from "../hero/hero.component"
import Main from "../body/main.component"
import Aside from "../aside/aside.component";
import Footer from "../footer/footer.component";

const Home = ()=> {
    return (
      <Fragment>
        <Hero />
        <Main />
        <Aside />
        <Footer />
      </Fragment>
    );
}

export default Home;