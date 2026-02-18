const API_BASE = "https://v6.exchangerate-api.com/v6";
const API_KEY = "695cc9d56029b273a42a8db3";
const fromSelect = document.querySelector("#from-currency");
const toSelect = document.querySelector("#to-currency");
const amountInput = document.querySelector("#amount");
const convertButton = document.querySelector("#convert");
const swapButton = document.querySelector("#swap");
const statusEl = document.querySelector("#status");
const outputEl = document.querySelector("#output");

let supportedCodes = [];

loadCurrencies(API_KEY);

convertButton.addEventListener("click", () => {
  convert();
});

swapButton.addEventListener("click", () => {
  if (!fromSelect.value || !toSelect.value) return;
  const temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  convert();
});

amountInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") convert();
});

async function loadCurrencies(apiKey) {
  setStatus("Loading supported currencies...");
  disableControls(true);
  try {
    supportedCodes = await fetchSupportedCodes(apiKey);
    populateSelects(supportedCodes);
    setStatus("Currencies loaded. Choose your pair.");
  } catch (error) {
    setStatus(error.message, true);
  } finally {
    disableControls(false);
  }
}

function disableControls(isDisabled) {
  fromSelect.disabled = isDisabled;
  toSelect.disabled = isDisabled;
  convertButton.disabled = isDisabled;
  swapButton.disabled = isDisabled;
}

function populateSelects(codes) {
  const sorted = [...codes].sort((a, b) => a[0].localeCompare(b[0]));
  const fragmentFrom = document.createDocumentFragment();
  const fragmentTo = document.createDocumentFragment();

  sorted.forEach(([code, name]) => {
    const label = `${code} - ${name}`;
    const optionFrom = new Option(label, code);
    const optionTo = new Option(label, code);
    fragmentFrom.appendChild(optionFrom);
    fragmentTo.appendChild(optionTo);
  });

  fromSelect.innerHTML = "";
  toSelect.innerHTML = "";
  fromSelect.appendChild(fragmentFrom);
  toSelect.appendChild(fragmentTo);

  const preferredFrom = findOptionValue(["USD", "EUR", "GBP"]) || sorted[0]?.[0];
  const preferredTo = findOptionValue(["ILS", "EUR", "GBP"]) || sorted[1]?.[0];

  if (preferredFrom) fromSelect.value = preferredFrom;
  if (preferredTo) toSelect.value = preferredTo;
}

function findOptionValue(preferred) {
  return preferred.find((code) => supportedCodes.some((item) => item[0] === code));
}

async function convert() {
  const apiKey = API_KEY;

  if (!fromSelect.value || !toSelect.value) {
    setStatus("Currencies are still loading. Please wait.", true);
    return;
  }

  const amount = parseFloat(amountInput.value);
  if (Number.isNaN(amount) || amount <= 0) {
    setStatus("Enter a valid amount greater than 0.", true);
    return;
  }

  setStatus("Fetching conversion rate...");
  outputEl.textContent = "--";
  convertButton.disabled = true;

  try {
    const data = await fetchPairRate(apiKey, fromSelect.value, toSelect.value, amount);
    const formatted = formatResult(data.conversion_result, toSelect.value);
    outputEl.textContent = formatted;
    setStatus(`1 ${fromSelect.value} = ${data.conversion_rate} ${toSelect.value}`);
  } catch (error) {
    setStatus(error.message, true);
  } finally {
    convertButton.disabled = false;
  }
}

function formatResult(value, code) {
  const formatter = new Intl.NumberFormat("en-US", {
    maximumFractionDigits: 4,
  });
  return `${formatter.format(value)} ${code}`;
}

async function fetchSupportedCodes(apiKey) {
  const url = `${API_BASE}/${apiKey}/codes`;
  const data = await fetchJson(url);
  if (data.result !== "success") {
    throw new Error(readableError(data));
  }
  return data.supported_codes;
}

async function fetchPairRate(apiKey, from, to, amount) {
  const url = `${API_BASE}/${apiKey}/pair/${from}/${to}/${amount}`;
  const data = await fetchJson(url);
  if (data.result !== "success") {
    throw new Error(readableError(data));
  }
  return data;
}

function readableError(data) {
  if (data["error-type"]) {
    return `API error: ${data["error-type"].replace(/_/g, " ")}.`;
  }
  return "Something went wrong while contacting the API.";
}

async function fetchJson(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Network error: ${response.status}.`);
  }
  return response.json();
}

function setStatus(message, isError = false) {
  statusEl.textContent = message;
  statusEl.style.color = isError ? "#ffd2d2" : "var(--text-soft)";
}
