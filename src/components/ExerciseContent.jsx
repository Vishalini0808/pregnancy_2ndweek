import React, { useState } from 'react'; 
 
const ExerciseContent = () => { 
  const [activeTab, setActiveTab] = useState('prenatal'); 
 
  const exerciseData = { 
    prenatal: [ 
      { 
        id: 1, 
        name: "Prenatal Yoga", 
        difficulty: "Beginner", 
        trimester: "All Trimesters", 
        duration: "15-30 minutes", 
        benefits: [ 
          "Reduces stress and anxiety", 
          "Improves sleep quality", 
          "Increases strength and flexibility", 
          "Helps with labor preparation", 
          "Reduces lower back pain" 
        ], 
        steps: [ 
          "Start in a comfortable seated position with crossed legs", 
          "Practice deep breathing - inhale for 4 counts, exhale for 6 counts", 
          "Gentle cat-cow stretches on hands and knees", 
          "Supported squats using a chair for balance", 
          "Finish with legs up the wall for circulation" 
        ], 
        precautions: [ 
          "Avoid lying flat on your back after first trimester", 
          "Don't overstretch - ligaments are more flexible", 
          "Stay hydrated throughout", 
          "Listen to your body and rest when needed" 
        ], 
        icon: "🧘♀️" 
      }, 
      { 
        id: 2, 
        name: "Pelvic Floor Exercises", 
        difficulty: "Beginner", 
        trimester: "All Trimesters", 
        duration: "5-10 minutes daily", 
        benefits: [ 
          "Supports growing uterus", 
          "Reduces urinary incontinence", 
          "Aids in postpartum recovery", 
          "Helps with labor and delivery", 
          "Improves core stability" 
        ], 
        steps: [ 
          "Sit or lie in a comfortable position", 
          "Contract pelvic muscles as if stopping urine flow", 
          "Hold for 3-5 seconds, then relax completely", 
          "Repeat 10-15 times, 2-3 times daily", 
          "Breathe normally throughout the exercise" 
        ], 
        precautions: [ 
          "Don't hold your breath", 
          "Focus on quality over quantity", 
          "Stop if you feel any pain", 
          "Consult your doctor if unsure" 
        ], 
        icon: "💪" 
      }, 
      { 
        id: 3, 
        name: "Prenatal Walking", 
        difficulty: "Beginner", 
        trimester: "All Trimesters", 
        duration: "20-30 minutes", 
        benefits: [ 
          "Gentle cardiovascular exercise", 
          "Boosts mood and energy levels", 
          "Helps maintain healthy weight", 
          "Improves circulation", 
          "Reduces swelling in legs" 
        ], 
        steps: [ 
          "Start with comfortable walking shoes", 
          "Walk at a moderate pace where you can still talk", 
          "Maintain good posture with shoulders back", 
          "Swing arms naturally for balance", 
          "Stay hydrated and take breaks as needed" 
        ], 
        precautions: [ 
          "Avoid walking in extreme heat", 
          "Stop if you feel dizzy or short of breath", 
          "Wear supportive footwear", 
          "Listen to your body's signals" 
        ], 
        icon: "🚶♀️" 
      }, 
      { 
        id: 4, 
        name: "Kegel Exercises", 
        difficulty: "Beginner", 
        trimester: "All Trimesters", 
        duration: "5 minutes daily", 
        benefits: [ 
          "Strengthens pelvic floor muscles", 
          "Prevents urinary incontinence", 
          "Supports baby's weight", 
          "Aids in postpartum recovery", 
          "Improves bladder control" 
        ], 
        steps: [ 
          "Identify the right muscles by stopping urine flow midstream", 
          "Contract these muscles for 5 seconds", 
          "Relax completely for 5 seconds", 
          "Repeat 10-15 times per session", 
          "Practice 3 times daily" 
        ], 
        precautions: [ 
          "Don't practice while urinating", 
          "Breathe normally during exercises", 
          "Focus on proper technique", 
          "Start slowly and build endurance" 
        ], 
        icon: "🎯" 
      } 
    ], 
    postnatal: [ 
      { 
        id: 1, 
        name: "Postpartum Walking", 
        difficulty: "Beginner", 
        duration: "10-30 minutes", 
        benefits: [ 
          "Gentle cardiovascular exercise", 
          "Boosts mood and energy levels", 
          "Aids in weight loss", 
          "Improves circulation", 
          "Can be done with baby" 
        ], 
        steps: [ 
          "Start with 10-minute walks around your neighborhood", 
          "Gradually increase duration as you feel comfortable", 
          "Wear supportive shoes and comfortable clothing", 
          "Stay hydrated and listen to your body", 
          "Incorporate hills as you get stronger" 
        ], 
        precautions: [ 
          "Wait for doctor's clearance (usually 6 weeks)", 
          "Start slowly and build gradually", 
          "Stop if you experience pain or bleeding", 
          "Wear supportive abdominal binder if recommended" 
        ], 
        icon: "🚶♀️" 
      }, 
      { 
        id: 2, 
        name: "Deep Breathing Exercises", 
        difficulty: "Beginner", 
        duration: "5-10 minutes", 
        benefits: [ 
          "Reduces stress and anxiety", 
          "Promotes relaxation", 
          "Impros oxygen flow", 
          "Helps with sleep quality", 
          "Supports mental wellbeing" 
        ], 
        steps: [ 
          "Sit or lie in a comfortable position", 
          "Place hands on your belly", 
          "Inhale deeply through nose for 4 counts", 
          "Hold breath for 2 counts", 
          "Exhale slowly through mouth for 6 counts" 
        ], 
        precautions: [ 
          "Stop if you feel lightheaded", 
          "Practice in a quiet space", 
          "Focus on gentle, controlled breathing", 
          "Combine with meditation for best results" 
        ], 
        icon: "🌬️" 
      } 
    ] 
  }; 
 
  return ( 
    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 transition-all duration-500"> 
      <div className="mb-8"> 
        <h2 className="text-2xl md:text-3xl font-bold text-purple-800 mb-4"> 
          Exercise & Yoga 
        </h2> 
        <p className="text-purple-600 mb-2"> 
          Safe exercises to support your pregnancy journey and postpartum recovery 
        </p> 
        <p className="text-sm text-purple-500 mb-4"> 
          💡 Always consult your doctor before starting any new exercise routine 
        </p> 
        <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div> 
      </div> 
 
      {/* Tab Selector */} 
      <div className="flex space-x-2 mb-8"> 
        <button 
          onClick={() => setActiveTab('prenatal')} 
          className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${ 
            activeTab === 'prenatal' 
              ? 'bg-pink-500 text-white shadow-md' 
              : 'bg-pink-100 text-purple-700 hover:bg-pink-200' 
          }`} 
        > 
          Prenatal Exercises 
        </button> 
        <button 
          onClick={() => setActiveTab('postnatal')} 
          className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${ 
            activeTab === 'postnatal' 
              ? 'bg-pink-500 text-white shadow-md' 
              : 'bg-pink-100 text-purple-700 hover:bg-pink-200' 
          }`} 
        > 
          Postnatal Exercises 
        </button> 
      </div> 
 
      {/* Exercises Grid */} 
      <div className="grid md:grid-cols-2 gap-6"> 
        {exerciseData[activeTab].map((exercise) => ( 
          <div key={exercise.id} className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200 
hover:shadow-lg transition-all duration-300"> 
            {/* Exercise Header */} 
            <div className="flex items-center justify-between mb-4"> 
              <div className="flex items-center"> 
                <span className="text-2xl mr-3">{exercise.icon}</span> 
                <div> 
                  <h3 className="text-xl font-bold text-purple-800">{exercise.name}</h3> 
                  <div className="flex items-center space-x-2 text-sm text-purple-600"> 
                    <span>⏱️ {exercise.duration}</span> 
                    <span>📊 {exercise.difficulty}</span> 
                    {exercise.trimester && <span>👶 {exercise.trimester}</span>} 
                  </div> 
                </div> 
              </div> 
            </div> 
 
            {/* Benefits */} 
            <div className="mb-4"> 
              <h4 className="font-semibold text-purple-700 mb-2">Benefits:</h4> 
              <div className="flex flex-wrap gap-1"> 
                {exercise.benefits.map((benefit, index) => ( 
                  <span 
                    key={index} 
                    className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs" 
                  > 
                    {benefit} 
                  </span> 
                ))} 
              </div> 
            </div> 
 
            {/* Steps */} 
            <div className="mb-4"> 
              <h4 className="font-semibold text-purple-700 mb-2">Steps:</h4> 
              <ol className="list-decimal list-inside space-y-1 text-sm text-purple-700"> 
                {exercise.steps.map((step, index) => ( 
                  <li key={index}>{step}</li> 
                ))} 
              </ol> 
            </div> 
 
            {/* Precautions */} 
            <div> 
              <h4 className="font-semibold text-purple-700 mb-2">Precautions:</h4> 
              <ul className="space-y-1 text-sm text-purple-700"> 
                {exercise.precautions.map((precaution, index) => ( 
                  <li key={index} className="flex items-start"> 
                    <span className="text-red-500 mr-1">•</span> 
                    {precaution} 
                  </li> 
                ))} 
              </ul> 
            </div> 
          </div> 
        ))} 
      </div> 
 
      {/* Safety Notice */} 
      <div className="mt-8 p-4 bg-yellow-50 rounded-xl border border-yellow-200"> 
        <div className="flex items-center"> 
          <span className="text-2xl mr-3">⚠️</span> 
          <div> 
            <h4 className="font-bold text-purple-800">Important Safety Notice</h4> 
            <p className="text-purple-700 text-sm"> 
              Always consult with your healthcare provider before starting any exercise program during 
pregnancy or postpartum.  
              Stop immediately if you experience pain, dizziness, bleeding, or shortness of breath. 
            </p> 
          </div> 
        </div> 
      </div> 
 
      {/* General Tips */} 
      <div className="mt-6 grid md:grid-cols-2 gap-4"> 
        <div className="bg-pink-50 p-4 rounded-xl"> 
          <h4 className="font-bold text-purple-800 mb-2">🏃♀️ Exercise Tips</h4> 
          <ul className="text-sm text-purple-700 space-y-1"> 
            <li>• Warm up for 5-10 minutes before exercising</li> 
            <li>• Stay hydrated throughout your workout</li> 
            <li>• Wear comfortable, supportive clothing</li> 
            <li>• Listen to your body and rest when needed</li> 
          </ul> 
        </div> 
        <div className="bg-purple-50 p-4 rounded-xl"> 
          <h4 className="font-bold text-purple-800 mb-2">💖 Wellness Reminders</h4> 
          <ul className="text-sm text-purple-700 space-y-1"> 
            <li>• Exercise should feel good, not painful</li> 
            <li>• Focus on consistency over intensity</li> 
            <li>• Celebrate small achievements</li> 
            <li>• Your body is doing amazing work!</li> 
          </ul> 
        </div> 
      </div> 
    </div> 
  ); 
}; 
 
export default ExerciseContent;