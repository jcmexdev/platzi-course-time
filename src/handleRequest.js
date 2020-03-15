const puppeteer = require('puppeteer');
const moment = require('moment');

const handleRequest = async platziCourseUrl => {

  const course_name = platziCourseUrl.substr(26,);

  const browser = await puppeteer.launch({
    headless: true,
    defaultViewport: null
  });
  const page = await browser.newPage();
  const URL = `https://platzi.com/clases/${course_name}`
  await page.goto(URL);
  const classes = await page.evaluate(async () => {
    const prefix = 'MaterialItem';
    const content = `${prefix}-content`;
    const title = `${prefix}-copy-title`;
    const time = `${prefix}-copy-time`;
    let cards = await document.getElementsByClassName(content);
    const res = [];
    for (i = 0; i < cards.length; i++) {
      let item = {};
      item.title = cards[i].getElementsByClassName(title)[0].innerText;
      if (cards[i].getElementsByClassName(time).length > 0) {
        item.time = cards[i].getElementsByClassName(time)[0].innerText;
        item.isDocument = false;
      } else {
        item.isDocument = true;
        item.time = '00:00 min';
      }
      res.push(item);
    }
    return res;
  });
  let totalSeconds = moment('00:00:00', 'HH:mm:ss');
  classes.forEach(item => {
    let time = item.time.split(' ')[0];
    totalSeconds.add(time.split(':')[0], 'minutes');
    totalSeconds.add(time.split(':')[1], 'seconds');
  });

  console.table(classes);
  console.log(
    `El curso tiene una duración aproximada de ${totalSeconds.format(
      'HH'
    )} horas ${totalSeconds.format('mm')} minutos ${totalSeconds.format(
      'ss'
    )} segundos.`
  );

  await browser.close();
};

module.exports = handleRequest;
