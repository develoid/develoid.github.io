const storageKey = 'theme-preference';

const onClick = () => {
  // flip current value
  theme.value = theme.value === 'dark'
    ? 'light'
    : 'dark'
  
  setPreference();
};

const getColorPreference = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey);
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
};

const setPreference = () => {
  localStorage.setItem(storageKey, theme.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.firstElementChild.classList.remove('light');
  document.firstElementChild.classList.remove('dark');
  document
    .querySelector('.PC-Header .HeaderRight .Theme-header i')
    ?.classList.remove('light');
  document
    .querySelector('.PC-Header .HeaderRight .Theme-header i')
    ?.classList.remove('dark');
  document
    .querySelector('.PC-Header .HeaderRight .Theme-header i')
    ?.classList.add(theme.value);
  document.firstElementChild.classList.add(theme.value);


};

const theme = {
  value: getColorPreference(),
};

// set early so no page flashes / CSS is made aware
reflectPreference();

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference();

  // now this script can find and listen for clicks on the control
  document
    .querySelector('.PC-Header .HeaderRight .Theme-header')
    ?.addEventListener('click', onClick);
};

// sync with system changes
window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches:isDark}) => {
    theme.value = isDark ? 'dark' : 'light'
    setPreference();
  });