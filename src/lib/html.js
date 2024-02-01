function template(title,body) {
  const html = /* html */ `
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${title}</title>
      </head>
      <body>
          ${body}
      </body>
    </html>`;

  return html; 
}

export function indexTemplate() {
  const title = 'Forsíða';
  const body =  /* html */ `
  <section>
    <h1>Velkomin í boltadeildina</h1>
    <ul>
      <li><a href="leikir.html">Seinustu leikir</a></li>
      <li><a href="stada.html">Staðan í deildinni</a></li>
    </ul>
  </section>`

  return template(title,body)
}

export function stadaTemplate(standings) {
  const title = 'Staða';
  const standingsHtml = standings.toString();
  const body =  /* html */ `
    <section>
    <h1>Staðan í deildinni</h1>
    ${standingsHtml}
  </section>`

  return template(title,body)
}

export function leikirTemplate(games) {
  const title = 'Leikir';
  const gamesHtml = games.toString();

  const body =  /* html */ `
    <section>
    <h1>Leikir</h1>
    ${gamesHtml}
  </section>`

  return template(title,body)
}



