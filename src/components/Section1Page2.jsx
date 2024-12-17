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
      <div className="info-list" style={{textAlign: "center"}}>
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
    </div>
  );
}

export default Section1Page2;