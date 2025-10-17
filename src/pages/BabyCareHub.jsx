import React, { useState, useEffect } from 'react'; 
import CareCard from '../components/Modal';
import Modal from '../components/CareCard'; 
import ElderlyAdvice from '../components/ElderlyAdvice';

const topics = [ 
  { 
    id: 'daily-care', 
    title: 'Daily Care & Routines', 
    subtitle: 'Feeding, diapering, bath time, gentle skincare, daily routines.', 
    icon: '👶', 
    gradient: 'bg-gradient-to-br from-pink-300 to-pink-400' 
  }, 
  { 
    id: 'traditional-wisdom', 
    title: 'Elderly / Traditional Wisdom', 
    subtitle: 'Timeless care practices passed down safely.', 
    icon: '✨', 
    gradient: 'bg-gradient-to-br from-purple-300 to-purple-400' 
  }, 
  { 
    id: 'emotional-bonding', 
    title: 'Emotional Bonding', 
    subtitle: 'Build connection through love and comfort.', 
    icon: '❤️', 
    gradient: 'bg-gradient-to-br from-pink-400 to-rose-400' 
  }, 
  { 
    id: 'health-safety', 
    title: 'Health & Safety', 
    subtitle: 'Simple ways to keep your baby safe & comfortable.', 
    icon: '🛡️', 
    gradient: 'bg-gradient-to-br from-purple-400 to-indigo-400' 
  }, 
  { 
    id: 'learning-growth', 
    title: 'Learning & Growth Guides', 
    subtitle: 'Learn something new every week.', 
    icon: '📚', 
    gradient: 'bg-gradient-to-br from-pink-300 to-purple-300' 
  }, 
  { 
    id: 'community-wellness', 
    title: 'Community & Parent Wellness', 
    subtitle: "You're not alone — connect & care for yourself too.", 
    icon: '👥', 
    gradient: 'bg-gradient-to-br from-rose-300 to-pink-400' 
  } 
]; 

const dailyTips = [ 
  "Massage your baby's legs gently after bath.", 
  "Talk often — your voice builds connection.", 
  "Keep tummy time fun with toys.", 
  "A calm baby begins with a calm parent." 
]; 

