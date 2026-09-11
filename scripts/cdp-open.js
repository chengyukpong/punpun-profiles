// usage: node scripts/cdp-open.js <url>
// opens URL in existing CDP browser on :9223
const http = require("http");
const url = process.argv[2] || "https://example.com";
function getJson(path) {
  return new Promise((resolve, reject) => {
    http.get({ host: "127.0.0.1", port: 9223, path }, (res) => {
      let d = ""; res.on("data", c => d += c); res.on("end", () => resolve(JSON.parse(d)));
    }).on("error", reject);
  });
}
(async () => {
  const pages = await getJson("/json");
  const page = pages.find(p => p.type === "page");
  const ws = new WebSocket(page.webSocketDebuggerUrl);
  await new Promise(r => ws.addEventListener("open", r, { once: true }));
  const id = 1;
  ws.send(JSON.stringify({ id, method: "Runtime.evaluate", params: { expression: `location.href = ${JSON.stringify(url)}`, returnByValue: true } }));
  console.log("navigating to", url);
  setTimeout(() => process.exit(0), 2000);
})().catch(e => { console.error(e); process.exit(1); });
