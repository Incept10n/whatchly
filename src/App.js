import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { BrowserRouter, Routes, Route, Link, useLocation } from "react-router";
import "./App.css";

// Данные о товаре
const products = [
  {
    id: 1,
    name: "Orient Crystal «3 Stars» (EM5A-D0 CA)",
    description:
      "Orient 46943 — легендарная японская механика с полувековой историей. Механические часы с автоподзаводом на 21 камне. Частота баланса — 21 600 полуколебаний в час, запас хода — около 40 часов. Механизм разработан в 1971 году и до сих пор производится в модернизированном виде — проверенная временем надежность.",
    price: "5700 ₽",
    images: [
      "/images/third-1.jpg",
      "/images/third-2.jpg",
      "/images/third-3.jpg",
    ],
    avitoLink: "",
    year: "1970s",
    movement: "Механический с автоподзаводом",
    condition: "Хорошее состояние, лёгкие следы носки",
  },
];

// Компонент модального окна для изображений
function ImageModal({ selectedImage, setSelectedImage }) {
  if (!selectedImage) return null;

  return (
    <div className="image-modal" onClick={() => setSelectedImage(null)}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={() => setSelectedImage(null)}>
          ×
        </button>
        <img
          src={selectedImage}
          alt="увеличенное изображение"
          className="modal-image"
        />
      </div>
    </div>
  );
}

// Компонент навигации
function Navigation() {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-container">
        <Link
          className={`nav-link ${location.pathname === "/" ? "active" : ""}`}
          to="/"
        >
          Главная
        </Link>
        <Link
          className={`nav-link ${location.pathname === "/guarantee" ? "active" : ""}`}
          to="/guarantee"
        >
          Гарантия
        </Link>
      </div>
    </nav>
  );
}

// Компонент футера
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Watchly</h3>
          <p>Профессиональная реставрация часов</p>
        </div>
        <div className="footer-section">
          <h4>Контакты</h4>
          <p>
            📧 Email:{" "}
            <a href="mailto:Incept1on.hf@yandex.ru">Incept1on.hf@yandex.ru</a>
          </p>
          <p>
            💬 Авито:{" "}
            <a
              href="https://www.avito.ru/brands/5bf58521832075b8d79607300f84fb84"
              target="_blank"
              rel="noopener noreferrer"
            >
              профиль
            </a>
          </p>
        </div>
        <div className="footer-section">
          <h4>Информация</h4>
          <Link className="footer-link" to="/guarantee">
            Гарантия
          </Link>
          <p>🕒 Время работы: Пн-Пт 10:00-18:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>
          © 2026 Часовая Реставрация. Реставрация часов с гарантией качества
        </p>
      </div>
    </footer>
  );
}

