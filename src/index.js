window.onload = () => {
    console.info('Run JS.');
    const root_el = document.querySelector('#app');
    dom_shadow(root_el);



   class MyHeader extends HTMLElement {
        constructor() {
          super(); // always call super() first in the constructor.
      
          // Attach a shadow root to <fancy-tabs>.
          const shadowRoot = this.attachShadow({mode: 'open'});

          const style = `
          p{ 
              color:pink 
        }
          `;

          shadowRoot.innerHTML = `
            <style>`+style+`</style> <!-- styles are scoped -->
            <p>my header</p>
          `;
        }
    }

    customElements.define('nightdvlpr-header',MyHeader);
}

/**
 * DOM
 * @param {object} el
 */
function dom_real(el) {
    const h1 = document.createElement('h1');
    h1.textContent = 'Hello DOM';
    header.appendChild(h1);
    el.appendChild(header);
}

/**
 * DOM Shadow
 * @param {Object} el
 */
function dom_shadow(el) {
    const div = document.createElement('div');
    const shadowRoot = div.attachShadow({
        mode: 'open'
    });
    shadowRoot.innerHTML = `
    <style>
    p,
    h3 {
        color: orange;
    }
    </style>
    <p>
    This is a paraghraph.
    </p>
    `;
    document.querySelector('#app').appendChild(div);
}