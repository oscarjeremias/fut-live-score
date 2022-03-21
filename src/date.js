const date = new Date();

const dia = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
const mes =
  date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1;
const ano = date.getFullYear();

export const hoje = `${ano}-${mes}-${dia}`;

export function time(match_start) {
  const hora = match_start.slice(11, 13);
  const minuto = match_start.slice(14, 16);
  const segundo = match_start.slice(17, 19);
  const horaNamber = Number(hora);
  const time = `${horaNamber + 1}:${minuto}:${segundo}`;
  return time;
}

export function timeJogo(date) {
  const dia = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
  const mes =
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth();
  const ano = date.getFullYear();

  const time = `${ano}-${mes}-${dia}`;

  return time;
}
