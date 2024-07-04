function open(url) {
  chrome.tabs.create({ url});
}

[
  {key: "Gmail", url: "https://mail.google.com/mail/u/0/#inbox"},
  {key: "Drive", url: "https://drive.google.com/drive/my-drive"},
  {key: "Sheets", url: "https://docs.google.com/spreadsheets/u/0/"},
  {key: "Slides", url: "https://docs.google.com/presentation/u/0"},
  {key: "Docs", url: "https://docs.google.com/document/u/0/"},
  {key: "YouTube", url: "https://www.youtube.com/"},
  {key: "Keep", url: "https://keep.google.com/"}
].forEach(({key, url}) => document.getElementById(key).addEventListener('click', () => open(url)))