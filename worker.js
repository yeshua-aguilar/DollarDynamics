// worker.js
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  // Configuración de la caché
  const cache = caches.default
  
  // Manejo de rutas
  const url = new URL(request.url)
  
  // Si la solicitud es para el root o index.html
  if (url.pathname === '/' || url.pathname === '/index.html') {
    const response = await fetch('dist/index.html')
    const headers = new Headers(response.headers)
    headers.set('Cache-Control', 'public, max-age=31536000')
    return new Response(response.body, {
      status: 200,
      headers: headers
    })
  }
  
  // Para archivos estáticos
  const filePath = url.pathname.slice(1)
  const response = await fetch(`dist/${filePath}`)
  
  // Agregar encabezados de caché
  const headers = new Headers(response.headers)
  headers.set('Cache-Control', 'public, max-age=31536000')
  
  return new Response(response.body, {
    status: response.status,
    headers: headers
  })
}