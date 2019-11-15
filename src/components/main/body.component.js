import React from 'react';
import './body.css'
import InputTest from './../inputs/input.component'
import Parent from './../parent/parent.component'

const Main = () => {
   
    return (
        <section>
            <nav>
                <ul>
                    <li><a href="#">London</a></li>
                    <li><a href="#">Paris</a></li>
                    <li><a href="#">Tokyo</a></li>
                </ul>
            </nav>

            <article>               
              {/* <InputTest data={{parentData:'something'}}/> */}
              <Parent/>
            </article>
        </section>
    )
}

export default Main;