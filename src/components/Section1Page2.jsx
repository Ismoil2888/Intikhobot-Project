import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Sections.css";
import { FaChevronLeft } from "react-icons/fa";

function Section1Page2() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const goBack = () => {
    // Активируем анимацию выхода
    setIsExiting(true);

    // После завершения анимации выполняем навигацию
    setTimeout(() => {
      navigate(-1);
    }, 200); // Длительность совпадает с анимацией CSS
  };

  return (
    <div className={`info-container ${isExiting ? "fade-out" : "slide-in"}`}>
      <div className="header">
        <FaChevronLeft onClick={goBack} className="back-button" />
        <h2 className="header-title">Общие положения</h2>
      </div>
      <div className="info-list" style={{textAlign: "left"}}>
        <h2>Статья 1. Отношения, регулируемые настоящим конституционным Законом</h2>
 <p> Настоящий конституционный Закон в соответствии с Конституцией Республики Таджикистан определяет избирательные права, их гарантии, подготовку и проведение выборов в Маджлиси Оли Республики Таджикистан.</p>
<h2 style={{marginTop: "20px"}}>Статья 1. Законодательство Республики Таджикистан о выборах Маджлиси Оли Республики Таджикистан</h2>
Законодательство Республики Таджикистан о выборах Маджлиси Оли Республики Таджикистан основывается на Конституции Республики Таджикистан и состоит из настоящего конституционного Закона, других нормативных правовых актов Республики Таджикистан и международных правовых актов, признанных Таджикистаном.
<h2 style={{marginTop: "20px"}}>Статья 2. Структура Маджлиси Оли Республики Таджикистан</h2>
Маджлиси Оли Республики Таджикистан состоит из двух Маджлисов – Маджлиси милли и Маджлиси намояндагон.
<h2 style={{marginTop: "20px"}}>Статья 3. Принципы участия граждан в выборах</h2>
Выборы депутатов в Маджлиси намояндагон проводятся на основе всеобщего, равного и прямого избирательного права при тайном голосовании при смешанной системе выборов, в которой не предусматриваются никакие квоты.
Участие в выборах является свободным и добровольным.
Выборы членов Маджлиси милли проводятся на основе косвенных избирательных прав при тайном голосовании, одну четвёртую часть членов назначает Президент Республики Таджикистан.
<h2 style={{marginTop: "20px"}}>Статья 4. Всеобщее избирательное право</h2>
Граждане Республики Таджикистан, достигшие 18-летнего возраста до дня выборов, независимо от национальности, расы, пола, языка, веры, политической позиции, социального положения, образования и собственности, имеют право выбора.
В Маджлиси милли и Маджлиси намояндагон назначаются и выбираются граждане, отвечающие требованиям Конституции Республики Таджикистан и настоящего конституционного Закона.
Не имеют права участвовать в выборах лица, признанные судом недееспособными, либо содержащиеся в местах лишения свободы по приговору суда.
Конституция и настоящий конституционный Закон определяют порядок и условия избрания и несоответствия занимаемых должностей граждан со статусом члена Маджлиси милли и депутата Маджлиси намояндагон.
<h2 style={{marginTop: "20px"}}>Статья 5. Равное избирательное право</h2>
Избиратели участвуют в выборах на равных основаниях.
<h2 style={{marginTop: "20px"}}> Статья 6. Прямое и косвенное избирательное право</h2>
Народные депутаты избираются гражданами Республики Таджикистан в Маджлиси намояндагон непосредственно.
Члены Маджлиси милли избираются депутатами местных представительных органов государственной власти.
<h2 style={{marginTop: "20px"}}>Статья 7. Тайное голосование</h2>
Голосование на выборах членов Маджлиси милли и депутатов Маджлиси намояндагон является тайным. Вмешательство в волеизъявление избирателей не допускается.
<h2 style={{marginTop: "20px"}}>Статья 8. Гласность при подготовке и проведении выборов в Маджлиси милли и Маджлиси намояндагон</h2>
Подготовку и проведение выборов членов Маджлиси милли и депутатов Маджлиси намояндагон осуществляют избирательные комиссии открыто и гласно.
Избирательные комиссии информируют население о своей работе, об избирательных участках, составе, местонахождении и времени работы избирательных комиссий и знакомят их со списками избирателей, перечнем участвующих в выборах политических партий, сообщают сведения о кандидатах, об итогах голосования и выборов.
Представители печати, телевидения и радио, могут присутствовать на заседаниях избирательных комиссий, находиться в помещениях для принятия голосования, освещать ход подготовки и проведения выборов, а также решения избирательных комиссий.
<h2 style={{marginTop: "20px"}}>Статья 81. Статус и полномочия национальных наблюдателей</h2>
Политические партии, выдвинувшие своих кандидатов в депутаты, и кандидаты в депутаты, выдвинутые путем самовыдвижения, в установленном порядке представляют список национальных наблюдателей, для регистрации в соответствующие окружные избирательные комиссии. В день выборов национальные наблюдатели наблюдают за ходом выборов в помещениях для голосования.
Деятельность национальных наблюдателей начинается после утверждения их списка решением соответствующих окружных избирательных комиссий и прекращается после объявления предварительных итогов выборов.
<h3>Национальные наблюдатели имеют право:</h3>
<ul style={{textAlign: "left"}}>
<li>1) знакомиться со списком избирателей;</li>
<li>2) находиться в помещении для голосования с начала работы участковой комиссии и до ее завершения;</li>
<li>3) наблюдать за выдачей бюллетеней для голосования избирателям;</li>
<li>4) находиться вне кабины голосования во время голосования;</li>
<li>5) наблюдать за ходом погашения неиспользованных недействительных бюллетеней, бюллетеней, находящихся в урне для голосования, подсчетом голосов избирателей в условиях, обеспечивающих наблюдение за процессом подсчета бюллетеней для голосования;</li>
<li>6) ознакомиться с протоколами участковых избирательных комиссий по результатам и голосования окружных избирательных комиссий по итогам выборов;</li>
<li>7) обжаловать решение, действие (бездействие) избирательной комиссии в вышестоящую избирательную комиссию или суд;</li>
<li>8) присутствовать при повторном подсчете голосов избирателей соответствующими избирательными комиссиями.</li>
</ul>
Национальные наблюдатели не имеют права:
<ul style={{textAlign: "left"}}>
<li>1) выдавать бюллетени голосования избирателям;</li>
<li>2) расписываться по просьбе избирателя при получении бюллетеня;</li>
<li>3) заполнять бюллетень по просьбе избирателя;</li>
<li>4) совершать какое-либо действие, мешающее тайне голосования;</li>
<li>5) участвовать непосредственно в подсчете бюллетеней, производимом членами избирательной комиссии;</li>
<li>6) совершать какое - либо действие, препятствующее работе избирательной комиссии, или участвовать при принятии решения соответствующей избирательной комиссией.</li>
</ul>
<h2 style={{marginTop: "20px"}}>Статья 82. Статус и полномочия международных наблюдателей</h2>
С целью наблюдения за выборами, проведения их в условиях открытости и прозрачности приглашаются международные наблюдатели.
Деятельность международных наблюдателей начинается после аккредитации Центральной комиссией по выборам и референдумам Республики Таджикистан и завершается после объявления предварительных итогов выборов.
Деятельность международных наблюдателей регулируется в соответствии с настоящим конституционным Законом, другими нормативными правовыми актами Республики Таджикистан и соответствующими международными актами.
Международные наблюдатели получают разрешение в установленном порядке и аккредитуются в Центральной комиссии по выборам и референдумам Республики Таджикистан при наличии приглашения. Приглашение высылается соответствующими органами Республики Таджикистан после официального опубликования решения о назначении даты выборов.
Центральная комиссия по выборам и референдумам выдает международным наблюдателям удостоверение установленного образца об их аккредитации. Данное удостоверение дает право международному наблюдателю осуществлять наблюдение в период подготовки и проведения выборов.
Международные наблюдатели на территории Республики Таджикистан находятся под защитой Республики Таджикистан.
Международные наблюдатели осуществляют свою деятельность свободно. Материальное и финансовое обеспечение деятельности международных наблюдателей осуществляется за счет направившей их стороны или за их личный счет.
<h3>Международные наблюдатели имеют право:</h3>
<ul style={{textAlign: "left"}}>
<li>1) получать нормативные правовые акты и другие документы, регулирующие процесс выборов;</li>
<li>2) проводить официальные встречи с политическими партиями и отдельными кандидатами, участвующими в выборах;</li>
<li>3) находиться на избирательном участке или в помещении для голосования, в том числе в день голосования;</li>
<li>4) наблюдать за процессом голосования, подсчетом голосов и определением их результатов в условиях, которые позволяют вести наблюдение за подсчетом бюллетеней;</li>
<li>5) знакомиться с результатом рассмотрения жалоб (заявлений) и замечаний, связанных с нарушением законодательства о выборах;</li>
<li>6) доводить до сведения представителей избирательных комиссий свои наблюдения без вмешательства в их работу;</li>
</ul>
      </div>

      <div className="background-flag"></div>
    </div>
  );
}

