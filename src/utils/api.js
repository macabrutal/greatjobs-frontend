class Api {
    constructor({ url, headers }) {
      this._url = url;
      this._headers = headers;
    }
  
    // Método para obtener información de un trabajo específico por su ID
    getJobInfo(id) {
      return fetch(`${this._url}/jobs/${id}`, {
        method: "GET",
        headers: this._headers,
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        // Si el servidor devuelve un error, rechaza la promesa con el mensaje de error
        return Promise.reject(`Error: ${res.status}`);
      });
    }
  
    // Método para obtener trabajos iniciales
    getInitialJobs() {
      return fetch(`${this._url}/jobs`, {
        method: "GET",
        headers: this._headers,
      }).then((res) => {
        if (res.ok) {
          return res.json();
        }
        // Si el servidor devuelve un error, rechaza la promesa con el mensaje de error
        return Promise.reject(`Error: ${res.status}`);
      });
    }
  }
  
  const api = new Api({
    url: "https://api.themuse.com/v2",
    headers: {
      "Content-Type": "application/json",
    },
  });
  
  export default api;
  