export default function BabyCareHub() { 
  const [selectedTopic, setSelectedTopic] = useState(null); 
  const [currentTip, setCurrentTip] = useState(0); 
  const [sweetMoment, setSweetMoment] = useState(''); 

  useEffect(() => { 
    const timer = setInterval(() => { 
      setCurrentTip((prev) => (prev + 1) % dailyTips.length); 
    }, 5000); 
    return () => clearInterval(timer); 
  }, []); 

  const renderModalContent = (topicId) => { 
    switch (topicId) { 
      case 'daily-care': 
        return ( 
          <div className="space-y-6"> 
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-5"> 
              <h3 className="flex items-center gap-2 mb-3 text-[#4B4453]"> 
                <span className="text-pink-500">☀️</span> 
                Morning Routine Checklist 
              </h3> 
              <ul className="space-y-2 text-[#4B4453]"> 
                <li className="flex items-start gap-2"> 
                  <span className="text-purple-500">✓</span> 
                  <span>Check diaper and change if needed</span> 
                </li> 
                <li className="flex items-start gap-2"> 
                  <span className="text-purple-500">✓</span> 
                  <span>Gentle face wipe with warm water</span> 
                </li> 
                <li className="flex items-start gap-2"> 
                  <span className="text-purple-500">✓</span> 
                  <span>Feed baby and burp properly</span> 
                </li> 
                <li className="flex items-start gap-2"> 
                  <span className="text-purple-500">✓</span> 
                  <span>Morning playtime and tummy time</span> 
                </li> 
              </ul> 
            </div> 

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5"> 
              <h3 className="flex items-center gap-2 mb-3 text-[#4B4453]"> 
                <span className="text-purple-500">🌙</span> 
                Night Soothing Tips 
              </h3> 
              <ul className="space-y-2 text-[#4B4453]"> 
                <li className="flex items-start gap-2"> 
                  <span className="text-pink-500">❤️</span> 
                  <span>Create a calm, dimly lit environment</span> 
                </li> 
                <li className="flex items-start gap-2"> 
                  <span className="text-pink-500">❤️</span> 
                  <span>Gentle rocking or swaying motions</span> 
                </li> 
                <li className="flex items-start gap-2"> 
                  <span className="text-pink-500">❤️</span> 
                  <span>Soft lullabies or white noise</span> 
                </li> 
                <li className="flex items-start gap-2"> 
                  <span className="text-pink-500">❤️</span> 
                  <span>Consistent bedtime routine</span> 
                </li> 
              </ul> 
            </div> 

            <div className="bg-pink-50 rounded-xl p-5"> 
              <h3 className="mb-3 text-[#4B4453]">Feeding & Burping</h3> 
              <p className="text-[#4B4453] mb-3"> 
                Hold baby at a 45-degree angle while feeding. Try different positions to find what works best. 
              </p> 
              <p className="text-[#4B4453]"> 
                <strong>Burping positions:</strong> Over the shoulder, sitting on lap, or lying on tummy across your legs.  
                Gentle back pats or circular motions help release air bubbles. 
              </p> 
            </div> 

            <div className="bg-purple-50 rounded-xl p-5"> 
              <h3 className="mb-3 text-[#4B4453]">Diaper Rash Prevention</h3> 
              <ul className="space-y-2 text-[#4B4453]"> 
                <li>• Change diapers frequently</li> 
                <li>• Clean gently with warm water</li> 
                <li>• Pat dry before applying new diaper</li> 
                <li>• Use barrier cream as needed</li> 
                <li>• Allow diaper-free time daily</li> 
              </ul> 
            </div> 
          </div> 
        ); 

      case 'traditional-wisdom': 
        return ( 
          <div className="space-y-6"> 
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 border-2 border-orange-200 rounded-xl p-5"> 
              <div className="flex items-start gap-3"> 
                <span className="text-orange-500">⚠️</span> 
                <div> 
                  <h3 className="mb-2 text-[#4B4453]">Important Reminder</h3> 
                  <p className="text-[#4B4453]"> 
                    Always verify with your doctor before using traditional methods. Every baby is unique,  
                    and what worked for previous generations may need modern adaptation. 
                  </p> 
                </div> 
              </div> 
            </div> 

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5"> 
              <h3 className="flex items-center gap-2 mb-4 text-[#4B4453]"> 
                <span className="text-purple-500">✨</span> 
                "Old is Gold" Wisdom 
              </h3> 
               
              <div className="space-y-4"> 
                <div className="bg-white rounded-lg p-4 shadow-sm"> 
                  <h4 className="mb-2 text-[#4B4453]">🌿 Gentle Oil Massage</h4> 
                  <p className="text-[#4B4453] text-sm"> 
                    Warm coconut or almond oil massage before bath can improve circulation and bonding.  
                    Use gentle, loving strokes. Always test oil on a small patch first. 
                  </p> 
                </div> 

                <div className="bg-white rounded-lg p-4 shadow-sm"> 
                  <h4 className="mb-2 text-[#4B4453]">🌾 Hing for Gas Relief</h4> 
                  <p className="text-[#4B4453] text-sm"> 
                    A tiny pinch of hing (asafoetida) mixed with water applied around the navel may help with gas.  
                    Consult your pediatrician first, especially for newborns. 
                  </p> 
                </div> 

                <div className="bg-white rounded-lg p-4 shadow-sm"> 
                  <h4 className="mb-2 text-[#4B4453]">🛁 Herbal Bath Waters</h4> 
                  <p className="text-[#4B4453] text-sm"> 
                    Tulsi or neem leaves in bath water (after consulting doctor) can have gentle cleansing properties.  
                    Keep water lukewarm, never hot. 
                  </p> 
                </div> 

                <div className="bg-white rounded-lg p-4 shadow-sm"> 
                  <h4 className="mb-2 text-[#4B4453]">👵 Paati's Love Language</h4> 
                  <p className="text-[#4B4453] text-sm"> 
                    "Touch is the first language. Every gentle stroke tells your baby they are safe, loved, and cherished." 
                  </p> 
                </div> 
              </div> 
            </div> 
          </div> 
        ); 

      case 'emotional-bonding': 
        return ( 
          <div className="space-y-6"> 
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-5"> 
              <h3 className="flex items-center gap-2 mb-4 text-[#4B4453]"> 
                <span className="text-pink-500">❤️</span> 
                Skin-to-Skin Bonding 
              </h3> 
              <p className="text-[#4B4453] mb-3"> 
                Hold your baby against your bare chest. This powerful practice: 
              </p> 
              <ul className="space-y-2 text-[#4B4453]"> 
                <li>• Regulates baby's temperature and heart rate</li> 
                <li>• Releases bonding hormones for both of you</li> 
                <li>• Reduces crying and stress</li> 
                <li>• Supports breastfeeding</li> 
                <li>• Works for all caregivers, not just mothers</li> 
              </ul> 
            </div> 

            <div className="bg-purple-50 rounded-xl p-5"> 
              <h3 className="mb-3 text-[#4B4453]">🎵 Lullaby Playlists</h3> 
              <div className="space-y-2"> 
                <div className="bg-white rounded-lg p-3 shadow-sm"> 
                  <p className="text-[#4B4453]">🎶 Classical Lullabies - Brahms, Mozart</p> 
                </div> 
                <div className="bg-white rounded-lg p-3 shadow-sm"> 
                  <p className="text-[#4B4453]">🎶 Traditional Songs - Cultural melodies</p> 
                </div> 
                <div className="bg-white rounded-lg p-3 shadow-sm"> 
                  <p className="text-[#4B4453]">🎶 Nature Sounds - Gentle rain, ocean waves</p> 
                </div> 
                <div className="bg-white rounded-lg p-3 shadow-sm"> 
                  <p className="text-[#4B4453]">🎶 Your Voice - The most comforting of all</p> 
                </div> 
              </div> 
            </div> 

            <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-xl p-5"> 
              <h3 className="mb-3 text-[#4B4453]">🪞 Mirror Play Ideas</h3> 
              <p className="text-[#4B4453] mb-3"> 
                Babies love faces, especially their own reflection! 
              </p> 
              <ul className="space-y-2 text-[#4B4453]"> 
                <li>• Place baby-safe mirror during tummy time</li> 
                <li>• Make faces together in the mirror</li> 
                <li>• Play peek-a-boo with reflections</li> 
                <li>• Sing and watch expressions change</li> 
              </ul> 
            </div> 

            <div className="bg-white border-2 border-pink-200 rounded-xl p-5"> 
              <h3 className="mb-3 text-[#4B4453]">💭 Memory Corner</h3> 
              <p className="text-[#4B4453] mb-3 text-sm"> 
                Write today's sweet moment: 
              </p> 
              <textarea 
                value={sweetMoment} 
                onChange={(e) => setSweetMoment(e.target.value)} 
                className="w-full px-4 py-3 rounded-lg border-2 border-pink-200 focus:border-purple-300 focus:outline-none text-[#4B4453] resize-none" 
                rows={3} 
                placeholder="Today, you smiled at me and my heart melted..." 
              /> 
              <p className="text-xs text-[#4B4453] mt-2 italic"> 
                ✨ Every giggle is a milestone. 
              </p> 
            </div> 
          </div> 
        ); 

      case 'health-safety': 
        return ( 
          <div className="space-y-6"> 
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-5"> 
              <h3 className="flex items-center gap-2 mb-4 text-[#4B4453]"> 
                <span className="text-blue-500">🛡️</span> 
                Sleep Safety Checklist 
              </h3> 
              <ul className="space-y-2 text-[#4B4453]"> 
                <li className="flex items-start gap-2"> 
                  <span className="text-purple-500">✓</span> 
                  <span>Always place baby on their back to sleep</span> 
                </li> 
                <li className="flex items-start gap-2"> 
                  <span className="text-purple-500">✓</span> 
                  <span>Use a firm, flat sleep surface</span> 
                </li> 
                <li className="flex items-start gap-2"> 
                  <span className="text-purple-500">✓</span> 
                  <span>Keep crib clear (no pillows, toys, bumpers)</span> 
                </li> 
                <li className="flex items-start gap-2"> 
                  <span className="text-purple-500">✓</span> 
                  <span>Room temperature: 68-72°F (20-22°C)</span> 
                </li> 
                <li className="flex items-start gap-2"> 
                  <span className="text-purple-500">✓</span> 
                  <span>Consider room-sharing (not bed-sharing)</span> 
                </li> 
              </ul> 
            </div> 

            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-5"> 
              <h3 className="mb-3 text-[#4B4453]">🚨 When to Consult a Doctor</h3> 
              <div className="space-y-2 text-[#4B4453]"> 
                <p>• Fever over 100.4°F (38°C) in babies under 3 months</p> 
                <p>• Difficulty breathing or blue lips</p> 
                <p>• Persistent vomiting or diarrhea</p> 
                <p>• Unusual lethargy or won't wake for feedings</p> 
                <p>• Rash with fever</p> 
                <p>• Signs of dehydration (dry mouth, no tears, fewer wet diapers)</p> 
                <p className="mt-4 italic"> 
                  <strong>Trust your instincts.</strong> If something feels wrong, call your pediatrician. 
                </p> 
              </div> 
            </div> 

            <div className="bg-purple-50 rounded-xl p-5"> 
              <h3 className="flex items-center gap-2 mb-3 text-[#4B4453]"> 
                <span className="text-purple-500">💧</span> 
                Hygiene Tips 
              </h3> 
              <div className="space-y-3"> 
                <div className="bg-white rounded-lg p-3 shadow-sm"> 
                  <h4 className="mb-1 text-[#4B4453]">🍼 Bottles & Pacifiers</h4> 
                  <p className="text-[#4B4453] text-sm"> 
                    Sterilize before first use. Wash with hot, soapy water after each use. Replace worn items. 
                  </p> 
                </div> 
                <div className="bg-white rounded-lg p-3 shadow-sm"> 
                  <h4 className="mb-1 text-[#4B4453]">🧸 Toys</h4> 
                  <p className="text-[#4B4453] text-sm"> 
                    Wash frequently, especially teething toys. Check for loose parts regularly. 
                  </p> 
                </div> 
                <div className="bg-white rounded-lg p-3 shadow-sm"> 
                  <h4 className="mb-1 text-[#4B4453]">🧼 Hand Washing</h4> 
                  <p className="text-[#4B4453] text-sm"> 
                    Everyone should wash hands before touching baby. It's the #1 way to prevent illness. 
                  </p> 
                </div> 
              </div> 
            </div> 

            <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-5"> 
              <h3 className="mb-3 text-[#4B4453]">💉 Vaccination Tracker</h3> 
              <div className="bg-white rounded-lg p-4 shadow-sm"> 
                <div className="flex items-center justify-between mb-2"> 
                  <span className="text-[#4B4453]">Birth - Hepatitis B (1st dose)</span> 
                  <span className="text-green-500">✓</span> 
                </div> 
                <div className="flex items-center justify-between mb-2"> 
                  <span className="text-[#4B4453]">2 months - DTaP, Hib, IPV, PCV</span> 
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div> 
                </div> 
                <div className="flex items-center justify-between mb-2"> 
                  <span className="text-[#4B4453]">4 months - DTaP, Hib, IPV, PCV</span> 
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div> 
                </div> 
                <div className="flex items-center justify-between"> 
                  <span className="text-[#4B4453]">6 months - DTaP, Hib, IPV, PCV</span> 
                  <div className="w-5 h-5 rounded-full border-2 border-gray-300"></div> 
                </div> 
                <p className="text-xs text-[#4B4453] mt-4 italic"> 
                  * Consult your pediatrician for personalized schedule 
                </p> 
              </div> 
            </div> 
          </div> 
        ); 

      // Add other cases here (learning-growth, community-wellness) as needed
      // They follow the same pattern as above

      default: 
        return ( 
          <div className="text-center py-8"> 
            <p className="text-[#4B4453]">Content coming soon...</p> 
          </div> 
        ); 
    } 
  }; 

  const currentTopic = topics.find((t) => t.id === selectedTopic); 

  return ( 
    <>
      <div className="min-h-screen bg-[#FFF7FB]"> 
        <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8"> 
          {/* Header */} 
          <header className="text-center mb-12"> 
            <div className="flex items-center justify-center gap-3 mb-4"> 
              <div className="bg-gradient-to-br from-pink-300 to-purple-400 rounded-full p-3"> 
                <span className="text-white text-2xl">👶</span> 
              </div> 
            </div> 

            <h1 className="mb-3 text-[#4B4453] text-3xl font-bold"> 
              Baby Care Hub 
            </h1> 

            <p className="text-[#4B4453] mb-6 max-w-2xl mx-auto text-lg"> 
              Guidance, comfort, and daily care for your little one. 
            </p> 

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 max-w-3xl mx-auto shadow-md"> 
              <p className="text-[#4B4453] leading-relaxed"> 
                Discover loving ways to care, bond, and grow with your baby — blending gentle traditions  
                with modern parenting wisdom. 
              </p> 
            </div> 
          </header> 

          {/* Today's Tip */} 
          <div className="mb-8"> 
            <div className="bg-gradient-to-r from-[#FFB6C1] to-[#C084FC] rounded-2xl p-6 shadow-lg text-center"> 
              <div className="flex items-center justify-center gap-2 mb-3"> 
                <span className="text-white">✨</span> 
                <h3 className="text-white">Today's Tip</h3> 
              </div> 
              <p className="text-white text-lg"> 
                {dailyTips[currentTip]} 
              </p> 
            </div> 
          </div> 

          {/* Weekly Theme */} 
          <div className="mb-8"> 
            <div className="bg-white rounded-2xl p-5 shadow-md border-2 border-purple-200"> 
              <div className="flex items-center gap-3"> 
                <span className="text-purple-500">📅</span> 
                <div> 
                  <h3 className="text-[#4B4453]">This Week's Theme</h3> 
                  <p className="text-[#4B4453]">Week 1: Bonding & Building Trust</p> 
                </div> 
              </div> 
            </div> 
          </div> 

          {/* Quick Reads */} 
          <div className="mb-12"> 
            <h2 className="mb-4 text-[#4B4453]">📚 Quick Reads</h2> 
            <div className="flex gap-4 overflow-x-auto pb-4"> 
              <div className="bg-white rounded-xl p-4 shadow-md min-w-[280px] border-l-4 border-pink-400"> 
                <h4 className="mb-2 text-[#4B4453]">5 Signs Your Baby Is Getting Enough Milk</h4> 
                <p className="text-sm text-[#4B4453]">3 min read</p> 
              </div> 
              <div className="bg-white rounded-xl p-4 shadow-md min-w-[280px] border-l-4 border-purple-400"> 
                <h4 className="mb-2 text-[#4B4453]">Creating the Perfect Bedtime Routine</h4> 
                <p className="text-sm text-[#4B4453]">4 min read</p> 
              </div> 
              <div className="bg-white rounded-xl p-4 shadow-md min-w-[280px] border-l-4 border-rose-400"> 
                <h4 className="mb-2 text-[#4B4453]">Understanding Colic and How to Help</h4> 
                <p className="text-sm text-[#4B4453]">5 min read</p> 
              </div> 
            </div> 
          </div> 

          {/* Care Cards Grid */} 
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"> 
            {topics.map((topic) => ( 
              <div key={topic.id}> 
                <CareCard 
                  title={topic.title} 
                  subtitle={topic.subtitle} 
                  icon={topic.icon} 
                  gradient={topic.gradient} 
                  onClick={() => setSelectedTopic(topic.id)} 
                /> 
              </div> 
            ))} 
          </div> 

          {/* Footer Quote */} 
          <div className="text-center py-8"> 
            <p className="text-[#4B4453] italic"> 
              "Tradition meets care — in your Baby Care Hub." 
            </p> 
          </div> 
        </div> 

        {/* Modal */} 
        {selectedTopic && (
          <Modal 
            isOpen={selectedTopic !== null} 
            onClose={() => setSelectedTopic(null)} 
            title={currentTopic?.title || ''} 
          > 
            {renderModalContent(selectedTopic)} 
          </Modal> 
        )}
      </div>
      <ElderlyAdvice/>
    </>
  ); 
}