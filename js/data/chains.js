// 50 ланцюжків: кожне слово може лише змінювати форму (відмінок, рід, іменник -> прикметник),
// але ніколи не замінюється іншим словом.
//
// Структура items[0..6]:
//   target     - форма слова у фразі з ПОПЕРЕДНІМ словом (її вводить гравець)
//   transition - форма того ж слова у фразі з НАСТУПНИМ словом (показується після відгадування)
// Фраза k = items[k-1].transition + items[k].target

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
  }
];