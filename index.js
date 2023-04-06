// E-mail, pozdravy

// Vytvořte si repozitář ze šablony cviceni-email se stránkou obsahující šablonu jednoduchého e-mailu. Všimněte si, že do stránky je vložený JavaScript bez atributu type=module. To nám umožní volat námi vytvořené funkce přímo z konzole. S tímto atributem by to nešlo.

// Každý e-mail je třeba zakončit zdvořilým pozdravem.

// V souboru index.js vytvořte funkci bez parametrů s názvem goodbye. Tato funkce vloží do odstavce s třídou email__closing rozloučení „Na shledanou“.
// Otevřete stránku v prohlížeči a zavolejte funkci v konzoli. Ověřte, že správně změnila pozdrav na konci e-mailu.
// Končit e-mail slovy „Na shledanou“ je nezdvořilé. Přidejte proto do funkce goodbye parametr představující jméno pisatele e-mailu. Funkce do posledního odstavce vloží koncový pozdrav i se jménem. Příklad použití:
// > goodbye('Pavel Ovesný')
// Ve stránce bude
// S pozdravem Pavel Ovesný


console.log('funguju');

const goodbye = (name) => {

  const closingElm = document.querySelector('.email__closing')
  closingElm.textContent = `Na shledanou, ${name}`;
};
