
export const MASTER_CHAINS = [
  {
    id: "chain_1",
    // рідний край -> край екрану -> екран телевізора -> телевізійний канал -> канал зв'язку -> зв'язок поколінь
    items: [
      { target: "рідний", transition: "рідний" },
      { target: "край", transition: "край" },
      { target: "екрану", transition: "екран" },
      { target: "телевізора", transition: "телевізійний" },
      { target: "канал", transition: "канал" },
      { target: "зв'язку", transition: "зв'язок" },
      { target: "поколінь", transition: "поколінь" }
    ]
  },
  {
    id: "chain_2",
    // морський берег -> берег річки -> річковий порт -> порт міста -> міський транспорт -> транспортна система
    items: [
      { target: "морський", transition: "морський" },
      { target: "берег", transition: "берег" },
      { target: "річки", transition: "річковий" },
      { target: "порт", transition: "порт" },
      { target: "міста", transition: "міський" },
      { target: "транспорт", transition: "транспортна" },
      { target: "система", transition: "система" }
    ]
  },
  {
    id: "chain_3",
    // гірська вершина -> вершина успіху -> успішний проєкт -> проєктна документація -> документальний фільм -> фільм жахів
    items: [
      { target: "гірська", transition: "гірська" },
      { target: "вершина", transition: "вершина" },
      { target: "успіху", transition: "успішний" },
      { target: "проєкт", transition: "проєктна" },
      { target: "документація", transition: "документальний" },
      { target: "фільм", transition: "фільм" },
      { target: "жахів", transition: "жахів" }
    ]
  },
  {
    id: "chain_4",
    // осінній ліс -> ліс казок -> казковий герой -> герой війни -> військовий корабель -> корабель мрії
    items: [
      { target: "осінній", transition: "осінній" },
      { target: "ліс", transition: "ліс" },
      { target: "казок", transition: "казковий" },
      { target: "герой", transition: "герой" },
      { target: "війни", transition: "військовий" },
      { target: "корабель", transition: "корабель" },
      { target: "мрії", transition: "мрії" }
    ]
  },
  {
    id: "chain_5",
    // золота середина -> середина дороги -> дорожній знак -> знак питання -> питальне слово -> слово честі
    items: [
      { target: "золота", transition: "золота" },
      { target: "середина", transition: "середина" },
      { target: "дороги", transition: "дорожній" },
      { target: "знак", transition: "знак" },
      { target: "питання", transition: "питальне" },
      { target: "слово", transition: "слово" },
      { target: "честі", transition: "честі" }
    ]
  },
  {
    id: "chain_6",
    // вечірнє небо -> небо України -> український борщ -> борщ бабусі -> бабусині руки -> руки майстра
    items: [
      { target: "вечірнє", transition: "вечірнє" },
      { target: "небо", transition: "небо" },
      { target: "України", transition: "український" },
      { target: "борщ", transition: "борщ" },
      { target: "бабусі", transition: "бабусині" },
      { target: "руки", transition: "руки" },
      { target: "майстра", transition: "майстра" }
    ]
  },
  {
    id: "chain_7",
    // гарячий день -> день народження -> народна пісня -> пісня року -> річний звіт -> звіт директора
    items: [
      { target: "гарячий", transition: "гарячий" },
      { target: "день", transition: "день" },
      { target: "народження", transition: "народна" },
      { target: "пісня", transition: "пісня" },
      { target: "року", transition: "річний" },
      { target: "звіт", transition: "звіт" },
      { target: "директора", transition: "директора" }
    ]
  },
  {
    id: "chain_8",
    // нічне місто -> місто героїв -> героїчний подвиг -> подвиг народу -> народний артист -> артист цирку
    items: [
      { target: "нічне", transition: "нічне" },
      { target: "місто", transition: "місто" },
      { target: "героїв", transition: "героїчний" },
      { target: "подвиг", transition: "подвиг" },
      { target: "народу", transition: "народний" },
      { target: "артист", transition: "артист" },
      { target: "цирку", transition: "цирку" }
    ]
  },
  {
    id: "chain_9",
    // чиста вода -> вода життя -> життєвий досвід -> досвід роботи -> робочий стіл -> стіл переговорів
    items: [
      { target: "чиста", transition: "чиста" },
      { target: "вода", transition: "вода" },
      { target: "життя", transition: "життєвий" },
      { target: "досвід", transition: "досвід" },
      { target: "роботи", transition: "робочий" },
      { target: "стіл", transition: "стіл" },
      { target: "переговорів", transition: "переговорів" }
    ]
  },
  {
    id: "chain_10",
    // літній дощ -> дощ метеоритів -> метеоритний потік -> потік інформації -> інформаційна війна -> війна світів
    items: [
      { target: "літній", transition: "літній" },
      { target: "дощ", transition: "дощ" },
      { target: "метеоритів", transition: "метеоритний" },
      { target: "потік", transition: "потік" },
      { target: "інформації", transition: "інформаційна" },
      { target: "війна", transition: "війна" },
      { target: "світів", transition: "світів" }
    ]
  },
  {
    id: "chain_11",
    // шкільний двір -> двір палацу -> палацова площа -> площа ринку -> ринкова економіка -> економіка країни
    items: [
      { target: "шкільний", transition: "шкільний" },
      { target: "двір", transition: "двір" },
      { target: "палацу", transition: "палацова" },
      { target: "площа", transition: "площа" },
      { target: "ринку", transition: "ринкова" },
      { target: "економіка", transition: "економіка" },
      { target: "країни", transition: "країни" }
    ]
  },
  {
    id: "chain_12",
    // старий замок -> замок лицаря -> лицарський турнір -> турнір чемпіонів -> чемпіонський кубок -> кубок світу
    items: [
      { target: "старий", transition: "старий" },
      { target: "замок", transition: "замок" },
      { target: "лицаря", transition: "лицарський" },
      { target: "турнір", transition: "турнір" },
      { target: "чемпіонів", transition: "чемпіонський" },
      { target: "кубок", transition: "кубок" },
      { target: "світу", transition: "світу" }
    ]
  },
  {
    id: "chain_13",
    // теплий вітер -> вітер змін -> змінний графік -> графік роботи -> робочий день -> день перемоги
    items: [
      { target: "теплий", transition: "теплий" },
      { target: "вітер", transition: "вітер" },
      { target: "змін", transition: "змінний" },
      { target: "графік", transition: "графік" },
      { target: "роботи", transition: "робочий" },
      { target: "день", transition: "день" },
      { target: "перемоги", transition: "перемоги" }
    ]
  },
  {
    id: "chain_14",
    // кам'яний міст -> міст дружби -> дружній візит -> візит президента -> президентські вибори -> вибори мера
    items: [
      { target: "кам'яний", transition: "кам'яний" },
      { target: "міст", transition: "міст" },
      { target: "дружби", transition: "дружній" },
      { target: "візит", transition: "візит" },
      { target: "президента", transition: "президентські" },
      { target: "вибори", transition: "вибори" },
      { target: "мера", transition: "мера" }
    ]
  },
  {
    id: "chain_15",
    // зелена трава -> трава лугу -> лугові квіти -> квіти весни -> весняний сад -> сад пам'яті
    items: [
      { target: "зелена", transition: "зелена" },
      { target: "трава", transition: "трава" },
      { target: "лугу", transition: "лугові" },
      { target: "квіти", transition: "квіти" },
      { target: "весни", transition: "весняний" },
      { target: "сад", transition: "сад" },
      { target: "пам'яті", transition: "пам'яті" }
    ]
  },
  {
    id: "chain_16",
    // важка праця -> праця науковців -> науковий прогрес -> прогрес технологій -> технологічна революція -> революція гідності
    items: [
      { target: "важка", transition: "важка" },
      { target: "праця", transition: "праця" },
      { target: "науковців", transition: "науковий" },
      { target: "прогрес", transition: "прогрес" },
      { target: "технологій", transition: "технологічна" },
      { target: "революція", transition: "революція" },
      { target: "гідності", transition: "гідності" }
    ]
  },
  {
    id: "chain_17",
    // тихий океан -> океан можливостей -> можливий варіант -> варіант відповіді -> відповідний момент -> момент істини
    items: [
      { target: "тихий", transition: "тихий" },
      { target: "океан", transition: "океан" },
      { target: "можливостей", transition: "можливий" },
      { target: "варіант", transition: "варіант" },
      { target: "відповіді", transition: "відповідний" },
      { target: "момент", transition: "момент" },
      { target: "істини", transition: "істини" }
    ]
  },
  {
    id: "chain_18",
    // сірий вовк -> вовк степу -> степовий орел -> орел небес -> небесна сотня -> сотня героїв
    items: [
      { target: "сірий", transition: "сірий" },
      { target: "вовк", transition: "вовк" },
      { target: "степу", transition: "степовий" },
      { target: "орел", transition: "орел" },
      { target: "небес", transition: "небесна" },
      { target: "сотня", transition: "сотня" },
      { target: "героїв", transition: "героїв" }
    ]
  },
  {
    id: "chain_19",
    // гірка правда -> правда історії -> історичний факт -> факт злочину -> злочинна група -> група підтримки
    items: [
      { target: "гірка", transition: "гірка" },
      { target: "правда", transition: "правда" },
      { target: "історії", transition: "історичний" },
      { target: "факт", transition: "факт" },
      { target: "злочину", transition: "злочинна" },
      { target: "група", transition: "група" },
      { target: "підтримки", transition: "підтримки" }
    ]
  },
  {
    id: "chain_20",
    // золотий пісок -> пісок пустелі -> пустельний мандрівник -> мандрівник часу -> часовий пояс -> пояс безпеки
    items: [
      { target: "золотий", transition: "золотий" },
      { target: "пісок", transition: "пісок" },
      { target: "пустелі", transition: "пустельний" },
      { target: "мандрівник", transition: "мандрівник" },
      { target: "часу", transition: "часовий" },
      { target: "пояс", transition: "пояс" },
      { target: "безпеки", transition: "безпеки" }
    ]
  },
  {
    id: "chain_21",
    // мирний договір -> договір оренди -> орендний будинок -> будинок культури -> культурна спадщина -> спадщина предків
    items: [
      { target: "мирний", transition: "мирний" },
      { target: "договір", transition: "договір" },
      { target: "оренди", transition: "орендний" },
      { target: "будинок", transition: "будинок" },
      { target: "культури", transition: "культурна" },
      { target: "спадщина", transition: "спадщина" },
      { target: "предків", transition: "предків" }
    ]
  },
  {
    id: "chain_22",
    // швидка допомога -> допомога фронту -> фронтовий друг -> друг дитинства -> дитячий садок -> садок вишневий
    items: [
      { target: "швидка", transition: "швидка" },
      { target: "допомога", transition: "допомога" },
      { target: "фронту", transition: "фронтовий" },
      { target: "друг", transition: "друг" },
      { target: "дитинства", transition: "дитячий" },
      { target: "садок", transition: "садок" },
      { target: "вишневий", transition: "вишневий" }
    ]
  },
  {
    id: "chain_23",
    // нічний патруль -> патруль міста -> міський парк -> парк розваг -> розважальна програма -> програма навчання
    items: [
      { target: "нічний", transition: "нічний" },
      { target: "патруль", transition: "патруль" },
      { target: "міста", transition: "міський" },
      { target: "парк", transition: "парк" },
      { target: "розваг", transition: "розважальна" },
      { target: "програма", transition: "програма" },
      { target: "навчання", transition: "навчання" }
    ]
  },
  {
    id: "chain_24",
    // давня легенда -> легенда гір -> гірський шлях -> шлях воїна -> воїнська слава -> слава України
    items: [
      { target: "давня", transition: "давня" },
      { target: "легенда", transition: "легенда" },
      { target: "гір", transition: "гірський" },
      { target: "шлях", transition: "шлях" },
      { target: "воїна", transition: "воїнська" },
      { target: "слава", transition: "слава" },
      { target: "України", transition: "України" }
    ]
  },
  {
    id: "chain_25",
    // сучасне мистецтво -> мистецтво театру -> театральна вистава -> вистава акторів -> акторська гра -> гра слів
    items: [
      { target: "сучасне", transition: "сучасне" },
      { target: "мистецтво", transition: "мистецтво" },
      { target: "театру", transition: "театральна" },
      { target: "вистава", transition: "вистава" },
      { target: "акторів", transition: "акторська" },
      { target: "гра", transition: "гра" },
      { target: "слів", transition: "слів" }
    ]
  },
  {
    id: "chain_26",
    // футбольний м'яч -> м'яч команди -> командний дух -> дух нації -> національний прапор -> прапор перемоги
    items: [
      { target: "футбольний", transition: "футбольний" },
      { target: "м'яч", transition: "м'яч" },
      { target: "команди", transition: "командний" },
      { target: "дух", transition: "дух" },
      { target: "нації", transition: "національний" },
      { target: "прапор", transition: "прапор" },
      { target: "перемоги", transition: "перемоги" }
    ]
  },
  {
    id: "chain_27",
    // цікава книга -> книга рекордів -> рекордний час -> час обіду -> обідня перерва -> перерва уроку
    items: [
      { target: "цікава", transition: "цікава" },
      { target: "книга", transition: "книга" },
      { target: "рекордів", transition: "рекордний" },
      { target: "час", transition: "час" },
      { target: "обіду", transition: "обідня" },
      { target: "перерва", transition: "перерва" },
      { target: "уроку", transition: "уроку" }
    ]
  },
  {
    id: "chain_28",
    // дикий захід -> захід сонця -> сонячний промінь -> промінь надії -> надійний захист -> захист природи
    items: [
      { target: "дикий", transition: "дикий" },
      { target: "захід", transition: "захід" },
      { target: "сонця", transition: "сонячний" },
      { target: "промінь", transition: "промінь" },
      { target: "надії", transition: "надійний" },
      { target: "захист", transition: "захист" },
      { target: "природи", transition: "природи" }
    ]
  },
  {
    id: "chain_29",
    // вузька стежка -> стежка здоров'я -> здоровий сон -> сон дитини -> дитяча мрія -> мрія космонавта
    items: [
      { target: "вузька", transition: "вузька" },
      { target: "стежка", transition: "стежка" },
      { target: "здоров'я", transition: "здоровий" },
      { target: "сон", transition: "сон" },
      { target: "дитини", transition: "дитяча" },
      { target: "мрія", transition: "мрія" },
      { target: "космонавта", transition: "космонавта" }
    ]
  },
  {
    id: "chain_30",
    // сильний характер -> характер людини -> людський фактор -> фактор ризику -> ризикований крок -> крок вперед
    items: [
      { target: "сильний", transition: "сильний" },
      { target: "характер", transition: "характер" },
      { target: "людини", transition: "людський" },
      { target: "фактор", transition: "фактор" },
      { target: "ризику", transition: "ризикований" },
      { target: "крок", transition: "крок" },
      { target: "вперед", transition: "вперед" }
    ]
  },
  {
    id: "chain_31",
    // чорне море -> море емоцій -> емоційний стан -> стан душі -> душевний спокій -> спокій ночі
    items: [
      { target: "чорне", transition: "чорне" },
      { target: "море", transition: "море" },
      { target: "емоцій", transition: "емоційний" },
      { target: "стан", transition: "стан" },
      { target: "душі", transition: "душевний" },
      { target: "спокій", transition: "спокій" },
      { target: "ночі", transition: "ночі" }
    ]
  },
  {
    id: "chain_32",
    // банківський рахунок -> рахунок клієнта -> клієнтський сервіс -> сервіс доставки -> доставка вантажу -> вантажний автомобіль
    items: [
      { target: "банківський", transition: "банківський" },
      { target: "рахунок", transition: "рахунок" },
      { target: "клієнта", transition: "клієнтський" },
      { target: "сервіс", transition: "сервіс" },
      { target: "доставки", transition: "доставка" },
      { target: "вантажу", transition: "вантажний" },
      { target: "автомобіль", transition: "автомобіль" }
    ]
  },
  {
    id: "chain_33",
    // яскраве світло -> світло лампи -> ламповий звук -> звук мелодії -> мелодійний голос -> голос народу
    items: [
      { target: "яскраве", transition: "яскраве" },
      { target: "світло", transition: "світло" },
      { target: "лампи", transition: "ламповий" },
      { target: "звук", transition: "звук" },
      { target: "мелодії", transition: "мелодійний" },
      { target: "голос", transition: "голос" },
      { target: "народу", transition: "народу" }
    ]
  },
  {
    id: "chain_34",
    // довга розмова -> розмова батьків -> батьківський дім -> дім родини -> родинне свято -> свято врожаю
    items: [
      { target: "довга", transition: "довга" },
      { target: "розмова", transition: "розмова" },
      { target: "батьків", transition: "батьківський" },
      { target: "дім", transition: "дім" },
      { target: "родини", transition: "родинне" },
      { target: "свято", transition: "свято" },
      { target: "врожаю", transition: "врожаю" }
    ]
  },
  {
    id: "chain_35",
    // цифровий світ -> світ мистецтва -> мистецький фестиваль -> фестиваль джазу -> джазовий оркестр -> оркестр радіо
    items: [
      { target: "цифровий", transition: "цифровий" },
      { target: "світ", transition: "світ" },
      { target: "мистецтва", transition: "мистецький" },
      { target: "фестиваль", transition: "фестиваль" },
      { target: "джазу", transition: "джазовий" },
      { target: "оркестр", transition: "оркестр" },
      { target: "радіо", transition: "радіо" }
    ]
  },
  {
    id: "chain_36",
    // українська мова -> мова програмування -> програмний код -> код доступу -> доступна ціна -> ціна свободи
    items: [
      { target: "українська", transition: "українська" },
      { target: "мова", transition: "мова" },
      { target: "програмування", transition: "програмний" },
      { target: "код", transition: "код" },
      { target: "доступу", transition: "доступна" },
      { target: "ціна", transition: "ціна" },
      { target: "свободи", transition: "свободи" }
    ]
  },
  {
    id: "chain_37",
    // дитячий сміх -> сміх радості -> радісна новина -> новина дня -> денне світло -> світло маяка
    items: [
      { target: "дитячий", transition: "дитячий" },
      { target: "сміх", transition: "сміх" },
      { target: "радості", transition: "радісна" },
      { target: "новина", transition: "новина" },
      { target: "дня", transition: "денне" },
      { target: "світло", transition: "світло" },
      { target: "маяка", transition: "маяка" }
    ]
  },
  {
    id: "chain_38",
    // нова технологія -> технологія виробництва -> виробничий процес -> процес очищення -> очисна споруда -> споруда століття
    items: [
      { target: "нова", transition: "нова" },
      { target: "технологія", transition: "технологія" },
      { target: "виробництва", transition: "виробничий" },
      { target: "процес", transition: "процес" },
      { target: "очищення", transition: "очисна" },
      { target: "споруда", transition: "споруда" },
      { target: "століття", transition: "століття" }
    ]
  },
  {
    id: "chain_39",
    // старе дерево -> дерево вишні -> вишневий сік -> сік лимона -> лимонна кислота -> кислота шлунка
    items: [
      { target: "старе", transition: "старе" },
      { target: "дерево", transition: "дерево" },
      { target: "вишні", transition: "вишневий" },
      { target: "сік", transition: "сік" },
      { target: "лимона", transition: "лимонна" },
      { target: "кислота", transition: "кислота" },
      { target: "шлунка", transition: "шлунка" }
    ]
  },
  {
    id: "chain_40",
    // швидкий потяг -> потяг пасажирів -> пасажирський вагон -> вагон ресторану -> ресторанне меню -> меню дня
    items: [
      { target: "швидкий", transition: "швидкий" },
      { target: "потяг", transition: "потяг" },
      { target: "пасажирів", transition: "пасажирський" },
      { target: "вагон", transition: "вагон" },
      { target: "ресторану", transition: "ресторанне" },
      { target: "меню", transition: "меню" },
      { target: "дня", transition: "дня" }
    ]
  },
  {
    id: "chain_41",
    // красива пісня -> пісня солов'я -> солов'їний спів -> спів птахів -> пташиний політ -> політ думки
    items: [
      { target: "красива", transition: "красива" },
      { target: "пісня", transition: "пісня" },
      { target: "солов'я", transition: "солов'їний" },
      { target: "спів", transition: "спів" },
      { target: "птахів", transition: "пташиний" },
      { target: "політ", transition: "політ" },
      { target: "думки", transition: "думки" }
    ]
  },
  {
    id: "chain_42",
    // червона калина -> калина поля -> польова квітка -> квітка щастя -> щасливе життя -> життя людини
    items: [
      { target: "червона", transition: "червона" },
      { target: "калина", transition: "калина" },
      { target: "поля", transition: "польова" },
      { target: "квітка", transition: "квітка" },
      { target: "щастя", transition: "щасливе" },
      { target: "життя", transition: "життя" },
      { target: "людини", transition: "людини" }
    ]
  },
  {
    id: "chain_43",
    // шкільний урок -> урок математики -> математична задача -> задача руху -> рухомий склад -> склад команди
    items: [
      { target: "шкільний", transition: "шкільний" },
      { target: "урок", transition: "урок" },
      { target: "математики", transition: "математична" },
      { target: "задача", transition: "задача" },
      { target: "руху", transition: "рухомий" },
      { target: "склад", transition: "склад" },
      { target: "команди", transition: "команди" }
    ]
  },
  {
    id: "chain_44",
    // лікарняний лист -> лист подяки -> подячна промова -> промова ректора -> ректорський наказ -> наказ міністра
    items: [
      { target: "лікарняний", transition: "лікарняний" },
      { target: "лист", transition: "лист" },
      { target: "подяки", transition: "подячна" },
      { target: "промова", transition: "промова" },
      { target: "ректора", transition: "ректорський" },
      { target: "наказ", transition: "наказ" },
      { target: "міністра", transition: "міністра" }
    ]
  },
  {
    id: "chain_45",
    // біла хмара -> хмара диму -> димова завіса -> завіса таємниці -> таємничий гість -> гість програми
    items: [
      { target: "біла", transition: "біла" },
      { target: "хмара", transition: "хмара" },
      { target: "диму", transition: "димова" },
      { target: "завіса", transition: "завіса" },
      { target: "таємниці", transition: "таємничий" },
      { target: "гість", transition: "гість" },
      { target: "програми", transition: "програми" }
    ]
  },
  {
    id: "chain_46",
    // податкова служба -> служба безпеки -> безпечна гавань -> гавань спокою -> спокійне море -> море квітів
    items: [
      { target: "податкова", transition: "податкова" },
      { target: "служба", transition: "служба" },
      { target: "безпеки", transition: "безпечна" },
      { target: "гавань", transition: "гавань" },
      { target: "спокою", transition: "спокійне" },
      { target: "море", transition: "море" },
      { target: "квітів", transition: "квітів" }
    ]
  },
  {
    id: "chain_47",
    // козацький курінь -> курінь отамана -> отаманська булава -> булава гетьмана -> гетьманська столиця -> столиця держави
    items: [
      { target: "козацький", transition: "козацький" },
      { target: "курінь", transition: "курінь" },
      { target: "отамана", transition: "отаманська" },
      { target: "булава", transition: "булава" },
      { target: "гетьмана", transition: "гетьманська" },
      { target: "столиця", transition: "столиця" },
      { target: "держави", transition: "держави" }
    ]
  },
  {
    id: "chain_48",
    // розумний телефон -> телефон довіри -> довірчі стосунки -> стосунки сусідів -> сусідська країна -> країна чудес
    items: [
      { target: "розумний", transition: "розумний" },
      { target: "телефон", transition: "телефон" },
      { target: "довіри", transition: "довірчі" },
      { target: "стосунки", transition: "стосунки" },
      { target: "сусідів", transition: "сусідська" },
      { target: "країна", transition: "країна" },
      { target: "чудес", transition: "чудес" }
    ]
  },
  {
    id: "chain_49",
    // свіжий хліб -> хліб пекаря -> пекарський цех -> цех заводу -> заводський гудок -> гудок паровоза
    items: [
      { target: "свіжий", transition: "свіжий" },
      { target: "хліб", transition: "хліб" },
      { target: "пекаря", transition: "пекарський" },
      { target: "цех", transition: "цех" },
      { target: "заводу", transition: "заводський" },
      { target: "гудок", transition: "гудок" },
      { target: "паровоза", transition: "паровоза" }
    ]
  },
  {
    id: "chain_50",
    // чесна відповідь -> відповідь учня -> учнівський зошит -> зошит відмінника -> відмінницький атестат -> атестат зрілості
    items: [
      { target: "чесна", transition: "чесна" },
      { target: "відповідь", transition: "відповідь" },
      { target: "учня", transition: "учнівський" },
      { target: "зошит", transition: "зошит" },
      { target: "відмінника", transition: "відмінницький" },
      { target: "атестат", transition: "атестат" },
      { target: "зрілості", transition: "зрілості" }
    ]
  },
  {
    id: "chain_51",
    // відкритий світ -> світ науки -> науковий журнал -> журнал мод -> модний показ -> показ колекцій
    items: [
      { target: "відкритий", transition: "відкритий" },
      { target: "світ", transition: "світ" },
      { target: "науки", transition: "науковий" },
      { target: "журнал", transition: "журнал" },
      { target: "мод", transition: "модний" },
      { target: "показ", transition: "показ" },
      { target: "колекцій", transition: "колекцій" }
    ]
  },
  {
    id: "chain_52",
    // біла ніч -> ніч музеїв -> музейний експонат -> експонат виставки -> виставковий зал -> зал слави
    items: [
      { target: "біла", transition: "біла" },
      { target: "ніч", transition: "ніч" },
      { target: "музеїв", transition: "музейний" },
      { target: "експонат", transition: "експонат" },
      { target: "виставки", transition: "виставковий" },
      { target: "зал", transition: "зал" },
      { target: "слави", transition: "слави" }
    ]
  },
  {
    id: "chain_53",
    // гучна музика -> музика вулиці -> вуличний музикант -> музикант оркестру -> оркестровий концерт -> концерт року
    items: [
      { target: "гучна", transition: "гучна" },
      { target: "музика", transition: "музика" },
      { target: "вулиці", transition: "вуличний" },
      { target: "музикант", transition: "музикант" },
      { target: "оркестру", transition: "оркестровий" },
      { target: "концерт", transition: "концерт" },
      { target: "року", transition: "року" }
    ]
  },
  {
    id: "chain_54",
    // морська сіль -> сіль землі -> земний шар -> шар снігу -> сніговий замок -> замок мрії
    items: [
      { target: "морська", transition: "морська" },
      { target: "сіль", transition: "сіль" },
      { target: "землі", transition: "земний" },
      { target: "шар", transition: "шар" },
      { target: "снігу", transition: "сніговий" },
      { target: "замок", transition: "замок" },
      { target: "мрії", transition: "мрії" }
    ]
  },
  {
    id: "chain_55",
    // синій прапор -> прапор держави -> державний герб -> герб міста -> міський голова -> голова ради
    items: [
      { target: "синій", transition: "синій" },
      { target: "прапор", transition: "прапор" },
      { target: "держави", transition: "державний" },
      { target: "герб", transition: "герб" },
      { target: "міста", transition: "міський" },
      { target: "голова", transition: "голова" },
      { target: "ради", transition: "ради" }
    ]
  },
  {
    id: "chain_56",
    // мудрий вчитель -> вчитель музики -> музичний ритм -> ритм життя -> життєвий вибір -> вибір народу
    items: [
      { target: "мудрий", transition: "мудрий" },
      { target: "вчитель", transition: "вчитель" },
      { target: "музики", transition: "музичний" },
      { target: "ритм", transition: "ритм" },
      { target: "життя", transition: "життєвий" },
      { target: "вибір", transition: "вибір" },
      { target: "народу", transition: "народу" }
    ]
  },
  {
    id: "chain_57",
    // нічна зміна -> зміна влади -> владний тон -> тон розмови -> розмовний жанр -> жанр фантастики
    items: [
      { target: "нічна", transition: "нічна" },
      { target: "зміна", transition: "зміна" },
      { target: "влади", transition: "владний" },
      { target: "тон", transition: "тон" },
      { target: "розмови", transition: "розмовний" },
      { target: "жанр", transition: "жанр" },
      { target: "фантастики", transition: "фантастики" }
    ]
  },
  {
    id: "chain_58",
    // літня школа -> школа мистецтв -> мистецький конкурс -> конкурс краси -> красивий танок -> танок вогню
    items: [
      { target: "літня", transition: "літня" },
      { target: "школа", transition: "школа" },
      { target: "мистецтв", transition: "мистецький" },
      { target: "конкурс", transition: "конкурс" },
      { target: "краси", transition: "красивий" },
      { target: "танок", transition: "танок" },
      { target: "вогню", transition: "вогню" }
    ]
  },
  {
    id: "chain_59",
    // швидка їжа -> їжа богів -> божественний голос -> голос розуму -> розумне рішення -> рішення суду
    items: [
      { target: "швидка", transition: "швидка" },
      { target: "їжа", transition: "їжа" },
      { target: "богів", transition: "божественний" },
      { target: "голос", transition: "голос" },
      { target: "розуму", transition: "розумне" },
      { target: "рішення", transition: "рішення" },
      { target: "суду", transition: "суду" }
    ]
  },
  {
    id: "chain_60",
    // великий театр -> театр опери -> оперний співак -> співак хору -> хорова капела -> капела бандуристів
    items: [
      { target: "великий", transition: "великий" },
      { target: "театр", transition: "театр" },
      { target: "опери", transition: "оперний" },
      { target: "співак", transition: "співак" },
      { target: "хору", transition: "хорова" },
      { target: "капела", transition: "капела" },
      { target: "бандуристів", transition: "бандуристів" }
    ]
  },
  {
    id: "chain_61",
    // сильний удар -> удар блискавки -> блискавична швидкість -> швидкість світла -> світловий рік -> рік дракона
    items: [
      { target: "сильний", transition: "сильний" },
      { target: "удар", transition: "удар" },
      { target: "блискавки", transition: "блискавична" },
      { target: "швидкість", transition: "швидкість" },
      { target: "світла", transition: "світловий" },
      { target: "рік", transition: "рік" },
      { target: "дракона", transition: "дракона" }
    ]
  },
  {
    id: "chain_62",
    // північний полюс -> полюс холоду -> холодна війна -> війна нервів -> нервова система -> система координат
    items: [
      { target: "північний", transition: "північний" },
      { target: "полюс", transition: "полюс" },
      { target: "холоду", transition: "холодна" },
      { target: "війна", transition: "війна" },
      { target: "нервів", transition: "нервова" },
      { target: "система", transition: "система" },
      { target: "координат", transition: "координат" }
    ]
  },
  {
    id: "chain_63",
    // космічна швидкість -> швидкість звуку -> звуковий бар'єр -> бар'єр страху -> страшний сон -> сон розуму
    items: [
      { target: "космічна", transition: "космічна" },
      { target: "швидкість", transition: "швидкість" },
      { target: "звуку", transition: "звуковий" },
      { target: "бар'єр", transition: "бар'єр" },
      { target: "страху", transition: "страшний" },
      { target: "сон", transition: "сон" },
      { target: "розуму", transition: "розуму" }
    ]
  },
  {
    id: "chain_64",
    // гарячий обід -> обід шахтаря -> шахтарська каска -> каска пожежника -> пожежна машина -> машина часу
    items: [
      { target: "гарячий", transition: "гарячий" },
      { target: "обід", transition: "обід" },
      { target: "шахтаря", transition: "шахтарська" },
      { target: "каска", transition: "каска" },
      { target: "пожежника", transition: "пожежна" },
      { target: "машина", transition: "машина" },
      { target: "часу", transition: "часу" }
    ]
  },
  {
    id: "chain_65",
    // стара фотографія -> фотографія родини -> родинний альбом -> альбом групи -> груповий знімок -> знімок Землі
    items: [
      { target: "стара", transition: "стара" },
      { target: "фотографія", transition: "фотографія" },
      { target: "родини", transition: "родинний" },
      { target: "альбом", transition: "альбом" },
      { target: "групи", transition: "груповий" },
      { target: "знімок", transition: "знімок" },
      { target: "Землі", transition: "Землі" }
    ]
  },
  {
    id: "chain_66",
    // новий стадіон -> стадіон футболу -> футбольний матч -> матч чемпіонів -> чемпіонський перстень -> перстень короля
    items: [
      { target: "новий", transition: "новий" },
      { target: "стадіон", transition: "стадіон" },
      { target: "футболу", transition: "футбольний" },
      { target: "матч", transition: "матч" },
      { target: "чемпіонів", transition: "чемпіонський" },
      { target: "перстень", transition: "перстень" },
      { target: "короля", transition: "короля" }
    ]
  },
  {
    id: "chain_67",
    // свіжий запах -> запах кави -> кавовий аромат -> аромат весни -> весняний ранок -> ранок Різдва
    items: [
      { target: "свіжий", transition: "свіжий" },
      { target: "запах", transition: "запах" },
      { target: "кави", transition: "кавовий" },
      { target: "аромат", transition: "аромат" },
      { target: "весни", transition: "весняний" },
      { target: "ранок", transition: "ранок" },
      { target: "Різдва", transition: "Різдва" }
    ]
  },
  {
    id: "chain_68",
    // солодкий смак -> смак шоколаду -> шоколадний торт -> торт ювілею -> ювілейний концерт -> концерт пам'яті
    items: [
      { target: "солодкий", transition: "солодкий" },
      { target: "смак", transition: "смак" },
      { target: "шоколаду", transition: "шоколадний" },
      { target: "торт", transition: "торт" },
      { target: "ювілею", transition: "ювілейний" },
      { target: "концерт", transition: "концерт" },
      { target: "пам'яті", transition: "пам'яті" }
    ]
  },
  {
    id: "chain_69",
    // чиста енергія -> енергія сонця -> сонячна батарея -> батарея телефону -> телефонна розмова -> розмова друзів
    items: [
      { target: "чиста", transition: "чиста" },
      { target: "енергія", transition: "енергія" },
      { target: "сонця", transition: "сонячна" },
      { target: "батарея", transition: "батарея" },
      { target: "телефону", transition: "телефонна" },
      { target: "розмова", transition: "розмова" },
      { target: "друзів", transition: "друзів" }
    ]
  },
  {
    id: "chain_70",
    // цифровий запис -> запис голосу -> голосовий помічник -> помічник лікаря -> лікарський огляд -> огляд міста
    items: [
      { target: "цифровий", transition: "цифровий" },
      { target: "запис", transition: "запис" },
      { target: "голосу", transition: "голосовий" },
      { target: "помічник", transition: "помічник" },
      { target: "лікаря", transition: "лікарський" },
      { target: "огляд", transition: "огляд" },
      { target: "міста", transition: "міста" }
    ]
  },
  {
    id: "chain_71",
    // високий рівень -> рівень освіти -> освітня програма -> програма курсу -> курсова робота -> робота лікаря
    items: [
      { target: "високий", transition: "високий" },
      { target: "рівень", transition: "рівень" },
      { target: "освіти", transition: "освітня" },
      { target: "програма", transition: "програма" },
      { target: "курсу", transition: "курсова" },
      { target: "робота", transition: "робота" },
      { target: "лікаря", transition: "лікаря" }
    ]
  },
  {
    id: "chain_72",
    // внутрішня сила -> сила духу -> духовний світ -> світ тварин -> тваринний інстинкт -> інстинкт виживання
    items: [
      { target: "внутрішня", transition: "внутрішня" },
      { target: "сила", transition: "сила" },
      { target: "духу", transition: "духовний" },
      { target: "світ", transition: "світ" },
      { target: "тварин", transition: "тваринний" },
      { target: "інстинкт", transition: "інстинкт" },
      { target: "виживання", transition: "виживання" }
    ]
  },
  {
    id: "chain_73",
    // швидкий розвиток -> розвиток економіки -> економічний ріст -> ріст цін -> цінова політика -> політика безпеки
    items: [
      { target: "швидкий", transition: "швидкий" },
      { target: "розвиток", transition: "розвиток" },
      { target: "економіки", transition: "економічний" },
      { target: "ріст", transition: "ріст" },
      { target: "цін", transition: "цінова" },
      { target: "політика", transition: "політика" },
      { target: "безпеки", transition: "безпеки" }
    ]
  },
  {
    id: "chain_74",
    // яскравий колір -> колір неба -> небесний купол -> купол храму -> храмовий комплекс -> комплекс будівель
    items: [
      { target: "яскравий", transition: "яскравий" },
      { target: "колір", transition: "колір" },
      { target: "неба", transition: "небесний" },
      { target: "купол", transition: "купол" },
      { target: "храму", transition: "храмовий" },
      { target: "комплекс", transition: "комплекс" },
      { target: "будівель", transition: "будівель" }
    ]
  },
  {
    id: "chain_75",
    // залізна сила -> сила волі -> воля народу -> народний герой -> герой книги -> книжковий магазин
    items: [
      { target: "залізна", transition: "залізна" },
      { target: "сила", transition: "сила" },
      { target: "волі", transition: "воля" },
      { target: "народу", transition: "народний" },
      { target: "герой", transition: "герой" },
      { target: "книги", transition: "книжковий" },
      { target: "магазин", transition: "магазин" }
    ]
  },
  {
    id: "chain_76",
    // велика любов -> любов матері -> материнська ласка -> ласка батька -> батьківська порада -> порада друга
    items: [
      { target: "велика", transition: "велика" },
      { target: "любов", transition: "любов" },
      { target: "матері", transition: "материнська" },
      { target: "ласка", transition: "ласка" },
      { target: "батька", transition: "батьківська" },
      { target: "порада", transition: "порада" },
      { target: "друга", transition: "друга" }
    ]
  },
  {
    id: "chain_77",
    // пізня осінь -> осінь життя -> життєва мудрість -> мудрість народу -> народна творчість -> творчість майстрів
    items: [
      { target: "пізня", transition: "пізня" },
      { target: "осінь", transition: "осінь" },
      { target: "життя", transition: "життєва" },
      { target: "мудрість", transition: "мудрість" },
      { target: "народу", transition: "народна" },
      { target: "творчість", transition: "творчість" },
      { target: "майстрів", transition: "майстрів" }
    ]
  },
  {
    id: "chain_78",
    // рання весна -> весна народів -> народний рух -> рух планет -> планетарний масштаб -> масштаб катастрофи
    items: [
      { target: "рання", transition: "рання" },
      { target: "весна", transition: "весна" },
      { target: "народів", transition: "народний" },
      { target: "рух", transition: "рух" },
      { target: "планет", transition: "планетарний" },
      { target: "масштаб", transition: "масштаб" },
      { target: "катастрофи", transition: "катастрофи" }
    ]
  },
  {
    id: "chain_79",
    // швидкий процесор -> процесор комп'ютера -> комп'ютерна гра -> гра розуму -> розумний годинник -> годинник дідуся
    items: [
      { target: "швидкий", transition: "швидкий" },
      { target: "процесор", transition: "процесор" },
      { target: "комп'ютера", transition: "комп'ютерна" },
      { target: "гра", transition: "гра" },
      { target: "розуму", transition: "розумний" },
      { target: "годинник", transition: "годинник" },
      { target: "дідуся", transition: "дідуся" }
    ]
  },
  {
    id: "chain_80",
    // мобільний додаток -> додаток банку -> банківська картка -> картка пам'яті -> пам'ятний подарунок -> подарунок долі
    items: [
      { target: "мобільний", transition: "мобільний" },
      { target: "додаток", transition: "додаток" },
      { target: "банку", transition: "банківська" },
      { target: "картка", transition: "картка" },
      { target: "пам'яті", transition: "пам'ятний" },
      { target: "подарунок", transition: "подарунок" },
      { target: "долі", transition: "долі" }
    ]
  },
  {
    id: "chain_81",
    // тиха вулиця -> вулиця міста -> міський вокзал -> вокзал столиці -> столичне життя -> життя села
    items: [
      { target: "тиха", transition: "тиха" },
      { target: "вулиця", transition: "вулиця" },
      { target: "міста", transition: "міський" },
      { target: "вокзал", transition: "вокзал" },
      { target: "столиці", transition: "столичне" },
      { target: "життя", transition: "життя" },
      { target: "села", transition: "села" }
    ]
  },
  {
    id: "chain_82",
    // мала батьківщина -> батьківщина героїв -> героїчна оборона -> оборона фортеці -> фортечна стіна -> стіна плачу
    items: [
      { target: "мала", transition: "мала" },
      { target: "батьківщина", transition: "батьківщина" },
      { target: "героїв", transition: "героїчна" },
      { target: "оборона", transition: "оборона" },
      { target: "фортеці", transition: "фортечна" },
      { target: "стіна", transition: "стіна" },
      { target: "плачу", transition: "плачу" }
    ]
  },
  {
    id: "chain_83",
    // дерев'яна церква -> церква села -> сільська школа -> школа танців -> танцювальний майданчик -> майданчик змагань
    items: [
      { target: "дерев'яна", transition: "дерев'яна" },
      { target: "церква", transition: "церква" },
      { target: "села", transition: "сільська" },
      { target: "школа", transition: "школа" },
      { target: "танців", transition: "танцювальний" },
      { target: "майданчик", transition: "майданчик" },
      { target: "змагань", transition: "змагань" }
    ]
  },
  {
    id: "chain_84",
    // тепле молоко -> молоко корови -> коров'яче масло -> масло оливи -> оливкова гілка -> гілка миру
    items: [
      { target: "тепле", transition: "тепле" },
      { target: "молоко", transition: "молоко" },
      { target: "корови", transition: "коров'яче" },
      { target: "масло", transition: "масло" },
      { target: "оливи", transition: "оливкова" },
      { target: "гілка", transition: "гілка" },
      { target: "миру", transition: "миру" }
    ]
  },
  {
    id: "chain_85",
    // цікава подорож -> подорож героя -> героїчна пісня -> пісня війни -> воєнний стан -> стан здоров'я
    items: [
      { target: "цікава", transition: "цікава" },
      { target: "подорож", transition: "подорож" },
      { target: "героя", transition: "героїчна" },
      { target: "пісня", transition: "пісня" },
      { target: "війни", transition: "воєнний" },
      { target: "стан", transition: "стан" },
      { target: "здоров'я", transition: "здоров'я" }
    ]
  },
  {
    id: "chain_86",
    // гордий орел -> орел імперії -> імперський стиль -> стиль мистецтва -> мистецький напрям -> напрям вітру
    items: [
      { target: "гордий", transition: "гордий" },
      { target: "орел", transition: "орел" },
      { target: "імперії", transition: "імперський" },
      { target: "стиль", transition: "стиль" },
      { target: "мистецтва", transition: "мистецький" },
      { target: "напрям", transition: "напрям" },
      { target: "вітру", transition: "вітру" }
    ]
  },
  {
    id: "chain_87",
    // нова епоха -> епоха козаків -> козацька рада -> рада директорів -> директорський кабінет -> кабінет міністрів
    items: [
      { target: "нова", transition: "нова" },
      { target: "епоха", transition: "епоха" },
      { target: "козаків", transition: "козацька" },
      { target: "рада", transition: "рада" },
      { target: "директорів", transition: "директорський" },
      { target: "кабінет", transition: "кабінет" },
      { target: "міністрів", transition: "міністрів" }
    ]
  },
  {
    id: "chain_88",
    // хімічна формула -> формула води -> водний баланс -> баланс сил -> силовий прийом -> прийом гостей
    items: [
      { target: "хімічна", transition: "хімічна" },
      { target: "формула", transition: "формула" },
      { target: "води", transition: "водний" },
      { target: "баланс", transition: "баланс" },
      { target: "сил", transition: "силовий" },
      { target: "прийом", transition: "прийом" },
      { target: "гостей", transition: "гостей" }
    ]
  },
  {
    id: "chain_89",
    // стара вулиця -> вулиця Києва -> київський торт -> торт Наполеона -> наполеонівські плани -> плани уряду
    items: [
      { target: "стара", transition: "стара" },
      { target: "вулиця", transition: "вулиця" },
      { target: "Києва", transition: "київський" },
      { target: "торт", transition: "торт" },
      { target: "Наполеона", transition: "наполеонівські" },
      { target: "плани", transition: "плани" },
      { target: "уряду", transition: "уряду" }
    ]
  },
  {
    id: "chain_90",
    // стара площа -> площа Львова -> львівська кава -> кава ранку -> ранкова газета -> газета студентів
    items: [
      { target: "стара", transition: "стара" },
      { target: "площа", transition: "площа" },
      { target: "Львова", transition: "львівська" },
      { target: "кава", transition: "кава" },
      { target: "ранку", transition: "ранкова" },
      { target: "газета", transition: "газета" },
      { target: "студентів", transition: "студентів" }
    ]
  },
  {
    id: "chain_91",
    // морський порт -> порт Одеси -> одеський гумор -> гумор моряків -> моряцька пісня -> пісня вітру
    items: [
      { target: "морський", transition: "морський" },
      { target: "порт", transition: "порт" },
      { target: "Одеси", transition: "одеський" },
      { target: "гумор", transition: "гумор" },
      { target: "моряків", transition: "моряцька" },
      { target: "пісня", transition: "пісня" },
      { target: "вітру", transition: "вітру" }
    ]
  },
  {
    id: "chain_92",
    // далека зірка -> зірка сцени -> сценічний образ -> образ ворога -> ворожий літак -> літак компанії
    items: [
      { target: "далека", transition: "далека" },
      { target: "зірка", transition: "зірка" },
      { target: "сцени", transition: "сценічний" },
      { target: "образ", transition: "образ" },
      { target: "ворога", transition: "ворожий" },
      { target: "літак", transition: "літак" },
      { target: "компанії", transition: "компанії" }
    ]
  },
  {
    id: "chain_93",
    // тихе село -> село козаків -> козацький хутір -> хутір діда -> дідівська хата -> хата бабусі
    items: [
      { target: "тихе", transition: "тихе" },
      { target: "село", transition: "село" },
      { target: "козаків", transition: "козацький" },
      { target: "хутір", transition: "хутір" },
      { target: "діда", transition: "дідівська" },
      { target: "хата", transition: "хата" },
      { target: "бабусі", transition: "бабусі" }
    ]
  },
  {
    id: "chain_94",
    // золоте серце -> серце Європи -> європейський вибір -> вибір професії -> професійний спорт -> спорт королів
    items: [
      { target: "золоте", transition: "золоте" },
      { target: "серце", transition: "серце" },
      { target: "Європи", transition: "європейський" },
      { target: "вибір", transition: "вибір" },
      { target: "професії", transition: "професійний" },
      { target: "спорт", transition: "спорт" },
      { target: "королів", transition: "королів" }
    ]
  },
  {
    id: "chain_95",
    // велике диво -> диво природи -> природний ресурс -> ресурс енергії -> енергетична криза -> криза довіри
    items: [
      { target: "велике", transition: "велике" },
      { target: "диво", transition: "диво" },
      { target: "природи", transition: "природний" },
      { target: "ресурс", transition: "ресурс" },
      { target: "енергії", transition: "енергетична" },
      { target: "криза", transition: "криза" },
      { target: "довіри", transition: "довіри" }
    ]
  },
  {
    id: "chain_96",
    // справжня перлина -> перлина півдня -> південний кордон -> кордон держави -> державна таємниця -> таємниця роду
    items: [
      { target: "справжня", transition: "справжня" },
      { target: "перлина", transition: "перлина" },
      { target: "півдня", transition: "південний" },
      { target: "кордон", transition: "кордон" },
      { target: "держави", transition: "державна" },
      { target: "таємниця", transition: "таємниця" },
      { target: "роду", transition: "роду" }
    ]
  },
  {
    id: "chain_97",
    // міцна дружба -> дружба народів -> народна дипломатія -> дипломатія миру -> мирне небо -> небо Києва
    items: [
      { target: "міцна", transition: "міцна" },
      { target: "дружба", transition: "дружба" },
      { target: "народів", transition: "народна" },
      { target: "дипломатія", transition: "дипломатія" },
      { target: "миру", transition: "мирне" },
      { target: "небо", transition: "небо" },
      { target: "Києва", transition: "Києва" }
    ]
  },
  {
    id: "chain_98",
    // цікава історія -> історія міста -> міська легенда -> легенда спорту -> спортивний зал -> зал суду
    items: [
      { target: "цікава", transition: "цікава" },
      { target: "історія", transition: "історія" },
      { target: "міста", transition: "міська" },
      { target: "легенда", transition: "легенда" },
      { target: "спорту", transition: "спортивний" },
      { target: "зал", transition: "зал" },
      { target: "суду", transition: "суду" }
    ]
  },
  {
    id: "chain_99",
    // короткий шлях -> шлях зірок -> зоряний час -> час мрій -> мрійливий погляд -> погляд дитини
    items: [
      { target: "короткий", transition: "короткий" },
      { target: "шлях", transition: "шлях" },
      { target: "зірок", transition: "зоряний" },
      { target: "час", transition: "час" },
      { target: "мрій", transition: "мрійливий" },
      { target: "погляд", transition: "погляд" },
      { target: "дитини", transition: "дитини" }
    ]
  },
  {
    id: "chain_100",
    // вірний друг -> друг сім'ї -> сімейний лікар -> лікар душі -> душевна розмова -> розмова вчителя
    items: [
      { target: "вірний", transition: "вірний" },
      { target: "друг", transition: "друг" },
      { target: "сім'ї", transition: "сімейний" },
      { target: "лікар", transition: "лікар" },
      { target: "душі", transition: "душевна" },
      { target: "розмова", transition: "розмова" },
      { target: "вчителя", transition: "вчителя" }
    ]
  },
  {
    id: "chain_101",
    // святковий парад -> парад планет -> планетарна система -> система освіти -> освітня реформа -> реформа влади
    items: [
      { target: "святковий", transition: "святковий" },
      { target: "парад", transition: "парад" },
      { target: "планет", transition: "планетарна" },
      { target: "система", transition: "система" },
      { target: "освіти", transition: "освітня" },
      { target: "реформа", transition: "реформа" },
      { target: "влади", transition: "влади" }
    ]
  },
  {
    id: "chain_102",
    // просте правило -> правило дороги -> дорожній рух -> рух транспорту -> транспортна розв'язка -> розв'язка конфлікту
    items: [
      { target: "просте", transition: "просте" },
      { target: "правило", transition: "правило" },
      { target: "дороги", transition: "дорожній" },
      { target: "рух", transition: "рух" },
      { target: "транспорту", transition: "транспортна" },
      { target: "розв'язка", transition: "розв'язка" },
      { target: "конфлікту", transition: "конфлікту" }
    ]
  },
  {
    id: "chain_103",
    // міцна фортеця -> фортеця духу -> духовний лідер -> лідер партії -> партійний квиток -> квиток пасажира
    items: [
      { target: "міцна", transition: "міцна" },
      { target: "фортеця", transition: "фортеця" },
      { target: "духу", transition: "духовний" },
      { target: "лідер", transition: "лідер" },
      { target: "партії", transition: "партійний" },
      { target: "квиток", transition: "квиток" },
      { target: "пасажира", transition: "пасажира" }
    ]
  },
  {
    id: "chain_104",
    // тонкий лід -> лід озера -> озерна тиша -> тиша гір -> гірський струмок -> струмок життя
    items: [
      { target: "тонкий", transition: "тонкий" },
      { target: "лід", transition: "лід" },
      { target: "озера", transition: "озерна" },
      { target: "тиша", transition: "тиша" },
      { target: "гір", transition: "гірський" },
      { target: "струмок", transition: "струмок" },
      { target: "життя", transition: "життя" }
    ]
  },
  {
    id: "chain_105",
    // яскравий вогонь -> вогонь пристрасті -> пристрасний танець -> танець осені -> осінній вальс -> вальс квітів
    items: [
      { target: "яскравий", transition: "яскравий" },
      { target: "вогонь", transition: "вогонь" },
      { target: "пристрасті", transition: "пристрасний" },
      { target: "танець", transition: "танець" },
      { target: "осені", transition: "осінній" },
      { target: "вальс", transition: "вальс" },
      { target: "квітів", transition: "квітів" }
    ]
  },
  {
    id: "chain_106",
    // м'який сніг -> сніг зими -> зимовий спорт -> спорт школярів -> шкільна форма -> форма одягу
    items: [
      { target: "м'який", transition: "м'який" },
      { target: "сніг", transition: "сніг" },
      { target: "зими", transition: "зимовий" },
      { target: "спорт", transition: "спорт" },
      { target: "школярів", transition: "шкільна" },
      { target: "форма", transition: "форма" },
      { target: "одягу", transition: "одягу" }
    ]
  },
  {
    id: "chain_107",
    // сильна буря -> буря століття -> столітній парк -> парк Шевченка -> шевченківська премія -> премія року
    items: [
      { target: "сильна", transition: "сильна" },
      { target: "буря", transition: "буря" },
      { target: "століття", transition: "столітній" },
      { target: "парк", transition: "парк" },
      { target: "Шевченка", transition: "шевченківська" },
      { target: "премія", transition: "премія" },
      { target: "року", transition: "року" }
    ]
  },
  {
    id: "chain_108",
    // ранній рейс -> рейс автобуса -> автобусна зупинка -> зупинка серця -> серцевий напад -> напад ворога
    items: [
      { target: "ранній", transition: "ранній" },
      { target: "рейс", transition: "рейс" },
      { target: "автобуса", transition: "автобусна" },
      { target: "зупинка", transition: "зупинка" },
      { target: "серця", transition: "серцевий" },
      { target: "напад", transition: "напад" },
      { target: "ворога", transition: "ворога" }
    ]
  },
  {
    id: "chain_109",
    // мудра порада -> порада лікаря -> лікарська помилка -> помилка системи -> системний збій -> збій програми
    items: [
      { target: "мудра", transition: "мудра" },
      { target: "порада", transition: "порада" },
      { target: "лікаря", transition: "лікарська" },
      { target: "помилка", transition: "помилка" },
      { target: "системи", transition: "системний" },
      { target: "збій", transition: "збій" },
      { target: "програми", transition: "програми" }
    ]
  },
  {
    id: "chain_110",
    // міцний чай -> чай трав -> трав'яний збір -> збір урожаю -> урожайний рік -> рік кролика
    items: [
      { target: "міцний", transition: "міцний" },
      { target: "чай", transition: "чай" },
      { target: "трав", transition: "трав'яний" },
      { target: "збір", transition: "збір" },
      { target: "урожаю", transition: "урожайний" },
      { target: "рік", transition: "рік" },
      { target: "кролика", transition: "кролика" }
    ]
  },
  {
    id: "chain_111",
    // дорога вишиванка -> вишиванка мами -> мамина колискова -> колискова дитини -> дитячий рай -> рай землі
    items: [
      { target: "дорога", transition: "дорога" },
      { target: "вишиванка", transition: "вишиванка" },
      { target: "мами", transition: "мамина" },
      { target: "колискова", transition: "колискова" },
      { target: "дитини", transition: "дитячий" },
      { target: "рай", transition: "рай" },
      { target: "землі", transition: "землі" }
    ]
  },
  {
    id: "chain_112",
    // нічний ліхтар -> ліхтар вулиці -> вуличний художник -> художник слова -> словесний бій -> бій барабанів
    items: [
      { target: "нічний", transition: "нічний" },
      { target: "ліхтар", transition: "ліхтар" },
      { target: "вулиці", transition: "вуличний" },
      { target: "художник", transition: "художник" },
      { target: "слова", transition: "словесний" },
      { target: "бій", transition: "бій" },
      { target: "барабанів", transition: "барабанів" }
    ]
  },
  {
    id: "chain_113",
    // тяжкий камінь -> камінь замку -> замковий ключ -> ключ дверей -> дверна ручка -> ручка чашки
    items: [
      { target: "тяжкий", transition: "тяжкий" },
      { target: "камінь", transition: "камінь" },
      { target: "замку", transition: "замковий" },
      { target: "ключ", transition: "ключ" },
      { target: "дверей", transition: "дверна" },
      { target: "ручка", transition: "ручка" },
      { target: "чашки", transition: "чашки" }
    ]
  },
  {
    id: "chain_114",
    // довга черга -> черга студентів -> студентське життя -> життя гуртожитку -> гуртожиткова кімната -> кімната сміху
    items: [
      { target: "довга", transition: "довга" },
      { target: "черга", transition: "черга" },
      { target: "студентів", transition: "студентське" },
      { target: "життя", transition: "життя" },
      { target: "гуртожитку", transition: "гуртожиткова" },
      { target: "кімната", transition: "кімната" },
      { target: "сміху", transition: "сміху" }
    ]
  },
  {
    id: "chain_115",
    // смачний пиріг -> пиріг свята -> святковий стіл -> стіл майстра -> майстерний удар -> удар долі
    items: [
      { target: "смачний", transition: "смачний" },
      { target: "пиріг", transition: "пиріг" },
      { target: "свята", transition: "святковий" },
      { target: "стіл", transition: "стіл" },
      { target: "майстра", transition: "майстерний" },
      { target: "удар", transition: "удар" },
      { target: "долі", transition: "долі" }
    ]
  },
  {
    id: "chain_116",
    // прозоре озеро -> озеро лебедів -> лебедина пісня -> пісня серця -> серцевий ритм -> ритм міста
    items: [
      { target: "прозоре", transition: "прозоре" },
      { target: "озеро", transition: "озеро" },
      { target: "лебедів", transition: "лебедина" },
      { target: "пісня", transition: "пісня" },
      { target: "серця", transition: "серцевий" },
      { target: "ритм", transition: "ритм" },
      { target: "міста", transition: "міста" }
    ]
  },
  {
    id: "chain_117",
    // північне сяйво -> сяйво зірок -> зоряний пил -> пил епох -> епохальна подія -> подія року
    items: [
      { target: "північне", transition: "північне" },
      { target: "сяйво", transition: "сяйво" },
      { target: "зірок", transition: "зоряний" },
      { target: "пил", transition: "пил" },
      { target: "епох", transition: "епохальна" },
      { target: "подія", transition: "подія" },
      { target: "року", transition: "року" }
    ]
  },
  {
    id: "chain_118",
    // давній Рим -> Рим імператорів -> імператорський палац -> палац культури -> культурний обмін -> обмін досвідом
    items: [
      { target: "давній", transition: "давній" },
      { target: "Рим", transition: "Рим" },
      { target: "імператорів", transition: "імператорський" },
      { target: "палац", transition: "палац" },
      { target: "культури", transition: "культурний" },
      { target: "обмін", transition: "обмін" },
      { target: "досвідом", transition: "досвідом" }
    ]
  },
  {
    id: "chain_119",
    // сімейна традиція -> традиція роду -> родовий маєток -> маєток графа -> графський титул -> титул барона
    items: [
      { target: "сімейна", transition: "сімейна" },
      { target: "традиція", transition: "традиція" },
      { target: "роду", transition: "родовий" },
      { target: "маєток", transition: "маєток" },
      { target: "графа", transition: "графський" },
      { target: "титул", transition: "титул" },
      { target: "барона", transition: "барона" }
    ]
  },
  {
    id: "chain_120",
    // швидкий аналіз -> аналіз крові -> кров'яний тиск -> тиск повітря -> повітряна подушка -> подушка безпеки
    items: [
      { target: "швидкий", transition: "швидкий" },
      { target: "аналіз", transition: "аналіз" },
      { target: "крові", transition: "кров'яний" },
      { target: "тиск", transition: "тиск" },
      { target: "повітря", transition: "повітряна" },
      { target: "подушка", transition: "подушка" },
      { target: "безпеки", transition: "безпеки" }
    ]
  },
  {
    id: "chain_121",
    // нова стаття -> стаття закону -> законний спадкоємець -> спадкоємець престолу -> престольне свято -> свято поезії
    items: [
      { target: "нова", transition: "нова" },
      { target: "стаття", transition: "стаття" },
      { target: "закону", transition: "законний" },
      { target: "спадкоємець", transition: "спадкоємець" },
      { target: "престолу", transition: "престольне" },
      { target: "свято", transition: "свято" },
      { target: "поезії", transition: "поезії" }
    ]
  },
  {
    id: "chain_122",
    // рідне слово -> слово поета -> поетичний вечір -> вечір пам'яті -> пам'ятна дата -> дата народження
    items: [
      { target: "рідне", transition: "рідне" },
      { target: "слово", transition: "слово" },
      { target: "поета", transition: "поетичний" },
      { target: "вечір", transition: "вечір" },
      { target: "пам'яті", transition: "пам'ятна" },
      { target: "дата", transition: "дата" },
      { target: "народження", transition: "народження" }
    ]
  },
  {
    id: "chain_123",
    // жива картина -> картина художника -> художня галерея -> галерея портретів -> портретна схожість -> схожість близнюків
    items: [
      { target: "жива", transition: "жива" },
      { target: "картина", transition: "картина" },
      { target: "художника", transition: "художня" },
      { target: "галерея", transition: "галерея" },
      { target: "портретів", transition: "портретна" },
      { target: "схожість", transition: "схожість" },
      { target: "близнюків", transition: "близнюків" }
    ]
  },
  {
    id: "chain_124",
    // глиняний горщик -> горщик квітів -> квітковий бутон -> бутон троянди -> трояндовий сад -> сад дитинства
    items: [
      { target: "глиняний", transition: "глиняний" },
      { target: "горщик", transition: "горщик" },
      { target: "квітів", transition: "квітковий" },
      { target: "бутон", transition: "бутон" },
      { target: "троянди", transition: "трояндовий" },
      { target: "сад", transition: "сад" },
      { target: "дитинства", transition: "дитинства" }
    ]
  },
  {
    id: "chain_125",
    // золоте колесо -> колесо огляду -> оглядова вежа -> вежа замку -> замкова брама -> брама міста
    items: [
      { target: "золоте", transition: "золоте" },
      { target: "колесо", transition: "колесо" },
      { target: "огляду", transition: "оглядова" },
      { target: "вежа", transition: "вежа" },
      { target: "замку", transition: "замкова" },
      { target: "брама", transition: "брама" },
      { target: "міста", transition: "міста" }
    ]
  },
  {
    id: "chain_126",
    // стара бібліотека -> бібліотека університету -> університетська лабораторія -> лабораторія хімії -> хімічний склад -> склад повітря
    items: [
      { target: "стара", transition: "стара" },
      { target: "бібліотека", transition: "бібліотека" },
      { target: "університету", transition: "університетська" },
      { target: "лабораторія", transition: "лабораторія" },
      { target: "хімії", transition: "хімічний" },
      { target: "склад", transition: "склад" },
      { target: "повітря", transition: "повітря" }
    ]
  },
  {
    id: "chain_127",
    // старий кінотеатр -> кінотеатр району -> районний центр -> центр області -> обласний бюджет -> бюджет сім'ї
    items: [
      { target: "старий", transition: "старий" },
      { target: "кінотеатр", transition: "кінотеатр" },
      { target: "району", transition: "районний" },
      { target: "центр", transition: "центр" },
      { target: "області", transition: "обласний" },
      { target: "бюджет", transition: "бюджет" },
      { target: "сім'ї", transition: "сім'ї" }
    ]
  },
  {
    id: "chain_128",
    // бджолина пасіка -> пасіка діда -> дідівський мед -> мед квітів -> квітковий пилок -> пилок трав
    items: [
      { target: "бджолина", transition: "бджолина" },
      { target: "пасіка", transition: "пасіка" },
      { target: "діда", transition: "дідівський" },
      { target: "мед", transition: "мед" },
      { target: "квітів", transition: "квітковий" },
      { target: "пилок", transition: "пилок" },
      { target: "трав", transition: "трав" }
    ]
  },
  {
    id: "chain_129",
    // вогняна кузня -> кузня козаків -> козацька шабля -> шабля героя -> героїчний вчинок -> вчинок відваги
    items: [
      { target: "вогняна", transition: "вогняна" },
      { target: "кузня", transition: "кузня" },
      { target: "козаків", transition: "козацька" },
      { target: "шабля", transition: "шабля" },
      { target: "героя", transition: "героїчний" },
      { target: "вчинок", transition: "вчинок" },
      { target: "відваги", transition: "відваги" }
    ]
  },
  {
    id: "chain_130",
    // важкий дзвін -> дзвін церкви -> церковний хор -> хор ангелів -> ангельське терпіння -> терпіння народу
    items: [
      { target: "важкий", transition: "важкий" },
      { target: "дзвін", transition: "дзвін" },
      { target: "церкви", transition: "церковний" },
      { target: "хор", transition: "хор" },
      { target: "ангелів", transition: "ангельське" },
      { target: "терпіння", transition: "терпіння" },
      { target: "народу", transition: "народу" }
    ]
  },
  {
    id: "chain_131",
    // тепла свічка -> свічка пам'яті -> пам'ятний вечір -> вечір поезії -> поетична збірка -> збірка віршів
    items: [
      { target: "тепла", transition: "тепла" },
      { target: "свічка", transition: "свічка" },
      { target: "пам'яті", transition: "пам'ятний" },
      { target: "вечір", transition: "вечір" },
      { target: "поезії", transition: "поетична" },
      { target: "збірка", transition: "збірка" },
      { target: "віршів", transition: "віршів" }
    ]
  },
  {
    id: "chain_132",
    // новий календар -> календар свят -> святкова ніч -> ніч Різдва -> різдвяна зірка -> зірка Вифлеєму
    items: [
      { target: "новий", transition: "новий" },
      { target: "календар", transition: "календар" },
      { target: "свят", transition: "святкова" },
      { target: "ніч", transition: "ніч" },
      { target: "Різдва", transition: "різдвяна" },
      { target: "зірка", transition: "зірка" },
      { target: "Вифлеєму", transition: "Вифлеєму" }
    ]
  },
  {
    id: "chain_133",
    // золотий колос -> колос пшениці -> пшеничне поле -> поле чудес -> чудесне перетворення -> перетворення енергії
    items: [
      { target: "золотий", transition: "золотий" },
      { target: "колос", transition: "колос" },
      { target: "пшениці", transition: "пшеничне" },
      { target: "поле", transition: "поле" },
      { target: "чудес", transition: "чудесне" },
      { target: "перетворення", transition: "перетворення" },
      { target: "енергії", transition: "енергії" }
    ]
  },
  {
    id: "chain_134",
    // рясний урожай -> урожай садів -> садовий інвентар -> інвентар ферми -> фермерське господарство -> господарство предків
    items: [
      { target: "рясний", transition: "рясний" },
      { target: "урожай", transition: "урожай" },
      { target: "садів", transition: "садовий" },
      { target: "інвентар", transition: "інвентар" },
      { target: "ферми", transition: "фермерське" },
      { target: "господарство", transition: "господарство" },
      { target: "предків", transition: "предків" }
    ]
  },
  {
    id: "chain_135",
    // важкий сезон -> сезон дощів -> дощова погода -> погода тижня -> тижневий графік -> графік поїздів
    items: [
      { target: "важкий", transition: "важкий" },
      { target: "сезон", transition: "сезон" },
      { target: "дощів", transition: "дощова" },
      { target: "погода", transition: "погода" },
      { target: "тижня", transition: "тижневий" },
      { target: "графік", transition: "графік" },
      { target: "поїздів", transition: "поїздів" }
    ]
  },
  {
    id: "chain_136",
    // жовтий листок -> листок дерева -> дерев'яна ложка -> ложка меду -> медовий пряник -> пряник свята
    items: [
      { target: "жовтий", transition: "жовтий" },
      { target: "листок", transition: "листок" },
      { target: "дерева", transition: "дерев'яна" },
      { target: "ложка", transition: "ложка" },
      { target: "меду", transition: "медовий" },
      { target: "пряник", transition: "пряник" },
      { target: "свята", transition: "свята" }
    ]
  },
  {
    id: "chain_137",
    // стабільний курс -> курс валюти -> валютний ринок -> ринок землі -> земельна ділянка -> ділянка лісу
    items: [
      { target: "стабільний", transition: "стабільний" },
      { target: "курс", transition: "курс" },
      { target: "валюти", transition: "валютний" },
      { target: "ринок", transition: "ринок" },
      { target: "землі", transition: "земельна" },
      { target: "ділянка", transition: "ділянка" },
      { target: "лісу", transition: "лісу" }
    ]
  },
  {
    id: "chain_138",
    // новий закон -> закон гравітації -> гравітаційна хвиля -> хвиля тепла -> теплова енергія -> енергія вітру
    items: [
      { target: "новий", transition: "новий" },
      { target: "закон", transition: "закон" },
      { target: "гравітації", transition: "гравітаційна" },
      { target: "хвиля", transition: "хвиля" },
      { target: "тепла", transition: "теплова" },
      { target: "енергія", transition: "енергія" },
      { target: "вітру", transition: "вітру" }
    ]
  },
  {
    id: "chain_139",
    // прозоре скло -> скло вікна -> віконна рама -> рама картини -> картинна галерея -> галерея майстрів
    items: [
      { target: "прозоре", transition: "прозоре" },
      { target: "скло", transition: "скло" },
      { target: "вікна", transition: "віконна" },
      { target: "рама", transition: "рама" },
      { target: "картини", transition: "картинна" },
      { target: "галерея", transition: "галерея" },
      { target: "майстрів", transition: "майстрів" }
    ]
  },
  {
    id: "chain_140",
    // ніжне тепло -> тепло рук -> ручна робота -> робота майстрів -> майстерний хід -> хід подій
    items: [
      { target: "ніжне", transition: "ніжне" },
      { target: "тепло", transition: "тепло" },
      { target: "рук", transition: "ручна" },
      { target: "робота", transition: "робота" },
      { target: "майстрів", transition: "майстерний" },
      { target: "хід", transition: "хід" },
      { target: "подій", transition: "подій" }
    ]
  },
  {
    id: "chain_141",
    // гірка сльоза -> сльоза радості -> радісна звістка -> звістка перемоги -> переможний марш -> марш миру
    items: [
      { target: "гірка", transition: "гірка" },
      { target: "сльоза", transition: "сльоза" },
      { target: "радості", transition: "радісна" },
      { target: "звістка", transition: "звістка" },
      { target: "перемоги", transition: "переможний" },
      { target: "марш", transition: "марш" },
      { target: "миру", transition: "миру" }
    ]
  },
  {
    id: "chain_142",
    // перше кохання -> кохання юності -> юнацька мрія -> мрія поета -> поетична душа -> душа народу
    items: [
      { target: "перше", transition: "перше" },
      { target: "кохання", transition: "кохання" },
      { target: "юності", transition: "юнацька" },
      { target: "мрія", transition: "мрія" },
      { target: "поета", transition: "поетична" },
      { target: "душа", transition: "душа" },
      { target: "народу", transition: "народу" }
    ]
  },
  {
    id: "chain_143",
    // вільний рух -> рух повітря -> повітряний простір -> простір космосу -> космічна станція -> станція метро
    items: [
      { target: "вільний", transition: "вільний" },
      { target: "рух", transition: "рух" },
      { target: "повітря", transition: "повітряний" },
      { target: "простір", transition: "простір" },
      { target: "космосу", transition: "космічна" },
      { target: "станція", transition: "станція" },
      { target: "метро", transition: "метро" }
    ]
  },
  {
    id: "chain_144",
    // далека станція -> станція залізниці -> залізничний вокзал -> вокзал Києва -> київська Русь -> Русь князів
    items: [
      { target: "далека", transition: "далека" },
      { target: "станція", transition: "станція" },
      { target: "залізниці", transition: "залізничний" },
      { target: "вокзал", transition: "вокзал" },
      { target: "Києва", transition: "київська" },
      { target: "Русь", transition: "Русь" },
      { target: "князів", transition: "князів" }
    ]
  },
  {
    id: "chain_145",
    // глибока тиша -> тиша бібліотеки -> бібліотечна полиця -> полиця книг -> книжкова вітрина -> вітрина магазину
    items: [
      { target: "глибока", transition: "глибока" },
      { target: "тиша", transition: "тиша" },
      { target: "бібліотеки", transition: "бібліотечна" },
      { target: "полиця", transition: "полиця" },
      { target: "книг", transition: "книжкова" },
      { target: "вітрина", transition: "вітрина" },
      { target: "магазину", transition: "магазину" }
    ]
  },
  {
    id: "chain_146",
    // шовкова сукня -> сукня принцеси -> принцесина корона -> корона королеви -> королівський бал -> бал випускників
    items: [
      { target: "шовкова", transition: "шовкова" },
      { target: "сукня", transition: "сукня" },
      { target: "принцеси", transition: "принцесина" },
      { target: "корона", transition: "корона" },
      { target: "королеви", transition: "королівський" },
      { target: "бал", transition: "бал" },
      { target: "випускників", transition: "випускників" }
    ]
  },
  {
    id: "chain_147",
    // газова плита -> плита кухні -> кухонний стіл -> стіл гостей -> гостьова кімната -> кімната відпочинку
    items: [
      { target: "газова", transition: "газова" },
      { target: "плита", transition: "плита" },
      { target: "кухні", transition: "кухонний" },
      { target: "стіл", transition: "стіл" },
      { target: "гостей", transition: "гостьова" },
      { target: "кімната", transition: "кімната" },
      { target: "відпочинку", transition: "відпочинку" }
    ]
  },
  {
    id: "chain_148",
    // електрична лампа -> лампа читача -> читацький клуб -> клуб любителів -> любительське фото -> фото родини
    items: [
      { target: "електрична", transition: "електрична" },
      { target: "лампа", transition: "лампа" },
      { target: "читача", transition: "читацький" },
      { target: "клуб", transition: "клуб" },
      { target: "любителів", transition: "любительське" },
      { target: "фото", transition: "фото" },
      { target: "родини", transition: "родини" }
    ]
  },
  {
    id: "chain_149",
    // пластиковий стілець -> стілець директора -> директорська ложа -> ложа театру -> театральна афіша -> афіша фестивалю
    items: [
      { target: "пластиковий", transition: "пластиковий" },
      { target: "стілець", transition: "стілець" },
      { target: "директора", transition: "директорська" },
      { target: "ложа", transition: "ложа" },
      { target: "театру", transition: "театральна" },
      { target: "афіша", transition: "афіша" },
      { target: "фестивалю", transition: "фестивалю" }
    ]
  },
  {
    id: "chain_150",
    // розкішний номер -> номер готелю -> готельний бізнес -> бізнес партнера -> партнерська угода -> угода століття
    items: [
      { target: "розкішний", transition: "розкішний" },
      { target: "номер", transition: "номер" },
      { target: "готелю", transition: "готельний" },
      { target: "бізнес", transition: "бізнес" },
      { target: "партнера", transition: "партнерська" },
      { target: "угода", transition: "угода" },
      { target: "століття", transition: "століття" }
    ]
  },
  {
    id: "chain_151",
    // далека експедиція -> експедиція полярників -> полярна ніч -> ніч випробувань -> випробувальний термін -> термін придатності
    items: [
      { target: "далека", transition: "далека" },
      { target: "експедиція", transition: "експедиція" },
      { target: "полярників", transition: "полярна" },
      { target: "ніч", transition: "ніч" },
      { target: "випробувань", transition: "випробувальний" },
      { target: "термін", transition: "термін" },
      { target: "придатності", transition: "придатності" }
    ]
  },
  {
    id: "chain_152",
    // сучасна лабораторія -> лабораторія вчених -> вчена рада -> рада міністрів -> міністерська нарада -> нарада керівників
    items: [
      { target: "сучасна", transition: "сучасна" },
      { target: "лабораторія", transition: "лабораторія" },
      { target: "вчених", transition: "вчена" },
      { target: "рада", transition: "рада" },
      { target: "міністрів", transition: "міністерська" },
      { target: "нарада", transition: "нарада" },
      { target: "керівників", transition: "керівників" }
    ]
  },
  {
    id: "chain_153",
    // зручне крісло -> крісло режисера -> режисерська версія -> версія слідства -> слідчий експеримент -> експеримент вченого
    items: [
      { target: "зручне", transition: "зручне" },
      { target: "крісло", transition: "крісло" },
      { target: "режисера", transition: "режисерська" },
      { target: "версія", transition: "версія" },
      { target: "слідства", transition: "слідчий" },
      { target: "експеримент", transition: "експеримент" },
      { target: "вченого", transition: "вченого" }
    ]
  },
  {
    id: "chain_154",
    // сміливий проєкт -> проєкт архітектора -> архітектурний ансамбль -> ансамбль пісні -> пісенний конкурс -> конкурс знань
    items: [
      { target: "сміливий", transition: "сміливий" },
      { target: "проєкт", transition: "проєкт" },
      { target: "архітектора", transition: "архітектурний" },
      { target: "ансамбль", transition: "ансамбль" },
      { target: "пісні", transition: "пісенний" },
      { target: "конкурс", transition: "конкурс" },
      { target: "знань", transition: "знань" }
    ]
  },
  {
    id: "chain_155",
    // сміливий задум -> задум інженера -> інженерна думка -> думка експерта -> експертна оцінка -> оцінка якості
    items: [
      { target: "сміливий", transition: "сміливий" },
      { target: "задум", transition: "задум" },
      { target: "інженера", transition: "інженерна" },
      { target: "думка", transition: "думка" },
      { target: "експерта", transition: "експертна" },
      { target: "оцінка", transition: "оцінка" },
      { target: "якості", transition: "якості" }
    ]
  },
  {
    id: "chain_156",
    // невідомий закон -> закон фізики -> фізична культура -> культура мови -> мовний бар'єр -> бар'єр сприйняття
    items: [
      { target: "невідомий", transition: "невідомий" },
      { target: "закон", transition: "закон" },
      { target: "фізики", transition: "фізична" },
      { target: "культура", transition: "культура" },
      { target: "мови", transition: "мовний" },
      { target: "бар'єр", transition: "бар'єр" },
      { target: "сприйняття", transition: "сприйняття" }
    ]
  },
  {
    id: "chain_157",
    // математична логіка -> логіка дій -> дієвий засіб -> засіб захисту -> захисна функція -> функція пам'яті
    items: [
      { target: "математична", transition: "математична" },
      { target: "логіка", transition: "логіка" },
      { target: "дій", transition: "дієвий" },
      { target: "засіб", transition: "засіб" },
      { target: "захисту", transition: "захисна" },
      { target: "функція", transition: "функція" },
      { target: "пам'яті", transition: "пам'яті" }
    ]
  },
  {
    id: "chain_158",
    // світле свято -> свято Великодня -> великодній кошик -> кошик яєць -> яєчна шкаралупа -> шкаралупа горіха
    items: [
      { target: "світле", transition: "світле" },
      { target: "свято", transition: "свято" },
      { target: "Великодня", transition: "великодній" },
      { target: "кошик", transition: "кошик" },
      { target: "яєць", transition: "яєчна" },
      { target: "шкаралупа", transition: "шкаралупа" },
      { target: "горіха", transition: "горіха" }
    ]
  },
  {
    id: "chain_159",
    // цікава партія -> партія шахів -> шахова дошка -> дошка пошани -> почесна відзнака -> відзнака героя
    items: [
      { target: "цікава", transition: "цікава" },
      { target: "партія", transition: "партія" },
      { target: "шахів", transition: "шахова" },
      { target: "дошка", transition: "дошка" },
      { target: "пошани", transition: "почесна" },
      { target: "відзнака", transition: "відзнака" },
      { target: "героя", transition: "героя" }
    ]
  },
  {
    id: "chain_160",
    // новий метод -> метод лікування -> лікувальна гімнастика -> гімнастика ранку -> ранкова зарядка -> зарядка бадьорості
    items: [
      { target: "новий", transition: "новий" },
      { target: "метод", transition: "метод" },
      { target: "лікування", transition: "лікувальна" },
      { target: "гімнастика", transition: "гімнастика" },
      { target: "ранку", transition: "ранкова" },
      { target: "зарядка", transition: "зарядка" },
      { target: "бадьорості", transition: "бадьорості" }
    ]
  },
  {
    id: "chain_161",
    // глибока шахта -> шахта вугілля -> вугільний пил -> пил доріг -> дорожня пригода -> пригода життя
    items: [
      { target: "глибока", transition: "глибока" },
      { target: "шахта", transition: "шахта" },
      { target: "вугілля", transition: "вугільний" },
      { target: "пил", transition: "пил" },
      { target: "доріг", transition: "дорожня" },
      { target: "пригода", transition: "пригода" },
      { target: "життя", transition: "життя" }
    ]
  },
  {
    id: "chain_162",
    // швидкий човен -> човен рибалки -> рибальська сітка -> сітка доріг -> дорожня карта -> карта скарбів
    items: [
      { target: "швидкий", transition: "швидкий" },
      { target: "човен", transition: "човен" },
      { target: "рибалки", transition: "рибальська" },
      { target: "сітка", transition: "сітка" },
      { target: "доріг", transition: "дорожня" },
      { target: "карта", transition: "карта" },
      { target: "скарбів", transition: "скарбів" }
    ]
  },
  {
    id: "chain_163",
    // легкий туман -> туман осені -> осінній ранок -> ранок мандрівника -> мандрівний лицар -> лицар честі
    items: [
      { target: "легкий", transition: "легкий" },
      { target: "туман", transition: "туман" },
      { target: "осені", transition: "осінній" },
      { target: "ранок", transition: "ранок" },
      { target: "мандрівника", transition: "мандрівний" },
      { target: "лицар", transition: "лицар" },
      { target: "честі", transition: "честі" }
    ]
  },
  {
    id: "chain_164",
    // зручний рюкзак -> рюкзак туриста -> туристична стежка -> стежка гір -> гірська хвороба -> хвороба століття
    items: [
      { target: "зручний", transition: "зручний" },
      { target: "рюкзак", transition: "рюкзак" },
      { target: "туриста", transition: "туристична" },
      { target: "стежка", transition: "стежка" },
      { target: "гір", transition: "гірська" },
      { target: "хвороба", transition: "хвороба" },
      { target: "століття", transition: "століття" }
    ]
  },
  {
    id: "chain_165",
    // тиха радість -> радість зустрічі -> зустрічна пропозиція -> пропозиція уряду -> урядова програма -> програма розвитку
    items: [
      { target: "тиха", transition: "тиха" },
      { target: "радість", transition: "радість" },
      { target: "зустрічі", transition: "зустрічна" },
      { target: "пропозиція", transition: "пропозиція" },
      { target: "уряду", transition: "урядова" },
      { target: "програма", transition: "програма" },
      { target: "розвитку", transition: "розвитку" }
    ]
  },
  {
    id: "chain_166",
    // точний план -> план будівництва -> будівельний кран -> кран води -> водяна пара -> пара кроків
    items: [
      { target: "точний", transition: "точний" },
      { target: "план", transition: "план" },
      { target: "будівництва", transition: "будівельний" },
      { target: "кран", transition: "кран" },
      { target: "води", transition: "водяна" },
      { target: "пара", transition: "пара" },
      { target: "кроків", transition: "кроків" }
    ]
  },
  {
    id: "chain_167",
    // спільна мета -> мета подорожі -> подорожній щоденник -> щоденник школяра -> школярський ранець -> ранець першокласника
    items: [
      { target: "спільна", transition: "спільна" },
      { target: "мета", transition: "мета" },
      { target: "подорожі", transition: "подорожній" },
      { target: "щоденник", transition: "щоденник" },
      { target: "школяра", transition: "школярський" },
      { target: "ранець", transition: "ранець" },
      { target: "першокласника", transition: "першокласника" }
    ]
  },
  {
    id: "chain_168",
    // велика площа -> площа Харкова -> харківський університет -> університет мистецтв -> мистецька майстерня -> майстерня художника
    items: [
      { target: "велика", transition: "велика" },
      { target: "площа", transition: "площа" },
      { target: "Харкова", transition: "харківський" },
      { target: "університет", transition: "університет" },
      { target: "мистецтв", transition: "мистецька" },
      { target: "майстерня", transition: "майстерня" },
      { target: "художника", transition: "художника" }
    ]
  },
  {
    id: "chain_169",
    // давній собор -> собор Чернігова -> чернігівський князь -> князь Русі -> руська земля -> земля героїв
    items: [
      { target: "давній", transition: "давній" },
      { target: "собор", transition: "собор" },
      { target: "Чернігова", transition: "чернігівський" },
      { target: "князь", transition: "князь" },
      { target: "Русі", transition: "руська" },
      { target: "земля", transition: "земля" },
      { target: "героїв", transition: "героїв" }
    ]
  },
  {
    id: "chain_170",
    // солодкий мармелад -> мармелад ягід -> ягідний сік -> сік дерев -> деревна кора -> кора дуба
    items: [
      { target: "солодкий", transition: "солодкий" },
      { target: "мармелад", transition: "мармелад" },
      { target: "ягід", transition: "ягідний" },
      { target: "сік", transition: "сік" },
      { target: "дерев", transition: "деревна" },
      { target: "кора", transition: "кора" },
      { target: "дуба", transition: "дуба" }
    ]
  },
  {
    id: "chain_171",
    // тривожна ніч -> ніч грози -> грозова хмара -> хмара комарів -> комариний писк -> писк моди
    items: [
      { target: "тривожна", transition: "тривожна" },
      { target: "ніч", transition: "ніч" },
      { target: "грози", transition: "грозова" },
      { target: "хмара", transition: "хмара" },
      { target: "комарів", transition: "комариний" },
      { target: "писк", transition: "писк" },
      { target: "моди", transition: "моди" }
    ]
  },
  {
    id: "chain_172",
    // перший політ -> політ ракети -> ракетний двигун -> двигун автомобіля -> автомобільна шина -> шина колеса
    items: [
      { target: "перший", transition: "перший" },
      { target: "політ", transition: "політ" },
      { target: "ракети", transition: "ракетний" },
      { target: "двигун", transition: "двигун" },
      { target: "автомобіля", transition: "автомобільна" },
      { target: "шина", transition: "шина" },
      { target: "колеса", transition: "колеса" }
    ]
  },
  {
    id: "chain_173",
    // важкий якір -> якір корабля -> корабельна щогла -> щогла вітрильника -> вітрильний спорт -> спорт молоді
    items: [
      { target: "важкий", transition: "важкий" },
      { target: "якір", transition: "якір" },
      { target: "корабля", transition: "корабельна" },
      { target: "щогла", transition: "щогла" },
      { target: "вітрильника", transition: "вітрильний" },
      { target: "спорт", transition: "спорт" },
      { target: "молоді", transition: "молоді" }
    ]
  },
  {
    id: "chain_174",
    // дзвінка струна -> струна гітари -> гітарний концерт -> концерт скрипки -> скрипкова соната -> соната осені
    items: [
      { target: "дзвінка", transition: "дзвінка" },
      { target: "струна", transition: "струна" },
      { target: "гітари", transition: "гітарний" },
      { target: "концерт", transition: "концерт" },
      { target: "скрипки", transition: "скрипкова" },
      { target: "соната", transition: "соната" },
      { target: "осені", transition: "осені" }
    ]
  },
  {
    id: "chain_175",
    // весела компанія -> компанія дівчат -> дівоча пісня -> пісня козаків -> козацька вечеря -> вечеря господаря
    items: [
      { target: "весела", transition: "весела" },
      { target: "компанія", transition: "компанія" },
      { target: "дівчат", transition: "дівоча" },
      { target: "пісня", transition: "пісня" },
      { target: "козаків", transition: "козацька" },
      { target: "вечеря", transition: "вечеря" },
      { target: "господаря", transition: "господаря" }
    ]
  },
  {
    id: "chain_176",
    // потрібний ключ -> ключ успіху -> успіх команди -> командна гра -> гра випадку -> випадковий гість
    items: [
      { target: "потрібний", transition: "потрібний" },
      { target: "ключ", transition: "ключ" },
      { target: "успіху", transition: "успіх" },
      { target: "команди", transition: "командна" },
      { target: "гра", transition: "гра" },
      { target: "випадку", transition: "випадковий" },
      { target: "гість", transition: "гість" }
    ]
  },
  {
    id: "chain_177",
    // стародавнє мистецтво -> мистецтво війни -> війна ідей -> ідейний лідер -> лідер гонки -> гоночний болід
    items: [
      { target: "стародавнє", transition: "стародавнє" },
      { target: "мистецтво", transition: "мистецтво" },
      { target: "війни", transition: "війна" },
      { target: "ідей", transition: "ідейний" },
      { target: "лідер", transition: "лідер" },
      { target: "гонки", transition: "гоночний" },
      { target: "болід", transition: "болід" }
    ]
  },
  {
    id: "chain_178",
    // святковий день -> день незалежності -> незалежність держави -> державний кордон -> кордон області -> обласна рада
    items: [
      { target: "святковий", transition: "святковий" },
      { target: "день", transition: "день" },
      { target: "незалежності", transition: "незалежність" },
      { target: "держави", transition: "державний" },
      { target: "кордон", transition: "кордон" },
      { target: "області", transition: "обласна" },
      { target: "рада", transition: "рада" }
    ]
  },
  {
    id: "chain_179",
    // справжня королева -> королева моди -> мода минулого -> минулий вік -> вік технологій -> технологічний прорив
    items: [
      { target: "справжня", transition: "справжня" },
      { target: "королева", transition: "королева" },
      { target: "моди", transition: "мода" },
      { target: "минулого", transition: "минулий" },
      { target: "вік", transition: "вік" },
      { target: "технологій", transition: "технологічний" },
      { target: "прорив", transition: "прорив" }
    ]
  },
  {
    id: "chain_180",
    // висока ціна -> ціна помилки -> помилка слова -> словесний портрет -> портрет епохи -> епоха відродження
    items: [
      { target: "висока", transition: "висока" },
      { target: "ціна", transition: "ціна" },
      { target: "помилки", transition: "помилка" },
      { target: "слова", transition: "словесний" },
      { target: "портрет", transition: "портрет" },
      { target: "епохи", transition: "епоха" },
      { target: "відродження", transition: "відродження" }
    ]
  },
  {
    id: "chain_181",
    // відкрите вікно -> вікно можливостей -> можливість вибору -> вибірковий підхід -> підхід вчителя -> вчительська мудрість
    items: [
      { target: "відкрите", transition: "відкрите" },
      { target: "вікно", transition: "вікно" },
      { target: "можливостей", transition: "можливість" },
      { target: "вибору", transition: "вибірковий" },
      { target: "підхід", transition: "підхід" },
      { target: "вчителя", transition: "вчительська" },
      { target: "мудрість", transition: "мудрість" }
    ]
  },
  {
    id: "chain_182",
    // мудрий батько -> батько нації -> нація героїв -> героїчний народ -> народ України -> український степ
    items: [
      { target: "мудрий", transition: "мудрий" },
      { target: "батько", transition: "батько" },
      { target: "нації", transition: "нація" },
      { target: "героїв", transition: "героїчний" },
      { target: "народ", transition: "народ" },
      { target: "України", transition: "український" },
      { target: "степ", transition: "степ" }
    ]
  },
  {
    id: "chain_183",
    // велика перемога -> перемога духу -> дух часу -> часовий вимір -> вимір простору -> просторове мислення
    items: [
      { target: "велика", transition: "велика" },
      { target: "перемога", transition: "перемога" },
      { target: "духу", transition: "дух" },
      { target: "часу", transition: "часовий" },
      { target: "вимір", transition: "вимір" },
      { target: "простору", transition: "просторове" },
      { target: "мислення", transition: "мислення" }
    ]
  },
  {
    id: "chain_184",
    // цікава гра -> гра престолів -> престол влади -> влада народу -> народний депутат -> депутат парламенту
    items: [
      { target: "цікава", transition: "цікава" },
      { target: "гра", transition: "гра" },
      { target: "престолів", transition: "престол" },
      { target: "влади", transition: "влада" },
      { target: "народу", transition: "народний" },
      { target: "депутат", transition: "депутат" },
      { target: "парламенту", transition: "парламенту" }
    ]
  },
  {
    id: "chain_185",
    // могутня сила -> сила слова -> слово предків -> предківська мудрість -> мудрість віків -> віковий дуб
    items: [
      { target: "могутня", transition: "могутня" },
      { target: "сила", transition: "сила" },
      { target: "слова", transition: "слово" },
      { target: "предків", transition: "предківська" },
      { target: "мудрість", transition: "мудрість" },
      { target: "віків", transition: "віковий" },
      { target: "дуб", transition: "дуб" }
    ]
  },
  {
    id: "chain_186",
    // давня казка -> казка Сходу -> східний базар -> базар прянощів -> пряний аромат -> аромат ночі
    items: [
      { target: "давня", transition: "давня" },
      { target: "казка", transition: "казка" },
      { target: "Сходу", transition: "східний" },
      { target: "базар", transition: "базар" },
      { target: "прянощів", transition: "пряний" },
      { target: "аромат", transition: "аромат" },
      { target: "ночі", transition: "ночі" }
    ]
  },
  {
    id: "chain_187",
    // палюче сонце -> сонце півдня -> південний пляж -> пляж острова -> острівна країна -> країна вулканів
    items: [
      { target: "палюче", transition: "палюче" },
      { target: "сонце", transition: "сонце" },
      { target: "півдня", transition: "південний" },
      { target: "пляж", transition: "пляж" },
      { target: "острова", transition: "острівна" },
      { target: "країна", transition: "країна" },
      { target: "вулканів", transition: "вулканів" }
    ]
  },
  {
    id: "chain_188",
    // дика сила -> сила лева -> левина частка -> частка прибутку -> прибуткова справа -> справа честі
    items: [
      { target: "дика", transition: "дика" },
      { target: "сила", transition: "сила" },
      { target: "лева", transition: "левина" },
      { target: "частка", transition: "частка" },
      { target: "прибутку", transition: "прибуткова" },
      { target: "справа", transition: "справа" },
      { target: "честі", transition: "честі" }
    ]
  },
  {
    id: "chain_189",
    // довгий хід -> хід коня -> кінська сила -> сила вогню -> вогняне коло -> коло друзів
    items: [
      { target: "довгий", transition: "довгий" },
      { target: "хід", transition: "хід" },
      { target: "коня", transition: "кінська" },
      { target: "сила", transition: "сила" },
      { target: "вогню", transition: "вогняне" },
      { target: "коло", transition: "коло" },
      { target: "друзів", transition: "друзів" }
    ]
  },
  {
    id: "chain_190",
    // дрібний дощ -> дощ листя -> листяний ліс -> ліс дубів -> дубовий стіл -> стіл директора
    items: [
      { target: "дрібний", transition: "дрібний" },
      { target: "дощ", transition: "дощ" },
      { target: "листя", transition: "листяний" },
      { target: "ліс", transition: "ліс" },
      { target: "дубів", transition: "дубовий" },
      { target: "стіл", transition: "стіл" },
      { target: "директора", transition: "директора" }
    ]
  },
  {
    id: "chain_191",
    // тонкий аромат -> аромат лаванди -> лавандове поле -> поле ромашок -> ромашковий чай -> чай гостей
    items: [
      { target: "тонкий", transition: "тонкий" },
      { target: "аромат", transition: "аромат" },
      { target: "лаванди", transition: "лавандове" },
      { target: "поле", transition: "поле" },
      { target: "ромашок", transition: "ромашковий" },
      { target: "чай", transition: "чай" },
      { target: "гостей", transition: "гостей" }
    ]
  },
  {
    id: "chain_192",
    // законне право -> право власності -> власний будинок -> будинок моди -> модна колекція -> колекція монет
    items: [
      { target: "законне", transition: "законне" },
      { target: "право", transition: "право" },
      { target: "власності", transition: "власний" },
      { target: "будинок", transition: "будинок" },
      { target: "моди", transition: "модна" },
      { target: "колекція", transition: "колекція" },
      { target: "монет", transition: "монет" }
    ]
  },
  {
    id: "chain_193",
    // тихий голос -> голос серця -> серце міста -> міський пейзаж -> пейзаж осені -> осінній вечір
    items: [
      { target: "тихий", transition: "тихий" },
      { target: "голос", transition: "голос" },
      { target: "серця", transition: "серце" },
      { target: "міста", transition: "міський" },
      { target: "пейзаж", transition: "пейзаж" },
      { target: "осені", transition: "осінній" },
      { target: "вечір", transition: "вечір" }
    ]
  },
  {
    id: "chain_194",
    // далекий берег -> берег моря -> море надії -> надійне плече -> плече друга -> дружнє застілля
    items: [
      { target: "далекий", transition: "далекий" },
      { target: "берег", transition: "берег" },
      { target: "моря", transition: "море" },
      { target: "надії", transition: "надійне" },
      { target: "плече", transition: "плече" },
      { target: "друга", transition: "дружнє" },
      { target: "застілля", transition: "застілля" }
    ]
  },
  {
    id: "chain_195",
    // теплий дощ -> дощ весни -> весняна гроза -> гроза літа -> літній вечір -> вечір друзів
    items: [
      { target: "теплий", transition: "теплий" },
      { target: "дощ", transition: "дощ" },
      { target: "весни", transition: "весняна" },
      { target: "гроза", transition: "гроза" },
      { target: "літа", transition: "літній" },
      { target: "вечір", transition: "вечір" },
      { target: "друзів", transition: "друзів" }
    ]
  },
  {
    id: "chain_196",
    // довге очікування -> очікування чуда -> чудовий настрій -> настрій осені -> осіння меланхолія -> меланхолія поета
    items: [
      { target: "довге", transition: "довге" },
      { target: "очікування", transition: "очікування" },
      { target: "чуда", transition: "чудовий" },
      { target: "настрій", transition: "настрій" },
      { target: "осені", transition: "осіння" },
      { target: "меланхолія", transition: "меланхолія" },
      { target: "поета", transition: "поета" }
    ]
  },
  {
    id: "chain_197",
    // швидкий кур'єр -> кур'єр пошти -> поштова марка -> марка якості -> якісна продукція -> продукція заводу
    items: [
      { target: "швидкий", transition: "швидкий" },
      { target: "кур'єр", transition: "кур'єр" },
      { target: "пошти", transition: "поштова" },
      { target: "марка", transition: "марка" },
      { target: "якості", transition: "якісна" },
      { target: "продукція", transition: "продукція" },
      { target: "заводу", transition: "заводу" }
    ]
  },
  {
    id: "chain_198",
    // гучний оркестр -> оркестр театру -> театральний костюм -> костюм героя -> героїчний епос -> епос Гомера
    items: [
      { target: "гучний", transition: "гучний" },
      { target: "оркестр", transition: "оркестр" },
      { target: "театру", transition: "театральний" },
      { target: "костюм", transition: "костюм" },
      { target: "героя", transition: "героїчний" },
      { target: "епос", transition: "епос" },
      { target: "Гомера", transition: "Гомера" }
    ]
  },
  {
    id: "chain_199",
    // чистий аркуш -> аркуш паперу -> паперова фабрика -> фабрика іграшок -> іграшковий ведмідь -> ведмідь тайги
    items: [
      { target: "чистий", transition: "чистий" },
      { target: "аркуш", transition: "аркуш" },
      { target: "паперу", transition: "паперова" },
      { target: "фабрика", transition: "фабрика" },
      { target: "іграшок", transition: "іграшковий" },
      { target: "ведмідь", transition: "ведмідь" },
      { target: "тайги", transition: "тайги" }
    ]
  },
  {
    id: "chain_200",
    // розумна ідея -> ідея проєкту -> проєктна група -> група захисту -> захисна смуга -> смуга перешкод
    items: [
      { target: "розумна", transition: "розумна" },
      { target: "ідея", transition: "ідея" },
      { target: "проєкту", transition: "проєктна" },
      { target: "група", transition: "група" },
      { target: "захисту", transition: "захисна" },
      { target: "смуга", transition: "смуга" },
      { target: "перешкод", transition: "перешкод" }
    ]
  }
];