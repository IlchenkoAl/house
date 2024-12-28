import React from "react";
import "./About.css";

const About = ({ aboutData , mission}) => {
    if (!aboutData) return <div>Данные о компании временно недоступны</div>;
    const missionStatement = "Создание комфортных и безопасных пространств для жизни и работы.";
    const values = [
        "Качество: Только лучшие материалы и технологии.",
        "Индивидуальный подход: Учет всех пожеланий клиентов.",
        "Инновации: Постоянный поиск новых решений.",
        "Устойчивое развитие: Экологически чистые материалы.",
        "Командная работа: Поддержка и сотрудничество.",
    ];

    const { history, team } = aboutData;

    return (
        <div className="about-page">
            <section className="club-history">
                <h1>История компании</h1>
                <p>{history}</p>
            </section>

            <section className="team">
                <h2>Наша команда</h2>
                <div className="team-grid">
                    {team.map((member, index) => (
                        <div key={index} className="team-member">
                            <img src={member.photo} alt={member.name}/>
                            <h3>{member.name}</h3>
                            <p>{member.position}</p>
                            <p>{member.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
            <div className="mission-page">
                <h1 className="mission-title">Наша миссия</h1>
                <p className="mission-statement">{missionStatement}</p>
                <h2 className="values-title">Наши ценности</h2>
                <ul className="values-list">
                    {values.map((value, index) => (
                        <li key={index} className="value-item">
                            {value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default About;
