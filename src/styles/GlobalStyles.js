import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  

  --color-base-050: #acdbfa;
  --color-base-250: #5684a1;
  --color-base-500: #28526d;
  --color-base-750: #0b2638;
  --color-base-900: #000203;

/*}
.text-thin {
  font-weight: 100;
}

.text-light {
  font-weight: 300;
}
.text-regular {
  font-weight: 400;
}
.text-bold {
  font-weight: 700;
}
.text-black {
  font-weight: 900;
} */
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  background-color: var(--color-base-900);
}

body {
  background-color: var(--color-base-900);
  font-family: "Lato", sans-serif;
  color: var(--color-base-050);
  font-weight: 400;
  transition: color 0.3s, background-color 0.3s;

}

ul {
  list-style: none;
}


a {
  color: inherit;
  text-decoration: none;
}

.container {
  display: flex;
  flex-direction: column;
  gap: 1em;
}



`;

export default GlobalStyles;
