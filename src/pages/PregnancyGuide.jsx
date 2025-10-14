import React, { useState } from 'react';
import './PregnancyGuide.css';
import PregnancyYoga from '../components/PregnancyYoga';

const PregnancyGuide = () => {
  const [activeSection, setActiveSection] = useState('week-by-week');
  const [selectedWeek, setSelectedWeek] = useState(1);

  // 🍼 Week-by-week data
  const weekData = {
    1: {
      title: "Week 1",
      babyDevelopment: "Your baby is just beginning to form. At this stage, it's all about preparation as your body gets ready for pregnancy.",
      motherSymptoms: "You may not notice any symptoms yet. Some women experience light spotting or mild cramping.",
      tips: ["Start taking folic acid", "Maintain a healthy diet", "Avoid alcohol and smoking"],
      icon: "🌸"
    },
    2: {
      title: "Week 2",
      babyDevelopment: "Ovulation occurs. The egg is released and ready for fertilization.",
      motherSymptoms: "You might notice changes in cervical mucus and experience mild abdominal pain.",
      tips: ["Track your ovulation", "Maintain regular intimacy", "Continue healthy habits"],
      icon: "🥚"
    },
    // ... ✅ rest of your weeks 3–40 (no change)
    3: {
  title: "Week 3",
  babyDevelopment: "Fertilization happens! The sperm and egg unite to form a zygote.",
  motherSymptoms: "You may experience mild cramping or light spotting due to implantation.",
  tips: ["Continue folic acid supplements", "Avoid caffeine and alcohol", "Stay hydrated"],
  icon: "🌱"
},
4: {
  title: "Week 4",
  babyDevelopment: "The fertilized egg implants in the uterus. The placenta begins to form.",
  motherSymptoms: "You may miss your period and have mild nausea or breast tenderness.",
  tips: ["Take a pregnancy test", "Eat balanced meals", "Avoid stress"],
  icon: "🌸"
},
5: {
  title: "Week 5",
  babyDevelopment: "Your baby's heart and circulatory system begin to form.",
  motherSymptoms: "Morning sickness and fatigue may begin.",
  tips: ["Eat small frequent meals", "Rest when needed", "Start prenatal vitamins if not yet started"],
  icon: "❤️"
},
6: {
  title: "Week 6",
  babyDevelopment: "Your baby's heart is beating! Tiny buds for arms and legs appear.",
  motherSymptoms: "You may feel nausea, fatigue, and emotional changes.",
  tips: ["Avoid strong odors", "Eat bland foods", "Stay positive and relaxed"],
  icon: "💓"
},
7: {
  title: "Week 7",
  babyDevelopment: "The baby’s brain and face are developing rapidly.",
  motherSymptoms: "Food aversions and heightened sense of smell can occur.",
  tips: ["Avoid spicy foods", "Stay hydrated", "Get enough sleep"],
  icon: "🧠"
},
8: {
  title: "Week 8",
  babyDevelopment: "Arms, legs, and facial features continue to form.",
  motherSymptoms: "You might feel bloated or have mood swings.",
  tips: ["Eat fiber-rich foods", "Avoid raw foods", "Plan your first prenatal visit"],
  icon: "👶"
},
9: {
  title: "Week 9",
  babyDevelopment: "Your baby is about the size of a grape and starts moving slightly.",
  motherSymptoms: "Nausea and fatigue may continue.",
  tips: ["Keep snacks handy", "Avoid long gaps between meals", "Wear comfortable clothes"],
  icon: "🍇"
},
10: {
  title: "Week 10",
  babyDevelopment: "Major organs have formed; the baby is now called a fetus.",
  motherSymptoms: "You may notice visible veins and mild back pain.",
  tips: ["Exercise gently", "Stay hydrated", "Continue prenatal checkups"],
  icon: "🩷"
},
11: {
  title: "Week 11",
  babyDevelopment: "Your baby’s head is nearly half its body size. Fingers and toes separate.",
  motherSymptoms: "Less nausea but emotional changes may persist.",
  tips: ["Eat more protein", "Take short naps", "Avoid excess salt"],
  icon: "✋"
},
12: {
  title: "Week 12",
  babyDevelopment: "Your baby’s organs are fully formed and functioning.",
  motherSymptoms: "Morning sickness may reduce; you may feel more energetic.",
  tips: ["Do your NT scan", "Stay active", "Eat fruits and vegetables"],
  icon: "🌼"
},
13: {
  title: "Week 13",
  babyDevelopment: "Baby can move arms and legs; fingerprints start forming.",
  motherSymptoms: "Second trimester begins! Appetite increases.",
  tips: ["Eat calcium-rich foods", "Maintain good posture", "Stay hydrated"],
  icon: "🥛"
},
14: {
  title: "Week 14",
  babyDevelopment: "Your baby’s neck lengthens, and facial muscles develop.",
  motherSymptoms: "Energy levels rise, nausea fades.",
  tips: ["Do light walking", "Eat balanced meals", "Continue prenatal vitamins"],
  icon: "💪"
},
15: {
  title: "Week 15",
  babyDevelopment: "Baby can sense light and begins moving more.",
  motherSymptoms: "You may feel nasal congestion and heartburn.",
  tips: ["Avoid spicy foods", "Elevate your head when sleeping", "Drink water frequently"],
  icon: "☀️"
},
16: {
  title: "Week 16",
  babyDevelopment: "Your baby’s muscles strengthen, and you may soon feel movement.",
  motherSymptoms: "Back pain or slight swelling can occur.",
  tips: ["Stretch daily", "Wear comfortable shoes", "Attend prenatal yoga"],
  icon: "🧘‍♀️"
},
17: {
  title: "Week 17",
  babyDevelopment: "Fat begins forming under baby’s skin.",
  motherSymptoms: "Mild aches and increased appetite are common.",
  tips: ["Eat protein-rich foods", "Take short walks", "Avoid standing long hours"],
  icon: "🍳"
},
18: {
  title: "Week 18",
  babyDevelopment: "Baby’s ears are fully formed; may start hearing your voice.",
  motherSymptoms: "You might feel your first baby movements (quickening).",
  tips: ["Talk to your baby", "Sleep on your left side", "Schedule anatomy scan soon"],
  icon: "👂"
},
19: {
  title: "Week 19",
  babyDevelopment: "The baby’s skin develops a protective layer called vernix.",
  motherSymptoms: "Mild cramps and backache possible.",
  tips: ["Wear maternity support belts", "Stay hydrated", "Avoid high heels"],
  icon: "🍼"
},
20: {
  title: "Week 20",
  babyDevelopment: "Halfway there! Baby can swallow and has regular sleep cycles.",
  motherSymptoms: "You may feel stronger movements and mild leg cramps.",
  tips: ["Do stretching", "Eat bananas for potassium", "Attend your mid-pregnancy ultrasound"],
  icon: "🌙"
},
21: {
  title: "Week 21",
  babyDevelopment: "Baby’s taste buds develop; can taste what you eat.",
  motherSymptoms: "Appetite increases; you might have mild swelling.",
  tips: ["Avoid too much salt", "Drink more water", "Rest your feet often"],
  icon: "🍉"
},
22: {
  title: "Week 22",
  babyDevelopment: "Baby’s facial features are more defined; eyelids and lips visible.",
  motherSymptoms: "Skin may feel itchy or dry due to stretching.",
  tips: ["Apply moisturizer", "Stay hydrated", "Wear loose clothing"],
  icon: "🧴"
},
23: {
  title: "Week 23",
  babyDevelopment: "Baby starts practicing breathing movements.",
  motherSymptoms: "You might experience backache or mild contractions.",
  tips: ["Avoid heavy lifting", "Do pelvic tilts", "Sleep with a pillow between your knees"],
  icon: "💨"
},
24: {
  title: "Week 24",
  babyDevelopment: "Baby’s lungs and skin continue to mature.",
  motherSymptoms: "Increased appetite and leg cramps are common.",
  tips: ["Eat iron-rich foods", "Do light stretching", "Avoid long standing periods"],
  icon: "🫁"
},
25: {
  title: "Week 25",
  babyDevelopment: "Baby responds to sound and can recognize your voice.",
  motherSymptoms: "You may experience heartburn or indigestion.",
  tips: ["Eat smaller meals", "Avoid lying down after eating", "Stay upright after meals"],
  icon: "🎵"
},
26: {
  title: "Week 26",
  babyDevelopment: "Baby’s eyes start to open; brain activity increases.",
  motherSymptoms: "You may feel warm or sweaty more often.",
  tips: ["Wear light clothing", "Drink plenty of water", "Avoid overheating"],
  icon: "👁️"
},
27: {
  title: "Week 27",
  babyDevelopment: "End of second trimester; baby can now dream!",
  motherSymptoms: "Fatigue returns, sleep may be difficult.",
  tips: ["Use pillows for comfort", "Avoid caffeine late in the day", "Do deep breathing exercises"],
  icon: "💤"
},
28: {
  title: "Week 28",
  babyDevelopment: "Third trimester begins; baby’s eyelids can open and close.",
  motherSymptoms: "You may experience shortness of breath and swelling.",
  tips: ["Elevate your legs", "Rest frequently", "Attend regular checkups"],
  icon: "🫶"
},
29: {
  title: "Week 29",
  babyDevelopment: "Baby’s bones harden and movements are stronger.",
  motherSymptoms: "Heartburn and frequent urination may occur.",
  tips: ["Avoid acidic foods", "Do light stretches", "Wear maternity support wear"],
  icon: "🦴"
},
30: {
  title: "Week 30",
  babyDevelopment: "Baby gains weight rapidly and starts positioning for birth.",
  motherSymptoms: "You might feel pressure in the pelvis.",
  tips: ["Do Kegel exercises", "Sleep on your side", "Monitor baby kicks daily"],
  icon: "⚖️"
},
31: {
  title: "Week 31",
  babyDevelopment: "Baby’s brain and lungs are developing quickly.",
  motherSymptoms: "Tiredness increases; backache may worsen.",
  tips: ["Use a maternity pillow", "Practice relaxation", "Stretch regularly"],
  icon: "🧠"
},
32: {
  title: "Week 32",
  babyDevelopment: "Baby’s bones fully formed but still soft.",
  motherSymptoms: "Braxton Hicks contractions may start.",
  tips: ["Stay calm during contractions", "Drink water", "Prepare for delivery classes"],
  icon: "🍼"
},
33: {
  title: "Week 33",
  babyDevelopment: "Baby detects light and reacts to sounds more actively.",
  motherSymptoms: "You may feel heavy and notice swelling in ankles.",
  tips: ["Elevate feet", "Limit salt", "Wear compression socks"],
  icon: "🦶"
},
34: {
  title: "Week 34",
  babyDevelopment: "Baby’s immune system strengthens; gaining fat rapidly.",
  motherSymptoms: "Discomfort in lower back and pelvis is common.",
  tips: ["Practice pelvic tilts", "Avoid sitting too long", "Do gentle stretches"],
  icon: "🩵"
},
35: {
  title: "Week 35",
  babyDevelopment: "Baby’s organs mature and prepares for birth.",
  motherSymptoms: "Frequent urination and pelvic pressure increase.",
  tips: ["Pack hospital bag", "Stay calm and rested", "Eat nutritious food"],
  icon: "👜"
},
36: {
  title: "Week 36",
  babyDevelopment: "Baby’s head may move down into your pelvis.",
  motherSymptoms: "More frequent urination and mild contractions.",
  tips: ["Prepare your delivery plan", "Monitor baby movement", "Stay hydrated"],
  icon: "🤰"
},
37: {
  title: "Week 37",
  babyDevelopment: "Your baby is full-term! Lungs are mature.",
  motherSymptoms: "Possible nesting instinct, mild contractions.",
  tips: ["Keep essentials ready", "Stay relaxed", "Eat light meals"],
  icon: "🎉"
},
38: {
  title: "Week 38",
  babyDevelopment: "Baby continues gaining weight and getting ready for birth.",
  motherSymptoms: "Pelvic discomfort and fatigue are common.",
  tips: ["Rest often", "Avoid stress", "Keep contact with doctor"],
  icon: "🕊️"
},
39: {
  title: "Week 39",
  babyDevelopment: "Baby’s organs are fully developed, waiting for labor.",
  motherSymptoms: "You may feel stronger contractions and back pain.",
  tips: ["Stay calm", "Monitor contractions", "Be ready for hospital visit"],
  icon: "⏰"
},
40: {
  title: "Week 40",
  babyDevelopment: "Your baby is ready to meet you any day now!",
  motherSymptoms: "Strong contractions and water breaking may occur.",
  tips: ["Stay relaxed", "Have your bag ready", "Follow doctor’s advice closely"],
  icon: "👶🎀"
}

  };

  // 🧭 Trimester data
  const trimesterData = {
    first: {
      title: "First Trimester (Weeks 1-12)",
      changes: ["Morning sickness", "Fatigue", "Breast tenderness", "Frequent urination"],
      precautions: ["Avoid raw foods", "Limit caffeine", "Get plenty of rest"],
      visits: ["Week 8: First prenatal visit", "Week 12: NT scan and blood tests"]
    },
    second: {
      title: "Second Trimester (Weeks 13-26)",
      changes: ["Reduced nausea", "Baby bump appears", "Feeling baby movements"],
      precautions: ["Practice good posture", "Stay hydrated", "Monitor weight gain"],
      visits: ["Week 20: Anatomy scan", "Week 24: Glucose test"]
    },
    third: {
      title: "Third Trimester (Weeks 27-40)",
      changes: ["Back pain", "Braxton Hicks contractions", "Shortness of breath"],
      precautions: ["Sleep on your side", "Monitor blood pressure", "Prepare for delivery"],
      visits: ["Week 28: Glucose test", "Week 36: Group B strep test", "Weekly visits from week 36"]
    }
  };

  const nutritionData = [
    { title: "Iron-Rich Foods", foods: ["Spinach", "Lentils", "Lean red meat", "Fortified cereals"], icon: "🍖" },
    { title: "Folic Acid Sources", foods: ["Leafy greens", "Citrus fruits", "Beans", "Fortified grains"], icon: "🥬" },
    { title: "Calcium Boosters", foods: ["Dairy products", "Almonds", "Broccoli", "Fortified plant milk"], icon: "🥛" }
  ];

  // const exerciseData = [
  //   { title: "Prenatal Yoga", description: "Gentle poses to improve flexibility and reduce stress", trimester: "All trimesters", image: "🧘‍♀️" },
  //   { title: "Walking", description: "Low-impact cardio for overall health", trimester: "All trimesters", image: "🚶‍♀️" },
  //   { title: "Pelvic Tilts", description: "Strengthen core and relieve back pain", trimester: "2nd & 3rd", image: "💪" }
  // ];

  // 🎯 Content Renderer
  const renderContent = () => {
    switch (activeSection) {
      case 'week-by-week':
        return (
          <div className="week-guide">
            <h2>Week-by-Week Pregnancy Guide</h2>
            <div className="week-selector">
              {[...Array(40)].map((_, i) => (
                <button
                  key={i + 1}
                  className={`week-btn ${selectedWeek === i + 1 ? 'active' : ''}`}
                  onClick={() => setSelectedWeek(i + 1)}
                >
                  Week {i + 1}
                </button>
              ))}
            </div>
            <div className="week-detail-card">
              <div className="week-header">
                <span className="week-icon">{weekData[selectedWeek]?.icon}</span>
                <h3>{weekData[selectedWeek]?.title}</h3>
              </div>
              <div className="week-content">
                <div className="info-section">
                  <h4>👶 Baby's Development</h4>
                  <p>{weekData[selectedWeek]?.babyDevelopment}</p>
                </div>
                <div className="info-section">
                  <h4>🤰 Mother's Symptoms</h4>
                  <p>{weekData[selectedWeek]?.motherSymptoms}</p>
                </div>
                <div className="info-section">
                  <h4>💡 Doctor's Tips</h4>
                  <ul>
                    {weekData[selectedWeek]?.tips?.map((tip, index) => (
                      <li key={index}>{tip}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case 'baby-development':
        return (
          <div className="baby-development">
            <h2>Baby Development Timeline</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-marker">12</div>
                <div className="timeline-content">
                  <h4>Week 12 - First Milestones</h4>
                  <p>Baby can make a fist and swallow. All vital organs are formed.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">20</div>
                <div className="timeline-content">
                  <h4>Week 20 - Sensory Development</h4>
                  <p>Baby can hear sounds and may respond to your voice.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-marker">24</div>
                <div className="timeline-content">
                  <h4>Week 24 - Viability</h4>
                  <p>Baby has a chance of survival outside the womb with medical care.</p>
                </div>
              </div>
            </div>
          </div>
        );

      case 'trimesters':
        return (
          <div className="trimesters">
            <h2>Trimester Details</h2>
            <div className="trimester-cards">
              {Object.entries(trimesterData).map(([key, trimester]) => (
                <div key={key} className="trimester-card">
                  <h3>{trimester.title}</h3>
                  <div className="trimester-section">
                    <h4>🔍 Key Changes</h4>
                    <ul>
                      {trimester.changes.map((c, i) => <li key={i}>{c}</li>)}
                    </ul>
                  </div>
                  <div className="trimester-section">
                    <h4>⚠️ Precautions</h4>
                    <ul>
                      {trimester.precautions.map((p, i) => <li key={i}>{p}</li>)}
                    </ul>
                  </div>
                  <div className="trimester-section">
                    <h4>🏥 Doctor Visits</h4>
                    <ul>
                      {trimester.visits.map((v, i) => <li key={i}>{v}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'nutrition':
        return (
          <div className="nutrition">
            <h2>Nutrition & Intakes</h2>
            <div className="nutrition-cards">
              {nutritionData.map((item, i) => (
                <div key={i} className="nutrition-card">
                  <div className="nutrition-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <ul>{item.foods.map((f, j) => <li key={j}>{f}</li>)}</ul>
                </div>
              ))}
            </div>
            <div className="hydration-reminder">
              <h3>💧 Hydration Tracker</h3>
              <p>Drink at least 8-10 glasses of water daily</p>
              <div className="water-cups">
                {[...Array(10)].map((_, i) => <div key={i} className="water-cup">🥛</div>)}
              </div>
            </div>
          </div>
        );

      case 'exercises':
        return (
          
          <div >
            <PregnancyYoga/>
            {/* <h2>Safe Exercises & Yoga</h2>
            <div className="exercise-cards">
              {exerciseData.map((ex, i) => (
                <div key={i} className="exercise-card">
                  <div className="exercise-image">{ex.image}</div>
                  <h3>{ex.title}</h3>
                  <p>{ex.description}</p>
                  <div className="trimester-badge">{ex.trimester}</div>
                  <button className="expand-btn">Learn More</button>
                </div>
              ))}
            </div> */}
          </div>
        );

      default:
        return <div>Select a section to view content</div>;
    }
  };

  
  return (
    <div className="pregnancy-guide">
      <div className="guide-container">
        <div className="sidebar">
          <h2>Pregnancy Guide</h2>
          <nav className="sidebar-nav">
            {[
              { id: 'week-by-week', label: 'Week-by-Week Guide', icon: '📅' },
              { id: 'baby-development', label: "Baby's Development", icon: '👶' },
              { id: 'trimesters', label: 'Trimester Details', icon: '🔄' },
              { id: 'nutrition', label: 'Nutrition & Intakes', icon: '🍎' },
              { id: 'exercises', label: 'Exercises & Yoga', icon: '🧘‍♀️' }
            ].map(item => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="main-content">{renderContent()}</div>
      </div>
    </div>
  );
}; 

export default PregnancyGuide;
