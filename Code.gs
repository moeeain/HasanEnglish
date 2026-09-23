/**
 * ============================================================
 * GOOGLE APPS SCRIPT BACKEND (optional alternative to Firebase)
 * ============================================================
 * SETUP:
 * 1) Create a new Google Sheet. Add a header row in Sheet1:
 *      Name | Score | Total | Date
 * 2) In the Sheet, go to Extensions → Apps Script.
 * 3) Delete any starter code and paste this whole file in.
 * 4) Click Deploy → New deployment → type: "Web app".
 *      - Execute as: Me
 *      - Who has access: Anyone
 * 5) Copy the Web App URL it gives you.
 * 6) Paste that URL into GOOGLE_SCRIPT_URL in firebase-config.js
 *    on your website (leave the Firebase config empty if you
 *    only want to use this option).
 * ============================================================
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Sheet1');
  const data = JSON.parse(e.postData.contents);
  sheet.appendRow([data.name, data.score, data.total, data.date]);
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet(e) {
  return ContentService
    .createTextOutput('This is the English ABC backend. Send POST requests only.')
    .setMimeType(ContentService.MimeType.TEXT);
}