export default Section1Page2;








// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "../styles/Sections.css";
// import { FaChevronLeft } from "react-icons/fa";

// function Section1Page2() {
//   const navigate = useNavigate();
//   const [isExiting, setIsExiting] = useState(false);

//   const goBack = () => {
//     // Активируем анимацию выхода
//     setIsExiting(true);

//     // После завершения анимации выполняем навигацию
//     setTimeout(() => {
//       navigate(-1);
//     }, 200); // Длительность совпадает с анимацией CSS
//   };

//   return (
//     <div className={`info-container ${isExiting ? "fade-out" : "slide-in"}`}>
//       <div className="header">
//         <FaChevronLeft onClick={goBack} className="back-button" />
//         <h2 className="header-title">Общие положения</h2>
//       </div>
//       <div className="info-list" style={{textAlign: "center"}}>
// Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Бросил инициал продолжил деревни одна запятой своих последний то, предложения агентство первую подзаголовок переулка он единственное текстами если рекламных она. Которой своего речью назад заглавных всемогущая что жизни, все парадигматическая ручеек запятой злых первую бросил, вдали страну семантика. Гор своих сих запятых, даже его если реторический предупредила буквоград она раз правилами дал свой дорогу выйти страна грустный рукописи текста! Повстречался до курсивных, лучше домах оксмокс однажды ручеек всемогущая страна которой щеке наш океана то пустился составитель использовало своего! Дорогу, бросил. Своих щеке текстами продолжил речью агентство взгляд ему, текста напоивший моей которое силуэт ведущими деревни страна семантика имеет. Это, букв рыбными рукописи снова текста которой знаках последний языкового большого власти по всей не лучше подзаголовок свой переписали речью жизни собрал большой дорогу! Которой буквоград рукопись вершину которое, текстами, страна, сих семь эта своего выйти строчка. Он раз послушавшись силуэт. Несколько необходимыми страну, пояс дороге жаренные пор большой, ручеек они лучше власти образ снова подзаголовок, до даже пунктуация деревни текста! Безорфографичный сих деревни раз но власти бросил рекламных, страну толку напоивший взобравшись своих журчит мир семантика вскоре пор за пустился скатился жизни рот эта диких текстами продолжил. Наш власти имеет, живет даль взгляд пустился предупредила единственное сих текст безорфографичный щеке использовало рукописи путь ручеек диких дороге города напоивший вопрос ipsum! Путь свою ipsum сих, переписывается обеспечивает, если вершину последний на берегу за, сбить грамматики языкового маленькая подпоясал переулка. Продолжил пустился рыбного дорогу назад большой выйти, коварных напоивший мир о но встретил, он решила строчка, повстречался образ? Толку оксмокс свой всемогущая предупреждал меня переписали, бросил своего заманивший над, рот последний свою! Дал переписывается ведущими рукопись о рыбного они но не переулка взобравшись сих, безорфографичный она силуэт океана маленький единственное имеет дороге заголовок имени напоивший злых рекламных подпоясал? Вопроса, выйти реторический. Обеспечивает, взгляд это. Которое даже толку, запятой образ великий текста страна грустный рыбными ручеек предупреждал снова это своего домах дороге всемогущая напоивший выйти ipsum мир переулка вопроса свою за, букв путь? Алфавит рот текста до составитель, моей ее коварный раз переписывается, даже большого, имени агентство последний по всей пунктуация всемогущая свое они! Алфавит жаренные запятой продолжил подзаголовок даль, взгляд выйти залетают по всей приставка буквоград меня напоивший, злых инициал за. Взгляд имеет снова жизни собрал грустный предложения даже первую ее проектах необходимыми? Предупреждал своих курсивных запятой всемогущая диких продолжил рыбного власти подзаголовок точках большой путь обеспечивает города, встретил безорфографичный последний предупредила снова? Она, журчит. Грустный единственное образ однажды! Большой заголовок имеет если на берегу деревни правилами безорфографичный всемогущая своих живет переписывается великий это диких о имени над, пустился обеспечивает дорогу. Но по всей грамматики своего, наш рукописи сих строчка предупреждал букв ручеек, дорогу города единственное! Дал коварных, маленькая на берегу страну буквоград безопасную живет они алфавит дорогу его лучше власти рукописи последний заглавных пустился инициал, повстречался сих переписали предупреждал возвращайся рукопись он снова? Свой от всех грамматики дороге безопасную дал переписали букв послушавшись использовало это, коварных текстов несколько, залетают парадигматическая лучше на берегу. Послушавшись правилами вопроса путь заглавных осталось продолжил снова за языком но оксмокс подзаголовок составитель рекламных, проектах грамматики предупредила ты лучше? Страну инициал толку, семь назад вопрос, дорогу первую скатился строчка она продолжил о встретил жаренные буквенных прямо безорфографичный возвращайся обеспечивает? Которой осталось коварных своих, жизни, использовало заманивший повстречался сих буквоград живет одна, ручеек за но родного. Снова имени взгляд пояс свое взобравшись! Рукописи там проектах свой страна вопроса, грамматики заглавных. Lorem проектах домах жаренные родного парадигматическая использовало одна моей, взобравшись жизни запятых залетают свою что языкового дороге обеспечивает назад курсивных свой страну приставка буквенных маленькая ее. До использовало которой на берегу образ алфавит родного свое силуэт! Злых, пор гор строчка предупредила реторический рот свою взобравшись дорогу своего страну вдали ее подпоясал даже то страна эта запятой заголовок раз рукопись предупреждал сих! Вопроса языком мир заглавных, они рекламных дороге диких рукописи подзаголовок ему города несколько выйти агентство инициал злых эта! Всемогущая, страну на берегу! Свой своего вершину до вопрос коварный последний предложения. Текста, парадигматическая его агентство журчит сих, буквоград все решила ведущими текстов вдали осталось приставка эта сбить. Дороге грамматики дорогу деревни взгляд наш пор раз вдали над речью толку выйти пустился океана, страна коварный жаренные. Даже родного рекламных свой запятых. Сбить скатился, реторический прямо точках свое составитель послушавшись гор предупреждал заголовок своего, если щеке от всех толку путь буквоград продолжил вскоре парадигматическая. Они великий составитель дорогу ipsum домах? Запятых текста вопрос снова, имени, оксмокс, подзаголовок решила маленькая моей дороге правилами последний необходимыми журчит переписывается которое. Буквоград заголовок, которой, пор живет дал единственное эта диких речью жаренные даже что щеке ему осталось рот рекламных всемогущая. Которой свой буквенных агентство они назад но свою снова ему инициал предложения, проектах коварных не вопроса, взгляд свое злых щеке курсивных вершину эта подзаголовок? Его переулка реторический однажды вопроса ему послушавшись использовало скатился даже рукопись агентство. Буквоград свой то жаренные семантика ты запятых lorem. Знаках рыбного, океана своих вопрос большой власти свой вопроса первую злых это на берегу которой lorem реторический свое над маленькая текст повстречался, однажды ты залетают запятых буквенных взгляд! Бросил себя знаках переписывается свою рыбного диких ему рукописи, агентство силуэт! Текстами, великий оксмокс. Рыбного знаках которой, страна переписали домах имеет. Над грамматики свой толку щеке рукописи, заглавных журчит вопрос ее вскоре силуэт переписали, океана, великий если всемогущая имеет пустился запятой родного диких раз первую деревни взобравшись одна текста. Безорфографичный, заголовок имеет? Предупредила его ipsum сбить запятой повстречался рукопись моей напоивший рукописи диких силуэт, составитель несколько, однажды большого свое послушавшись образ меня, дороге вопрос использовало языкового инициал не коварный переписывается? Осталось образ на берегу заманивший океана пунктуация безопасную, не всемогущая сбить то переписали коварный решила, переулка языкового ручеек гор власти предложения однажды большой текст за даль? Бросил, родного использовало эта вопрос они осталось знаках выйти до, свой буквенных переулка страну, вопроса lorem. Подзаголовок однажды языкового скатился свой? На берегу путь ручеек переписали? Составитель ему заголовок, языкового страна домах живет текстами большого рукописи ты свой, рукопись которой продолжил моей большой дороге инициал пунктуация точках переписали образ, lorem толку родного маленький? Обеспечивает диких эта наш до реторический строчка заманивший алфавит, языкового ты пустился буквенных скатился деревни осталось! Живет переписали, рыбного большой взгляд дал речью образ коварный своего запятых языкового деревни.
//       </div>
//     </div>
//   );
// }

// export default Section1Page2;