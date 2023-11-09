# НТТИ 2023
___

### Система ранжирования выпускников факультета (Академии) на основе их компетенций с использованием нейросетей
___

### Для запуска приложения
1. В корневой директории в терминале выполните команду `docker-compose up --build`
2. После окончании сборки проекта в браузере перейдите по адресу `http://localhost`
___

## Состав команды:
###### - [Кофанов Валентин Сергеевич](https://t.me/VALI666KO) (Backend-developer)
###### - [Поляков Дмитрий Сергеевич](https://t.me/operculum) (UI/UX дизайнер)
###### - [Корчак Родион Дмитриевич](https://t.me/keyrea_dy) (Frontend-developer, капитан команды)


# Описание решения
Приложение написано с использованием следующих технологий: [ReactTS](https://ru.reactjs.org/), [Flask](https://flask.palletsprojects.com/), [PostgresQL](https://www.postgresql.org/)  
Ранжирование кандидатов и оценка их профессионального соответствия происходит с использованием языковой модели ChatGPT, разработанной компанией [OpenAI](https://openai.com/)  
Ранжирование кандидатов происходит по следующим критериям:
- [ ] Оценка соответствия специальности и хобби кандидата (например, специалист по веб-разработке с хобби HTML-разработка получит больше баллов, чем кандидат со специальностью компьютерная безопасность, но при этом увлекающийся вязанием)
- [ ] Оценка соответствия специальности и хобби с поставленной задачей (например, если задача - проверить приложение на баги, то кандидат со специальностью QA Engineer, увлекающийся различными тестами получит больше баллов)
- [ ] Сравнение возраста и опыта работы (чем больше опыт работы и меньше возраст, тем больше баллов получит кандидат)
- [ ] ВУЗ, который закончил кандидат (выпускник МГУ получит больше баллов, чем выпускник ДВФУ)
- [ ] Сумма баллов за умения кандидата (приложение 1)
___
## Реализованные функции
- [ ] Регистрация/авторизация в системе (подразумевается, что пользоваться приложением могут только члены команды по набору сотрудников (т.е. отдел кадров, тимлиды и т.п.))
- [ ] Загрузка резюме в формате архива данных (внутри архива - еще архивы, в которых лежат резюме в разных форматах и фотография кандидата)
- [ ] Чтение загруженных резюме и сохранение данных из них в базу данных
- [ ] Визуальное отображение данных о кандидатах, возможность добавления кандидатов к углубленному сравнению по параметрам, указанных в приложении 1
- [ ] Две темы приложения (темная и светлая)
## Существующие страницы
- [ ] [Главная страница с основной информацией о проекте](./src/pages/MainPage/ui/MainPage.tsx)
- [ ] [Страница регистрации/авторизации](./src/pages/LoginPage/ui/LoginPage.tsx)
- [ ] [Страница загрузки анкет на сервер](./src/pages/UploadFilesPage/ui/UploadFilesPage.tsx)
- [ ] [Страница общего сравнения кандидатов](./src/pages/CandidatesPage/ui/CandidatesPage/CandidatesPage.tsx)
- [ ] [Страница углубленного сравнения по выбранному критерию](src/pages/DetailedComparisonPage/ui/DetailedComparisonPage/DetailedComparisonPage.tsx)
___
# Приложение 1
Пример анкеты участника после обработки и сохранения в базе данных 
```json
{
  "id": 14,
  "firstname": "Ольга",
  "middlename": "Алексеевна",
  "lastname": "Кравцова",
  "education": "Московский физико-технический институт",
  "speciality": "Прикладная математика",
  "age": 28,
  "experience": 5,
  "img": "",
  "average_score": 95,
  "email": "olga.kravtsova@yandex.ru",
  "skills": {
    "Frontend Developer": {
      "averageScore": 6.82,
      "children": {
        "HTML": 8,
        "CSS": 7,
        "Javascript": 7,
        "Usage of Git": 8,
        "Package Managers": 6,
        "Build Tools": 6,
        "CSS Frameworks": 8
      }
    },
    "Backend Developer": {
      "averageScore": 3.9,
      "children": {
        "JavaScript": 5,
        "Python": 4,
        "Go": 2,
        "Usage of Git": 7,
        "Relational Databases": 6,
        "NoSQL databases": 3,
        "Web Security Knowledge": 1
      }
    },
    "Android Developer": {
      "averageScore": 2.8,
      "children": {
        "Kotlin": 3,
        "Usage of Git": 7,
        "Components and their usage": 1,
        "Application": 2,
        "Building": 2,
        "Testing": 5,
        "Security": 2
      }
    },
    "QA Engineer": {
      "averageScore": 1.8,
      "children": {
        "Project": 1,
        "Management": 2,
        "SDLC": 2,
        "QA": 2,
        "Manual Testing": 1,
        "Automated Testing": 2,
        "Non Functional Testing": 2,
        "CI/CD": 2
      }
    },
    "Go Developer": {
      "averageScore": 3.1,
      "children": {
        "Building": 3,
        "CLI Applications": 2,
        "ORMs": 3,
        "Web Frameworks": 3,
        "Logging": 2,
        "Go realtime communication": 3,
        "API Clients": 3,
        "Microservices": 2
      }
    },
    "Java Developer": {
      "averageScore": 1.6,
      "children": {
        "Generics": 2,
        "Build": 1,
        "Tools": 2,
        "Web Frameworks": 2,
        "ORM": 2,
        "Object-Relational Mapping": 1,
        "Java": 2,
        "JDBC": 2,
        "Testing": 1
      }
    }
  }
}
```
