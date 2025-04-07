import React from 'react'
import { useState } from 'react'
import ButtonModal from './ButtonModal'
import Modal from './modal'


function App() {
  const [modal, setModal] = React.useState(false)

  return (
   <div>
    <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>

    <Modal modal={modal} setModal={setModal} />
     <ButtonModal setModal= {setModal} />
   </div>
  )
}

export default App
