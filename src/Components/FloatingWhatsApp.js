import React from 'react'
import Avatar from '.././avatar.png';
import FloatingWhatsApp from 'react-floating-whatsapp'

export default function App() {

  return (
      <FloatingWhatsApp 
      phoneNumber="+5511988512788"
      accountName="Atendente"
      statusMessage="Respondemos em até 3 minutinhos."
      chatMessage="Olá, como posso te ajudar?😀"
      placeholder="Digite sua mensagem"
      avatar={Avatar}
      allowClickAway
      notification
      notificationDelay={60000} // 1 minute
      /*notificationSound*/ />
  )
}