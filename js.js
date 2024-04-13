class Symptom {
    constructor(name) {
      this.name = name; // Имя симптома
      this.selected = false; // Флаг выбранного состояния
    }
  
    toggleSelection() {
      this.selected = !this.selected; // Переключение состояния выбора
    }
  
    render() {
      // Создаем кнопку для симптома
      const symptomCheckbox = document.createElement("button");
      symptomCheckbox.type = "button";
      symptomCheckbox.textContent = this.name; // Устанавливаем текст кнопки
      symptomCheckbox.classList.add("btn");
      symptomCheckbox.classList.add("btn-outline-primary");
      if (this.selected) {
        symptomCheckbox.classList.add("active"); // Добавляем класс "active", если симптом выбран
      }
      symptomCheckbox.addEventListener("click", () => {
        this.toggleSelection(); // При клике переключаем выбор симптома
        renderDocReaction(); // Перерисовываем реакцию доктора
        symptomCheckbox.classList.toggle("active"); // Переключаем класс "active" кнопки
      });
  
      // Создаем элемент списка для симптома
      const listItem = document.createElement("div");
      listItem.classList.add("list-group-item"); // Добавляем класс элементу списка
      listItem.appendChild(symptomCheckbox); // Добавляем кнопку симптома в элемент списка
  
      return listItem; // Возвращаем элемент списка
    }
  }
  
  // Список симптомов
  const symptomList = [];
  
  // Начальные симптомы
  const initialSymptoms = [
    "Один день на работе",
    "Два дня на работе",
    "Три дня на работе",
    "Четыре дня на работе",
    "Пять дней на работе",
    "Шесть дней на работе",
    "Неделя на работе",
    "Восемь дней на работе",
    "Девять дней на работе",
    "Десять дней на работе"
  ];
  
  // Заполняем начальные симптомы
  initialSymptoms.forEach((symptom) => {
    const newSymptom = new Symptom(symptom);
    symptomList.push(newSymptom); // Добавляем симптом в список
  });
  
  // Функция для отрисовки списка симптомов
  function renderSymptoms() {
    const symptomListElement = document.getElementById("symptomList");
    symptomListElement.innerHTML = ""; // Очищаем список перед отрисовкой
    symptomList.forEach((symptom) => {
      const symptomElement = symptom.render(); // Отрисовываем кнопку для каждого симптома
      symptomListElement.appendChild(symptomElement); // Добавляем кнопку в список
    });
  }
  
  // Функция для отрисовки реакции доктора
  function renderDocReaction() {
    const docReactionElement = document.getElementById("docReaction");
    const selectedSymptomsCount = symptomList.filter(
      (symptom) => symptom.selected
    ).length; // Подсчитываем количество выбранных симптомов
    docReactionElement.innerHTML = ""; // Очищаем контейнер перед отрисовкой
  
    let imageSrc = "";
    // Выбираем изображение в зависимости от количества выбранных симптомов
    if (selectedSymptomsCount === 1) {
      imageSrc =
        "1day.jpg";
    } else if (selectedSymptomsCount <= 2) {
      imageSrc =
        "2day.jpg"; 
    } 
     else if (selectedSymptomsCount <= 4) {
      imageSrc =
        "3day.jpg"; 
    } else if (selectedSymptomsCount <= 5) {
      imageSrc =
        "4day.jpg";
    } else if (selectedSymptomsCount <= 6) {
      imageSrc =
        "5day.jpg"; 
    } else if (selectedSymptomsCount <= 7) {
      imageSrc =
        "6day.jpg";
    } else {
      imageSrc =
        "7day.jpg"; 
    }
  
    // Создаем изображение и устанавливаем его источник
    const imageElement = document.createElement("img");
    imageElement.src = imageSrc;
  
    docReactionElement.appendChild(imageElement); // Добавляем изображение в контейнер
  }
  
  // Отрисовываем начальные симптомы
  renderSymptoms();
  