export function setToLocal(name, data) {
  localStorage.setItem(name, JSON.stringify(data));
}
export function getLooks() {
  return fetch("/api/looks").then(res => res.json());
}

export function postLook(data) {
  return fetchLook("POST", data);
}
export function deleteLooks(id) {
  return fetchLook("DELETE", null, id);
}

export function patchLook(data, id) {
  return fetchLook("PATCH", data, id);
}

function fetchLook(method, data, id = "") {
  return fetch("/api/looks/" + id, {
    method,
    headers: {
      "Content-Type": "application/json"
    },
    body: data ? JSON.stringify(data) : undefined
  }).then(res => res.json());
}
