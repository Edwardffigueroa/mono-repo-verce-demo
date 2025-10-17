import renderScreen1 from "./screens/screen1.js";

const SUPABASE_URL = "https://umddngftjhiavglsrhpy.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVtZGRuZ2Z0amhpYXZnbHNyaHB5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg1NDU3MjksImV4cCI6MjA3NDEyMTcyOX0.CzpjI01fZuo5s2j8L-BMreFcQQPZze7iMhs4jDo-jEA";

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
const channel = supabase.channel("realtime-events");

function clearScripts() {
  document.getElementById("app").innerHTML = "";
}

let route = { path: "/", data: {} };

switch (route.path) {
  case "/":
    clearScripts();
    renderScreen1(route.data);
    break;
  default:
    const app = document.getElementById("app");
    app.innerHTML = `<h1>404 - Not Found</h1><p>The page you are looking for does not exist.</p>`;
}

function navigateTo(path, data) {
  route = { path, data };
}

async function makeRequest(url, method, body) {
  const BASE_URL = "https://myapp-backend-six.vercel.app";
  let response = await fetch(`${BASE_URL}${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  response = await response.json();

  return response;
}

export { navigateTo, channel, makeRequest };
