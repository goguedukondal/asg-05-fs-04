import React from 'react'

function Nav() {
  return (
    <div className='nav'>
      <div>
        <h1>LOGO</h1>
      </div>
      <div className='links'>
        <section>
            <button href='#'>HOME</button>
        </section>
        <section>
        <button href='#'>ABOUT</button>
        </section>
        <section>
        <button href='#'>MENU</button>
        </section>
        <section>
        <button href='#'>ORDER</button>
        </section>
        <section>
        <button href='#'>CONTACT</button>
        </section>
      </div>
    </div>
  )
}

export default Nav