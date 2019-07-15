import React, { Fragment } from 'react';
import { Card, CardImg, CardText, CardBody, CardLink, CardTitle, CardSubtitle } from 'reactstrap';
import { Header } from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import './aboutus.scss';

const About = () => (
  <Fragment>
    <Header />
    <div className="wrapper">
      <section className="sec-abt row">
        <div className="container-A">
          <h2 className="abt-h">About us</h2>
          <p className="top-texx">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
            architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
            sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
            amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut
            labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
            consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
            nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
        </div>
      </section>
      <section className="sect-wrks row">
        <div className="container-A spe">
          <h2 className="abt-h">How it works</h2>
          <br />
          <div className="textg row">
            <div className="boxxx">
              <span className="nummm">1</span>
            </div>
            <div className="tesx">
              Browse through the totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
              quasi architecto aut odit aut fugit, sed quia consequuntur magni dolores eos qui
              ratione voluptatem sequi n
            </div>
          </div>
          <div className="textg row">
            <div className="boxxx">
              <span className="nummm">2</span>
            </div>
            <div className="tesx">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudant totam rem aperiam, eaque ipsa quae aut odit aut fugit, sed quia consequuntur
              magni dolores eos qui ratione voluptatem sequi n
            </div>
          </div>
          <div className="textg row">
            <div className="boxxx">
              <span className="nummm">3</span>
            </div>
            <div className="tesx">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudant totam rem aperiam, eaque ipsa aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi n
            </div>
          </div>
        </div>
      </section>
      <section className="Ms-t row">
        <div className="container-A">
          <h2 className="abt-h">Meet out Trainers</h2>
          <br />
          <div className="row">
            <Card className="tutors">
              <div className="circ" />
              <div className="nam"> Chizindu David</div>
              <div className="handlesd">
                @chizzy_davis
                <br />
                @chizzy_davis
                {' '}
                <br />
                @chizzy_davis
              </div>
            </Card>
            <Card className="tutors">
              <CardBody className="circ1" />
              <div className="nam"> Bisola Johnson</div>
              <div className="handlesd">
                @Bisi
                <br />
                @Bisola
                {' '}
                <br />
                @Bisi
              </div>
            </Card>
            <Card className="tutors">
              <CardBody className="circ3" />
              <div className="nam">Allen Adeboye</div>
              <div className="handlesd">
                @Kareem
                <br />
                @Kareem_A
                {' '}
                <br />
                @kareem
              </div>
            </Card>
          </div>
        </div>
      </section>
      <section className="nbg-t row">
        <div className="container-A">
          <h2 className="abt-h">Contact us</h2>
          <br />
          <h3> Sed ut perspiciatis unde omnis iste natus error</h3>
        </div>
      </section>
    </div>
    <Footer />
  </Fragment>
);
export default About;
