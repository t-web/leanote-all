var MSG={"noTag":"Keine Tags","saveSuccess":"Speichern erfolgreich","none":"Keine","like":"Gefällt mir","unlike":"Gefällt mir nicht mehr","delete":"Löschen","cancel":"Abbrechen","confirm":"Bestätigen","chooseReason":"Grund angeben","reportSuccess":"Erfolg","error":"Fehler","reportComment?":"Kommentar?","reportBlog?":"Blog?","confirmDeleteComment":"Wirklich löschen?","scanQRCode":"weichat öffnen und QR Code scannen","justNow":"Jetzt","minutesAgo":"Minuten","hoursAgo":"Stunden","daysAgo":"Tage","weeksAgo":"Wochen","monthsAgo":"Monate"};function getMsg(key, data) {var msg = MSG[key];if(msg) {if(data) {if(!isArray(data)) {data = [data];}for(var i = 0; i < data.length; ++i) {msg = msg.replace("%s", data[i]);}}return msg;}return key;}