import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
export default function NotFoundContent({className}) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row" style={{textAlign:"center"}}>
        <div className="col col--6 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="That page does not exist">
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="We could not find what your were looking for">
              We could not find what you were looking for.
            </Translate>
          </p>
          <img src="https://binanceapi-net.github.io/img/icon.png" width="100" height="100" style={{display:"block",marginLeft:"auto",marginRight:"auto"}}/>
          <p>
            <Translate
              id="theme.NotFound.p2"
              description="Please return Home">
              Please return to the homepage and go from there.
            </Translate>
          </p>
        </div>
      </div>
    </main>
  );
}
