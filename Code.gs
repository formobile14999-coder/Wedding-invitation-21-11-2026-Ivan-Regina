/**
 * Google Apps Script для RSVP свадебного приглашения
 *
 * Таблица Google Sheets:
 * 1. Создайте вкладку с названием: Ответы
 * 2. В первой строке разместите заголовки:
 *
 * A1: Время
 * B1: Имя и фамилия
 * C1: Присутствие
 * D1: Количество гостей
 * E1: Комментарий
 *
 * 3. Вставьте этот код в Apps Script, привязанный к таблице.
 * 4. Разверните: Развернуть → Новое развёртывание → Веб-приложение.
 *    Выполнять от имени: Я
 *    У кого есть доступ: Все
 * 5. Скопируйте URL /exec и вставьте его в index.html вместо ACTION_URL.
 */

const SHEET_NAME = 'Ответы';

function doGet() {
  return HtmlService.createHtmlOutput(
    '<!doctype html><html><head><meta charset="utf-8"></head>' +
    '<body style="font-family:Arial;text-align:center;padding:40px">' +
    'Сервис ответов работает.' +
    '</body></html>'
  );
}

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error('Не найдена вкладка "' + SHEET_NAME + '".');
  }

  const p = e && e.parameter ? e.parameter : {};

  sheet.appendRow([
    new Date(),
    p['Имя и фамилия'] || '',
    p['Присутствие'] || '',
    p['Количество гостей'] || '',
    p['Комментарий'] || ''
  ]);

  return HtmlService.createHtmlOutput(
    '<!doctype html><html><head><meta charset="utf-8"></head>' +
    '<body style="margin:0;background:#031E3D;color:#fff;' +
    'font-family:Arial,sans-serif;display:grid;place-items:center;height:100vh">' +
    '<div style="text-align:center;font-size:20px;padding:30px">' +
    'Спасибо, ваш ответ отправлен 💙' +
    '</div></body></html>'
  );
}
