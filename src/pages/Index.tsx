export default function Index() {
  return (
    <>
      <div className="grain-overlay" />

      <header className="header">
        <div className="logo" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 900 }}>МУРРАНІЯ</div>
        <nav>
          <a href="#">Меню</a>
          <a href="#">Коты</a>
          <a href="#">О нас</a>
          <a href="#">Адрес</a>
        </nav>
        <button className="btn-cta">Забронировать</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">
              КОФЕ, УЮТ
              <br />
              И <span>КОТИКИ</span>
            </h1>
            <p className="text-base md:text-lg lg:text-xl mb-8 md:mb-10 leading-relaxed text-[#555]">
              Эстетика 70-х, ароматный кофе и пушистые хвостатые друзья. Заходи погладить котиков и зарядиться мурчащим настроением.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <button className="btn-cta" style={{ background: "var(--primary)", color: "white" }}>
                Забронировать стол
              </button>
              <button className="btn-cta" style={{ background: "white" }}>
                Смотреть меню
              </button>
            </div>
          </div>
          <div
            className="hero-img"
            style={{
              backgroundImage:
                "url('https://cdn.poehali.dev/projects/8a745cf5-9df2-4c60-a77d-f00b1d5f9b50/files/40136de8-a24a-4933-b701-ce15852c1fff.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="sticker">
              МУР-МУР
              <br />
              КАЖДЫЙ ДЕНЬ
            </div>
            <div className="floating-tag hidden md:block" style={{ top: "20%", left: "10%" }}>
              #УЮТ
            </div>
            <div className="floating-tag hidden md:block" style={{ bottom: "30%", right: "20%" }}>
              МУРЧАТ
            </div>
          </div>
        </section>

        <div className="marquee">
          <div className="marquee-content">
            &nbsp; * АРОМАТНЫЙ КОФЕ * 12 ПУШИСТЫХ КОТИКОВ * РЕТРО ВАЙБ 70-Х * ДОМАШНИЕ ДЕСЕРТЫ * ОБНИМАШКИ С ХВОСТАТЫМИ *
            АРОМАТНЫЙ КОФЕ * 12 ПУШИСТЫХ КОТИКОВ * РЕТРО ВАЙБ 70-Х * ДОМАШНИЕ ДЕСЕРТЫ * ОБНИМАШКИ С ХВОСТАТЫМИ
          </div>
        </div>

        <section className="section-padding">
          <div className="section-header">
            <h2 className="section-title">ХИТЫ МЕНЮ</h2>
            <a
              href="#"
              className="text-sm md:text-base"
              style={{ color: "var(--dark)", fontWeight: 800, textTransform: "uppercase" }}
            >
              Всё меню
            </a>
          </div>

          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <span className="menu-tag">Хит продаж</span>
              <img
                src="https://cdn.poehali.dev/projects/8a745cf5-9df2-4c60-a77d-f00b1d5f9b50/files/da0f856f-c87a-4265-9a20-f04b0974148f.jpg"
                alt="Котокапучино"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Котокапучино</h3>
                  <span className="price">320 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Нежный капучино с молочной пенкой и латте-артом в виде кошачьей лапки.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--secondary)" }}>
                Десерт
              </span>
              <img
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Мурчащий чизкейк"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Мурчащий чизкейк</h3>
                  <span className="price">390 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>Нежный чизкейк на песочной основе с ягодным соусом и мятой.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <span className="menu-tag" style={{ background: "var(--accent)", color: "var(--dark)" }}>
                Популярное
              </span>
              <img
                src="https://images.unsplash.com/photo-1461023058943-07fcbe16d735?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Какао с маршмеллоу"
              />
              <div className="menu-card-body">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <h3>Какао с маршмеллоу</h3>
                  <span className="price">280 ₽</span>
                </div>
                <p style={{ fontSize: "14px", color: "#666" }}>
                  Горячий шоколад с воздушным зефиром и щепоткой корицы — идеально под мурчание.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="retro-vibe">
          <div>
            <h2 className="vibe-title">МУРЧАНИЕ ВКЛЮЧЕНО.</h2>
            <p className="vibe-text">
              Мы не просто кафе. Мы дарим тепло. Мягкие диваны 70-х, тёплый свет, ароматный кофе и 12 пушистых котиков,
              которые с радостью устроятся у тебя на коленях. Все наши хвостатые ищут дом — можно не только погладить, но и забрать друга.
            </p>
            <button className="btn-cta" style={{ background: "var(--dark)", color: "white", borderColor: "white" }}>
              Познакомиться с котами
            </button>
          </div>
          <div className="vibe-img"></div>
        </section>

        <section className="section-padding">
          <h2 className="section-title" style={{ marginBottom: "40px", textAlign: "center" }}>
            @MUR.CAFE
          </h2>
          <div className="social-grid">
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Котик 1"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Котик 2"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Котик 3"
              />
            </div>
            <div className="social-item">
              <img
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                alt="Котик 4"
              />
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div>
          <div className="footer-logo">МУР*КАФЕ</div>
          <p style={{ color: "#666", lineHeight: 1.6 }}>
            Твоё место для ароматного кофе, тёплой атмосферы и пушистых друзей. С 2024, но ощущается как 1974.
          </p>
        </div>
        <div className="footer-links">
          <h4>Навигация</h4>
          <ul>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Меню
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Наши коты
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                О нас
              </a>
            </li>
            <li>
              <a href="#" style={{ color: "inherit", textDecoration: "none" }}>
                Условия
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Часы работы</h4>
          <ul>
            <li>Вт-Чт: 12:00 - 23:00</li>
            <li>Пт-Сб: 12:00 - 02:00</li>
            <li>Вс: 11:00 - 21:00</li>
            <li>Пн: Выходной</li>
          </ul>
        </div>
        <div className="footer-bottom">
          <span>2025 МУР КАФЕ</span>
          <span>УЮТ И МУРЧАНИЕ</span>
          <span>IG / VK / TG</span>
        </div>
      </footer>
    </>
  );
}