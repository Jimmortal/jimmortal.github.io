// Массив для хранения всех записей
var entries = [];

// Функция для обновления списка записей на странице
function updateEntries() {
  var entriesContainer = document.getElementById("entries-container");
  entriesContainer.innerHTML = ""; // Очистка списка
  
  // Перебираем все записи и добавляем их в список
  for (var i = 0; i < entries.length; i++) {
    var entry = entries[i];
    
    var entryHtml = "<h3>" + entry.date + "</h3>" +
                    "<p>Эмоция: " + entry.emotion + "</p>" +
                    "<p>Мысли: " + entry.thoughts + "</p>" +
                    "<p>Поведение: " + entry.behavior + "</p>" +
                    "<p>Результат: " + entry.result + "</p>";
    entriesContainer.innerHTML += entryHtml;
  }
}

// Обработчик события при нажатии на кнопку "Добавить"
document.getElementById("add-entry").addEventListener("click", function() {
  var date = document.getElementById("entry-date").value;
  var emotion = document.getElementById("entry-emotion").value;
  var thoughts = document.getElementById("entry-thoughts").value;
  var behavior = document.getElementById("entry-behavior").value;
  var result = document.getElementById("entry-result").value;
  
  var entry = {
    date: date,
    emotion: emotion,
    thoughts: thoughts,
    behavior: behavior,
    result: result
  };
  
  entries.push(entry); // Добавляем запись в массив
  
  // Очистка полей формы
  document.getElementById("entry-date").value = "";
  document.getElementById("entry-emotion").value = "";
  document.getElementById("entry-thoughts").value = "";
  document.getElementById("entry-behavior").value = "";
  document.getElementById("entry-result").value = "";
  
  updateEntries(); // Обновляем список записей
});

// Обработчик события при изменении значения выбранной даты
document.getElementById("entry-date").addEventListener("change", function() {
  var selectedDate = document.getElementById("entry-date").value;

  var filteredEntries = entries.filter(function(entry) {
    return entry.date === selectedDate;
  });

  var filteredEntriesContainer = document.getElementById("filtered-entries-container");
  filteredEntriesContainer.innerHTML = ""; // Очистка списка

  // Перебираем отфильтрованные записи и добавляем их в список
  for (var i = 0; i < filteredEntries.length; i++) {
    var entry = filteredEntries[i];

    var entryHtml = "<h3>" + entry.date + "</h3>" +
                    "<p>Эмоция: " + entry.emotion + "</p>" +
                    "<p>Мысли: " + entry.thoughts + "</p>" +
                    "<p>Поведение: " + entry.behavior + "</p>" +
                    "<p>Результат: " + entry.result + "</p>";
    filteredEntriesContainer.innerHTML += entryHtml;
  }
});
