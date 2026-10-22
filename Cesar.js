const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let frase = prompt('Digite a frase\n');
frase = frase.toLowerCase();
let esc = Number(prompt('Digite [0] para Cifra de Cesar\n'))
let letra = "";
let savespace = [];
let mspace = 0;

switch (esc) {

  case 0:
    letra = " ";
    break;
    
};
frase = frase.split('');
function VerificaLetra (m, s) {
  let TT = frase.length;
 switch (s) {
     
   case 0:
  for (let i = 0; i < TT; i++) {
    if (frase[i] === m) {
      frase.splice(i, 1);
      TT = frase.length;
      savespace.push(i + mspace);
      mspace++;
      i--;
      continue;
    } else {
      continue;
    };
  };
     break;
     
 }
};
VerificaLetra(letra, esc);
switch (esc) {

  case 0:
      let chave = Number(prompt('Digite a chave da cifra, um numero\n'));
      function CifraLetra (chave) {
        if (chave > 26) {
          chave = chave % 26;
        };
        for (let i = 0; i < frase.length; i++) {
          for (let y = 0; y < alpha.length; y++) {
            if (frase[i] === alpha[y]) {
                        console.log(frase[i], " ", alpha[y], " ", alpha[y + chave]);
              frase[i] = alpha[y + chave];
            } else {
              continue;
            };
          };
        };
      };
    CifraLetra(chave);
    break;
    
};
console.log(frase);
