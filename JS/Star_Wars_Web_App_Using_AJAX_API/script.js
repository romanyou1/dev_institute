const DOM = {
  status: document.getElementById('status'),
  error: document.getElementById('error'),
  character: document.getElementById('character'),
  name: document.getElementById('name'),
  height: document.getElementById('height'),
  gender: document.getElementById('gender'),
  birth: document.getElementById('birth'),
  homeworld: document.getElementById('homeworld'),
  button: document.getElementById('find'),
};

const TOTAL_CHARACTERS = 83;

const showOnly = (visibleEl) => {
  const sections = [DOM.status, DOM.error, DOM.character];
  sections.forEach((section) => {
    section.hidden = section !== visibleEl;
  });
};

const getRandomId = () => Math.floor(Math.random() * TOTAL_CHARACTERS) + 1;

const fetchJson = async (url, timeoutMs = 1000) => {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, { signal: controller.signal });
    let data = null;
    try {
      data = await response.json();
    } catch (error) {
      data = null;
    }
    if (!response.ok) {
      const err = new Error('Request failed');
      err.status = response.status;
      err.data = data;
      throw err;
    }
    return data;
  } catch (error) {
    if (error.name === 'AbortError') {
      const timeoutError = new Error('Request timed out');
      timeoutError.code = 'TIMEOUT';
      throw timeoutError;
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
};

const fetchCharacter = async () => {
  const timeouts = [1000, 1500, 2000, 2500, 3000];

  for (let attempt = 0; attempt < timeouts.length; attempt += 1) {
    const id = getRandomId();
    try {
      const data = await fetchJson(
        `https://www.swapi.tech/api/people/${id}`,
        timeouts[attempt]
      );
      if (data?.result?.properties) {
        return data.result.properties;
      }
    } catch (error) {
      if (error.status === 404 || error.code === 'TIMEOUT') {
        continue;
      }
      throw error;
    }
  }

  throw new Error('Character not found');
};

const fetchHomeworldName = async (url) => {
  if (!url) return 'Unknown';
  try {
    const data = await fetchJson(url);
    return data.result?.properties?.name || 'Unknown';
  } catch (error) {
    return 'Unknown';
  }
};

const displayCharacter = (character, homeworld) => {
  DOM.name.textContent = character.name || 'Unknown';
  DOM.height.textContent = character.height || 'Unknown';
  DOM.gender.textContent = character.gender || 'Unknown';
  DOM.birth.textContent = character.birth_year || 'Unknown';
  DOM.homeworld.textContent = homeworld;
};

let isLoading = false;

const setLoading = (loading) => {
  isLoading = loading;
  DOM.button.disabled = loading;
};

const loadCharacter = async () => {
  if (isLoading) return;
  setLoading(true);
  showOnly(DOM.status);

  try {
    const character = await fetchCharacter();
    if (!character) {
      throw new Error('Character data missing');
    }
    const homeworldName = await fetchHomeworldName(character.homeworld);
    displayCharacter(character, homeworldName);
    showOnly(DOM.character);
  } catch (error) {
    showOnly(DOM.error);
  } finally {
    setLoading(false);
  }
};

DOM.button.addEventListener('click', loadCharacter);
