/**
 * Apps Script для приёма данных формы «Анкета гостя» в Google Таблицу.
 *
 * УСТАНОВКА:
 * 1. Откройте (или создайте) Google Таблицу для ответов гостей.
 * 2. В первой строке первого листа впишите заголовки строго в этом порядке:
 *
 *    A: Дата и время
 *    B: Имя и фамилия
 *    C: Присутствие
 *    D: Количество гостей
 *    E: Напитки
 *    F: Комментарий
 *
 * 3. В этой же таблице: Расширения → Apps Script.
 * 4. Удалите содержимое редактора и вставьте код ниже.
 * 5. Нажмите "Развернуть" → "Новое развёртывание".
 *    - Тип: "Веб-приложение".
 *    - Выполнять от имени: "Меня".
 *    - У кого есть доступ: "Все" (Anyone).
 * 6. Скопируйте выданный URL (вида
 *    https://script.google.com/macros/s/XXXXXXXXXXXX/exec).
 * 7. Вставьте этот URL в index.html вместо ACTION_URL (см. инструкцию в файле).
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Лист1")
              || SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];

  var p = e.parameter;

  sheet.appendRow([
    new Date(),                         // A: Дата и время
    p['Имя и фамилия']     || '',       // B
    p['Присутствие']       || '',       // C
    p['Количество гостей'] || '',       // D
    p['Напитки']           || '',       // E
    p['Комментарий']       || ''        // F
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "ok" }))
    .setMimeType(ContentService.MimeType.JSON);
}
