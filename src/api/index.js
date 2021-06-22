const endPoint = "http://localhost/ApiPrueba";

export const getAllRoutes = async () => {
  const query = await fetch(`${endPoint}/getRoute.php`, {
    method: "POST",
  });
  if (query.ok) {
    if (query.ok) {
      const jsonData = await query.json();
      return jsonData;
    }
  }
};

export const deleteRouteApi = async (data) => {
  const formData = new FormData();
  formData.append("idRoute", data);
  const query = await fetch(`${endPoint}/deleteRoute.php`, {
    method: "POST",
    body: formData,
  });
  if (query.ok) {
    if (query.ok) {
      const jsonData = await query.json();
      return jsonData;
    }
  }
};

export const updateRouteApi = async (data) => {
  const formData = new FormData();
  formData.append("id", data.id);
  formData.append("nombre", data.nombre);
  if (data.idRutaPadre) {
    formData.append("idRoute", data.idRutaPadre);
  }
  const query = await fetch(`${endPoint}/updateRoute.php`, {
    method: "POST",
    body: formData,
  });
  if (query.ok) {
    if (query.ok) {
      const jsonData = await query.json();
      return jsonData;
    }
  }
};

export const createRouteApi = async (data) => {
  const formData = new FormData();
  formData.append("id", data.id);
  formData.append("nombre", data.nombre);
  if (data.idRutaPadre) {
    formData.append("idRoute", data.idRutaPadre);
  }
  const query = await fetch(`${endPoint}/createRoute.php`, {
    method: "POST",
    body: formData,
  });
  if (query.ok) {
    if (query.ok) {
      const jsonData = await query.json();
      return jsonData;
    }
  }
};
