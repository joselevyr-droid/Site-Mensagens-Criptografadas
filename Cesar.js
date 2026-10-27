const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const beta = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
      let desejo = Number(prompt('0 para cifrar e 1 para decifrar\n'));
      let chave = Number(prompt('Digite a chave da cifra, um numero\n'));
      function CifraLetra (chave) {
        if (chave > 26) {
          chave = chave % 26;
        };
        let XX = alpha.length - 1;
        let YY = beta.length - 1;
        for (let i = 0; i < frase.length; i++) {
          for (let y = 0; y < alpha.length; y++) {
            if ((frase[i] == alpha[XX] || frase[i] == beta[YY]) && desejo === 0) {
              if (frase[i] == alpha[XX]) {
                  frase[i] = alpha[0 + (chave - 1)];          
                break;
              } else {
                frase[i] = beta[0 + (chave - 1)];
              };
            };
            if ((frase[i] == alpha[0] || frase[i] == beta[0]) && desejo === 1) {
               if (frase[i] == alpha[0]) {
                  frase[i] = alpha[XX - (chave - 1)];          
                break;
              } else {
                frase[i] = beta[YY - (chave - 1)];
              };
            };
            if(desejo === 1) {
              if (frase[i] === alpha[y]) {
              frase[i] = alpha[y - chave];
              break;
            };
            if (frase[i] == beta[y]) {
              frase[i] = beta[y - chave];
              break;
            };
            };
            if(desejo === 0) {
              if (frase[i] === alpha[y]) {
              frase[i] = alpha[y + chave];
              break;
            };
            if (frase[i] == beta[y]) {
              frase[i] = beta[y + chave];
              break;
            };
            };
            
          };
        };
        for (let p = 0; p < savespace.length; p++) {
          frase.splice(savespace[p], 0, " ");
        };
        frase = frase.join('');
      };
    CifraLetra(chave);
    break;
    
};
console.log(frase);
