class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
    this._authorization = headers.authorization;
  }

  // 1.obtener información de un trabajo específico por su ID
  getJobInfo(id) {
    return fetch(`${this._url}/jobs/${id}`, {
      method: "GET",
      headers: {
        authorization: this._authorization,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // Si el servidor devuelve un error, rechaza la promesa con el mensaje de error
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  // 2.cargar trabajos iniciales
  getInitialJobs() {
    return fetch(
      `${this._url}/jobs?api_key=${this._authorization}&page=1&category=Computer%20and%20IT`,
      {
        method: "GET",
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // Si el servidor devuelve un error, rechaza la promesa con el mensaje de error
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  //https://www.themuse.com/api/public/companies?industry=Information%20Technology&industry=Technology&page=1
  getCompanies() {
    return fetch(
      `${this._url}/companies?industry=Technology&api_key=${this._authorization}&page=1`,
      {
        method: "GET",
      }
    ).then((res) => {
      if (res.ok) {
        return res.json();
      }
      // Si el servidor devuelve un error, rechaza la promesa con el mensaje de error
      return Promise.reject(`Error: ${res.status}`);
    });
  }
}

//API: https://www.themuse.com/developers/api/v2
// const API_KEY = "2872ba35cb1e4144c7b02c913ce614f78cc82da3f9f024cb0c88396211496560";
// const BASE_URL = "https://www.themuse.com/api/public/jobs";

//https://www.themuse.com/api/public/jobs?page=1&category=Computer%20and%20IT
//https://www.themuse.com/api/public/jobs?page=1&category=Software%20Engineer
//https://www.themuse.com/api/public/jobs?page=1&descending
//https://www.themuse.com/api/public/jobs?page=1

const api = new Api({
  url: "https://www.themuse.com/api/public",
  headers: {
    authorization:
      "2872ba35cb1e4144c7b02c913ce614f78cc82da3f9f024cb0c88396211496560",
    "Content-Type": "application/json",
  },
});

export default api;