// Главная страница
function HomePage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <Helmet>
        <title>Реставрированные часы | Watchly</title>
        <meta
          name="description"
          content="Реставрированные часы. Гарантия качества, подлинности и долговечности. Каждая пара - это история времени."
        />
        <meta
          name="keywords"
          content="реставрация часов, винтажные часы, антикварные часы, механические часы, часы ручной работы, коллекционные часы, Orient, Seiko, Citizen, Casio, Tissot, Swatch"
        />
        <meta name="author" content="Watchly" />
        <link rel="canonical" href="https://watchly.inceptech.ru" />
      </Helmet>

      <header className="header">
        <h1>Реставрированные Часы</h1>
        <p className="subtitle">Даём часам второй ход</p>
      </header>

      <main className="content">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h2>Искусство реставрации часов</h2>
            <p>
              Мы специализируемся на профессиональной реставрации винтажных и
              антикварных часов. Каждая пара проходит тщательную проверку,
              профессиональную чистку и восстановление для обеспечения
              безупречной работы на долгие годы.
            </p>
            <div className="hero-features">
              <div className="feature">
                <span className="feature-icon">⏱️</span>
                <span>Гарантия 30 дней</span>
              </div>
              <div className="feature">
                <span className="feature-icon">🔧</span>
                <span>Профессиональная реставрация</span>
              </div>
              <div className="feature">
                <span className="feature-icon">✅</span>
                <span>Замена батареек, стёкол, ремешков</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="products-section">
          <h2 className="section-title">Наши часы</h2>
          <div className="products-grid">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-container">
                  <div
                    className="main-image-wrapper"
                    onClick={() => setSelectedImage(product.images[0])}
                  >
                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="product-image"
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <span className="zoom-icon">🔍</span>
                    </div>
                  </div>
                  {product.images.length > 1 && (
                    <div className="product-thumbnails">
                      {product.images.slice(1).map((img, index) => (
                        <div
                          key={index}
                          className="thumbnail-wrapper"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img
                            src={img}
                            alt={`${product.name} ${index + 2}`}
                            className="thumbnail"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-details">
                    <div className="detail-item">
                      <span className="detail-label">Год:</span>
                      <span className="detail-value">{product.year}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Механизм:</span>
                      <span className="detail-value">{product.movement}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Состояние:</span>
                      <span className="detail-value">{product.condition}</span>
                    </div>
                  </div>
                  <div className="product-price">{product.price}</div>
                  <a
                    href={product.avitoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="buy-button"
                  >
                    Купить на Авито
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="about-section">
          <h2 className="section-title">Почему выбирают нас</h2>
          <div className="about-content">
            <div className="about-item">
              <div className="about-icon">🔧</div>
              <h3>Профессиональная реставрация</h3>
              <p>
                Наши мастера имеют опыт работы с механическими часами. Каждая
                деталь проверяется и при необходимости заменяется.
              </p>
            </div>
            <div className="about-item">
              <div className="about-icon">🛡️</div>
              <h3>Гарантия качества</h3>
              <p>
                Все реставрированные часы проходят 30-дневную гарантию на
                механизм и функциональность. Мы уверены в качестве нашей работы.
              </p>
            </div>
            <div className="about-item">
              <div className="about-icon">📦</div>
              <h3>Безопасная доставка</h3>
              <p>
                Часы тщательно упаковываются и отправляются с отслеживанием. В
                комплекте идет гарантийный сертификат и инструкция по уходу.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <h2>Интересуют другие модели?</h2>
          <p>
            Подпишитесь на наш Авито-профиль, чтобы первыми узнавать о новых
            поступлениях
          </p>
          <a
            href="https://www.avito.ru/brands/5bf58521832075b8d79607300f84fb84"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Перейти в профиль на Авито
          </a>
        </section>
      </main>

      <ImageModal
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
}

// Страница гарантии
function GuaranteePage() {
  return (
    <>
      <Helmet>
        <title>Гарантия на реставрированные часы | Watchly</title>
        <meta
          name="description"
          content="Гарантия 30 дней на все реставрированные часы. Бесплатный ремонт или возврат денег при гарантийном случае. Качество проверенное временем."
        />
        <meta
          name="keywords"
          content="часы, реставрация, гарантия, ремонт, возврат, механика, антиквариат"
        />
        <meta name="author" content="Watchly" />
        <link rel="canonical" href="https://watchly.inceptech.ru/guarantee" />
      </Helmet>

      <header className="header">
        <h1>Гарантия на реставрированные часы</h1>
        <p className="subtitle">Качество проверенное временем</p>
      </header>

      <main className="content">
        <section className="guarantee-section">
          <div className="guarantee-card">
            <h2>Срок гарантии - 30 дней</h2>
            <div className="guarantee-icon">⏱️</div>
            <p className="guarantee-description">
              Мы предоставляем гарантию на все реставрированные часы сроком на
              30 дней с момента покупки.
            </p>
          </div>

          <div className="coverage">
            <h3>Гарантия распространяется на:</h3>
            <ul>
              <li>
                Основные элементы механизма:
                <ul>
                  <li>
                    Отсутствие самопроизвольной остановки (при должном заводе
                    часов)
                  </li>
                  <li>Работа ключа, головки завода</li>
                  <li>Работа автоматического ротора (при наличии)</li>
                </ul>
              </li>
              <li>
                Стрелочный механизм:
                <ul>
                  <li>Движение стрелок - плавное, без заеданий и скачков</li>
                  <li>
                    Фиксация стрелок - надежная посадка на валы, отсутствие
                    люфта
                  </li>
                  <li>
                    Синхронизация - правильное отображение времени, корректная
                    работа секундной стрелки
                  </li>
                </ul>
              </li>
              <li>
                Кнопки и органы управления:
                <ul>
                  <li>
                    Функциональные кнопки - срабатывание хронографа, календаря,
                    других сложных функций
                  </li>
                  <li>
                    Заводная головка - герметичность (если заявлена) при заводе,
                    отсутствие заеданий
                  </li>
                </ul>
              </li>
              <li>
                Дополнительные функции:
                <ul>
                  <li>
                    Календарь - точное переключение даты, отсутствие
                    самопроизвольного срабатывания
                  </li>
                  <li>
                    Водонепроницаемость (если заявлена) - герметичность корпуса
                    и заводной головки (при заявленном уровне)
                  </li>
                </ul>
              </li>
              <li>Водонепроницаемость (если заявлено)</li>
            </ul>
            <h3>Гарантия НЕ распространяется на:</h3>
            <ul>
              <li>
                Внешний вид:
                <ul>
                  <li>
                    Естественные следы эксплуатации - мелкие царапины,
                    потертости, изменение цвета ремешка
                  </li>
                  <li>
                    Косметические дефекты - незначительные сколы покрытия, следы
                    от инструментов при реставрации
                  </li>
                  <li>
                    Индивидуальные особенности - покупатель подтверждает
                    согласие с внешним видом часов при покупке
                  </li>
                  <li>
                    Антикварные особенности - оригинальные признаки возраста,
                    которые являются частью исторической ценности
                  </li>
                </ul>
              </li>
              <li>Повреждения, вызванные неправильной эксплуатацией</li>
              <li>Самостоятельный ремонт или вмешательство третьих лиц</li>
              <li>Механические повреждения корпуса, стекла, ремешка</li>
              <li>Естественный износ расходных материалов</li>
              <li>Повреждения вследствие воздействия экстремальных условий</li>
            </ul>
          </div>

          <div className="conditions">
            <h3>Условия гарантии:</h3>
            <ol>
              <li>Гарантийный период составляет 30 календарных дней</li>
              <li>
                При возникновении неисправности свяжитесь с нами в течение
                гарантийного срока
              </li>
              <li>
                Часы должны быть в оригинальном состоянии, без следов
                самостоятельного ремонта
              </li>
              <li>
                Гарантия не распространяется на естественный износ деталей
              </li>
              <li>
                Повреждения, вызванные неправильной эксплуатацией, не подлежат
                гарантийному ремонту
              </li>
            </ol>
          </div>

          <div className="resolution">
            <h3>При наступлении гарантийного случая:</h3>
            <div className="resolution-steps">
              <div className="step">
                <span className="step-number">1</span>
                <p>Вы связываетесь с нами и описываете проблему</p>
              </div>
              <div className="step">
                <span className="step-number">2</span>
                <p>Мы проводим диагностику и оцениваем характер поломки</p>
              </div>
              <div className="step">
                <span className="step-number">3</span>
                <p>
                  Если поломка подпадает под гарантию, мы предлагаем два
                  варианта:
                </p>
              </div>
            </div>

            <div className="options">
              <div className="option">
                <h4>🔧 Бесплатный ремонт</h4>
                <p>Мы бесплатно устраняем неисправность в наших мастерских</p>
              </div>
              <div className="option">
                <h4>💰 Возврат денег</h4>
                <p>Полный возврат стоимости часов с организацией возврата</p>
              </div>
            </div>

            <div className="customer-appeal">
              <h4>Важная просьба:</h4>
              <p>
                Если у вас возникнут какие-либо проблемы с часами в течение
                гарантийного срока, пожалуйста, не оставляйте негативные отзывы
                сразу. Мы всегда оперативно отвечаем на все обращения и лично
                решаем любые возникающие вопросы. Наша команда стремится к тому,
                чтобы каждый клиент остался доволен, и мы сделаем все возможное
                для быстрого и качественного решения вашей проблемы. Свяжитесь с
                нами напрямую, и мы найдем взаимовыгодное решение!
              </p>
            </div>
          </div>

          <div className="contact-info">
            <h3>Контакты для гарантийных обращений:</h3>
            <p>
              📧 Email:{" "}
              <a href="mailto:Incept1on.hf@yandex.ru">Incept1on.hf@yandex.ru</a>
            </p>
            <p>
              💬 Авито личные сообщения -{" "}
              <a
                href="https://www.avito.ru/user/5bf58521832075b8d79607300f84fb84/profile/all?id=0&src=item&page_from=from_item_card&iid=1699424711&sellerId=5bf58521832075b8d79607300f84fb84"
                target="_blank"
                rel="noopener noreferrer"
              >
                перейти в профиль
              </a>
            </p>
            <p>🕒 Время работы: Пн-Пт 10:00-18:00</p>
          </div>
        </section>
      </main>
    </>
  );
}

// Layout компонент, общий для всех страниц
function Layout() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guarantee" element={<GuaranteePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
