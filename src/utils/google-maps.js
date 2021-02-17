const scriptTag = document.createElement('script');
scriptTag.type = 'text/javascript';
scriptTag.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.API_GOOGLE_KEY}&libraries=places,geometry&language=pt-BR`;
window.document.body.appendChild(scriptTag);