# RozliczanieTras

PWA do rozliczania tras kierowcy (TVM Transport / KOBI Transport): kilometry, punkty, przestój, dodatek za tachograf, dodatki, paliwo (oszczędność/przepał wg norm), miesiące z zamykaniem, raporty PDF z kartami drogowymi, synchronizacja telefon ↔ MacBook przez prywatne repo GitHub.

## Pliki (wgraj wszystkie do repo `RozliczanieTras`, GitHub Pages)
RozliczanieTras.html · manifest.json · sw.js · icon-192.png · icon-512.png · apple-touch-icon.png · pdf-lib.min.js · fontkit.umd.min.js · archivo-400.ttf · archivo-700.ttf · crimson-400i.ttf · crimson-700i.ttf · pdfjs.min.js · pdfjs.worker.min.js

Adres: `https://LOGIN.github.io/RozliczanieTras/RozliczanieTras.html`.

## Instalacja
- iPhone (Safari): Udostępnij → Do ekranu początkowego.
- Mac (Safari): Plik → Dodaj do Docka.
- Android (Chrome): ⋮ → Zainstaluj aplikację.

## Aktualizacje
Podmieniasz `RozliczanieTras.html` i `sw.js` (numer wersji w Backup na dole).

## Synchronizacja (prywatne repo na dane, np. `RozliczanieTras-dane`)
1. Prywatne repo + „Add a README”.
2. Fine-grained token: tylko to repo, Contents: Read and write (Metadata: Read-only dodaje się samo).
3. W aplikacji: Backup → Synchronizacja urządzeń → `login/RozliczanieTras-dane` + token. Na każdym urządzeniu.
Najpierw łączysz urządzenie z aktualnymi danymi.

## Zasady
- Stawki (osobno TVM i KOBI) obowiązują od wybranego miesiąca do następnej zmiany; nie zmieniają wcześniejszych miesięcy.
- Stawka za litr paliwa — osobno dla każdego miesiąca i firmy.
- „Zakończ miesiąc” blokuje ten i wcześniejsze miesiące i generuje raporty PDF (TVM i KOBI osobno) z załącznikami.
- Paliwo: oszczędność → +(km/100) × stawka za litr; przepał → −(km/100) × stawka (alternatywa w stawkach).
- Karta drogowa: „📝 Karta drogowa” w widoku miesiąca → formularz jak karta z Numbers → „Zatwierdź kartę” tworzy trasę (km z liczników, punkty, tankowania trasa/baza, przestój) i PDF karty (dołączony do trasy i do raportu miesiąca) → „Wyślij mailem”.
- Podpis do karty: wgrywasz w Backup → Ustawienia (nie wrzucaj pliku z podpisem do publicznego repo).
- Karta w trakcie: można zapisać bez licznika powrotu (0 km, znaczek „karta w trakcie”); uzupełniasz później przez trasę → 📝 Karta drogowa.
- Podgląd karty: „👁 Podgląd karty” w formularzu i „Podgląd” po zatwierdzeniu.
- Nr zlecenia w formacie cyfra 1–9 + data DDMMRRRR (np. 112102026) dostaje automatycznie 0 na początku.
