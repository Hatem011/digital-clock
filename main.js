

function getTime()
{
  let date=new Date();
  document.getElementById('clock').innerHTML=
  `
  ${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}
  `
  setTimeout(getTime,1000)
}
getTime()