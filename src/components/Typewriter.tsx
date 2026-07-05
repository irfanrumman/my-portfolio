import { useEffect, useState } from 'react'

interface TypewriterProps {
  words: string[]
  typingSpeed?: number // ms per character while typing
  deletingSpeed?: number // ms per character while deleting
  pauseTime?: number // ms to pause once a word is fully typed
}

export default function Typewriter({
  words,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseTime = 1400,
}: TypewriterProps) {
  const [wordIndex, setWordIndex] = useState(0)
  const [text, setText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIndex % words.length]

    let delay = isDeleting ? deletingSpeed : typingSpeed

    if (!isDeleting && text === currentWord) {
      // Fully typed — pause, then start deleting.
      delay = pauseTime
    } else if (isDeleting && text === '') {
      // Fully deleted — move on to the next word and start typing again.
      delay = typingSpeed
    }

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentWord) {
        setIsDeleting(true)
        return
      }
      if (isDeleting && text === '') {
        setIsDeleting(false)
        setWordIndex((i) => (i + 1) % words.length)
        return
      }
      setText((prev) =>
        isDeleting ? currentWord.slice(0, prev.length - 1) : currentWord.slice(0, prev.length + 1)
      )
    }, delay)

    return () => clearTimeout(timeout)
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="inline-flex items-center">
      {text}
      <span className="ml-0.5 w-[2px] h-[1em] bg-accent animate-pulse" aria-hidden="true" />
    </span>
  )
}
