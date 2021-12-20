import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

function App() {
  const [text, setText] = useState('# input your text here to preview')

  return (
    <main>
      <section className='text'>
        <textarea
          className='input'
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
        <article className='output'>
          <ReactMarkdown>{text}</ReactMarkdown>
        </article>
      </section>
    </main>
  )
}

export default App
