import { useEffect } from "react"

const useTitulo = (textoTitulo = 'Sin Titulo') => {
  return (
    useEffect(() => {
      document.title = `Codex - ${textoTitulo}`
    }, [])

  )
}

export default useTitulo