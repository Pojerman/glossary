const mindMap = {
  "nodes": [
    {
      "id": "1",
      "position": {"x": 0, "y": 0},
      "data": {"label": "Мобильное приложение"},
      "type": "input"
    },
    {
      "id": "2",
      "position": {"x": -150, "y": 100},
      "data": {"label": "Кроссплатформенная разработка"}
    },
    {
      "id": "3",
      "position": {"x": 150, "y": 100},
      "data": {"label": "Нативная разработка "},
      "type": "output"
    },
    {
      "id": "4",
      "position": {"x": -150, "y": 200},
      "data": {"label": "Фреймворк"}
    },
    {
      "id": "5",
      "position": {"x": -300, "y": 300},
      "data": {"label": "Flutter"}
    },
    {
      "id": "6",
      "position": {"x": 0, "y": 300},
      "data": {"label": "React Native"},
      "type": "output"
    },
    {
      "id": "7",
      "position": {"x": -300, "y": 400},
      "data": {"label": "Архитектура"}
    },
    {
      "id": "8",
      "position": {"x": -450, "y": 500},
      "data": {"label": "Dart"}
    },
    {
      "id": "9",
      "position": {"x": -150, "y": 500},
      "data": {"label": "Skia"},
      "type": "output"
    },
    {
      "id": "10",
      "position": {"x": -850, "y": 600},
      "data": {"label": "Stateless Widget"},
      "type": "output"
    },
    {
      "id": "11",
      "position": {"x": -650, "y": 600},
      "data": {"label": "Stateful Widget"},
      "type": "output"
    },
    {
      "id": "12",
      "position": {"x": -450, "y": 600},
      "data": {"label": "Material Design"},
      "type": "output"
    },
    {
      "id": "13",
      "position": {"x": -250, "y": 600},
      "data": {"label": "Cupertino"},
      "type": "output"
    },
    {
      "id": "14",
      "position": {"x": -50, "y": 600},
      "data": {"label": "Pub"},
      "type": "output"
    },
    {
      "id": "15",
      "position": {"x": 150, "y": 600},
      "data": {"label": "Hot Reload"},
      "type": "output"
    }

  ],
  "edges": [
    {
      "id": "1-2",
      "source": "1",
      "target": "2",
      "label": "Реализация"
    },
    {
      "id": "1-3",
      "source": "1",
      "target": "3",
      "label": "Реализация"
    },
    {
      "id": "2-4",
      "source": "2",
      "target": "4",
      "label": "Выбор фреймворка"
    },
    {
      "id": "4-5",
      "source": "4",
      "target": "5",
      "label": "Применение фреймворка"
    },
    {
      "id": "4-6",
      "source": "4",
      "target": "6",
      "label": "Применение фреймворка"
    },
    {
      "id": "5-7",
      "source": "5",
      "target": "7",
      "label": "Реализация архитектуры"
    },
    {
      "id": "7-8",
      "source": "7",
      "target": "8",
      "label": "Использование"
    },
    {
      "id": "7-9",
      "source": "7",
      "target": "9",
      "label": "Использование"
    },
    {
      "id": "8-10",
      "source": "8",
      "target": "10",
      "label": "Использование"
    },
    {
      "id": "8-11",
      "source": "8",
      "target": "11",
      "label": "Использование"
    },
    {
      "id": "8-12",
      "source": "8",
      "target": "12",
      "label": "Использование"
    },
    {
      "id": "8-13",
      "source": "8",
      "target": "13",
      "label": "Использование"
    },
    {
      "id": "8-14",
      "source": "8",
      "target": "14",
      "label": "Использование"
    },
    {
      "id": "8-15",
      "source": "8",
      "target": "15",
      "label": "Использование"
    }
  ]
}


export default mindMap;
