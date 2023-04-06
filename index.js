// E-mail, pozdravy

// Vytvořte si repozitář ze šablony cviceni-email se stránkou obsahující šablonu jednoduchého e-mailu. Všimněte si, že do stránky je vložený JavaScript bez atributu type=module. To nám umožní volat námi vytvořené funkce přímo z konzole. S tímto atributem by to nešlo.

// Každý e-mail je třeba zakončit zdvořilým pozdravem.

// V souboru index.js vytvořte funkci bez parametrů s názvem goodbye. Tato funkce vloží do odstavce s třídou email__closing rozloučení „Na shledanou“.
// Otevřete stránku v prohlížeči a zavolejte funkci v konzoli. Ověřte, že správně změnila pozdrav na konci e-mailu.
// Končit e-mail slovy „Na shledanou“ je nezdvořilé. Přidejte proto do funkce goodbye parametr představující jméno pisatele e-mailu. Funkce do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:
// > goodbye('Pavel Ovesný')
// Ve stránce bude
// S pozdravem Pavel Ovesný

// E-mail, tělo
// Pokračujte na stránce z přechozího příkladu.

// Do souboru index.js přidejte funkci fillSubject s jedním parametrem subject. Tato funkce ze stránky vybere DOM element představující předmět e-mailu a nastaví jeho obsah na řetězec, který přišel v parametru. Zavolejte funkci z konzole a vykoušejte si nastavit předmět e-mailu na různé řetězce.
// Napište funkci fillBody s jedním parametrem body, která ze stránky vybere DOM element představující tělo e-mailu a nastaví jeho obsah dle hodnoty parametru. Funkci vyzkoušejte v konzoli.
// Z předchozího cvičení nám zůstala funkce goodbye. Do funkce fillBody přidejte další parametr s názvem name. Tento parametr bude představovat jméno odesílatele. Funkce vyplní tělo e-mailu a do elementu email__closing vloží pozdrav, který vyrobí pomocí volání funkce goodbye.


console.log('funguju');
/*
const goodbye = (name) => {

  const closingElm = document.querySelector('.email__closing')
  closingElm.textContent = `Na shledanou, ${name}`;
};
*/

const goodbye = (name) => {
  return `S pozdravem ${name}`;
}

const fillSubject = (subject) => {
  // const subjectElm = document.querySelector('.email__subject');
  // subjectElm.textContent = subject;
  document.querySelector('.email__subject').textContent = subject;


}

const fillBody = (body, name) => {
  // const bodyElm = document.querySelector('.email__body');
  // bodyElm.textContent = body
  document.querySelector('.email__body').innerHTML = body;
  const closingElm = document.querySelector('.email__closing')
  closingElm.textContent = goodbye(name);
}

